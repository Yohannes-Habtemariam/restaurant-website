import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import "../../styles/registerPage/Register.css";

const Register = () => {
 // State variables of the register form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [reset, setReset] = useState(false);
  const [success, setSuccess] = useState(false);

  // State variables validation for the register form
  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setLastNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);
  const [streetValidation, setStreetValidation] = useState(false);
  const [houseNumberValidation, setHouseNumberValidation] = useState(false);
  const [zipCodeValidation, setZipCodeValidation] = useState(false);
  const [cityValidation, setCityValidation] = useState(false);
  const [provinceValidation, setProvinceValidation] = useState(false);
  const [countryValidation, setCountryValidation] = useState(false);
  const [agreeValidation, setAgreeValidation] = useState(false);


  // Function to update the "register" state variables
  const updateData = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        setFirstNameValidation(true);
        break;
      case "lastName":
        setLastName(event.target.value);
        setLastNameValidation(true);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "birthDate":
        setBirthDate(null);
        break;
      case "email":
        setEmail(event.target.value);
        setEmailValidation(true);
        break;
      case "password":
        setPassword(event.target.value);
        setPasswordValidation(true);
        break;
      case "chowPassword":
        showPassword(false);
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        setConfirmPasswordValidation(true);
        break;
      case "chowConfirmPassword":
        setShowConfirmPassword(false);
        break;
      case "error":
        setError(event.target.value);
        break;
      case "street":
        setStreet(event.target.value);
        setStreetValidation(true);
        break;
      case "houseNumber":
        setHouseNumber(event.target.value);
        setHouseNumberValidation(true);
        break;
      case "zipCode":
        setZipCode(event.target.value);
        setZipCodeValidation(true);
        break;
      case "city":
        setCity(event.target.value);
        setCityValidation(true);
        break;
      case "province":
        setProvince(event.target.value);
        setProvinceValidation(true);
        break;
      case "country":
        setCountry(event.target.value);
        setCountryValidation(true);
        break;
      case "agree":
        setAgree(false);
        setAgreeValidation(true);
        break;
      case "reset":
        setReset(false);
        break;
      case "success":
        setSuccess(false);
        break;
      default:
        break;
    };
  };

  // Function to show/hide password
 const PasswordVisibility = () => {
  setShowPassword(prevState => !prevState);
 }

  // Function to show/hide  confirm password 
  const confirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  }

  // Function to check if the passwords match
  const checkPassword = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  // Function to check if the password is valid
  const checkPasswordLength = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else {
      setError("");
    }
  };

  // Function to check if the user entered birth date
  const checkAge = () => {
    if (birthDate === null) {
      setError("You must enter your age");
    } else {
      setError("");
    }
  };

  // Function to check if the user is at least 18 years old
  const checkAge18 = () => {
    if ((birthDate - new Date()) < 18) {
      setError("You must be at least 18 years old to register");
    } else {
      setError("");
    }
  };

  // Function to check the terms and conditions checkbox is checked
  const checkTermsAndConditionsCheckbox = () => {
    if (agree === false) {
      setError("You must agree to the terms and conditions");
    } else {
      setError("");
    }
  };


  // Make a useRef to the error element
  const firstNameError = useRef();
  const lastNameError = useRef();
  const emailError = useRef();
  const agreeError = useRef();
  const passwordError = useRef();
  const confirmPasswordError = useRef();
  const streetError = useRef();
  const houseNumberError = useRef();
  const zipCodeError = useRef();
  const cityError = useRef();
  const provinceError = useRef();
  const countryError = useRef();
  const ageError = useRef();



  // Function to check if the email is valid
  const checkEmailFormat = () => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if (emailRegex) {
        emailError.current.className = "errorInvisible"
          //emailFormatError.current.style.display = "none"
    } else {
          emailError.current.className = "errorVisible"
          //emailFormatError.current.style.display = "block"
    }
  };

  const checkPasswordFormat = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (passwordRegex && password.length >= 12) {
        passwordError.current.className = "errorInvisible"
          //passwordRef.current.style.display = "none"
    } else {
          passwordError.current.className = "errorVisible"
          //passwordRef.current.style.display = "block"
    }
  }

  // Function to check the terms and conditions checkbox is checked
  const checkboxAgree = (prevAgree) => {
    setAgreeValidation(prevAgree => !prevAgree)
  }

  // Function to reset all the state variables
  const resetEnteredData = () => {
    setFirstName("");
    setFirstNameValidation(false);
    setLastName("");
    setLastNameValidation(false);
    setEmail("");
    setEmailValidation(false);
    setPassword("");
    setPasswordValidation(false);
    setConfirmPassword("");
    setConfirmPasswordValidation(false);
    setStreet("");
    setStreetValidation(false);
    setHouseNumber("");
    setHouseNumberValidation(false);
    setZipCode("");
    setZipCodeValidation(false);
    setCity("");
    setCityValidation(false);
    setProvince("");
    setProvinceValidation(false);
    setCountry("");
    setCountryValidation(false);
    setAgree(false);
    setAgreeValidation(false);
    setBirthDate(null);
    setError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setReset(false);
    setSuccess(false);
  }

 // Function to register the user
  const SubmitRegisteredUser = async (event) => {
    event.preventDefault();
    
    const userData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthDate: birthDate,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      street: street,
      houseNumber: houseNumber,
      zipCode: zipCode,
      city: city,
      province: province,
      country: country,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      }
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users", settings);
    const data = await response.json();

    try{
      if(response.ok) {
        console.log(data);

        // reset the state variables
        resetEnteredData();
      } else {
        throw new Error(data.error);
      }
    }catch (err){
      //setError(err.message)
      console.log(err)
    }
  
  }

  return (
    <section className="register-form-container">
      <fieldset className="register-form-fieldset">
        <legend className='register-legend'> Create an Account </legend>
        <form className="registration-form" onSubmit={SubmitRegisteredUser} >

        {/* Full name container*/}
          <div className="full-name-container">
            <div className='firstName-container'>
              <div className="firstName-label"> <label htmlFor="firstName"> First Name </label> </div>
              <div className="firstName-input"> <input type="text" id="firstName" name="firstName" onChange={updateData} value={firstName} placeholder="Enter First Name" /> </div>
              <div className={firstName.trim().length === 0 && firstNameValidation ? "errorVisible" : "errorInvisible"} ref={firstNameError}> First name is required</div>
            </div>

            <div className='lastName-container'>
              <div className="lastName-label"> <label htmlFor="lastName"> Last Name </label> </div>
              <div className="lastName-input"> <input type="text" id="lastName" name="lastName" onChange={updateData} value={lastName}  placeholder="Enter Last Name" />  </div>
              <div className={lastName.trim().length === 0 && lastNameValidation ? "errorVisible" : "errorInvisible"} ref={lastNameError}> Last name is required</div>
            </div>
          </div>


          {/* Date of birth container*/}
          <div className="birthDate-gender-container">
           <div className='dateBirth-container'>
              <div className="birthDate-label"> <label htmlFor="age"> Date of Birth </label> </div>
              <div className="birthDate-input"> <input type="date" id='age' name="age" onChange={event => setBirthDate(event.target.value)} onClick={checkAge18} placeholder="Enter Birth Date" /> </div>
           </div>
            
            <div className='gender-container'>
              <div className="gender-label"> <label htmlFor="gender">Gender </label> </div>
              <div className="gender-input"> 
                <select id="gender" name="gender" onChange={updateData} value={gender}>
                  <option value="default"> Select Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select> 
              </div>
            </div>
          </div>


          {/* Email container*/}
          <div className="email-address-container">
            <div className="email-label"> <label htmlFor="email"> Email Address </label> </div>
            <div className="email-input"> <input type="email" id="email" name="email" onBlur={checkEmailFormat} onChange={updateData} value={email} placeholder="Enter Email" />  </div>
            <div className={email.trim().length === 0 && emailValidation ? "errorVisible" : "errorInvisible"} ref={emailError}> Email is required</div>
            <div className="errorInvisible" ref={emailError}> Incorrect email format! </div>
          </div>


          {/* Password container*/}
          <div className="password-confirm-password-container">
            <div className='password-container'>
              <div className="password-label"> <label htmlFor="password"> Password </label> </div>
              <div className="password-input"> 
                <input type={showPassword ? "text" : "password"} id="password" name="password" onBlur={checkPasswordFormat} onChange={updateData} value={password} placeholder="Enter Password" className="icons"/> 
                
                <span onClick={PasswordVisibility} className="password-display"> {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>} </span>

                <div className={password.trim().length === 0 && passwordValidation ? "errorVisible" : "errorInvisible"} ref={passwordError}> Password is required</div>

                <div className='errorInvisible' ref={passwordError} >Password must be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character</div>
              </div>
            </div>

            <div className="confirm-password-container"> 
              <div className="confirm-password-label"> <label htmlFor="confirmPassword"> Confirm Password </label> </div>
              <div className='confirm-password-input'>
                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" onChange={updateData} value={confirmPassword} placeholder="Confirm Password" /> 
                <span onClick={confirmPasswordVisibility} className="password-display"> {showConfirmPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>} </span>

                <div className={confirmPassword.trim().length === 0 && confirmPasswordValidation ? "errorVisible" : "errorInvisible"} ref={confirmPasswordError}> Confirm password is required</div>
              </div>
            </div>
          </div>

           {/* residence address container*/}
          <div className="residence-address-container">
            <div className="label"> <label htmlFor="street"> Residence Address </label> </div>
           <div className='residence-address-inputs-container'>
              <div className="street-input"> 
                <input type="text" id="street" name="street" onChange={updateData} value={street} placeholder="Enter Street Name" /> 
                <div className={street.trim().length === 0 && streetValidation ? "errorVisible" : "errorInvisible"} ref={streetError}> Street name is required</div>
              </div>

              <div className="house-number"> 
                <input type="number" name="houseNumber" onChange={updateData} value={houseNumber} placeholder="Enter House Number" /> 
                <div className={houseNumber.trim().length === 0 && houseNumberValidation ? "errorVisible" : "errorInvisible"} ref={houseNumberError}> House number is required</div>
              </div>

              <div className="zipCode"> 
                <input type="number" name="zipCode" onChange={updateData} value={zipCode} placeholder="Enter Zip Code" /> 
                <div className={zipCode.trim().length === 0 && zipCodeValidation ? "errorVisible" : "errorInvisible"} ref={zipCodeError}> Zip code is required</div>
              </div>

              <div className="city">  
                <input type="text"  name="city" onChange={updateData} value={city} placeholder="Enter City" /> 
                <div className={city.trim().length === 0 && cityValidation ? "errorVisible" : "errorInvisible"} ref={cityError}> City is required</div>
              </div>

              <div className="province"> 
                <input type="text" name="province" onChange={updateData} value={province} placeholder="Enter Province" /> 
                <div className={province.trim().length === 0 && provinceValidation ? "errorVisible" : "errorInvisible"} ref={provinceError}> Province is required</div>
              </div>

              <div className="country"> 
                <input type="text" name="country" onChange={updateData} value={country} placeholder="Enter Country" /> 
                <div className={country.trim().length === 0 && countryValidation ? "errorVisible" : "errorInvisible"} ref={countryError}> Country is required</div>
              </div>
           </div>
          </div>

          {/* Consent checkbox container*/}
          <div className="checkbox-reset-container">

            <div className="checkbox-container"> <input type="checkbox" id='agree' name="agree" checked={checkboxAgree.agree} />  </div>

            <div className="agree-statement"> <label htmlFor="agree"> I agree with the defined <span>terms</span> and <span>conditions</span></label> </div>

            <div className='reset-container'> <input type="reset" onClick={resetEnteredData} /> </div>

            {/* Validation of consent checkbox */}
            <div className={agree === false && agreeValidation ? "errorVisible" : "errorInvisible"} ref={agreeError} >Confirm your agreement</div>
          </div>
          
        </form>

        {/* submit button and login button*/}

        <div className='registration-buttons-container'>

            <div> <button className="register-button" onClick={SubmitRegisteredUser} > Register </button> </div>

            <div className='swap-to-login'> 
              if already registered? <NavLink to="/login" className='login-button'> Login </NavLink> 
            </div>
        </div>
         
      </fieldset>
    </section>
  )
}

export default Register;