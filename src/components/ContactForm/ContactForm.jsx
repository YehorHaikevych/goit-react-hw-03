import { ErrorMessage, Field, Form, Formik, FormikConsumer } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const INITIAL_VAIUES = {
  name: "",
  number: "",
};

const contactFormSchema = Yup.object({
  name: Yup.string()
    .max(50, "Mаксимальна кількість символів - 50")
    .min(3, "Мінімальна кількість символів - 3")
    .required("Потрібно ввести ім'я!"),
  number: Yup.string()
    .required("Потрібно ввести номер телефону!")
    .matches(
      /^\d{3}\d{2}\d{2}$/,
      "Не коректний номер! Формат номера ХХХ ХХ ХХ"
    ),
});

const ContactForm = ({ userProfileForm }) => {
  const handleSubmit = (velues, actions) => {
    userProfileForm(velues);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VAIUES}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <Field type="text" name="name" placeholder="Ivan Ivanov" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.span}>Number</span>
          <Field type="text" name="number" placeholder="XXX-XX-XX" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button className={css.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
