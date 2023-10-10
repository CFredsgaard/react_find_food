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
        <div className={styles.SearchBar}>
            <div className={styles.SortingOptions}>
                <ul>{displaySortingOptions()}</ul>
            </div>
            <div className={styles.InputFields}>
                <input placeholder="Search restaurants"/>
                <input placeholder="Where?"/>
            </div>
            <div className={styles.SearchButton}>
                <a>Search</a>
            </div>
        </div>
    );
};

export default SearchBar;