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
    border-radius: 100px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #006600;
    ${props => (props.variant === 'warning' || !props.variant) && `
        background-color: rgba(0, 102, 0, 1);
        border-color: rgba(0, 102, 0, 1);
        &:hover{
            background-color:rgba(9, 143, 9, 1);
            border-color:rgba(9, 143, 9, 1);
        }
    `}
    ${props => props.variant === 'outline-primary' &&`
        background-color: rgba(9, 143, 9, 1);
        border-color: rgba(0, 102, 0, 1);
        &:hover{
            background-color: rgba(9, 143, 9, 1);
            border-color: rgba(9, 143, 9, 1);
        }
    `}
`