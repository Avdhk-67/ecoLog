import './Container.css';
import Card from './Card';
import { useState } from 'react';
function Container(props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourse] = useState([]);

    function getCourses() {
         if( category === "All"){

             let allCourses = [];
             Object.values(courses).forEach((courseCategory) => {
                 Object.values(courseCategory).forEach((chapters) => {
                     allCourses.push(chapters);
                 })
             })
             return allCourses;
         }
        

        else {
            return courses[category];
        }
    }
    return (
        <div className='container'>
            {
                getCourses().map((chapters) => {
                    return (<Card chapters={chapters} key={chapters.id} likedCourses={likedCourses} setLikedCourse={setLikedCourse}></Card>);
                })
            }
        </div>
    )
}

export default Container;