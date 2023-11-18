import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';

const Home = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            <div class="bg-white">
                <div class="relative isolate px-6 pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div>
                    <div class="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
                        <div class="text-center">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-cinzel" style={{ fontFamily: 'Cinzel' }}>Ride with Ease</h1>
                            <p class="mt-6 text-lg leading-8 text-gray-600" style={{ fontFamily: 'Nunito Sans' }}>Hello {currentUser ? currentUser.name : 'Guest'}, Experience the convenience of getting around town with BeeQuick. No more waiting in traffic or struggling to find parking. Our eco-friendly transportation options are perfect for short trips and quick errands.</p>
                            {
                                !currentUser &&
                                (
                                    <div class="mt-10 flex items-center justify-center gap-x-6">
                                        <a href="/Register" class="rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">Sign up now</a>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-amber-400 py-10 sm:py-10">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <h2 class="text-base font-semibold leading-7 text-gray-800" style={{ fontFamily: 'Cinzel' }}>Efficient and Sustainable</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'Nunito Sans' }}>Features that set us apart</p>
                        <p class="mt-6 text-lg leading-8 text-gray-800" style={{ fontFamily: 'Nunito Sans' }}>Discover the benefits of BeeQuick.</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div class="flex flex-col">
                                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Convenient Transportation</dt>
                                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800">
                                    <p class="flex-auto" style={{ fontFamily: 'Nunito Sans' }}>Efficiently travel through crowded city streets with our bike and scooter taxi service.</p>
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Eco-Friendly Solution</dt>
                                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800">
                                    <p class="flex-auto" style={{ fontFamily: 'Nunito Sans' }}>Reduce your carbon footprint by choosing our environmentally friendly transportation option.</p>
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Flexible and Affordable</dt>
                                <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800">
                                    <p class="flex-auto" style={{ fontFamily: 'Nunito Sans' }}>Enjoy the freedom of choosing a mode of transportation that suits your needs and budget.</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-4xl text-center">
                        <h2 class="text-base font-semibold leading-7 text-amber-400" style={{ fontSize: '4rem', fontFamily: 'Cinzel' }}>How It Works</h2>
                        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" style={{ fontSize: '2rem', fontFamily: 'Nunito Sans', marginTop: '30px' }}>Discover the BeeQuick Experience</p>
                    </div>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center" style={{ fontFamily: 'Nunito Sans' }}>Learn how BeeQuick makes your transportation hassle-free.</p>
                    <div class="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12">
                        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundColor: '#fff7de' }}>
                            <h3 class="text-base font-semibold leading-7 text-gray-900" style={{ fontFamily: 'Cinzel' }}>Step 1</h3>
                            <p class="mt-4 text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Nunito Sans' }}>Create an Account</p>
                            <p class="mt-4 text-base leading-7 text-gray-800" style={{ fontFamily: 'Nunito Sans' }}>Sign up with BeeQuick by providing your details and preferences. It's quick and easy.</p>
                        </div>
                        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundColor: '#fff7de' }}>
                            <h3 class="text-base font-semibold leading-7 text-gray-900" style={{ fontFamily: 'Cinzel' }}>Step 2</h3>
                            <p class="mt-4 text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Nunito Sans' }}>Book Your Ride</p>
                            <p class="mt-4 text-base leading-7 text-gray-800" style={{ fontFamily: 'Nunito Sans' }}>Select your pickup and drop-off locations, choose your preferred vehicle, and confirm your booking within the app.</p>
                        </div>
                        <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundColor: '#fff7de' }}>
                            <h3 class="text-base font-semibold leading-7 text-gray-900" style={{ fontFamily: 'Cinzel' }}>Step 3</h3>
                            <p class="mt-4 text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Nunito Sans' }}>Enjoy Your Ride</p>
                            <p class="mt-4 text-base leading-7 text-gray-800" style={{ fontFamily: 'Nunito Sans' }}>Relax and let our experienced drivers take you to your destination in comfort and style.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-amber-400">
                <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl" style={{ fontFamily: 'Cinzel' }}><br />Experience the convenience of our bike and scooter taxi service</h2>
                        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800" style={{ fontFamily: 'Nunito Sans' }}>Join thousands of satisfied customers and drivers who have chosen our eco-friendly transportation solution</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/Rent" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-amber-400 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Book a ride</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Become A Driver<span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-24 lg:px-8 lg:py-32">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-10 tracking-tight text-gray-900 text-center" style={{ fontFamily: 'Cinzel' }}>Testimonials</h2>
                    <div class="mt-8 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                        <div class="relative bg-yellow-200 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
                            <p class="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: 'Nunito Sans' }}>
                                "I love using the bike and scooter taxi service. It's so convenient and eco-friendly. The app is easy to use, and the drivers are always friendly and punctual."
                            </p>
                            <p class="mt-4 text-yellow-600 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Nunito Sans' }}>- Darpan, Customer</p>
                        </div>

                        <div class="relative bg-yellow-200 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
                            <p class="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: 'Nunito Sans' }}>
                                "As a driver at BeeQuick, I enjoy the flexibility it offers. I can choose my working hours and earn extra income. It's a win-win for me!"
                            </p>
                            <p class="mt-4 text-yellow-600 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Nunito Sans' }}>- Nitya, Driver</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div class="lg:col-span-5">
                            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900" style={{ fontFamily: 'Cinzel' }}>Frequently asked questions</h2>
                            <p class="mt-4 text-base leading-7 text-gray-600" style={{ fontFamily: 'Nunito Sans' }}>
                                Can’t find the answer you’re looking for? Reach out to our
                                <a href="#" class="font-semibold text-yellow-600 hover:text-yellow-400"> customer support </a>
                                team.
                            </p>
                        </div>
                        <div class="mt-10 lg:col-span-7 lg:mt-0">
                            <dl class="space-y-10">
                                <div>
                                    <dt class="text-base font-semibold leading-7 text-gray-900">How do I book a bike or scooter taxi?</dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-600">To book a bike or scooter taxi, simply create an account. From there, you can select your pickup and drop-off locations, choose the type of vehicle you prefer, and confirm your booking.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-semibold leading-7 text-gray-900">Are the bikes and scooters safe for transportation?</dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-600">Yes, all our bikes and scooters undergo regular maintenance and safety checks to ensure they are in good condition. Our drivers are also trained to prioritize safety and follow traffic rules.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-semibold leading-7 text-gray-900">How long will it take for a bike or scooter taxi to arrive?</dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-600">The arrival time of a bike or scooter taxi depends on various factors such as your location, traffic conditions, and availability of drivers. Our website will provide you with an estimated arrival time when you make a booking.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-semibold leading-7 text-gray-900">Can I track the location of my bike or scooter taxi?</dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-600">Yes, our app allows you to track the real-time location of your bike or scooter taxi once it has been assigned to you. This way, you can know exactly when it will arrive at your pickup location.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-semibold leading-7 text-gray-900">What payment methods are accepted for bike and scooter taxi rides?</dt>
                                    <dd class="mt-2 text-base leading-7 text-gray-600">We accept various payment methods including UPI, credit/debit cards, mobile wallets, and cash. You can choose your preferred payment method within the app before confirming your booking.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;