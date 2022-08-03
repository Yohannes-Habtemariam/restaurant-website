import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Order = () => {
  // State variables of order page
  const [firsName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);

  // Update order data
  const updateOrder = (event) => {
    switch(event.target.name) {
        case "consent":
            setConsent(event.target.value);
            break;
        default:
            break;
    }
  }

  return (
    <section>
      <fieldset>
        <legend></legend>
        <form action="">
          {/* Name of the Customer*/}
          <div>
            <div>
              <label htmlFor="">First name</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">First name</label>
              <input type="text" />
            </div>
          </div>

          <div>
          
          <div>

          <label htmlFor=""> Order Type</label>
          <input type="text" name="" id="" />
          
          </div>

          <div>

          <label htmlFor="">Order Amount</label>
          <input type="text" />
          
          </div>
          </div>

          <label htmlFor="">Last name</label>
          <input type="text" />

          {/* Yes or No radio consent container*/}
          <div className="consent-radio-container">
            <div>
              <p className="concent-statement">
                Do you consent to the data policy?
              </p>
            </div>
            <div className="radio-label-container">
              <input
                className="radio-input"
                type="radio"
                name="consent"
                onChange={updateOrder}
                value="yes"
                checked={consent === "yes"}
              />
              <label className="radio-label">Yes</label>

              <input
                className="radio-input radio-input-right"
                type="radio"
                name="consent"
                onChange={updateOrder}
                value="no"
                checked={consent === "no"}
              />
              <label className="radio-label">No</label>
            </div>
          </div>
        </form>
        <button> <NavLink to="/order" > Submit Order </NavLink> </button>
      </fieldset>
    </section>
  );
};

export default Order;
