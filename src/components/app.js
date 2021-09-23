import { h } from 'preact';

// import {useDispatch, useSelector} from 'react-redux'
// // Bootstrap components for UI
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

console.log('is this even running?');

const App = () => {
	// return <h1>App</h1>
  
  return <Accordion defaultActiveKey="0">
    <Card className="border-0">
      <Card.Header className="bg-white">
        <Accordion.Toggle as="button" className="unstyled text-left" style={{width: '100%'}} eventKey="0">
          Apply Discount Code
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Discount or Gift Card code"
              value='0'
              onChange={() => console.log(event.target.value)}
              onKeyDown={(event) => event.keyCode === 13 && console.log('key entered')}
            />
            <InputGroup.Append>
              <Button
                type="button"
                className="text-white"
                onClick={() => console.log('submitted')}
              >
                Apply
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
}

export default App