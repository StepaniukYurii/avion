import { useState } from "react";
import "./SortingModal.css";

function SortingModal({
  products,
  filtredProducts,
  setFiltredProducts,
  currentModal,
}) {
  const [chosenFilters, setChosenFilters] = useState([]);

  function handleFilterChange(event) {
    let newFilters;

    if (event.target.checked) {
      newFilters = [...chosenFilters, event.target.value];
    } else {
      setChosenFilters(
        (newFilters = chosenFilters.filter(
          (item) => item !== event.target.value,
        )),
      );
    }
    setChosenFilters(newFilters);
    filterList(newFilters);
  }

  function filterList(filters) {
    if (filters.length === 0) {
      setFiltredProducts(products);
      return;
    }
    const newProducts = products.filter((product) => {
      return product.categories.some((category) => filters.includes(category));
    });
    setFiltredProducts(newProducts);
  }
  function handleSortChange(event) {
    if (event.target.value === "name") {
      const sortedProducts = [...filtredProducts];
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      setFiltredProducts(sortedProducts);
    } else if (event.target.value === "price") {
      const sortedProducts = [...filtredProducts];

      sortedProducts.sort((a, b) => a.price - b.price);

      setFiltredProducts(sortedProducts);
    } else if (event.target.value === "category") {
      const sortedProducts = [...filtredProducts];

      sortedProducts.sort((a, b) =>
        a.categories[0].localeCompare(b.categories[0]),
      );

      setFiltredProducts(sortedProducts);
    }
  }
  return currentModal === "sorting" ? (
    <div className="sorting modal">
      <ul className="sorting__list">
        <li className="sorting__item">
          <input
            value="name"
            onChange={handleSortChange}
            className="sorting__button"
            id="sortName"
            type="radio"
            name="sort"
          />
          <label className="sorting__label" htmlFor="sortName">
            Name
          </label>
        </li>
        <li className="sorting__item">
          <input
            value="price"
            onChange={handleSortChange}
            className="sorting__button"
            id="sortPrice"
            type="radio"
            name="sort"
          />
          <label className="sorting__label" htmlFor="sortPrice">
            Price
          </label>
        </li>
        <li className="sorting__item">
          <input
            value="category"
            onChange={handleSortChange}
            className="sorting__button"
            id="sorCategory"
            type="radio"
            name="sort"
          />
          <label className="sorting__label" htmlFor="sorCategory">
            Category
          </label>
        </li>
      </ul>
    </div>
  ) : currentModal === "filtering" ? (
    <div className="filtering modal">
      <ul className="filtering__list">
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Ceramics")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterCeramics"
            value="Ceramics"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterCeramics" className="filtering__label">
            Ceramics
          </label>
        </li>
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Lamps")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterLamps"
            value="Lamps"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterLamps" className="filtering__label">
            Lamps
          </label>
        </li>
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Chairs")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterChairs"
            value="Chairs"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterChairs" className="filtering__label">
            Chairs
          </label>
        </li>
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Tables")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterTables"
            value="Tables"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterTables" className="filtering__label">
            Tables
          </label>
        </li>
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Jewellery")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterJewellery"
            value="Jewellery"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterJewellery" className="filtering__label">
            Jewellery
          </label>
        </li>
        <li className="filtering__item">
          <input
            checked={chosenFilters.includes("Storages")}
            className="filtering__button"
            type="checkbox"
            name="filter"
            id="filterStorages"
            value="Storages"
            onChange={handleFilterChange}
          />
          <label htmlFor="filterStorages" className="filtering__label">
            Storages
          </label>
        </li>
      </ul>
    </div>
  ) : (
    false
  );
}
export default SortingModal;
