import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="card">
      <div className="actions">
        <div className="details">
          <Link
            to={`/viewcreator/${id}`}
            key={id}
            data-tooltip="Click for More Info"
          >
            &#x1F6C8;
          </Link>
        </div>
        <div className="edit">
          <Link to={`/editcreator/${id}`} className="secondary">
            Edit
          </Link>
        </div>
      </div>
      <figure>
        <img src={imageURL} alt={name} className="profile" />
        <figcaption>
          <h3>{name}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Checkout my channel/page<i className="right-arrow"></i>
          </a>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
