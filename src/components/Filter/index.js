import { useSelector, useDispatch } from "react-redux";
import { onChangeFilter } from "../../redux/phonebook/actions";

const Filter = () => {
  const filter = useSelector((state) => state.phonebook.filter);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    return dispatch(onChangeFilter(event.target.value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search contact"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
