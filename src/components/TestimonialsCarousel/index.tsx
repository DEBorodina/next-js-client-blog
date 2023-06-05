'use client';

import Image from 'next/image';
import { useState } from 'react';

import testimonials from '@data/testimonials.json';

import styles from './styles.module.scss';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { authorImage, authorAddress, authorName, text } =
    testimonials[currentTestimonial];

  const handlePrevious = () => {
    if (currentTestimonial !== 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  const handleNext = () => {
    if (currentTestimonial !== testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const hasNext = currentTestimonial !== testimonials.length - 1;
  const hasPrevious = currentTestimonial !== 0;

  return (
    <div className={styles.carousel}>
      <p className={styles.carousel__text}>{text}</p>
      <div className={styles.carousel__info}>
        <div className={styles.user}>
          <div className={styles.image}>
            <Image
              src={authorImage}
              alt={`${authorName} photo`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.user__data}>
            <p className={styles.user__name}>{authorName}</p>
            <p className={styles.user__address}>{authorAddress}</p>
          </div>
        </div>
        <div className={styles.carousel__controls}>
          <button
            className={`${styles.carousel__button} ${
              hasPrevious || styles.carousel__button_disabled
            }`}
            onClick={handlePrevious}
          >
            {'<'}
          </button>
          <button
            className={`${styles.carousel__button} ${
              hasNext || styles.carousel__button_disabled
            }`}
            onClick={handleNext}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
