// @ts-nocheck
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './JobApplication.module.scss';

const JobApplication = () => {
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

  useEffect(() => {
    // Save form values to local storage on change
    localStorage.setItem('formValues', JSON.stringify(formValues));
  }, [formValues]);

  const handleChange = (event) => {
    const { name, type, value, files, checked } = event.target;
    if (type === 'file') {
      setFormValues({ ...formValues, [name]: files[0] });
    } else if (name.startsWith('question_2222')) {
      let newValues = [...formValues.question_2222];
      if (checked) {
        newValues.push(value);
      } else {
        newValues = newValues.filter(val => val !== value);
      }
      setFormValues({ ...formValues, question_2222: newValues });
    } else if (name === 'data_compliance[gdpr_consent_given]') {
      setFormValues({ ...formValues, data_compliance: { gdpr_consent_given: checked } });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/proxyServerURL', formValues) // Change to POST request if needed
      .then(response => {
        // Handle the response
        console.log('Form submitted successfully:', response);
      })
      .catch(error => {
        // Handle the error
        console.error('Error submitting form:', error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
    }
  };

  return (

    // <form onSubmit={handleSubmit} encType='multipart/form-data' className={styles['job-application-form']}>
    //   <input type="hidden" name="id" value={formValues.id} />
    //   <input type="hidden" name="mapped_url_token" value={formValues.mapped_url_token} />
    //   <label>
    //     First Name <input type="text" name="first_name" value={formValues.first_name} onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Last Name <input type="text" name="last_name" value={formValues.last_name} onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Email <input type="text" name="email" value={formValues.email} onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Phone <input type="text" name="phone" value={formValues.phone} onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Resume <input type="file" name="resume" onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Cover Letter <input type="file" name="cover_letter" onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     LinkedIn Profile <input type="text" name="question_5555" value={formValues.question_5555} onChange={handleChange} onKeyDown={handleKeyDown} />
    //   </label><br />
    //   <label>
    //     Some dropdown
    //     <select name="question_3333" value={formValues.question_3333} onChange={handleChange} onKeyDown={handleKeyDown}>
    //       <option></option>
    //       <option value="1">Yes</option>
    //       <option value="0">No</option>
    //     </select>
    //   </label><br />
    //   <label>
    //     Multi select with checkboxes<br />
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="question_2222[]"
    //         value="2"
    //         checked={formValues.question_2222.includes('2')}
    //         onChange={handleChange}
    //         onKeyDown={handleKeyDown}
    //       /> Red
    //     </label><br />
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="question_2222[]"
    //         value="5"
    //         checked={formValues.question_2222.includes('5')}
    //         onChange={handleChange}
    //         onKeyDown={handleKeyDown}
    //       /> Orange
    //     </label>
    //   </label><br />
    //   <label>
    //     <input
    //       type="checkbox"
    //       name="data_compliance[gdpr_consent_given]"
    //       value="1"
    //       checked={formValues.data_compliance.gdpr_consent_given}
    //       onChange={handleChange}
    //       onKeyDown={handleKeyDown}
    //     />
    //     Organization has my consent to collect, store, and process my data for the purpose
    //     of considering me for employment.
    //   </label>
    //   <input type="submit" />
    // </form>

    <form onSubmit={handleSubmit} encType='multipart/form-data' className={styles['job-application-form']}>
  <input type="hidden" name="id" value={formValues.id} className={styles['form-input']} />
  <input type="hidden" name="mapped_url_token" value={formValues.mapped_url_token} className={styles['form-input']} />
  <label>
    First Name <input type="text" name="first_name" value={formValues.first_name} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Last Name <input type="text" name="last_name" value={formValues.last_name} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Email <input type="text" name="email" value={formValues.email} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Phone <input type="text" name="phone" value={formValues.phone} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Resume <input type="file" name="resume" onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Cover Letter <input type="file" name="cover_letter" onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    LinkedIn Profile <input type="text" name="question_5555" value={formValues.question_5555} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']} />
  </label><br />
  <label>
    Some dropdown
    <select name="question_3333" value={formValues.question_3333} onChange={handleChange} onKeyDown={handleKeyDown} className={styles['form-input']}>
      <option></option>
      <option value="1">Yes</option>
      <option value="0">No</option>
    </select>
  </label><br />
  <label>
    Multi select with checkboxes<br />
    <label>
      <input
        type="checkbox"
        name="question_2222[]"
        value="2"
        checked={formValues.question_2222.includes('2')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles['form-checkbox']}
      /> Red
    </label><br />
    <label>
      <input
        type="checkbox"
        name="question_2222[]"
        value="5"
        checked={formValues.question_2222.includes('5')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles['form-checkbox']}
      /> Orange
    </label>
  </label><br />
  <label>
    <input
      type="checkbox"
      name="data_compliance[gdpr_consent_given]"
      value="1"
      checked={formValues.data_compliance.gdpr_consent_given}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className={styles['form-checkbox']}
    />
    Organization has my consent to collect, store, and process my data for the purpose
    of considering me for employment.
  </label>
  <input type="submit" className={styles['form-submit']} />
</form>

  );
};

export default JobApplication;
