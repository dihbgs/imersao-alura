const SearchBar = (props: {
  value: string;
  ontype: (search: string) => void;
}) => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        placeholder="What do you want to listen to?"
        onChange={(e) => props.ontype(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
