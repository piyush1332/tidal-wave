import React from 'react';
import './ProductTable.css';
import TableData from './TableData';

// const images = require.context('../../public/images', true);

function ProductTable() {
    let tableDataObject = TableData();
    let tableData = tableDataObject.tableData;
    return ( 
        <div className="product_table_holder">
            <table id="product_table">
                <thead>
                    <th></th>
                    <th>Argi-Input Category</th>
                    <th style={{width: '70px'}}>Product Image</th>
                    <th>Product Description</th>
                    <th>Order Quantity</th>
                    <th></th>
                </thead>  
                <tbody>
                {tableData.map((rowData, index)=>{
                    return (
                        <tr key={index}>
                            <td>{rowData.number}</td>
                            <td>{rowData.category}</td>
                            {/* <td><img src={require(rowData.image)} />s</td> */}
                            <td><img src={`${process.env.PUBLIC_URL}/${rowData.image}`} className="product_image" /></td>
                            
                            <td>{rowData.discription}</td>
                            <td>{rowData.quantity}</td>
                            <td style={{padding: '0px'}}> <div className="table_icon"></div>  </td>
                        </tr>
                    );
                })}  
                    {/* <tr>
                        <td>1</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>One</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td>One</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>One</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td>One</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>One</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td>One</td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;