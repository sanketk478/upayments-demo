import GridView from "../views/Gridview.js/GridView";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const onSelectChange = (e) => {
    e.preventDefault(e);

    setFilteredData(e.target.value);
    console.log("filter data" + filteredData);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
        );
        setCategory(response);
        console.log(category);
      } catch (error) {
        console.error(error.message, "error message at home page");
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);
  return (
    <div className="bg-[#ececec] h-full">
      <div className="container mx-auto  px-4 pt-8 ">
        <div>
          <div className="upaymentstore">
            <div className="bg-white shadow-md rounded">
              <div className=" flex justify-between  p-2 ">
                <p className="font-bold italic">UPayment Store</p>
                <button className="font-bold italic">Register</button>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col gap-y-4 md:flex-row lg:flex justify-between">
              <input
                placeholder="Apple watch,SamSung s21,MAcBook Pro..."
                id="txt-search"
                className="px-6 rounded-lg w-96 py-1"
              />
              <select
                className="w-60 rounded-lg py-1 px-6 outline-none"
                onClick={onSelectChange}
              >
                <option key="0" value={""} id={0}>
                  All
                </option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.name} id={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-[#ececec] pb-0">
            <GridView filteredData={filteredData} />
          </div>
          <div className="bg-[#ececec] w-full h-[200% ] float-right">
            <div className="fixed  bottom-0 right-0  p-4">
              <Link to={"product"}>
                <PlusCircleIcon className="h-10 w-10 text-black" />
              </Link>{" "}
            </div>
          </div>
          {/* <div  className="bg-[#ececec] w-full h-full">
                        <div className="fixed bottom-0 bg-[#ececec] right-0  text-center  p-4 ">
                        <Link to={"product"}><PlusCircleIcon className="h-10 w-10"/></Link>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
