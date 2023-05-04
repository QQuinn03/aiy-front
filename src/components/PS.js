import React, { useState } from "react";
import TextEditor from "./TextEditor";
import "./ReferenceLetter.css";
//import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "./LoadingSpinner.css";

const PersonalStatement = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    major: "",
    department: "",
    university: "",
    targetMajor: "",
    targetSchool: "",
    whyInterested: "", //why you are interested in this major
    achievements: "",
    workExperience: "",
    personalStory: "",
  });
  //const [essay, setEssay] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("Form submitted");
    e.preventDefault();
    setLoading(true);
    // Handle form submission and communicate with the backend
    const apiUrl = "http://localhost:5000/rate-limited-essay";
    try {
      console.log("Form data:", formData);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 429) {
          // Display a message to the user
          //alert("You have reached the request limit. Please try again later.");
          setErrorMessage(
            "You have reached the request limit. Please try again later."
          );
        } else {
          throw new Error("An error occurred while submitting the form.");
        }
        //setLoading(false);
        //return;
      } else {
        const responseData = await response.json();
        const formattedEssay = responseData.essay.split("\n").join("<br>");
        setTextEditorContent(formattedEssay);
      }

      //setTextEditorContent(responseData.essay);
      //setTextEditorContent(responseData.reference_letter);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display an error message or handle the error in another way
    } finally {
      setLoading(false); // Set loading state to false when the form submission is done, regardless of success or failure
    }
  };

  const [textEditorContent, setTextEditorContent] = useState("");

  return (
    <div className="personal-statement-container">
      <h1 className="title">Personal Statement Form</h1>
      <p className="paragraph-box">Tailor your unique Personal Statement!</p>

      <div className="form-text-editor-container">
        <div className="form-container-wrapper">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-section">
              <label htmlFor="fullName">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your first name,family name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="major">
                Your Major<span className="required">*</span>
              </label>
              <input
                type="text"
                id="major"
                name="major"
                placeholder="Your current major"
                required
                value={formData.major}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor="department">
                Department<span className="required">*</span>
              </label>
              <input
                type="text"
                id="department"
                name="department"
                required
                placeholder="The department offers your major"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor="university">
                University<span className="required">*</span>
              </label>
              <input
                type="text"
                id="university"
                name="university"
                placeholder="The university you attend"
                required
                value={formData.university}
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor="targetMajor">
                The major your apply<span className="required">*</span>
              </label>
              <input
                type="text"
                id="targetMajor"
                name="targetMajor"
                value={formData.targetMajor}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor="targetSchool">
                The school your apply<span className="required">*</span>
              </label>
              <input
                type="text"
                id="targetSchool"
                name="targetSchool"
                value={formData.targetSchool}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-section">
              <label htmlFor="whyInterested">
                Why you are interested in this major and school
                <span className="required">*</span>
              </label>
              <textarea
                type="text"
                id="whyInterested"
                name="whyInterested"
                value={formData.whyInterested}
                required
                placeholder="E.g., shcool reputation, course curriculum, a professor you admire works here"
                onChange={handleChange}
                rows={5}
              />
            </div>

            <div className="form-section">
              <label htmlFor="achievements">
                Course Achievement<span className="required">*</span>
              </label>
              <textarea
                type="text"
                id="achievements"
                name="achievements"
                placeholder="Your academic achievement that helps you apply for the major and school. E.g., course project,
                published paper, academic competition, etc"
                value={formData.achievements}
                required
                onChange={handleChange}
                rows={5}
              />
            </div>
            <div className="form-section">
              <label htmlFor="workExperience">Work Experience</label>
              <textarea
                type="text"
                id="workExperience"
                name="workExperience"
                placeholder="Your intern, work or any off-campus activities that halp you apply for the major"
                value={formData.workExperience}
                onChange={handleChange}
                rows={5}
              />
            </div>

            <div className="form-section">
              <label htmlFor="personalStory">Personal Experience</label>
              <textarea
                type="text"
                id="personalStory"
                name="personalStory"
                value={formData.personalStory}
                placeholder="E.g.,Something or someone inpsires you to study the major "
                onChange={handleChange}
                rows={5}
              />
            </div>
            {loading && (
              <div className="loading-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            <div className="form-section">
              <input type="submit" value="Submit" disabled={loading} />
            </div>
          </form>
        </div>
        <div className="ql-container">
          <TextEditor
            content={textEditorContent}
            onContentChange={setTextEditorContent}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default PersonalStatement;
