import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

const Details = () => {
//   const { id } = useParams();

//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       setdata(res.data || []);
//     });
// }, []);

//   const filterdata = data.filter((item) => item.id === Number(id));

const {id} =useParams()
const [data,setdata]=useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
    setdata(res.data||[])
})
},[])

const fliterdata = data.filter((item)=>item.id===Number(id))

  return (
    <div>

    {
        fliterdata.map((i,index)=>(
            <h1 key={index}>
                <p>{i.id}</p>
                <p>{i.title}</p>
            </h1>
        ))
    }
        
      {/* {filterdata.map((i, index) => (
        <div key={index} className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{i.id}</h5>
              <p
                className="card-text"
                style={{ width: "100%", display: "block" }}
              >
                {i.title}
              </p>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Details;
