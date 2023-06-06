import ContactUsForm from '@/components/ContactUsForm';
import Map from '@/components/Map';

import styles from './styles.module.scss';

const ContactPage = () => (
  <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.header__subtitle}>Contact us</h2>
        <h1 className={styles.header__title}>Let’s Start a Conversation</h1>
        <p className={styles.header__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className={styles.timetable}>
        <div className={styles.timetable__container}>
          <div className={styles.timetable__section}>
            <h6 className={styles.timetable__title}>Working hours</h6>
            <p className={styles.timetable__data}>Monday To Friday</p>
            <p className={styles.timetable__data}>9:00 AM to 8:00 PM</p>
            <p className={styles.timetable__extra_data}>
              Our Support Team is available 24/7
            </p>
          </div>
          <div className={styles.timetable__section}>
            <h6 className={styles.timetable__title}>Contact Us</h6>
            <p className={styles.timetable__data}>020 7993 2905</p>
            <p className={styles.timetable__extra_data}>hello@finsweet.com</p>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
    <Map />
  </>
);

export default ContactPage;
