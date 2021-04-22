import "./App.css";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

const App = () => {
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
