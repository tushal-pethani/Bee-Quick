import React, { useState, useEffect } from 'react';

function DriverPage() {
  const [rideDetails, setRideDetails] = useState(null);
  const [rideFound, setRideFound] = useState(false);

  useEffect(() => {

    const fetchRideDetails = async () => {
      try {
        const response = await fetch('api/rides/123'); // Replace with your actual endpoint
        const data = await response.json();


        if (data && data.customerName && data.contactNumber && data.email && data.gender) {
          setRideDetails({
            customerName: data.customerName,
            contactNumber: data.contactNumber,
            email: data.email,
            gender: data.gender,
            // Add other relevant ride details
          });
          setRideFound(true);
        } else {
          setRideFound(false);
        }
      } catch (error) {
        console.error('Error fetching ride details:', error);
        setRideFound(false);
      }
    };

    

    fetchRideDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEndRide = () => {
    // Perform actions to end the ride
    // For example, reset state variables or make additional API calls
    console.log('Ending the ride...');
  };

  return (
    <div className="bg-gradient-to-r from-tertiary via-secondary to-primary h-screen flex items-center justify-center">
      <div className="bg-opacity-80 bg-white p-8 rounded-lg shadow-lg text-center border-4 border-ffc629 font-body">
        <h1 className="text-5xl font-title text-black mb-8">Driver Page</h1>
        {rideFound ? (
          <>
            <div className="text-black bg-tertiary bg-opacity-90 font-footer opacity-100 transition-opacity duration-300 transform translate-y-0 mt-6">
              <p className="text-lg font-semibold">Customer: {rideDetails.customerName}</p>
              <p className="text-lg font-semibold">Contact Number: {rideDetails.contactNumber}</p>
              <p className="text-lg font-semibold">Email: {rideDetails.email}</p>
              <p className="text-lg font-semibold">Gender: {rideDetails.gender}</p>
              {/* Add other ride details here */}
            </div>
            <button
              className="bg-primary text-white p-2 mt-4 rounded-md hover:bg-opacity-80"
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
