import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { AuthContext } from '../context/authContext';

function Status() {
  const [rideStatus, setRideStatus] = useState('Searching for a ride...');
  const [details, setDetails] = useState(null)
  const [rideFound, setRideFound] = useState(false)
  const {currentUser} = useContext(AuthContext)
  const {userid} = currentUser
  useEffect(() => {

    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/ride/getDetails`, {params: {userid: userid}})
        setRideFound(true)
        setDetails(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }

    fetchDetails()
  }, [])

  return (
    <div className="bg-gradient-to-r from-tertiary via-secondary to-primary h-screen flex items-center justify-center">
      <div className="bg-opacity-80 bg-white p-8 rounded-lg shadow-lg text-center border-4 border-ffc629 font-body">
        <h1 className="text-5xl font-title text-black mb-8">Ride Status</h1>
        <div className={`text-xl text-black mb-8 font-button opacity-100 transition-opacity duration-300 transform translate-y-0 ${rideFound ? 'opacity-0 translate-y-2' : ''}`}>
          {
            !rideFound && (<p className="text-2xl font-semibold">{rideStatus}</p>)
          }
        </div>
        {rideFound && (
          <div className="text-black bg-tertiary bg-opacity-90 font-footer opacity-100 transition-opacity duration-300 transform translate-y-0 mt-6">
            {/* <p className="text-lg font-semibold">Driver: {details.driverName}</p> */}
            <p className="text-lg font-semibold">Plate Number: {details.bike_id}</p>
            <p className="text-lg font-semibold">Amount: {details.amount}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Status;
