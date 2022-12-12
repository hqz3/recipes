import "./App.css";
// Component
import Group from "./components/Group";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
// React-Query
import { useQuery } from "react-query";
import { getAllCategories } from "./fetch.js";
// React-Router
import { Routes, Route } from "react-router-dom";

function App() {
  const { isLoading, data } = useQuery("categories", getAllCategories);

  return (
    <>
      <SearchBar />
      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/*" element={<Group data={data} />}></Route>
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
