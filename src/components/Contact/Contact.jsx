import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContactList }) => {
  return (
    <div className={styles.card}>
      <div className={styles.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <div className={styles.btn}>
        <button
          type="button"
          onClick={() => {
            onDeleteContactList(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
