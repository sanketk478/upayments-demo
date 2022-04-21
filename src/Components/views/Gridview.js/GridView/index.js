import axios from "axios";
import PreviousMap from "postcss/lib/previous-map";
import { useState, useEffect } from "react";
import GridItem from "../GridItem/index";

export default function GridView({ filteredData }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log(filteredData + " in gridview");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data: response } = await axios.get(
          "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
        );
        setData(response);

        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // if (filteredData>0)
  // {
  //       finalarr  = data.filter(item =>item.category=== filteredData)
  //       // setFDAta(finalarr)
  //       console.log(finalarr," finalarr")
  //       console.log("type of ",filteredData);

  // }
  // else{
  //       finalarr =data;
  // }

  return (
    <div>
      <div className="conatiner mx-auto px-4 pt-8-pb-20">
        <div>
          <div>
            {loading && <div>Loading</div>}
            {!loading && (
              <div className=" grid grid-cols-1 lg:grid-cols-4 place-items-center">
                {filteredData != ""
                  ? data
                      .filter((item) => item.category === filteredData)
                      .map((item) => (
                        <GridItem
                          key={item.id}
                          id={item.id}
                          avatar={item.avatar}
                          name={item.name}
                          price={item.price}
                        />
                      ))
                  : data.map((item) => (
                      <GridItem
                        key={item.id}
                        id={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        price={item.price}
                      />
                    ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
