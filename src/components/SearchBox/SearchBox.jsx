const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <section>
        <input
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          type="text"
          placeholder="Name or number"
        />
      </section>
    </div>
  );
};

export default SearchBox;
