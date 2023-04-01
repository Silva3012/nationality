import React, { useEffect } from 'react'; //importing useEffect hook
import Form from "react-bootstrap/Form"; //bootstrap for styling

function InputField({ inputRef }) {
    // useEffect hook to focus the input element on load
    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    return(
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control 
                type="text"
                placeholder="Enter name here"
                ref={inputRef}
                autoFocus
                required
            /> 
        </Form.Group>
    );
}

export default InputField;