import React from "react";

import styles from "./SearchBar.css";

const sortingOptions = {
    "Best Match" : "best_match",
    "Highest Ratings": "rating",
    "Most Reviews": "review_count"
};

const SearchBar = () => {
    const displaySortingOptions = () => {
        return Object.keys(sortingOptions).map((sortingOption) => {
            let sortingOptionKey = sortingOptions[sortingOption];
            return <li key={sortingOptionKey}>{sortingOption}</li>
        });
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.sortingOptions}>
                <ul>{displaySortingOptions()}</ul>
            </div>
            <div className={styles.inputFields}>
                <input placeholder="Search restaurants"/>
                <input placeholder="Where?"/>
            </div>
            <div className={styles.searchButton}>
                <a>Search</a>
            </div>
        </div>
    );
};

export default SearchBar;