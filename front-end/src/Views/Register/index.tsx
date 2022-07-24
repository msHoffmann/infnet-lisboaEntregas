import React from "react";
import { useFormik } from "formik";
import { Col, Row, Container, Form } from "react-bootstrap";
import { CustomButton } from "../../Components/CustomButton";
import { FormFieldView } from "../../Components/FormField";
import { Layout } from "../../Components/Layout";
import { PageTitle } from "../../Components/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { createUser } from "../../services/createUser";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth"
import { toast } from "react-toastify";
import { updateUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

type FormValues = {
    name: string,
    email: string,
    phone: string,
    password: string,
    agree: boolean
}
export function RegisterView() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Preencha o seu Nome.')
                .min(5, 'Informe pelo menos 5 caractéres.'),
            email: yup.string()
                .required('Preencha o seu E-mail.')
                .email('Preencha um E-mail válido.'),
            phone: yup.string()
                .required('Preencha o seu Telefone.'),
            password: yup.string()
                .required('Preencha a sua Senha.')
                .min(8, 'Informe pelo menos 8 caractéres.')
                .max(50, 'Informe no máximo 50 caractéres.'),
            agree: yup.boolean()
                .equals([true], 'É preciso aceitar os Termos de Uso.')


        }),
        onSubmit: async (values, { setFieldError }) => {
            try {
                const user = await createUser(values)
                dispatch(updateUser(user))
                navigate('/novo-pedido')

            } catch (error) {
                if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    setFieldError('email', 'Este E-mail já está em uso.')
                    return
                }
                toast.error('Ocorreu um erro ao cadastrar. Tente novamente.')
            }

        }
    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        // keyof = obrigada o FieldName seja uma das chaves do type FormValues
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            // Outra forma de fazer: isInvalid: formik.errors[fieldName] ? true : false
            isValid: formik.touched[fieldName] && !formik.errors[fieldName]
        }
    }
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Nova Conta</PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormFieldView
                                label="Nome:"
                                placeholder="Digite aqui o seu Nome"
                                {...getFieldProps('name')}
                            // Significa:
                            // value={formik.values.name}
                            // onChange={formik.handleChange}
                            // name='name'

                            />
                            <FormFieldView
                                type="email"
                                label="E-mail:"
                                placeholder="Digite aqui o seu E-mail"
                                {...getFieldProps('email')}
                            />
                            <FormFieldView
                                label="Telefone:"
                                placeholder="Digite aqui o seu Telefone"
                                {...getFieldProps('phone')}
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' }
                                ]}
                                onAccept={value => formik.setFieldValue('phone', value)}
                            />
                            <FormFieldView
                                label="Senha:"
                                placeholder="Digite aqui a sua Senha"
                                {...getFieldProps('password')}
                                type="password"
                            />
                            <Form.Group className="mb-3"
                                controlId="input-agree">
                                <Form.Check
                                    type="checkbox"
                                    {...getFieldProps('agree')}
                                    label={<>Eu li e aceito os <a href='/termos-de-uso' target='_blank'>Termos de Uso</a>.</>}
                                />
                                {formik.touched.agree && formik.errors.agree && (
                                    <Form.Control.Feedback type='invalid' className='d-block'>
                                        {formik.errors.agree}
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <div className="d-grid mb-3">
                                <CustomButton
                                    type="submit"
                                    loading={formik.isValidating || formik.isSubmitting}
                                    disabled={formik.isValidating || formik.isSubmitting}
                                >
                                    Criar Conta
                                </CustomButton>
                            </div>
                            <p className="text-center">Já possui Conta?<br /><Link to="/login">Entrar</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}   