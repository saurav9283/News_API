import React, { useEffect, useState } from 'react'
import axios  from "axios";
import { Link } from 'react-router-dom';
const  FetchData = ({cat}) => {
    const [Data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const fetchData = async () => {
        try {
          console.log("set loding true")
          const res=await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=7660eecec31a4da1b127f2445ff05ea2")
          console.log("set loding false")
          setData(res.data.articles);
          setLoading(false);
          
        } catch (err) {
          console.log(err)
        }

    };
    useEffect(() => { // when page refress it call automatically
        fetchData();
    }, [cat]);
 
  return (
    <div className="container my-4">
      <h3><u>TOP HEADLINES</u></h3>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3">
        {loading? "LOADING...":
         Data.map((items , index) => (
          <>
             <div className= "container my-3 p-3" style={{width: "600px" , boxShadow: "2px 2px 10px silver" ,bordeRadious:"10px" , minHeight: "100vh"}}>
              <h5 className="my-1">{items.title}</h5>
              <img src={items.urlToImage} alt="image not found" className="img-fluid d-flex justify-content-center align-items-center" style= {{width:"100%" , height:"300px"}}/>
              <p className="my-1 ">{items.content}</p>
              <Link to= {items.url} target= "_blank">View More</Link>
             </div>
          </>
        ))
         }</div>
    </div>
  )
}

export default FetchData
