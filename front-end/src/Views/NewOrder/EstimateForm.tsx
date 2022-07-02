import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CustomButton } from '../../Components/CustomButton';
import { AutoCompleteField } from "../../Components/AutoCompleteField";
import { Address } from "../../Components/entities/Address";
import { FormFieldView } from "../../Components/FormField";
import * as yup from 'yup';
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEstimate, selectCurrentEstimate } from "../../store/slices/EstimateSlice";

type FormValues = {
  pickupAddress: Address | null
  deliveryAddress: Address | null
  comments: string
}

export function EstimateForm () {
  const dispatch = useDispatch()
  const currentEstimate = useSelector(selectCurrentEstimate)
  const formik = useFormik<FormValues>({
    initialValues: {
      pickupAddress: currentEstimate?.pickupAddress || null,
      deliveryAddress: currentEstimate?.deliveryAddress || null,
      comments: currentEstimate?.comments || '' 
    },
    validationSchema: yup.object().shape({
      pickupAddress: yup.object()
        .typeError('Selecione um endereço na lista.'),
      deliveryAddress: yup.object() 
        .typeError('Selecione um endereço na lista.'),
      comments: yup.string()
        .required('Informe as instruções.')
    }),
    onSubmit: async (values) => {
      const estimate = await createEstimate(values as NewEstimateInput)
      dispatch(setCurrentEstimate(estimate))
    }
  })
  const getFieldProps = (fieldName: keyof FormValues) => {
    return {
      ...formik.getFieldProps(fieldName),
      controlId: `input-${fieldName}`,
      error: formik.errors[fieldName],
      isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
      isValid: formik.touched[fieldName] && !formik.errors[fieldName]
    }
  }
  return (
    <Form onSubmit={formik.handleSubmit}>
      <AutoCompleteField
        {...getFieldProps('pickupAddress')}
        label="Endereço de Retirada"
        placeholder="Informe o Endereço completo"
        onChange={(address) => formik.setFieldValue('pickupAddress', 'address')}
      />
      <AutoCompleteField
        {...getFieldProps('deliveryAddress')}
        label="Endereço de Entrega"
        placeholder="Informe o Endereço completo"
        onChange={(address) => formik.setFieldValue('deliveryAddress', 'address')}
      />
      <FormFieldView
        {...getFieldProps('comments')}
        label="Instruções para Estafeta"
        placeholder="Descreva mais informações importantes sobre a sua entrega."
        as='textarea'
      />
      <div className="d-grid d-md-block">
        <CustomButton
          type='submit'
          loading={formik.isValidating || formik.isSubmitting}
          disabled={formik.isValidating || formik.isSubmitting}
        >Calcular preço</CustomButton>
      </div>
    </Form>
  )
}