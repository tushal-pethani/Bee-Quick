import React, { useState, useEffect } from 'react';

function DriverPage() {
  const [rideDetails, setRideDetails] = useState(null);
  const [rideFound, setRideFound] = useState(false);

  useEffect(() => {
    // Simulating fetching ride details from an API or database
    // Replace this with actual API calls or database queries
    const fetchRideDetails = async () => {
      try {
        // Simulate fetching ride details from an API or database
        const response = await fetch('api/rides/123'); // Replace 'api/rides/123' with your actual endpoint
        const data = await response.json();

        // Check if ride details are found
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

    // Call the function to fetch ride details
    fetchRideDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
