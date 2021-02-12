import React, { useState } from 'react';

function OrderOptionDropdown() {
    let [dropdownState, applyToggle] = useState('none');
    const toggleDropdown = () => {
        dropdownState = dropdownState === 'block'  ? 'none' : 'block';
        applyToggle(dropdownState);
    }
    return (

        <div className="order_option" onClick={toggleDropdown}>
            <span className="order_option_radio">
                <input type="radio" value="" name=""/>
            </span>
            <span className="order_option_name">
                First Name
            </span>
            <span className="order_option_icon">
                ^
            </span>
            <div className="opder_dropdown" style={{display:dropdownState}}>
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
                <span>Four</span>
            </div> 
        </div>
    );
}

export default OrderOptionDropdown;