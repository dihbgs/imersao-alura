import { ChevronLeftIcon, ChevronRightIcon } from "../../AssetManager";
import { searchProps } from "../BrowseTypes";
import Search from "./search/Search";
import "@/styles/Header.css";

const Header = ({ value, ontype }: searchProps) => {
  return (
    <>
      <header>
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
        <div className="SignButtons">
          <button>Sign Up</button>
          <button>Log in</button>
        </div>
      </header>
    </>
  );
};

export default Header;
