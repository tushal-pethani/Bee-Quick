import React, { useState, useEffect } from 'react';

function Status() {
  const [rideStatus, setRideStatus] = useState('Searching for a ride...');
  const [driverDetails, setDriverDetails] = useState(null);
  const [rideFound, setRideFound] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const foundRide = true; // Replace with your logic to determine if a ride is found
      if (foundRide) {
        setRideStatus('Ride found!');
        // Set driver details (replace with actual details)
        setDriverDetails({
          driverName: 'John Doe',
          carModel: 'Sample Car',
          plateNumber: 'AB-1234',
        });
        setRideFound(true);
      } else {
        setRideStatus('No ride found. Please try again.');
      }
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gradient-to-r from-tertiary via-secondary to-primary h-screen flex items-center justify-center">
      <div className="bg-opacity-80 bg-white p-8 rounded-lg shadow-lg text-center border-4 border-ffc629 font-body">
        <h1 className="text-5xl font-title text-black mb-8">Ride Status</h1>
        <div className={`text-xl text-black mb-8 font-button opacity-100 transition-opacity duration-300 transform translate-y-0 ${rideFound ? 'opacity-0 translate-y-2' : ''}`}>
          <p className="text-2xl font-semibold">{rideStatus}</p>
        </div>
        {rideFound && (
          <div className="text-black bg-tertiary bg-opacity-90 font-footer opacity-100 transition-opacity duration-300 transform translate-y-0 mt-6">
            <p className="text-lg font-semibold">Driver: {driverDetails.driverName}</p>
            <p className="text-lg font-semibold">Bike Model: {driverDetails.carModel}</p>
            <p className="text-lg font-semibold">Plate Number: {driverDetails.plateNumber}</p>
            <button className="theme-btn-shadow rounded-xl bg-[#FFC629] px-4 py-2 mt-4 text-sm font-Nunito sans text-[#000000] font-normal mobile:text-xs hover:bg-[#FFA500] hover:text-white hover:border-[#000000]" style={{ fontFamily: 'Nunito Sans' }}>Cancel Ride</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Status;
