import * as Yup from 'yup';

export const subscribeValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  name: Yup.string().required('Name is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 symbols'),
});
