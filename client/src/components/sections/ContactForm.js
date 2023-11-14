import Styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={Styles.contact__container}>
      <div className={Styles.contact__content}>
        <div className={Styles.contact__title}>
          <h2>Grt In Touch</h2>
        </div>
        <div className={Styles.contact__form}>
          <form>
            <div className={Styles.contact__form__name}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={Styles.contact__form__email}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={Styles.contact__form__submit}>
              <button>Join The Wait List</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
