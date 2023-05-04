import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDropdown.css";
import { FaGraduationCap, FaLightbulb, FaUserEdit } from "react-icons/fa";

const ServiceDropdown = () => {
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
      <button className="service-btn" onClick={handlePersonalStatementClick}>
        <FaGraduationCap className="service-icon" />
        Personal Statement
      </button>
      <button className="service-btn" onClick={handleReferenceLetterClick}>
        <FaUserEdit className="service-icon" />
        Reference Letter
      </button>
      <button className="service-btn" onClick={handleUniquePromptClick}>
        <FaLightbulb className="service-icon" />
        Your Unique Prompt
      </button>
    </div>
  );
};

export default ServiceDropdown;
