import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [avatar, setAvatar] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryarr, setCategoryARR] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
        );
        setCategoryARR(response);
        console.log(category);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [categoryarr, category]);
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onpriceChange = (e) => {
    setPrice(e.target.value);
  };

  const onCategoryChange = (e) => {
    if (e.target.value === "") {
      console.log("please select the category ");
    } else {
      setCategory(e.target.value);
    }
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onAvtarChange = (e) => {
    setAvatar(e.target.value);
  };
  const onsubmit = () => {
    confirmAlert({
      title: "Select the category",
      message: "Please select the category",
      buttons: [
        {
          label: "ok",
          onClick: () => alert("clicked"),
        },
      ],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === "category") {
      onsubmit();
    } else {
      const data = {
        name: name,
        price: price,
        description: description,
        avatar: avatar,
        category: category,
        developerEmail: "abc@gmail.com",
      };
      axios
        .post(
          "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",
          data
        )
        .then((res) => {
          console.log("inside res");
          if (res.status === 201) {
            navigate("/");
          }

          console.log(res);
        })
        .catch((err) => console.log(err, "inside res error"));
    }

    //
  };
  return (
    <div className="post">
      <div className="bg-[#ececec]">
        <div className="container  mx-auto px-4 pt-8 pb-20">
          <div className="upaymentstore">
            <div className="bg-white shadow-md rounded">
              <div className=" flex justify-between  p-2 ">
                <p className="font-bold italic">UPayment Store</p>
                <button className="font-bold italic">Register</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-32">
            <div className="">
              <h1 className="lg:text-3xl text-2xl font-bold">Create Product</h1>
            </div>
            <form onSubmit={handleSubmit} className="post text-center">
              <input
                placeholder="Product Name"
                value={name}
                onChange={onNameChange}
                required
                className="   rounded-xl mt-4 lg:w-96 w-80 lg:py-3 py-2 px-8"
              ></input>
              <textarea
                placeholder="Description  "
                value={description}
                onChange={onDescriptionChange}
                required
                className="block mt-4 lg:w-96 w-80 lg:py-3 py-2 rounded-xl  px-8"
              ></textarea>
              <input
                placeholder="Image url"
                value={avatar}
                onChange={onAvtarChange}
                required
                className="  block rounded-xl mt-4 mb-4 lg:w-96 w-80 lg:py-3 py-2 px-8"
              ></input>
              <select
                id="categories"
                value={category}
                onChange={onCategoryChange}
                required
                className="block rounded-xl outline-none mt-4 lg:w-96 w-80 lg:py-3 py-2 px-8"
              >
                <option value={""} id={0} key={0}>
                  Categories
                </option>
                {categoryarr.map((item) => {
                  return (
                    <>
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
              </select>

              <input
                placeholder="Price"
                value={price}
                onChange={onpriceChange}
                required
                className="  block rounded-xl mt-4 lg:w-96 w-80 lg:py-3 py-2 px-8"
              ></input>

              <button className="block rounded-xl bg-white text-black content-center mt-4 px-3 lg:w-96 w-80 lg:py-3 py-2 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// class Post extends Component {
//   state = {
//     name: "",
//     price: "",
//     category:"",
//     description:"",
//     avatar:"",
//     developerEmail:"abc@gmail.com",
//     categoryarr:[],
//     loading:true,

//   };

//   componentDidMount() {
//     axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
//       .then(res => {
//         console.log(res.data+" category data")
//         this.setState({
//           categoryarr: res.data
//       })

//         console.log(" category "+this.state.categoryarr);
//       })
//   }

//       // this.setState ({loading: true})
//       // try {
//       //   const {data: response} = await axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/');
//       // this.setState({category:response.data})
//       //   console.log(response);
//       // } catch (error) {
//       //   console.error(error.message);
//       // }
//       // this.setState({loading: false})

//   onNameChange = e => {
//       if (e.target.value == "")
//       {
//         console.log("please fill the box ");
//       }
//       else{
//         this.setState({
//             name: e.target.value
//         });
//       }

//   };

//   onpriceChange = e => {
//     this.setState({
//         price: e.target.value
//     });
//   };

//   onCategoryChange = e =>{
//     console.log(e.target.value)
//       this.setState({
//           category:e.target.value
//       });
//       const index = e.target.selectedIndex;
//       const el = e.target.childNodes[index]
//       const option =  el.getAttribute('id')
//       console.log(option+" option id")
//   };
//   onDescriptionChange = e =>{
//       this.setState({
//           description: e.target.value
//       });
//   };

//   onAvtarChange = e =>{
//       this.setState({
//         avatar:e.target.value
//       });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const data = {
//         name: this.state.name,
//         price: this.state.price,
//         description:this.state.description,
//         avatar:this.state.avatar,
//         category:this.state.category,
//         developerEmail:this.state.developerEmail
//     };
//     axios
//       .post("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", data)
//       .then(res =>{
//         if (res.status === 201)
//         {
//           window.location.href="/";
//         }
//       })
//       .catch(err => console.log(err));

//       //
//   };
//   handleBtnClick = e =>{

//   }

//   render() {
//     return (
//       <div className="post">

//         <div className="bg-[#ececec]">
//             <div className="container  mx-auto px-4 pt-8 pb-20">
//             <div className="upaymentstore">
//             <div className="bg-white shadow-md rounded">
//                 <div className=" flex justify-between  p-2 ">
//                     <p className='font-bold italic'>UPayment Store</p>
//                     <button className='font-bold italic'>Register</button>
//                 </div>
//                 </div>

//             </div>
//             <div className="flex flex-col justify-center items-center mt-32">
//                 <div className="">
//                     <h1 className="text-3xl font-bold">Create Product</h1>
//                 </div>
//                 <form onSubmit={this.handleSubmit} className="post" >
//                 <input placeholder="Product Name" value={this.state.name} onChange={this.onNameChange} required className="   rounded-xl mt-4 w-96 py-3 px-8"></input>
//                 <textarea placeholder="Description  " value={this.state.description} onChange={this.onDescriptionChange} required className="block mt-4 w-96 rounded-xl py-3 px-8"></textarea>
//                 <input placeholder="Image url" value={this.state.avatar} onChange={this.onAvtarChange} required className="  block rounded-xl mt-4 w-96 py-3 px-8"></input>
//                 <select id="categories" onChange={this.onCategoryChange} value={this.state.category} class="block rounded-xl outline-none mt-4 w-96 py-3 px-8">

//                    {this.state.categoryarr.map((item)=>{
//                      return(
//                        <>
//                         <option key={item.id} value={item.name}>{item.name}</option>
//                        </>

//                      );

//                    })}
//                 </select>
//                 <p>{this.state.category.name}</p>
//                 <input placeholder="Price" value={this.state.price} onChange={this.onpriceChange} required className="  block rounded-xl mt-4 w-96 py-3 px-8"></input>

//                 <button className="block rounded-xl bg-white text-black content-center mt-4 px-3 py-3 w-96 "  >Submit</button>
//                 </form>

//             </div>

//         </div>
//         </div>

//       </div>
//     );
//   }
// }

// export default Post;
