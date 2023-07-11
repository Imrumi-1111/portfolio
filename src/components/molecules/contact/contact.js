import React, { useState } from 'react';
import styles from './contact.module.css'
//
import { Button } from '@mui/material';
//import { Link } from 'react-router-dom'

const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { name, email, message } = formData;
  
      const emailContent = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
      const emailLink = `mailto:upasanachakraborty18@gmail.com?subject=New Portfolio Message&body=${encodeURIComponent(
        emailContent
      )}`;
  
      window.location.href = emailLink;
    };
  
    return (
      <div className={styles.Contact}>
        {/* <Link to ='/ ' >
                <ArrowBack className ='arrow'/>
            </Link> */}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputbox}>
        <input className={styles.input1}
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input className={styles.input1}
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
     
        <div className={styles.Button}>
        <textarea className={styles.input}
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <Button type="submit"variant="outlined" sx={{textDecoration: "none" , margin:"2rem"}}>Send Message</Button>
        </div>
      </form>
      </div>
    );
  ;
  
 
  
};

export default Contact;
