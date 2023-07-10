import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CreatorForm from "../../components/CreatorForm/CreatorForm";

const EditCreator = ({ creators, onUpdate, onDelete }) => {
  const [creator, setCreator] = useState({});
  const { creatorId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const filteredCreator = creators.filter(
      (creator) => creator.id === +creatorId
    )[0];
    if (!filteredCreator && creators.length > 0) {
      navigate("/", {
        state: { alertMessage: "Creator Not Found :(" },
      });
    } else {
      setCreator(filteredCreator);
    }
  }, []);

  return (
    <CreatorForm
      creatorId={+creatorId}
      creator={creator}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  );
};

export default EditCreator;
