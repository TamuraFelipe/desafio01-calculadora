
import { Input } from './components/Input';
import { Button } from './components/Button';

import {
  Container,
  Content,
  Row,
  Column,
} from './styles';
import { useState } from 'react';

export const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber ] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prevNumber => `${number}${prevNumber === '0' ? '' : prevNumber}`)
  }
  const handleClearNumber = () => {
    setCurrentNumber('0')
  }
  const handleCalculate = (operation) => {

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={ () => handleAddNumber('x')}/>
          <Button label="CE" onClick={handleClearNumber}/>
          <Button label="C" onClick={handleClearNumber}/>
          <Button label="/" onClick={ () => handleAddNumber('/')}/>
        </Row>
        <Row>
          <Button label="7" onClick={ () => handleAddNumber('7')}/>
          <Button label="8" onClick={ () => handleAddNumber('8')}/>
          <Button label="9" onClick={ () => handleAddNumber('9')}/>
          <Button label="X" onClick={ () => handleAddNumber('')}/>
        </Row>
        <Row>
          <Button label="4" onClick={ () => handleAddNumber('4')}/>
          <Button label="5" onClick={ () => handleAddNumber('5')}/>
          <Button label="6" onClick={ () => handleAddNumber('6')}/>
          <Button label="-" onClick={ () => handleAddNumber('')}/>
        </Row>
        <Row>
          <Button label="1" onClick={ () => handleAddNumber('1')}/>
          <Button label="2" onClick={ () => handleAddNumber('2')}/>
          <Button label="3" onClick={ () => handleAddNumber('3')}/>
          <Button label="+" onClick={ () => handleCalculate('')}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={ () => handleAddNumber('+/-')}/>
          <Button label="0" onClick={ () => handleAddNumber('0')}/>
          <Button label="." onClick={ () => handleAddNumber('.')}/>
          <Button label="=" onClick={ () => handleAddNumber('=')}/>
        </Row>
      </Content>
    </Container>
  );
}
