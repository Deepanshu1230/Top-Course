import React, { useState } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


const Card=({course,likedCourse,setLikedCourse})=>{
    let likedCourses=likedCourse;
    let setLikedCourses=setLikedCourse;

    function LikeHandler(){

        if(likedCourses.includes(course.id)){
            //phele se like kara hua he
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
            toast.warning("Like Removed");
            
        }

        else{
            //phele se like nahi he course
            //insert karna he likedd course me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty he pehels se
                setLikedCourses((prev) =>[...prev,course.id]); 
            }
            toast.success("Liked Succesfully")

        }

    }
    return(
        <div className="w-[300px] bg-bgDark flex flex-col max-h-screen rounded-md overflow-hidden bg-opacity-90">

            <div className="relative"><img src={course.image.url}/>
            
            <div className=" w-[40px] h-[40px] absolute top-36 left-64 rounded-full bg-white grid place-items-center">
                <button onClick={LikeHandler}>
                    {
                        likedCourse.includes(course.id) ? (<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
            
            </div>

            

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white pt-4">{
                      
                      course.description.length >100 ? (
                        (course.description).substring(0,100)+"..."
                      ):(course.description)
                    
                    }
                </p>
            </div>
        </div>
    );

};

export default Card;