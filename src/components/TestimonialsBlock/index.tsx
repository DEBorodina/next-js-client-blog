import TestimonialsCarousel from '../TestimonialsCarousel';
import styles from './styles.module.scss';

const TestimonialsBlock = () => (
  <div className={styles.block}>
    <div className={styles.block__container}>
      <div className={styles.block__article}>
        <h3 className={styles.block__subtitle}>testimonials</h3>
        <h2 className={styles.block__title}>What people say about our blog</h2>
        <p className={styles.block__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <TestimonialsCarousel />
    </div>
  </div>
);

export default TestimonialsBlock;
