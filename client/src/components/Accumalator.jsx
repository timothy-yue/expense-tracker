import React from 'react';

export default function Accumalator({ total }) {
    return(
        <div className="accumalator">
            <h2 className="total">
                { total }
            </h2>
        </div>
    )
}