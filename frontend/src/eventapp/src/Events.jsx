import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppEvent.css'
import c from './c.png';
import d from './d.png';
import a from './1.png';
import e from './e.png';
import Water from './river.png';
import Banglore from './cleanup.png';
import b from './b.png'
import Container from './components/Container';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Container1 from './components/Container1';
import CitySearch from './components/citySearch';
function Events() {
  const data = [
    {
      id: 1,
      organization: "Catch Foudation",
      title: "Plant Campaign",
      city: "Pune",
      location: "Katraj Lake",
      image: c,
      link: "https://maps.app.goo.gl/n9kd9vTMH4Cig3et9"
    },
    {
      id: 2,
      organization: "Catch Foudation",
      title: "GreenCity",
      city: "Pune",
      location: "Hinjewadi IT Park",
      image: d,
      link: "https://maps.app.goo.gl/gZSjH7iQGACYwirHA"
    },
    {
      id: 3,
      organization: "GreenEarth Foundation",
      title: "CleanUpDrive",
      city: "Pune",
      location: "Aundh IT Park",
      image: e,
      link: "https://maps.app.goo.gl/ydNFDcMno3jQmSux8"
    },
    {
      id: 5,
      organization: "RenewEco Foundation",
      title: "Urban Renewal",
      city: "Ahemdabad",
      location: "Kankaria Lake",
      image: Water,
      link: "https://maps.app.goo.gl/inY6M838Yx3p8rmJA"

    },
    {
      id: 6,
      organization: "EcoGuard Foundation",
      title: "Eco-Safe",
      city: "Ahemdabad",
      location: "River Front",
      image: a,
      link: "https://maps.app.goo.gl/fwRcqSgMmJ9xNE13A"
    },
    {
      id: 8,
      organization: "GreenWave Waste Solutions",
      title: "EcoAction Initiative",
      city: "Banglore",
      location: "Cubbon Park",
      image: Banglore,
      link: "https://maps.app.goo.gl/711jfKqhinyFwkev9"
    },
    {
      id: 9,
      organization: "Catch Foudation",
      title: "WasteWise Initiative",
      city: "Banglore",
      location: "Lalbagh Botanical Garden",
      image: b,
      link: "https://maps.app.goo.gl/Pr1gPsSBdHNXC3aq7"
    },

  ];
  let APIkey = "45c11af2e628e4bd88c3269b4f18a43a"
  const [grantLocation, setgrantLocation] = useState(false);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    }
    else {
      console.log("Geolocation is not supported");
    }
  }
  function showPosition(position) {

    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    showWeather(userCoordinates);
  }
  function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    // Here we get coordinates from user location using getlocation and showlocationfunctions
    if (!localCoordinates) {
      // If we cant able to find that means we doesnt gave access to give location
      setgrantLocation(true);
    }
    else {

      const coordinates = JSON.parse(localCoordinates);
      showWeather(coordinates);
    }
  }
  const [cityName, setcityName] = useState("");
  async function showWeather(coordinates) {
    const { lat, lon } = coordinates;

    setgrantLocation(false);
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': "yRE3D7gYD95LDcoKpZ4suQ==EHNR9XTk2xOB0STD",
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      // const data = JSON.parse(response);
      setcityName(data[0].name);
      // userContainer.classList.add("active");
      // console.log({ cityName });
    }
    catch (err) {

      console.log("Error in API fetching", err);
    }
  }

  useEffect(getLocation, []);
  const [myLocation, setmyLocation] = useState(0);

  return (
    <>
      <div className='whole'>
        {
          <CitySearch data={data} cityName={cityName}></CitySearch>
        }
        {/* <CitySearch data={data} cityName={cityName}></CitySearch> */}
        {/* <button onClick={() => getLocation()}>Allow</button> */}
        {/* <p>{cityName}</p> */}
        {/* <p>{search}</p> */}
        {/* <input type="text" placeholder="Search City.." onChange={changeHandler}></input> */}
        {/* <button onClick={submitCity}><AiOutlineSearch /></button> */}
        {/* <NavBar cityName={cityName} setcityName={setcityName} submitHandler={submitHandler} /> */}
        {/* <Container campaign={campaign} cityName={cityName} /> */}
      </div>
    
      
    </>
  )
}

export default Events
