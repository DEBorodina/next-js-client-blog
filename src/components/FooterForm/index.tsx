'use client';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMyTranslation } from '@/app/i18n/client';
import { subscribeValidationSchema } from '@/utils/validationSchemas';

import styles from './styles.module.scss';
import { SubscribeCredentials } from './types';

const SERVER_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVER_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const FooterForm = () => {
  const [hints, setHints] = useState('');
  const { t } = useMyTranslation();

  const formOptions = { resolver: yupResolver(subscribeValidationSchema) };

  const { register, handleSubmit, clearErrors, formState, reset } =
    useForm<SubscribeCredentials>(formOptions);
  const { errors } = formState;

  const handleChange = () => {
    setHints('');
    clearErrors();
  };

  const sendForm: SubmitHandler<SubscribeCredentials> = async (data, event) => {
    event?.preventDefault();
    setHints('Subscribing...');
    try {
      await emailjs.send(SERVER_ID, TEMPLATE_ID, data, PUBLIC_KEY);

      setHints('Subscribed!');
      reset();

      setTimeout(() => {
        setHints('');
      }, 2000);
    } catch (err) {
      setHints(err.text);
    }
  };

  const displayHint = errors.email?.message || hints;

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendForm)}>
      <div className={styles.form__container}>
        <h6 className={styles.form__title}>{t('subscribe.description')}</h6>
        <div className={styles.form__input_container}>
          <p className={styles.form__input_hints}>{displayHint}</p>
          <input
            {...register('email')}
            onChange={handleChange}
            placeholder={t('enter.email')}
            className={styles.form__input}
          />
        </div>

        <button className={styles.form__button} type="submit">
          {t('subscribe')}
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
