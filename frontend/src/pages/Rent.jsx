import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

function rental() {
  const [rent, setRent] = useState({
    currentLocation: '',
    destination: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ride Started:', rent);
  };

  return (
    <div className="w-screen h-screen flex items-start bg-gray-500 overflow-hidden relative">

      <Sidebar />
      <div
        style={{ backgroundColor: '#FFC629' }}
        className={
          ' p-4 sm:p-6 md:p-8 lg:p-10 ' +
          'ml-4 sm:ml-6 md:ml-11 lg:ml-20 mr-4 sm:mr-6 md:mr-11 lg:mr-20 mx-auto mt-10 sm:mt-14 md:mt-20 lg:mt-24 ' +
          'rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-4/5 md:w-2/3 lg:w-3/4  h-2/1 '
        }
      >
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center text-gray-800">
          Choose your Ride
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
            <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="currentLocation">
              Your current location is:
            </label>
            <input
              className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
              id="currentLocation"
              type="text"
              value={rent.currentLocation}
              placeholder="Enter location"
              onChange={(e) => setRent({ ...rent, currentLocation: e.target.value })}
            />
          </div>
          <div className="mb-4 sm:mb-4 md:mb-5 lg:mb-6">
            <label className="block text-lg lg:text-xl font-medium text-gray-700" htmlFor="destination">
              Where do you want to go
            </label>
            <textarea
              className="mt-1 p-2 sm:p-2.5 md:p-3 lg:p-4 w-full border rounded-md transition-shadow focus:shadow-outline focus:outline-none"
              id="destination"
              rows="3 sm:rows-3 md:rows-4 lg:rows-5"
              value={rent.destination}
              placeholder="Write the address"
              onChange={(e) => setRent({ ...rent, destination: e.target.value })}
            ></textarea>
          </div>
         

          <div className="text-right">
            <button
              style={{ backgroundColor: '#000000', color: '#FFC629' }}
              className=" px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg shadow-lg hover:shadow-xl active:bg-blue-700 focus:outline-none focus:shadow-outline transition-all"
              type="submit"
            >
              Start Ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default rental;