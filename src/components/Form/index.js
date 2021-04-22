import shortid from "shortid";
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { onAddContact } from "../../redux/phonebook/actions";

const Form = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmitHandler(contact);
    reset();
  };

  const reset = () => {
    setContact({
      name: "",
      number: "",
    });
  };

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(onAddContact({ name, number, id: shortid.generate() }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            name="name"
            value={contact.name}
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor="number">
          <input
            type="tel"
            placeholder="Number"
            onChange={handleInputChange}
            name="number"
            value={contact.number}
            id="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default Form;
