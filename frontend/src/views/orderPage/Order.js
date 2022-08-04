import React, { useState, useEffect } from "react";
import "../../styles/orderPage/Order.css";

const Order = () => {
  // State variables of order page
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    province: "",
    country: "",
    orderType: "",
    orderAmount: "",
    deliveryDate: "",
    paymentMethod: "",
    cardNumber: "",
    cardCVC: "",
    expiryMonth: "",
    expiryYear: "",
    consent: "false",
  };

  const [values, setValues] = useState(initialValues);
  const [valuesErrors, setValuesErrors] = useState({});
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);


  useEffect( () => {
    const fetchClientData = async () => {

      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

      const clientData = await response.json();

      try{
        if(response.ok){
          setOrderSummary(clientData);
        } else{
          throw new Error(clientData.message)
        }
      }catch(err){
        alert(err.message)
      }

    }

    fetchClientData();
  }, []);

  // Function to handle input changes
  const handleChange = (event) => {
    
    //* setValues({ ...values, [event.target.name]: event.target.value }); 
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  // Function to handel useEffect
  useEffect(() => {
    console.log(valuesErrors)
    if(Object.keys(valuesErrors).length === 0 && isSubmitSuccessful) {
      console.log(values);
    }

  }, [valuesErrors]);

  // Function to handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setValuesErrors(validateForm(values))
    setIsSubmitSuccessful(true);

    const newOrder = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      telephone: values.telephone,
      street: values.street,
      houseNumber: values.houseNumber, 
      postalCode: values.postalCode,
      city: values.city,
      province: values.province,
      country: values.country,
      orderType: values.orderType,
      orderAmount: values.orderAmount,
      deliveryDate: values.deliveryDate,
      paymentMethod: values.paymentMethod,
      cardNumber: values.cardNumber,
      cardCVC: values.cardCVC,
      expiryMonth: values.expiryMonth,
      expiryYear: values.expiryYear,
  };

  const settings = {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/users", settings);
  const data = await response.json();

  try{
    if(response.ok) {
      console.log(data);
      setOrderSummary(data);
    } else {
      throw new Error(data.message);
    }
  }catch(err){
    alert(err.message);
  }
}

  // Function to validate form
  const validateForm = (formValues) => {

    const errors = {};

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!formValues.firstName) {
      errors.firstName = "First name is required";
    };

    if(!formValues.lastName) {
      errors.lastName = "Last name is required";
    };

    if(!formValues.email) { 
      errors.email = "Email is required";
    } else if (!regexEmail.test(formValues.email)) {
      errors.email = "Email is not valid";
    };

    if(!formValues.telephone) {
      errors.telephone = "Telephone is required";
    };

    if(!formValues.street) {  
      errors.street = "Street is required";
    };

    if(!formValues.houseNumber) {     
      errors.houseNumber = "House number is required";
    }; 

    if(!formValues.postalCode) {     
      errors.postalCode = "Postal code is required";
    };

    if(!formValues.city) {     
      errors.city = "City is required";
    };

    if(!formValues.province) {     
      errors.province = "Province is required";
    };

    if(!formValues.country) {     
      errors.country = "Country is required";
    };

    if(!formValues.orderType) {    
      errors.orderType = "Order type is required";
    };

    if(!formValues.orderAmount) {    
      errors.orderAmount = "Order amount is required";
    };

    if(!formValues.deliveryDate) {    
      errors.deliveryDate = "Delivery date is required";
    };

    if(!formValues.paymentMethod) {    
      errors.paymentMethod = "Payment method is required";
    };

    if(!formValues.cardNumber) {    
      errors.cardNumber = "Card number is required";
    };

    if(!formValues.cardCVC) {    
      errors.cardCVC = "Card CVC is required";
    };

    if(!formValues.expiryMonth) {    
      errors.expiryMonth = "Expiry month is required";
    };

    if(!formValues.expiryYear) {    
      errors.expiryYear = "Expiry year is required";
    };

    if(!formValues.consent) {    
      errors.consent = "Consent is required";
    };

    return errors;
  }

 // Function to reset all input fields
  const resetForm = () => {
    setValues(initialValues);
  }

 
  return (
    <section className="order-payment-container">
     {/*<pre> { JSON.stringify(values, undefined, 2)} </pre> */}
      <fieldset className="order-payment-fieldset">
        <legend className="order-payment-legend"> Order and Payment Information </legend>
        <form action="" className="order-payment-form">
          {/* Customer Details Section */}
          <section className="customer-detail-container">
            <h3 className="customer-detail-title"> Customer Details </h3>
            {/* First and Last Name */}
            <div className="full-name">
              <div className="first-name-container">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" onChange={handleChange} value={values.firstName} />
                <p className="formValueError"> {valuesErrors.firstName} </p>
              </div>

              <div className="last-name-container">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" onChange={handleChange} value={values.lastName} />
                <p className="formValueError"> {valuesErrors.lastName} </p>
              </div>
            </div>

            {/* Email and Telephone*/}
            <div className="email-telephone">
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={values.email}/>
                <p className="formValueError"> {valuesErrors.email} </p>
              </div>
              <div>
                <label htmlFor="telephone">Telephone</label>
                <input type="tel" id="telephone" name="telephone" onChange={handleChange} value={values.telephone} />
                <p className="formValueError"> {valuesErrors.telephone} </p>
              </div>
            </div>

            {/* Physical Address of the Customer*/}
            <div className="physical-address">
              <div>
                <label htmlFor="street">Street Name</label>
                <input type="text" id="street" name="street" onChange={handleChange} value={values.street} />
                <p className="formValueError"> {valuesErrors.street} </p>
              </div>

              <div>
                <label htmlFor="houseNumber">House Number</label>
                <input type="number" id="houseNumber" name="houseNumber" onChange={handleChange} value={values.houseNumber} />
                <p className="formValueError"> {valuesErrors.houseNumber} </p>
              </div>

              <div>
                <label htmlFor="postalCode">Postal Code</label>
                <input type="number" id="postalCode" name="postalCode" onChange={handleChange} value={values.postalCode} />
                <p className="formValueError"> {valuesErrors.postalCode} </p>
              </div>

              <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={handleChange} value={values.city}/>
                <p className="formValueError"> {valuesErrors.city} </p>
              </div>

              <div>
                <label htmlFor="province"> Province </label>
                <input type="text" id="province" name="province" onChange={handleChange} value={values.province}/>
                <p className="formValueError"> {valuesErrors.province} </p>
              </div>

              <div>
                <label htmlFor="country"> Country </label>
                <input type="text" id="country" name="country" onChange={handleChange} value={values.country} />
                <p className="formValueError"> {valuesErrors.country} </p>
              </div>
            </div>
          </section>

          {/* Order Details Section */}
          <section className="order-section-container">
            <h3> Order Details</h3>
            {/* First Order type, amount of order and date of order delivery*/}
            <div className="order-detail-container">
              <div>
                <label htmlFor="orderType"> Order Type</label>
                <input type="text" id="orderType" name="orderType" onChange={handleChange} value={values.orderType} />
                <p className="formValueError"> {valuesErrors.orderType} </p>
              </div>

              <div>
                <label htmlFor="orderAmount"> Amount</label>
                <input type="number" id="orderAmount" name="orderAmount" onChange={handleChange} value={values.orderAmount} />
                <p className="formValueError"> {valuesErrors.orderAmount} </p>
              </div>

              <div>
                <label htmlFor="deliveryDate"> Delivery Date</label>
                <input type="text" id="deliveryDate" name="deliveryDate" onChange={handleChange} value={values.deliveryDate} />
                <p className="formValueError"> {valuesErrors.deliveryDate} </p>
              </div>
            </div>

            <button>Add Order</button>
          </section>

          {/* Payment Details Section */}
          <section className="payment-details-container">
            <h3> Payment Details</h3>
            {/* Payment Method*/}
            <div className="paymentMethod-cardNumber">
              <div>
                <label htmlFor="paymentMethod"> Payment Method </label>
                <select name="paymentMethod" id="paymentMethod" onChange={handleChange} value={values.paymentMethod}>
                  <option value="default">Select Payment Method</option>
                  <option value="master">Master Card</option>
                  <option value="visa">Visa</option>
                  <option value="paypal">Paypal</option>
                </select>
                <p className="formValueError"> {valuesErrors.paymentMethod} </p>
              </div>

              <div>
                <label htmlFor="cardNumber"> Card Number </label>
                <input type="number" id="cardNumber" name="cardNumber" onChange={handleChange} value={values.cardNumber} />
                <p className="formValueError"> {valuesErrors.cardNumber} </p>
              </div>
            </div>

            {/* Crd CVC and expiry date*/}
            <div className="card-CVC-expiry-date-container">
              <div>
                <label htmlFor="cardCVC"> Card CVC </label>
                <input type="number" id="cardCVC" name="cardCVC" onChange={handleChange} value={values.cardCVC} />
                <p className="formValueError"> {valuesErrors.cardCVC} </p>
              </div>

              <div className="expiry-date-container">
                <div>
                  <label htmlFor="expiryMonth"> Expiry Month </label>
                  <input type="number" id="expiryMonth" name="expiryMonth" onChange={handleChange} value={values.expiryMonth}/>
                  <p className="formValueError"> {valuesErrors.expiryMonth} </p>
                </div>

                <div>
                  <label htmlFor="expiryYear"> Expiry Year </label>
                  <input type="number" id="expiryYear" name="expiryYear" onChange={handleChange} value={values.expiryYear} />
                  <p className="formValueError"> {valuesErrors.expiryYear} </p>
                </div>
              </div>
            </div>
          </section>

          {/* Yes or No radio consent container*/}
          <div className="consent-radio-container">
            <div className="consent-statement">
              <p className="concent-statement">
                Do you agree with the defined <span>terms</span> and{" "}
                <span>conditions</span>?
              </p>
            </div>
            <div className="radio-label-container">
              <input
                className="radio-input"
                type="radio"
                id="consent"
                name="consent"
                onChange={handleChange}
                value="yes"
                checked={values.consent === "yes"}
              />
              <label htmlFor="consent" className="radio-label">
                Yes
              </label>

              <input
                className="radio-input radio-input-right"
                type="radio"
                id="consent"
                name="consent"
                onChange={handleChange}
                value="no"
                checked={values.consent === "no"}
              />
              <label htmlFor="consent" className="radio-label">
                No
              </label>

            </div>
            <p className="formValueError"> {valuesErrors.consent} </p>
          </div>
         
        </form>
        <div className="submit-exist-container">
          <button onClick={handleSubmit} className="submit-order-button"> Submit Order</button>
          <button className="exit-order-button"> Exit Order </button>
        </div>
      </fieldset>
      {/* Individual Order Summary */}
      <section className="order-summary-section">
        <h3>  Order Summary </h3>
        <div className="order-summary-container"> 
          {orderSummary.map((order, index) => {
            return (
              <div key={index} className="order-summary-item">
                <p>{order.orderType}</p>
                <p>{order.orderAmount}</p>
                <p>{order.deliveryDate}</p>
              </div>
            );
          })} 
        </div>
      </section>
    </section>

    
  );
};

export default Order;
