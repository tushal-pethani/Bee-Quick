import React from 'react';
import { Link } from 'react-router-dom';
function Options() {
  const drivers = defaultDrivers;

  const handleBookDriver = (driverName) => {
    // You can implement the logic to handle booking the driver here
    console.log(`Booking ${driverName}`);
  };

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
                <p className='text-xs text-white font-semibold'>{driver.distance}</p>
                <span className="inline-block px-4 py-1 rounded-full text-sm text-white">
                  {driver.gender}
                </span>
              </div>
              <Link to = "/Status">
              <button
                className="bg-black text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-amber-300 hover:text-black transform hover:scale-105"
                onClick={() => handleBookDriver(driver.name)}
              >
                Book
              </button>
              </Link>
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
