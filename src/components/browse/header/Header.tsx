import { ChevronLeftIcon, ChevronRightIcon } from "../../AssetManager";
import { searchProps } from "../BrowseTypes";
import Search from "./search/Search";
import "./Header.css";

const Header = ({ value, ontype }: searchProps) => {
  return (
    <>
      <div className="Header">
        <div className="NavButtons">
          <button>
            <ChevronLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
        <div className="Search">
          <Search value={value} ontype={ontype} />
        </div>
      </div>
    </>
  );
};

export default Header;
