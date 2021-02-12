import React from 'react';
import OrderOptionDropdown from './OrderOptionDropdown';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";

function OrderInformation() {
    return (
        <Router>
        <div> 
            <div className="order_information_section">
                <div className="order_label_section">
                    <label className="order_label width_35">Executing Argi-Input Orders</label>
                    <label className="order_label width_30">Batched By</label>
                </div>
            </div>
            <div className="order_information_section">
                <div className="order_option_section">
                    <OrderOptionDropdown />
                    <div className="order_option batch_btn">
                        <div className="order_batch_image"></div>
                        <div className="order_batch_name">
                            <p className="batch_first_name">First Name</p>
                            <p className="batch_time">Last Name</p>
                        </div>
                    </div>
                    <Link to="../logo.svg" target="_blank" download>
                    <div className="order_option">
                        <div className="file_icon_holder">
                            <div className="file_icon"></div>
                        </div>
                        <div className="file_info_holder">
                            <div className="file_name">Click Here to download</div>
                        </div>
                        <div className="file_download_icon"></div> 
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default OrderInformation;