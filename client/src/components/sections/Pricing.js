import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.pricing__container}>
      <div className={styles.pricing__title}>
        <h2>Pricing</h2>
      </div>
      <div className={styles.pricing__card}>
        <div className={styles.pricing__icon}>
          <p>Icon</p>
        </div>
        <div className={styles.pricing__title}>
          <h3>Level 1 - early adopters</h3>
        </div>
        <div className={styles.pricing__card__features}>
          <ul>
            <p>
              Icon
              <li>1 Instagam account</li>
            </p>
            <p>
              Icon
              <li>Up to 5 Team Members</li>
            </p>
            <p>
              Icon
              <li>Available Q4 2023</li>
            </p>
            <p>
              Icon
              <li>Filters</li>
            </p>
            <p>
              Icon
              <li>Scheduling</li>
            </p>
          </ul>
        </div>
        <div className={styles.pricing__card__pricing}>
          <div className={styles.pricing__card__price}>
            <h3>$10/month</h3>
          </div>
          <div className={styles.pricing__card__button}>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
