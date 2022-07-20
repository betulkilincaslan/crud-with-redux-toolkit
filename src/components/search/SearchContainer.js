import Input from "components/common/input/Input";

const SearchContainer = ({ onSearchInputChangeHandler, searchField }) => {
  return (
    <div className="py-4 mx-4">
      <Input
        placeholder="Search Todo"
        type="text"
        name="searchField"
        value={searchField}
        onChange={(e) => onSearchInputChangeHandler(e)}
      ></Input>
    </div>
  );
};

export default SearchContainer;
