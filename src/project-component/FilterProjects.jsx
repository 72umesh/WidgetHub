function FilterProjects({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Utlity Tools", "Games & Fun", "UI Components"];
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default FilterProjects;
