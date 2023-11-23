

import React, { useState } from 'react';
import './leaveform.css'; 
import contactFormImage from './assets/contact-form.png';
const LeaveForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    id: '',
    reason: 'travel', 
  });

  const [backgroundColor, setBackgroundColor] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({ ...formData });
  };

  const handleAccept = () => {
    setBackgroundColor('green');
  };

  const handleReject = () => {
    setBackgroundColor('red');
  };

  return (
    <div id="leaveFormContainer">
      
      <form id="leaveForm" onSubmit={handleSubmit} style={{ backgroundColor }}>
      <div className="leaveFormHeader">
        <img src={contactFormImage} alt="Contact Form Icon" className="iconImage" />
        <h3>Leave Form</h3> 
      </div>
        <label htmlFor="firstName" className="formLabel">
          First Name:
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label htmlFor="lastName" className="formLabel">
          Last Name:
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label htmlFor="id" className="formLabel">
             User ID   :
          <input type="text" id="id" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <br />
        <label htmlFor="reason" className="formLabel">
          Reason:
          <select id="reason" name="reason" value={formData.reason} onChange={handleInputChange}>
            <option value="travel">Travel</option>
            <option value="sick">Sick</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
  <div id="submittedFormContainer" className="submittedFormContainer">
    <h3>Submitted Form</h3> 
    <p>First Name: {submittedData.firstName}</p>
    <p>Last Name: {submittedData.lastName}</p>
    <p>ID: {submittedData.id}</p>
    <p>Reason: {submittedData.reason}</p>
    <button onClick={handleAccept} className="formButton">Accept</button>
    <button onClick={handleReject} className="formButton">Reject</button>

  </div>
)}

    </div>
  );
};

export default LeaveForm;
