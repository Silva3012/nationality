import React from 'react';

function PredictionResult({ data }) {
    //If data is null, return null
    if (!data) {
        return null
    }

    return (
        <div className="mt-3">
            <h2>Prediction Result:</h2>
            <p>Country: {data.country_id}</p>
            <p>Probability: {data.probability}</p>
        </div>
    );
}

export default PredictionResult;