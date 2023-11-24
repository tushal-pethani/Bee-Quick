import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios'

function Options(props) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const currentLocation = searchParams.get('currentLocation')
  const destination = searchParams.get('destination')
  
  const [drivers, setDrivers] = useState([])
  const {currentUser} = useContext(AuthContext)
  const {userid} = currentUser

  const navigate = useNavigate()

  useEffect(() => {

    const fetchDrivers = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/ride/checkDrivers`)
        setDrivers(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchDrivers()
  }, [])

  const handleBookRide = async (owner_id) => {
    // event.preventDefault()

    const sendData = {
      user_id: userid,
      loc_pick: currentLocation,
      loc_drop: destination,
      owner_id: owner_id
    }
    console.log(sendData)

    try {
      const req = await axios.post('http://localhost:8800/api/ride/createRide', sendData)
      console.log("Ride created")
      console.log(req)
      navigate('/status')
    } catch (error) {
      console.log("error in frontend")
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="bg-amber-300 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Available drivers</h1>
        <div className="flex overflow-x-auto space-x-4">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2 bg-gray-800"
            >
              <h2 className="text-xl font-semibold text-amber-300">{driver.name}</h2>
              <div className="flex items-center justify-between">
                <p className='text-xs text-white font-semibold'>{driver.bike_id}</p>
                <span className="inline-block px-4 py-1 rounded-full text-sm text-white">
                  {driver.gender}
                </span>
              </div>
              <button
                className="bg-black text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-amber-300 hover:text-black transform hover:scale-105"
                onClick={() => handleBookRide(driver.owner_id)}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const defaultDrivers = [
  {
    name: "John Doe",
    gender: "Male",
    distance: "5 miles",
    progress: 75,
  },
  {
    name: "Jane Smith",
    gender: "Female",
    distance: "8 miles",
    progress: 40,
  },
  {
    name: "Sam Johnson",
    gender: "Male",
    distance: "3 miles",
    progress: 20,
  },
  // Add more driver objects as needed
];

export default Options;
