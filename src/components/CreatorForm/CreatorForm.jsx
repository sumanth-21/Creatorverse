import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatorForm.scss";

import { supabase } from "../../client";
import Alert from "../../utilities/Alert/Alert";
import Modal from "../../utilities/Modal/Modal";

import Loader from "../../utilities/Loader/Loader";

function CreatorForm({
  creatorId,
  creator = [],
  onAdd = null,
  onUpdate = null,
  onDelete = null,
}) {
  const [alertMessage, setAlertMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (creatorId) {
      // Set the form input values with the filtered data
      Object.entries(creator).forEach(([key, val]) => {
        const element = formRef.current.elements[key];
        if (element) {
          element.value = val;
        }
      });
    }
  }, [creatorId, creator]);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alertMessage]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    setIsLoading(true);

    try {
      if (creatorId) {
        // Perform update if it is an edit
        const { data, error } = await supabase
          .from("creators")
          .update(Object.fromEntries(formData))
          .eq("id", creatorId)
          .select();

        if (!error) {
          const formElements = Array.from(formRef.current.elements);
          formElements.forEach((element) => {
            if (element.name && formData.has(element.name)) {
              element.value = formData.get(element.name);
            }
          });
          setIsLoading(false);
          onUpdate(data[0]);
          navigate("/", {
            state: { alertMessage: `${data[0].name} Updated Successfully!!` },
          });
        }
      } else {
        // Perform insert if it is an Add operation
        const { data, error } = await supabase
          .from("creators")
          .insert([Object.fromEntries(formData)])
          .select();

        if (!error) {
          setIsLoading(false);
          onAdd(data[0]);
          navigate("/", {
            state: { alertMessage: `${data[0].name} Added Successfully!!` },
          });
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  const handleDeleteButtonClick = () => {
    setIsModalOpen(true);
  };

  const onDeleteCreatorHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data, error } = await supabase
      .from("creators")
      .delete()
      .eq("id", creatorId)
      .select();

    if (data) {
      setIsLoading(false);
      console.log(data);
      onDelete(data[0].id);
      navigate("/", {
        state: { alertMessage: `${data[0].name} Deleted Successfully!!` },
      });
    }
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="form-container container">
      {isLoading && <Loader />}
      {alertMessage && <Alert message={alertMessage} />}
      {isModalOpen && (
        <Modal
          name={creator.name}
          onConfirm={onDeleteCreatorHandler}
          onCancel={onCancelHandler}
        />
      )}
      <h2>{creatorId ? "EDIT CREATOR" : "ADD CREATOR"}</h2>
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter creator's name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Profile Picture:</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            placeholder="Enter creator's picture URL"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Channel/Page:</label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Enter creator's channel/page url"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter creator's description"
            required
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">{creatorId ? "UPDATE" : "ADD"}</button>
          {creatorId && (
            <button
              type="button"
              className="contrast"
              onClick={handleDeleteButtonClick}
            >
              DELETE
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreatorForm;
