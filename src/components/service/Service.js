import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import { FaGraduationCap, FaLightbulb, FaUserEdit } from "react-icons/fa";

const Service = () => {
  const navigate = useNavigate();

  const handleReferenceLetterClick = () => {
    navigate("/reference-letter");
  };

  const handlePersonalStatementClick = () => {
    navigate("/personal-statement");
  };

  const handleUniquePromptClick = () => {
    navigate("/unique-prompt");
  };

  return (
    <div className="service-dropdown-container">
      <div className="service-item">
        <button className="service-btn" onClick={handlePersonalStatementClick}>
          <FaGraduationCap
            font-size="40px"
            margin-right="3px"
            vertical-align="middle"
          />
          Personal Statement Example
        </button>
        <p className="service-description">
          Generate a p.s. example according to your own experience
        </p>
      </div>
      <div className="service-item">
        <button className="service-btn" onClick={handleReferenceLetterClick}>
          <FaUserEdit
            font-size="40px"
            margin-right="3px"
            vertical-align="middle"
          />
          Reference Letter Example
        </button>
        <p className="service-description">
          Reference Letter Template (academic version)
        </p>
      </div>
      <div className="service-item">
        <button className="service-btn" onClick={handleUniquePromptClick}>
          <FaLightbulb className="service-icon" />
          Service X
        </button>
        <p className="service-description">
          Other GPT4 powered services coming soon...
        </p>
      </div>
      <div className="service-item">
        <button className="service-btn" onClick={handleUniquePromptClick}>
          <FaLightbulb className="service-icon" />
          Service Y
        </button>
        <p className="service-description">
          Other GPT4 powered services coming soon...
        </p>
      </div>
    </div>
  );
};

export default Service;
