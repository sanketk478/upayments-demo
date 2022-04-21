import imgitem from "/Users/admin/ReactJs/upayments/src/assets/images/Screenshot_40.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";

export default function DetailPage() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState([]);

  console.log("id in detail page ", id);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
        );
        setData1(response);
        console.log(data1);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="container  relative mx-auto px-4 pt-8 pb-20 ">
        <div className="">
          <div className="absolute top-2 right-0 pb-10">
            <Link to={"/"}>
              <XIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="upaymentstore">
            <div className="bg-white shadow-md rounded">
              <div className=" flex justify-between  p-2 ">
                <p className="font-bold italic">UPayment Store</p>
                <button className="font-bold italic">Register</button>
              </div>
            </div>
          </div>
          <div className="detailpage-content lg:mt-24 mt-10 lg:px-40  text-left ">
            {loading && <div>Loading</div>}
            {!loading && (
              <div className="grid divide-y-8 gap-0">
                <div className="flex   gap-x-4 md:flex-row mb-4">
                  <div>
                    <img
                      className="  lg:h-40 lg:w-40 h-32 w-32  "
                      src={data1.avatar}
                      alt=""
                    />
                  </div>
                  <div className="block relative">
                    <h1 className="lg:text-3xl text-xl font-bold">
                      {data1.name}
                    </h1>
                    <p className="absolute bottom-0 left-0 lg:text-xl text-lg font-bold">
                      ${data1.price}
                    </p>
                  </div>
                </div>

                <div className=" pt-8 ">
                  <label className="mt-10 text-base  font-bold">
                    {" "}
                    Description
                  </label>
                  <p>
                    {data1.description}
                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, */}
                  </p>
                </div>
                <div class="fixed bottom-0  right-0  text-center p-4 ">
                  {/* <Link to={"/"} onClick={deleteData}><TrashIcon className="h-10 w-10"/></Link> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
