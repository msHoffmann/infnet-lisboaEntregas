import { Form, FormControlProps } from "react-bootstrap";
import React, { InputHTMLAttributes } from "react";
import { IMaskInput } from "react-imask";

export type FormFieldProps = {
    controlId: string
    label?: string
    error?: string
    mask?: { mask: string }[]
    onAccept?: (value: unknown) => void
  } & FormControlProps & InputHTMLAttributes<HTMLInputElement>
  // INPUT HTML = aceita required (campo obrigatório) do html por exemplo
  
  export function FormFieldView ({ controlId, label, error, mask, onAccept, ...inputProps }: FormFieldProps) {
    return (
      <Form.Group className='mb-3' controlId={controlId}>
        {label && <Form.Label className='mb-1'>{label}</Form.Label>}
        {mask ? (
          <Form.Control
            {...inputProps}
            as={IMaskInput}
            mask={mask}
            onChange={undefined}
            onAccept={onAccept}
          />
        ) : (
          <Form.Control {...inputProps} />
        )}
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>
    )
  }