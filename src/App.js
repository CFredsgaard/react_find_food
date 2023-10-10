import React from "react";

import BussinesList from "./components/Business";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <BussinesList />
    </div>
  );
}

export default App;