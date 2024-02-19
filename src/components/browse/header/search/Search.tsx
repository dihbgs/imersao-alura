import { searchProps } from "../../BrowseTypes";
import { SearchIcon } from "../../../AssetManager";
import "@/styles/Search.css";

const Search = ({ value, ontype }: searchProps) => {
  return (
    <form role="search">
      <SearchIcon />
      <input
        type="text"
        maxLength={128}
        value={value}
        className="SearchBar"
        placeholder="What do you want to listen to?"
        onChange={(e) => ontype(e.target.value)}
      />
    </form>
  );
};

export default Search;
