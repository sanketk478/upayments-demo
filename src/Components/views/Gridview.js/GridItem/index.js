// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import imgstore from "/Users/admin/ReactJs/upayments/src/assets/images/Screenshot_40.png";
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

export default function GridItem(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onsubmit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteData(),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  const deleteData = async () => {
    setLoading(true);
    console.log("delete id ", props.id);

    axios
      .delete(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${props.id}`
      )
      .then(() => {
        navigate("/");
        window.location.reload();
      });
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 pt-8 h-full pb-20">
        <div>
          <div className="block text-center">
            <Link to={`detailpage/${props.id}`}>
              <div>
                <div className=" w-25 h-35  relative shadow-lg py-10 px-6 bg-white rounded-lg">
                  <img src={props.avatar} className="h-32 w-32" alt="avatar" />
                  <div className="absolute top-4 right-4">
                    <Link to={"/"} onClick={() => onsubmit()}>
                      <XIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="text-center pt-2 font-bold">
                  <p> {props.name} </p>
                  <p>${props.price}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
