import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { supabase } from "../../client";

import "./ViewCreator.scss";
import Loader from "../../utilities/Loader/Loader";
import Modal from "../../utilities/Modal/Modal";

const ViewCreator = ({ creators, onDelete }) => {
  const [creator, setCreator] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { creatorId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const filteredCreators = creators.filter(
      (creator) => creator.id === +creatorId
    );
    if (filteredCreators.length > 0) {
      setCreator(filteredCreators[0]);
      setIsLoading(false);
    } else {
      navigate("/", {
        state: { alertMessage: "Creator Not Found :(" },
      });
    }
  }, [creators, creatorId]);

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

  const { name, url, description, imageURL } = creator;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {isModalOpen && (
        <Modal
          name={creator.name}
          onConfirm={onDeleteCreatorHandler}
          onCancel={onCancelHandler}
        />
      )}
      <div className="creator">
        <div className="profile">
          <img src={imageURL} alt={name} />
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <a href={url} target="_blank">
            Checkout my channel/page<i className="right-arrow"></i>
          </a>
        </div>
      </div>
      <div className="view--actions">
        <Link to={`/editcreator/${creatorId}`} className="view--actions__btn">
          EDIT
        </Link>
        <button
          className="view--actions__btn contrast"
          onClick={handleDeleteButtonClick}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ViewCreator;
