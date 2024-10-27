import styles from './SearchInput.module.css';
import { useState } from 'react';

function SearchInput({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className={styles.inputSearch}>
      <label htmlFor="projectSearch">Type to search</label>
      <input
        id="projectSearch"
        className={styles.projectSearch}
        type="search"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
