import React, { useState } from "react";
import TextEditor from "../textEditor/TextEditor";
import "./ReferenceLetter.css";
//import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../LoadingSpinner.css";

const ReferenceLetter = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    gender: "",
    professorName: "",
    professorDepartment: "",
    courses: "",
    courseAchievement: "",
    additionalComments: "",
  });

  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("Form submitted");
    e.preventDefault();
    // Handle form submission and communicate with the backend
    setLoading(true);
    console.log("Loading:", loading);
    const apiUrl =
      "http:///aiy-dev2.us-east-1.elasticbeanstalk.com/rate-limited-letter";
    console.log("URL for fetch request:", apiUrl);
    try {
      console.log("Form data:", formData);
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setErrorMessage("Rate limit exceeded. Please try again later.");
        } else {
          throw new Error("An error occurred while submitting the form.");
        }
      } else {
        const responseData = await response.json();
        // Update the TextEditor content
        const formattedContent = responseData.content.split("\n").join("<br>");
        setContent(formattedContent); // Fix this line
        //setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display an error message or handle the error in another way
    } finally {
      setLoading(false); // Set loading state to false when the form submission is done, regardless of success or failure
    }
  };

  const [, setTextEditorContent] = useState("");

  return (
    <div className="reference-letter-container">
      <h1 className="title">Reference Letter Form</h1>
      <p className="paragraph-box">
        Fill in the form and generate your unique reference letter
      </p>

      <div className="form-text-editor-container">
        <div className="form-container-wrapper">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-section">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your first name,family name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="university">University</label>
              <input
                type="text"
                id="university"
                name="university"
                placeholder="The university you attend"
                value={formData.university}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <div className="gender-select">
                <label htmlFor="gender">Your Gender</label>
                <select
                  className="form-input"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="she">She</option>
                  <option value="he">He</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="professorName">Professor Name</label>
              <input
                type="text"
                id="professorName"
                name="professorName"
                value={formData.professorName}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="professorDepartment">
                Professor's Department
              </label>
              <input
                type="text"
                id="professorDepartment"
                name="professorDepartment"
                value={formData.professorDepartment}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="courses">Course(s)</label>
              <input
                type="text"
                id="courses"
                name="courses"
                placeholder="course(s) with the professor"
                value={formData.courses}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="courseAchievement">Course(s) Achievement</label>
              <textarea
                className="form-input"
                type="text"
                id="courseAchievement"
                name="courseAchievement"
                value={formData.courseAchievement}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="form-section input">
              <label htmlFor="additionalComments">
                Additional Comments(optional)
              </label>
              <textarea
                type="text"
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                rows={3}
              />
            </div>
            {loading && (
              <div className="loading-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            <div className="submit-btn">
              <input
                type="submit"
                value="Submit your information"
                disabled={loading}
              />
            </div>
          </form>
        </div>
        <div class="response-text">
          Response will be shown on the text editor
        </div>
        <div className="ql-container">
          <TextEditor
            content={content}
            onContentChange={setTextEditorContent}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default ReferenceLetter;
