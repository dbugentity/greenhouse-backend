// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationForm = () => {
  const [formValues, setFormValues] = useState({
    id: '55555',
    mapped_url_token: 'token12345',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    resume: null,
    cover_letter: null,
    question_5555: '',
    question_3333: '',
    question_2222: [],
    data_compliance: { gdpr_consent_given: false }
  });

  const handleChange = (event) => {
    if (event.target.name === "resume" || event.target.name === "cover_letter") {
      setFormValues({ ...formValues, [event.target.name]: event.target.files[0] });
    } else if (event.target.name.startsWith("question_2222")) {
      let newValues = [...formValues.question_2222];
      if (event.target.checked) {
        newValues.push(event.target.value);
      } else {
        newValues = newValues.filter(value => value !== event.target.value);
      }
      setFormValues({ ...formValues, question_2222: newValues });
    } else if (event.target.name === "data_compliance[gdpr_consent_given]") {
      setFormValues({ ...formValues, data_compliance: { gdpr_consent_given: event.target.checked } });
    } else {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you should implement the request to your server.
    // You may need to transform `formValues` into the required format, and consider how to handle the file inputs.
    //   axios.get('/proxyServerURL', formValues).
    //   .then(response => ...)
    //   .catch(error => ...)
    axios.get('/proxyServerURL')
    .then(response => {
      // Handle the response
    })
    .catch(error => {
      // Handle the error
    });
  };

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <input type="hidden" name="id" value={formValues.id} />
      <input type="hidden" name="mapped_url_token" value={formValues.mapped_url_token} />
      <label>First Name <input type="text" name="first_name" value={formValues.first_name} onChange={handleChange} /></label><br/>
      <label>Last Name <input type="text" name="last_name" value={formValues.last_name} onChange={handleChange} /></label><br/>
      <label>Email <input type="text" name="email" value={formValues.email} onChange={handleChange} /></label><br/>
      <label>Phone <input type="text" name="phone" value={formValues.phone} onChange={handleChange} /></label><br/>
      <label>Resume <input type="file" name="resume" onChange={handleChange} /></label><br/>
      <label>Cover Letter <input type="file" name="cover_letter" onChange={handleChange} /></label><br/>
      <label>LinkedIn Profile <input type="text" name="question_5555" value={formValues.question_5555} onChange={handleChange} /></label><br/>
      <label>Some dropdown
        <select name="question_3333" value={formValues.question_3333} onChange={handleChange}>
          <option></option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label><br/>
      <label>Multi select with checkboxes<br/>
        <label><input type="checkbox" name="question_2222[]" value="2" checked={formValues.question_2222.includes('2')} onChange={handleChange} /> Red</label><br/>
        <label><input type="checkbox" name="question_2222[]" value="5" checked={formValues.question_2222.includes('5')} onChange={handleChange} /> Orange</label>
      </label><br/>
      <label>
        <input type="checkbox" name="data_compliance[gdpr_consent_given]" value="1" checked={formValues.data_compliance.gdpr_consent_given} onChange={handleChange} />
        Organization has my consent to collect, store, and process my data for the purpose
        of considering me for employment.
      </label>
      <input type="submit" />
    </form>
  );
};

export default JobApplicationForm;
