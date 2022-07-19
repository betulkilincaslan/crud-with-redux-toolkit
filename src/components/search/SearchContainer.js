import FormInput from "components/common/form/FormInput";

const SearchContainer = ({ onSearchInputChangeHandler, searchField }) => {
  return (
    <div className="py-4 mx-4">
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
