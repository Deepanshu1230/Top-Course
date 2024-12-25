import React from "react";
import Card from "./Card";
import { useState } from "react";
import {  filterData } from "../data";


const Cards=(props) =>{
    let courses=props.courses;
    let category=props.category;
    const [likedCourse,setLikedCourse]=useState([]);
    
    function getCourse(){
        if(category === filterData[0].title){

            let allCourse=[];
        // It returns the list of the course from the api call
        Object.values(courses).forEach( array=>{
            array.forEach( courseData=>{
                allCourse.push(courseData);
            });
        });
        return allCourse;


        }
        else{
            return courses[category];
        }

            
    }
    
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
{
     getCourse().map((course) => 
        <Card  
            key={course.id} 
            course={course} 
            likedCourse={likedCourse} 
            setLikedCourse={setLikedCourse}
        />
    )
}


        </div>

    );
};


export default Cards
