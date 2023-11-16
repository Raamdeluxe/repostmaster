import Styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={Styles.contact__container}>
      <div className={Styles.contact__content}>
        <div className={Styles.contact__title}>
          <h2>Get In Touch</h2>
        </div>

        <form className={Styles.contact__form}>
          <div className={Styles.contact__form__element}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
            />
          </div>
          <div className={Styles.contact__form__element}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className={Styles.contact__form__submit}>
            <button>Join The Waitlist</button>
          </div>
        </form>
      </div>
    </section>
  );
}
