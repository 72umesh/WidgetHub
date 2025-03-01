function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchBar-container">
      <input
        type="text"
        placeholder="Search projects..."
        className="searchBar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
