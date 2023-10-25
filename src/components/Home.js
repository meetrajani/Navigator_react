import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setdata(res.data);
    });
  }, []);
  return (
    <div>
      <div className="row">
        {data.map((i, index) => {
          return (
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
                  <Link to={`/${i.id}`} className='btn btn-success' >View</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
