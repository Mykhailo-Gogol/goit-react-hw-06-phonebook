import { useSelector, useDispatch } from "react-redux";
import { onRemoveContact } from "../../redux/phonebook/actions";

const ContactList = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);

  const dispatch = useDispatch();

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = (id) => {
    return dispatch(onRemoveContact(id));
  };
  return (
    <>
      {filteredContacts().length ? (
        <ol className="contact-list">
          {filteredContacts().map(({ name, number, id }) => {
            return (
              <li key={name}>
                <p className="contact-text">
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
};

export default ContactList;
