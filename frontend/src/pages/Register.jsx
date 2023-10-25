import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [residence, setResidence] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [residenceError, setResidenceError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePhoneNumberChange = (value) => {
    // Allow only numbers by removing non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Ensure the phone number is not longer than 10 digits
    if (numericValue.length != 10) {
      setPhoneNumberError('Phone number should only be of 10 digits');
    } else {
      setPhoneNumberError('');
    }

    setPhoneNumber(numericValue);
  };

  const handleRegister = () => {
    // Validation checks
    let isValid = true;

    if (name === '') {
      isValid = false;
      setNameError('This field is required');
    } else {
      setNameError('');
    }

    if (email === '') {
      isValid = false;
      setEmailError('This field is required');
    } else if (!validateEmail(email)) {
      isValid = false;
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    if (password === '') {
      isValid = false;
      setPasswordError('This field is required');
    } else if (password.length < 8) {
      isValid = false;
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

    if (confirmPassword === '') {
      isValid = false;
      setConfirmPasswordError('This field is required');
    } else if (password !== confirmPassword) {
      isValid = false;
      setConfirmPasswordError("Passwords don't match");
    } else {
      setConfirmPasswordError('');
    }

    if (gender === '') {
      isValid = false;
      setGenderError('This field is required');
    } else {
      setGenderError('');
    }

    if (residence === '') {
      isValid = false;
      setResidenceError('This field is required');
    } else {
      setResidenceError('');
    }

    if (age === '') {
      isValid = false;
      setAgeError('This field is required');
    } else {
      setAgeError('');
    }

    if (phoneNumber === '') {
      isValid = false;
      setPhoneNumberError('This field is required');
    } else if (phoneNumber.length !== 10) {
      isValid = false;
      setPhoneNumberError('Phone number must be 10 digits');
    } else {
      setPhoneNumberError('');
    }

    if (isValid) {
      // Your registration logic here, e.g., using Firebase or an API call.
      console.log('Registration successful');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Gender:', gender);
      console.log('Residence:', residence);
      console.log('Age:', age);
      console.log('Phone Number:', phoneNumber);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96 transform scale-100 transition-transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-black mb-6 font-serif">
          BeeQuick Register
        </h2>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="password">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="gender">
            Gender:
          </label>
          <select
            id="gender"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {genderError && <p className="text-red-500 text-sm">{genderError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="residence">
            Residence:
          </label>
          <input
            type="text"
            id="residence"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            placeholder="Your residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            required
          />
          {residenceError && <p className="text-red-500 text-sm">{residenceError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            placeholder="Your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          {ageError && <p className="text-red-500 text-sm">{ageError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-300"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            required
          />
          {phoneNumberError && <p className="text-red-500 text-sm">{phoneNumberError}</p>}
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-black text-yellow-300 font-semibold py-3 rounded-md hover-bg-gray-900 focus:ring focus:ring-yellow-400"
        >
          Register
        </button>
        <div className="mt-4 text-center text-black">
          Already have an account? <a href="/Login" className="text-yellow-300 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
