import React, {useState} from 'react'
import { useFormik } from "formik";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react';
import { object, string} from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let schema = object({
    nombre: string("Por favor ingrese todo en texto").required("Este campo es obligatorio"),
    tipodoc: string("Por favor ingrese todo en texto").required("Este campo es obligatorio"), 
    email: string("Por favor ingrese todo en texto").required("Este campo es obligatorio"),
    contrasenia: string("Por favor ingrese todo en texto").required("Este campo es obligatorio"),
    genero: string("Por favor ingrese todo en texto").required("Este campo es obligatorio")
  });

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px) {

    }
    
`
const Section = styled.section`
  width: 40%;
  height: 100hv;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 80hv;
  }
`
const H1 = styled.h1`
    color: #171A1F;
    font-family: Sarabun;
    font-size: 45px;
`
const H2 = styled.h2`
color: #171A1F;
font-family: Sarabun;
font-size: 30px;
`
const P = styled.p`
    color: #808080;
`
const Form = styled.form`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 500px) {
        margin-top: 0;
    }
`
const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const LinkInicioSesion = styled(Link)`
    color: #6C6CFE;
`
const FormRegister = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
    const formik = useFormik({
      initialValues: {
        nombre: '',
        tipodoc: '',
        email: '',
        contrasenia: '',
        genero: ''
      },
      validationSchema: schema,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <Body>
      <Section>
        <H1>Crear Cuenta</H1>
        <P>Si ya eres parte de E-flight, no necesitas crear una cuenta nueva. <LinkInicioSesion to={'/Login'}>Inicia sesión</LinkInicioSesion> con tus datos de siempre.</P>
        <H2>Datos Personales</H2>
        <P>Ingresa tus datos tal como aparecen en tu documento de identidad. Los usaremos cuando compres tus pasajes.</P>
        <Form onSubmit={formik.handleSubmit} >
            <FormControl isInvalid={formik.errors.nombre}>
                <FormLabel>Nombre</FormLabel>
                <Input type='text' name='nombre' onChange={formik.handleChange} value={formik.values.nombre} placeholder={'Ingresa tu nombre'} />
                <FormErrorMessage>{formik.errors.nombre}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.tipodoc}>
                <FormLabel>Tipo Documento</FormLabel>
                  <Select name='tipodoc' onChange={formik.handleChange} value={formik.values.tipodoc}   placeholder='Select option'>
                    <option value='CC'>CC</option>
                    <option value='TI'>TI</option>
                    <option value='PP'>PP</option>
                  </Select>
                <FormErrorMessage>{formik.errors.tipodoc}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} placeholder={'Email'} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.contrasenia}>
                <FormLabel>Contraseña</FormLabel>
                <Input type='password' name='contrasenia' onChange={formik.handleChange} value={formik.values.contrasenia} placeholder={'Ingresa tu contraseña'} />
                <FormErrorMessage>{formik.errors.contrasenia}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.genero}>
                <FormLabel>Genero</FormLabel>
                <Select name='genero' onChange={formik.handleChange} value={formik.values.genero} placeholder='Select option'>
                  <option value='f' >F</option>
                  <option value='m'>M</option>
                  <option value='otro'>Otro</option>
                </Select>
                <FormErrorMessage>{formik.errors.genero}</FormErrorMessage>
            </FormControl>
            <DivButtons>
                <Button width={['100%','100%']} type="submit">Crear Cuenta</Button>
            </DivButtons>
        </Form>
      </Section>
    </Body>
  )
}

export default FormRegister
