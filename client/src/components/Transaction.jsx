import React from 'react';

export default function Transaction({ transaction }) {

    return (
        <div className='transaction'>
            <div className="transaction-details">
                <h2>
                    {transaction.title }
                </h2>
                <h5>
                    { transaction.description }
                </h5>
            </div>
            <div className="transaction-price">
                { transaction.price }
            </div>
        </div>
    )
}