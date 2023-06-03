'use client';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { contactValidationSchema } from '@/utils/validationSchemas';

import styles from './styles.module.scss';
import { ContactCredentials } from './types';

const SERVER_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVER_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ContactUsForm = () => {
  const [hints, setHints] = useState('');

  const formOptions = { resolver: yupResolver(contactValidationSchema) };

  const { register, handleSubmit, clearErrors, formState, reset } =
    useForm<ContactCredentials>(formOptions);
  const { errors } = formState;

  const handleChange = () => {
    setHints('');
    clearErrors();
  };

  const sendForm: SubmitHandler<ContactCredentials> = async (data, event) => {
    event?.preventDefault();
    setHints('Sending...');
    try {
      await emailjs.send(SERVER_ID, TEMPLATE_ID, data, PUBLIC_KEY);

      setHints('Send!');
      reset();

      setTimeout(() => {
        setHints('');
      }, 2000);
    } catch (err) {
      setHints(err.text);
    }
  };

  const displayHint =
    errors.email?.message ||
    errors.name?.message ||
    errors.message?.message ||
    hints;

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendForm)}>
      <p className={styles.form__hints}>{displayHint}</p>
      <input
        className={styles.form__input}
        placeholder="Full Name"
        {...register('name')}
        onChange={handleChange}
      />
      <input
        className={styles.form__input}
        placeholder="Your Email"
        {...register('email')}
        onChange={handleChange}
      />
      <textarea
        className={styles.form__textarea}
        placeholder="Message"
        {...register('message')}
        onChange={handleChange}
      />
      <button className={styles.form__button} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
