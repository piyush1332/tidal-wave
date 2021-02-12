import React from 'react';
import ProductTable from './ProductTable';
import OrderInformation from './OrderInformation';

function ExecutingBlock() {
    return (
        <div>
            <div className="block_btn_holder">
                <div className="wrap_center">
                    <button>Undo Batch</button>
                    <button>Assign Suppliers</button>
                    <button>Generate PO</button>
                </div>
            </div>
            <OrderInformation />
            <ProductTable />
        </div>
    );
}

export default ExecutingBlock;