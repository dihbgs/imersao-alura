const SearchBar = (props: {
  value: string;
  ontype: (search: string) => void;
}) => {
  return (
    <>
      <div className="Header">
        <form role="search">
          <input
            type="text"
            maxLength={128}
            value={props.value}
            className="SearchBar"
            placeholder="What do you want to listen to?"
            onChange={(e) => props.ontype(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
