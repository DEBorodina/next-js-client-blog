import data from '@data/privacy-policy.json';

import styles from './styles.module.scss';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.policy__header}>
        <h1 className={styles.policy__title}>Privacy Policy</h1>
        <p className={styles.policy__update}>
          Last Updated on 27th January 2022
        </p>
      </div>
      <div className={styles.policy__content}>
        <article className={styles.policy__article}>
          {data.map(({ text, title }) => (
            <>
              <h6 className={styles.policy__article_title}>{title}</h6>
              <p className={styles.policy__article_text}>{text}</p>
            </>
          ))}
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
