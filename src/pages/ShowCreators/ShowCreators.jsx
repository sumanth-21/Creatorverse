import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card/Card";
import Alert from "../../utilities/Alert/Alert";
import "./ShowCreators.scss";

const ShowCreators = ({ creators }) => {
  const [isAlert, setAlert] = useState(false);

  const location = useLocation();
  const alertMessage = location.state?.alertMessage || "";
  window.history.replaceState({}, document.title);

  useEffect(() => {
    if (alertMessage && isAlert === false) {
      setAlert(true);
      var alertTimeout = setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
    return () => {
      clearTimeout(alertTimeout);
    };
  }, []);

  if (!creators || creators.length === 0) {
    return (
      <div className="message">
        No Content Creators found :( - Add one now!!
      </div>
    );
  }

  return (
    <section className="creators container">
      {isAlert && <Alert message={alertMessage} />}
      {creators.map((creator) => (
        <Card {...creator} key={creator.id} />
      ))}
    </section>
  );
};

export default ShowCreators;
