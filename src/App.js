import logo from "./logo.svg";
import "./App.css";
import AddProduct from "./Components/AddProduct/index";
import DetailPage from "./Components/DetailPage";
import GridItem from "./Components/views/Gridview.js/GridItem";
import GridView from "./Components/views/Gridview.js/GridView";
import HomePage from "./Components/Home";
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detailpage/:id" element={<DetailPage />} />
        <Route path="product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
