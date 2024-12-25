import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/filter";
import { filterData,apiUrl } from "./data";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";



const App = () => {
  const [courses,setcourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  // doing API call with the help of useEffect
  useEffect(()=>{

    const fetchData =async()=>{
      setLoading(true);
      try{
        const response=await fetch(apiUrl);
        const output=await response.json();
        

        //Saving data into the variable
       setcourses(output.data);

      }

      catch(error){
        toast.error("Somthing went wrong");

      }
      setLoading(false);



    }
    fetchData();
  },[]);
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">

    <div>
    <Navbar/>
    </div>

    <div className="bg-bgDark2">

    <div> <Filter filterData={filterData} 
    category={category} 
    setCategory={setCategory}/>
    </div>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
      </div>


    </div>
      
    
      
    </div>
  )
 


};

export default App;
