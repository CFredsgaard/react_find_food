import React from "react";

import BussinesList from "./components/Business/Business";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <BussinesList />
    </div>
  );
}

export default App;