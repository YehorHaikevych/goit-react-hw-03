import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid/non-secure";

function App() {
  const [userContact, setUserContact] = useState(
    () =>
      JSON.parse(localStorage.getItem("userContact")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );

  useEffect(() => {
    localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const userProfileForm = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUserContact([...userContact, finalUser]);
  };
  const onDeleteContactList = (profileId) => {
    const updetedUsers = userContact.filter((user) => user.id !== profileId);
    setUserContact(updetedUsers);
  };

  const [filter, setFilter] = useState("");
  const filteredUsers = userContact.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      user.number.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm userProfileForm={userProfileForm} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList
          filteredUsers={filteredUsers}
          onDeleteContactList={onDeleteContactList}
        />
      </div>
    </>
  );
}

export default App;
