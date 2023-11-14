import styles from "./Announcement.module.css";

export default function Announcement() {
  return (
    <section className={styles.announcement__container}>
      <div className={styles.announcement__content}>
        <div className={styles.announcement__title}>
          <h2>Direct Message Auto Repost AI Bot</h2>
        </div>
        <div className={styles.announcement__text}>
          <p>
            So if you are a theme page owner or content creator, dropshipper or
            someone who needs to generate leads quickly and easy - do not
            hesitate, only 10$/month for early adopters. Bot will be available
            for public in Q1 2024. More features, like cross-platform reposting,
            AI-driven reposts and other coming in Q2 2024
          </p>
        </div>
      </div>
    </section>
  );
}
