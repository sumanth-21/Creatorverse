import React from "react";

import CreatorForm from "../../components/CreatorForm/CreatorForm";

const AddCreator = ({ onAdd }) => {
  return <CreatorForm onAdd={onAdd} />;
};

export default AddCreator;
