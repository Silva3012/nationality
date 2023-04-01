import React, { useState, useRef } from 'react';
import InputField from './InputField';
import FetchButton from './FetchButton';
import PredictionResult from './PredictionResult';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function App() {
  //State to hold the data fetched from the API
  const [data, setData] = useState(null);  

  //Ref to access the input element and focus it on load
  const inputRef = useRef(null);

  //Function to fetch the country data from the API
  const fetchCountry = async (name) => {
    try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        const json = await response.json();
        setData(json.country[0]);
        console.log(json); // log the fetched data
    } catch (error) {
        console.log(error); // log any errors
    }
    
  };

  //Function to handle the client event of the button
  const handleClick = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const name = inputRef.current.value;
    fetchCountry(name);
  }

  return (
    <Container className="mt-5">
        <Row className="justify-content-center">
            <Col lg={6}>
            <Card>
                <Card.Body>
                    {/* The InputField component is wrapped in a form */}
                    <form>
                        <InputField inputRef={inputRef} />
                        <FetchButton onClick={handleClick} />
                    </form>
                    {/* The PredictionResult component is only displayed if data is not null */}
                    {data && <PredictionResult data={data} />}
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
