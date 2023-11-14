import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero__content__top}>
        <div className={styles.hero__title}>
          <h2>The World's First Direct Message Auto Repost AI Bot</h2>
        </div>
        <div className={styles.hero__subtitle}>
          <h2>
            Find. Send. Repost. Easily grow your social media with viral
            content.
          </h2>
        </div>
        <div className={styles.hero__signup__button}>
          <button>I am interested</button>
        </div>
      </div>
      <div className={styles.hero__content__bottom}>
        <div className={styles.hero__text}>
          <h1>Monetize your time spent on funny reels</h1>
        </div>
        <div className={styles.hero__image}>
          <p>Image</p>
        </div>
      </div>
    </section>
  );
}
