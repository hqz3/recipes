import "./App.css";
import SearchBar from "./components/SearchBar";
import Group from "./components/Group";
import { Routes, Route } from "react-router-dom";
import { data } from "./data";

function App() {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Routes>
          <Route path="/*" element={<Group data={data} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
