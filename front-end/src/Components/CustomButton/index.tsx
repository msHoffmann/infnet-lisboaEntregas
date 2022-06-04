import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from "styled-components";


type Props = ButtonProps & {
    loading?: boolean,
    to?: string
}

export function CustomButton ({ children, loading, to, ...otherProps }: Props) {
    const button = (
      <ButtonStyled {...otherProps}>
        {loading && (
          <Spinner animation="border" role="status" size='sm' className='me-2'>
            <span className='visually-hidden'>Carregando...</span>
          </Spinner>
        )}
        {children}
      </ButtonStyled>
    )
    if (to) {
      return (
        <LinkContainer to={to}>
          {button}
        </LinkContainer>
      )
    }
    return button
  }
  

const ButtonStyled = styled(Button)`
    border-radius: 0;
    padding-left: 50px;
    padding-right: 50px;
    ${props => (props.variant === 'warning' || !props.variant) && `
        background-color: #FFFF00;
        border-color: #FFFF00;
        &:hover{
            background-color: #e0e09c;
            border-color: #e0e09c;
        }
    `}
    ${props => props.variant === 'outline-primary' &&`
        background-color: #FFFF00;
        border-color: #FFFF00;
        &:hover{
            background-color: #e0e09c;
            border-color: #e0e09c;
        }
    `}
`