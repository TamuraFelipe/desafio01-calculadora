/* eslint-disable no-eval */
import { Input } from './components/Input';
import { Button } from './components/Button';

import {
  Container,
  Content,
  KeyPadsContainer
} from './styles';
import { useState } from 'react';

export const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  
  const handleAddNumber = (number) => {
    setCurrentNumber(currentNumber.concat(number))
  }
  const handleClearNumber = () => {
    setCurrentNumber('')
  }
  
  const handleCalculate = () => {
    try {
      setCurrentNumber(eval(currentNumber).toString());
    } catch (error) {
      setCurrentNumber('Error');
    }
  };

  const handleAddition = () => {
    setCurrentNumber(currentNumber.concat('+'));
  };
  const handleSubtraction = () => {
    setCurrentNumber(currentNumber.concat('-'));
  };
  const handleMultiplication = () => {
    setCurrentNumber(currentNumber.concat('*'));
  };
  const handleDivision = () => {
    setCurrentNumber(currentNumber.concat('/'));
  };

  return (
    <Container>
        <Content>
          {/* Visor da calculadora */}
          <Input value={currentNumber}/>
          {/* Container dos botões */}        
          <KeyPadsContainer>
            {/* Botões das operações */}
            <Button label="+" onClick={handleAddition}/>
            <Button label="&minus;" onClick={handleSubtraction}/>
            <Button label="&times;" onClick={handleMultiplication}/>
            <Button label="&divide;" onClick={handleDivision}/>
            {/* Botões de 7 à 9 */}        
            <Button label="7" onClick={ () => handleAddNumber('7')}/>
            <Button label="8" onClick={ () => handleAddNumber('8')}/>
            <Button label="9" onClick={ () => handleAddNumber('9')}/>
            {/* Botões de 4 à 6 */}
            <Button label="4" onClick={ () => handleAddNumber('4')}/>
            <Button label="5" onClick={ () => handleAddNumber('5')}/>
            <Button label="6" onClick={ () => handleAddNumber('6')}/>
            {/* Botões de 1 à 3 */}
            <Button label="1" onClick={ () => handleAddNumber('1')}/>
            <Button label="2" onClick={ () => handleAddNumber('2')}/>
            <Button label="3" onClick={ () => handleAddNumber('3')}/>
            {/* Botão 0 (zero), .(ponto) e limpar visor */}
            <Button label="0" onClick={ () => handleAddNumber('0')}/>
            <Button label="." onClick={ () => handleAddNumber('.')}/>
            <Button label="C" onClick={handleClearNumber}/>
            {/* Botão de = (igual) */}
            <Button label="=" onClick={handleCalculate} className='equal'/>
          </KeyPadsContainer>
      </Content>
    </Container>
  );
}
