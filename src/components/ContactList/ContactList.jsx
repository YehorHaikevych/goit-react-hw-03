import Contact from "../Contact/Contact";

const ContactList = ({ filteredUsers, onDeleteContactList }) => {
  return filteredUsers.map((contactItem) => {
    return (
      <Contact
        key={contactItem.id}
        id={contactItem.id}
        name={contactItem.name}
        number={contactItem.number}
        onDeleteContactList={onDeleteContactList}
      />
    );
  });
};

export default ContactList;
