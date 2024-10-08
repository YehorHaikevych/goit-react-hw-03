import css from "./ContactForm.module.css";

const ContactForm = ({ userProfileForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const formData = {
      name,
      number,
    };
    userProfileForm(formData);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name</span>
        <input type="text" name="name" placeholder="Ivan Ivanov" required />
      </label>
      <label className={css.label}>
        <span className={css.span}>Number</span>
        <input type="text" name="number" placeholder="XXX-XX-XX" required />
      </label>
      <button className={css.btn}>Add contact</button>
    </form>
  );
};

export default ContactForm;
