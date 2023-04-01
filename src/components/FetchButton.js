import React from 'react';
import Button from 'react-bootstrap/Button';

function FetchButton({ onClick }) {
    return(
        <Button variant='primary' type='submit' onClick={onClick} style={
            {marginTop: "10px"}}>
            Predict nationality
        </Button>
    );
}

export default FetchButton;