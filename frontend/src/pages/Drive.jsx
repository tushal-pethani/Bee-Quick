import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { AuthContext } from '../context/authContext';

function DriverPage() {
  const [rideDetails, setRideDetails] = useState(null);
  const [rideFound, setRideFound] = useState(false);
  const [details, setDetails] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { emp_id } = currentUser

  useEffect(() => {

    const fetchRideDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/ride/getDriverDetails`, { params: { emp_id: emp_id } })
        setRideFound(true)
        setDetails(res.data[0])
        console.log(res.data[0])
        console.log(details)
        if (!details) setRideFound(false);
      } catch (error) {
        console.log(error)
      }
    };
    fetchRideDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEndRide = async (event) => {
    // event.preventDefault()

    const bikeid = details.bike_id;
    console.log(bikeid);

    try {
      await axios.put('http://localhost:8800/api/ride/updateDropTime', { bike_id: bikeid });
      setRideFound(false);
    } catch (error) {
      console.log("some error in frontend");
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-tertiary via-secondary to-primary h-screen flex items-center justify-center">
      <div className="bg-opacity-80 bg-white p-8 rounded-lg shadow-lg text-center border-4 border-ffc629 font-body">
        <h1 className="text-5xl font-title text-black mb-8">Driver Page</h1>
        {rideFound ? (
          <>
            <div className="text-black bg-tertiary bg-opacity-90 font-footer opacity-100 transition-opacity duration-300 transform translate-y-0 mt-6">
              <p className="text-lg font-semibold">Customer: {details?.user_name}</p>
              <p className="text-lg font-semibold">From: {details?.loc_pick_name}</p>
              <p className="text-lg font-semibold">Destination: {details?.loc_drop_name}</p>
              {/* <p className="text-lg font-semibold">Gender: {details.gender}</p> */}
              {/* Add other ride details here */}
            </div>
            <button
              className="bg-primary text-yellow p-2 mt-4 rounded-md hover:bg-opacity-80"
              onClick={() => handleEndRide()}
            >
              End Ride
            </button>
          </>
        ) : (
          <div className="text-2xl font-semibold">
            No rides found yet. Searching...
            {/* Add a loading spinner or other loading indicator if needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default DriverPage;
