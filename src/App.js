import "./App.css";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

const App = () => {
  // useEffect(() => {
  //   const localStorageCantactsArray = localStorage.getItem("contacts");
  //   setContacts(
  //     JSON.parse(localStorageCantactsArray)
  //       ? JSON.parse(localStorageCantactsArray)
  //       : contacts
  //   );
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   const contactsToLocalStorage = JSON.stringify(contacts);
  //   localStorage.setItem("contacts", contactsToLocalStorage);
  // });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
