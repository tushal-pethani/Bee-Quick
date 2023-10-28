import React from 'react';

function Sidebar() {

    const drivers = defaultDrivers
    return (
        <div className="flex flex-col flex-no-wrap w-full sm:w-64 md:w-1/4 lg:w-1/4 h-screen p-4 bg-gray-500 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6 text-grey">Available drivers</h1>
            {drivers.map((driver, index) => (
                <div
                    key={index}
                    style={{ backgroundColor: "#000000" }}
                    className="mb-6 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 space-y-2"
                >
                    <h2 className="text-xl font-semibold text-amber-400">{driver.name}</h2>
                    <div className="flex items-center justify-between">
                        <p className='text-xs text-white font-semibold'>{driver.distance}</p>
                        <span className="inline-block px-4 py-1 rounded-full text-sm text-white">
                            {driver.gender}
                        </span>
                    </div>
                </div>
            ))}
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

export default Sidebar;