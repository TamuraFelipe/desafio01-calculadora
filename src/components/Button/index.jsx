import React from 'react'

import {
  ButtonContainer,
} from './styles';

export const Button = ({label, onClick, className}) => {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      {label}
    </ButtonContainer>
  )
}
