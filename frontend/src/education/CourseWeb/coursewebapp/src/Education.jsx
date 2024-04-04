import logo from './logo.svg';
import './AppEd.css';
import { filterData, apiUrl } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Container from './components/Container';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { componentData } from './data1';
import { toast } from 'react-toastify';// To use it we have to install npm i react-toastify and will import first in index js then in this
function Education() {

  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  // setCourses(componentData.data1)
  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(apiUrl);
  //     const output = await res.json();
  //     setCourses(output.data);
  //     console.log(output.data);

  //   }
  //   catch (error) {
  //     toast.error("Something went wrong");
  //   }
  //   setLoading(false);
  // }
  useEffect(() => {
    setCourses(componentData.data1);
    setLoading(false);
  }, []);
  return (
    <div className='wrapper'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='filter'>
        <Filter filterData={filterData} category={category} setCategory={setCategory} >

        </Filter>
      </div>
      <div className='content'>
        {
          loading ? <Spinner></Spinner> : <Container courses={courses} category={category}></Container>
        }
      </div>
      <div className="App">
      </div>
    </div>
  );
}

export default Education;
