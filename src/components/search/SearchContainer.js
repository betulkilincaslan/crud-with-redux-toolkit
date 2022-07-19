import FormInput from "components/common/FormInput";
import FormLabel from "components/common/FormLabel";

const SearchContainer = ({ onSearchInputChangeHandler, searchField }) => {
  return (
    <div className="">
      <FormLabel htmlFor="username">Search todo by userID or title</FormLabel>

      <FormInput
        placeholder="Search Todo"
        type="text"
        name="searchField"
        value={searchField}
        onChange={(e) => onSearchInputChangeHandler(e)}
      ></FormInput>
    </div>
  );
};

export default SearchContainer;
