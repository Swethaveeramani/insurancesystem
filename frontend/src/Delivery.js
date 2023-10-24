import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import { saveDeliveryInfo } from "../../Actions/cartAction";

const Delivery = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveDeliveryInfo({ address, city, postalCode, phoneNo }));
        navigate("/confirm");
    };

    return (
        <>
         <CheckoutSteps delivery />
        <div className="row wrapper">
            <div className="col-10 col-lg-5 cartt">
                <form onSubmit={submitHandler}>
                    <h2>Delivery Address</h2>
                    <div className="form-group">
                        <label htmlFor="address_field">Address</label>
                        <input
                            type="text"
                            id="address_field"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city_field">City</label>
                        <input
                            type="text"
                            id="city_field"
                            className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postal_code_field">Postal Code</label>
                        <input
                            type="number"
                            id="postal_code_field"
                            className="form-control"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_field">Phone</label>
                        <input
                            type="text"
                            id="phone_field"
                            className="form-control"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            required
                        />
                    </div>
                   
                    <button id="shipping_btn" className="btn btn" type="submit">
                        Continue
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Delivery;
