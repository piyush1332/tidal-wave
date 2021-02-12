import React from 'react';
// import { Link, Router, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './SideNav.css';
import PurchaseManagement from './PurchaseManagement';
import SupplierMasterMaintenance from './SupplierMasterMaintenance';
import InputMasterMaintenance from './InputMasterMaintenance';
import PurchaseRequests from './PurchaseRequests';

function StructureHolder() {
    return (
        <Router>
            <div className="side_nav">
                <ul>
                    <li>
                        <Link to = "./PurchaseManagement"> Agri-Purchase Management </Link>
                    </li>
                    <li>
                        <Link to = "./InputMasterMaintenance"> Agri-Input Master Maintenance </Link>
                    </li>
                    <li>
                        <Link to = "./SupplierMasterMaintenance"> Supplier Master Maintenance </Link>
                    </li>
                    <li>
                        <Link to = "./PurchaseRequests"> Argi-Input Purchase Requests </Link>
                    </li>
                </ul>
                
            </div>
            <div className="main_content_holder">
                <Switch>
                    <Route path="/purchaseManagement"><PurchaseManagement /></Route>
                    <Route path="/inputMasterMaintenance"><InputMasterMaintenance /></Route>
                    <Route path="/supplierMasterMaintenance"><SupplierMasterMaintenance /></Route>
                    {/* <Route path="/purchaseRequests"><PurchaseRequests /></Route> */}
                    <Route  path="/"><PurchaseRequests /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default StructureHolder;