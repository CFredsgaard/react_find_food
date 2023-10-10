import React from "react";

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
        <div>
            <div>
                <ul>{displaySortingOptions()}</ul>
            </div>
            <div>
                <input placeholder="Search restaurants"/>
                <input placeholder="Where?"/>
            </div>
            <div>
                <a>Search</a>
            </div>
        </div>
    );
};

export default SearchBar;