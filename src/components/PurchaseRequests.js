import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import './PurchaseRequests.css';
import './SideNav.css';
import ExecutingBlock from './ExecutingBlock';
import PendingSection from './PendingSection';
import ExecutedSection from './ExecutedSection';
import CompletedSection from './CompletedSection';

function PurchaseRequests() {
    let [activeTab , setActive] = useState('two');
    let [activeArrow , setArrow] = useState('two');
    let setTabActive = (tabName) => {
        setActive(tabName);
        setArrow(tabName);
    }
    return (
        <Router>
        <div>
            <div className="section_heading">
                <h3>Argi-Input Purchase Requests</h3>
            </div>
            <div className="block_menu">
                <Link to = "./PendingSection" className={activeTab == 'one' ? "block_menu_item active" : "block_menu_item unactive" } onClick={ () => {setTabActive('one'); setArrow('one');}}>
                    <div className="menu_item_number">1</div>
                    <span className="menu_item_label">Pending</span>
                    <div className="active_tab" className={activeArrow == 'one' ? "active_arrow active_tab" : "unactive_arrow active_tab" }></div> 
                </Link>
                <Link to = "./ExecutingBlock" className={activeTab == 'two' ? "block_menu_item active" : "block_menu_item unactive" } onClick={ () => {setTabActive('two'); setArrow('two');}}>
                    <div className="menu_item_number">2</div>
                    <span className="menu_item_label">Executing</span>
                    <div className="active_tab" className={activeArrow == 'two' ? "active_arrow active_tab" : "unactive_arrow active_tab" }></div> 
                </Link>
                <Link to = "./ExecutedSection" className={activeTab == 'three' ? "block_menu_item active" : "block_menu_item unactive" } onClick={ () => {setTabActive('three'); setArrow('three');}}>
                    <div className="menu_item_number">3</div>
                    <span className="menu_item_label">Executed</span>
                    <div className="active_tab" className={activeArrow == 'three' ? "active_arrow active_tab" : "unactive_arrow active_tab" }></div> 
                </Link>
                <Link to = "./CompletedSection" className={activeTab == 'four' ? "block_menu_item active" : "block_menu_item unactive" } onClick={ () => {setTabActive('four'); setArrow('four');}}>
                    <div className="menu_item_number">4</div>
                    <span className="menu_item_label">Completed</span>
                    <div className="active_tab" className={activeArrow == 'four' ? "active_arrow active_tab" : "unactive_arrow active_tab" }></div> 
                </Link>
            </div>
            <Switch>
                <Route  path="/pendingSection"><PendingSection /></Route>
                <Route path="/executedSection"><ExecutedSection /></Route>
                <Route path="/completedSection"><CompletedSection /></Route>
                <Route path="/"><ExecutingBlock /></Route>
            </Switch>
        </div>
        </Router>
    );
}

export default PurchaseRequests;