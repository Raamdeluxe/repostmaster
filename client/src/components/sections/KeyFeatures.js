import styles from "./KeyFeatures.module.css";

export default function KeyFeatures() {
  return (
    <section className={styles.key__features__container}>
      <div className={styles.key__features__content}>
        <div className={styles.key__features__title}>
          <h2>Key Features</h2>
        </div>
        <div className={styles.key__features__subtitle}>
          <h2>
            Our SaaS product is the world's first Instagram direct message auto
            repost bot. It simplifies reposting from personal messages. Find
            viral post, send to your friends and bot - laugh and grow your
            account.
          </h2>
        </div>
      </div>
      <div className={styles.key__features__content__cards}>
        <div className={styles.key__features__card}>
          <div className={styles.key__features__card__image}>
            <p>Image</p>
          </div>
          <div className={styles.key__features__card__title}>
            <h3>Repost from a Messages</h3>
          </div>
          <div className={styles.key__features__card__subtitle}>
            <p>
              When someone sends a post or reel in private messages, our bot
              automatically reposts it to your connected account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
