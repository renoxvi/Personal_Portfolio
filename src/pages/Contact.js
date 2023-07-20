import React, {useState} from 'react';
import axios from 'axios';
//import images
import WomanImg from '../img/contact/woman.png';
//import  link
import { Link } from 'react-router-dom';
//import {motion}
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const Contact = () => {
  //Creating state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  //Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Send form data to the server
      const response = await axios.post('http://localhost:3000/api/messages', formData);
      console.log(response.data);//log the server response
      //Clear the form after successful submisssion
      setFormData({name: '', email: '', message: ''});
      alert('Message sent successfully');
    } catch (error){
      console.log(error);
      console.error('Error sending the message', error);
      alert('Failed to send the message please try again later');
    }
  };

  //Event handler for form input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <motion.section
      initial={{opacity: 0, y: '100%'}} 
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: '100%'}}
      transition={{transition1}} 
      className='section bg-white overflow-auto'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center pt-36 gap-x-8 text-center lg:text-left'>
          {/*bg*/}
          <motion.div
          initial={{opacity: 0, y: '100%'}} 
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '100%'}}
          transition={{transition1}} 
          className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
          {/*text and form*/}
          <div className='lg:flex-1 lg:pt-32 pt-[590px] px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get in touch with you.</p>

            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                 type='text'
                 name='name'
                 value={formData.name}
                 onChange={handleChange}
                 placeholder='Your name'
                 required
                 />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange} 
                placeholder='Your email address'
                required
                />
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
              type='text' 
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              required
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start' type='submit'>Send</button>
            </form>
          </div>
          {/*image*/}
          <motion.div
          initial={{opacity: 0, y: '100%'}} 
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '100%'}}
          transition={{transition: transition1, duration:1.5}} 
          className='lg:flex-1 '>
            <img src={WomanImg} alt=""/>
          </motion.div>
        </div>
      </div>
    </motion.section>
    );
};

export default Contact;
