import Styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={Styles.testimonials__container}>
      <div className={Styles.testimonials__content}>
        <div className={Styles.testimonials__title}>
          <h2>Testimonials</h2>
        </div>
        <div className={Styles.testimonials__cards}>
          <div className={Styles.testimonials__card}>
            <div className={Styles.testimonials__card__text}>
              <p>
                When someone sends a post or reel in private messages, our bot
                automatically reposts it to your connected account.
              </p>
            </div>
            <div className={Styles.testimonials__card__profile}>
              <div className={Styles.testimonials__card__profile__image}>
                <p>Image</p>
              </div>
              <div className={Styles.testimonials__card_profile__name}>
                <p>Name</p>
                <p>Position</p>
              </div>
              <div className={Styles.testimonials__card_profile__review}>
                <p>Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
