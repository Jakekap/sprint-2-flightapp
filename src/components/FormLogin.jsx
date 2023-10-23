import React, { useState, useContext } from 'react'
import useForm from '../hooks/useForm'
import { AppContext } from '../App';
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import { getUserByEmailAndPassword } from '../services/useService';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, border } from '@chakra-ui/react';
import { object, string } from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let schema = object({
  email: string("Por favor ingrese todo en texto").required("Este campo es obligatorio"),
  contrasenia: string("Por favor ingrese todo en texto").required("Este campo es obligatorio")
});
const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://s.latamairlines.com/images/auth0/login/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  box-shadow: rgba(16, 0, 79, 0.12) 0px 0.125rem 0.7rem;
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 45vh;
  }
`
const DivLogo = styled.div`
  width: 100%;
  display: flex;
  Flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  @media screen and (max-width: 500px) {
  }
`
const LogoText = styled.h1`

  color: #6C6CFE;
  font-family: Sarabun;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px; /* 150% */
`
const Form = styled.form`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 40%;
    justify-content: start;
  }
`
const TextLogin = styled.h2`
  color: #171A1F;
  font-family: scss;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`

const DivButtons = styled.div`
  display: flex;
  width: 85%;
  height: 40%;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 500px) {
     width: 80%;
     height: 30%;
  }
`
const LinkRegister = styled(Link)`
      width: 100%;
`
const DivFooter = styled.div`
    display: flex;
    width: 90%;
    height: 20%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px) {
      display: flex;
      width: 70%;
      height: 30%;
      justify-content: center;
      align-items: center;
      
    }
`
const LinkRecuperar = styled(Link)`
    color: #6C6CFE;
    &:hover{
      cursor: pointer;
    }
`
const ButtonContinuar = styled(Button)`
border-radius: 23px;
background: #11D295;
color: #FFFFFF;
`
const ButtonCrear = styled(Button)`
border-radius: 23px;
background: #11D295;
color: #FFFFFF;
`
const Imagen = styled.img`
  width: 35px;
  height: 35px;
`

const FormLogin = () => {
  const { dataForm, handleChangeInputs } = useForm();
  const { userLogged: { userLoggedDispatch } } = useContext(AppContext);
  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  const formik = useFormik({
    initialValues: {
      email: '',
      contrasenia: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      const user = await getUserByEmailAndPassword(formik.values.email, formik.values.contrasenia);
      console.log(user);
      if (user) {
        Swal.fire(
          'Excelente!',
          'Has iniciado sesión exitosamente!',
          'success'
        )
        const action = {
          type: 'LOGIN',
          payload: {
            isAuthenticated: true,
            user: user
          }
        }
        userLoggedDispatch(action);    

      } else {
        Swal.fire(
          'Oops!',
          'Por favor verifique sus credenciales!',
          'error'
        )
      }
    },
  });
  return (
    <Body>
      <Section>
        <DivLogo>
          <Imagen src="./Image 1.png" alt="" />
          <LogoText>E-flight</LogoText>
        </DivLogo>
        <TextLogin>Ingresa tus datos para iniciar sesion</TextLogin>
        <Form onSubmit={formik.handleSubmit}>

          <FormControl width={'80%'} isInvalid={formik.errors.email}>
            <FormLabel>Email</FormLabel>
            <Input width={'100%'} border={'1px'} borderRadius={'15px'} type='text' name='email' onChange={formik.handleChange} value={formik.values.email} placeholder={' Email'} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl width={'80%'} isInvalid={formik.errors.contrasenia}>
            <FormLabel>Contraseña</FormLabel>
            <Input width={'100%'} border={'1px'} borderRadius={'15px'} type='password' name='contrasenia' onChange={formik.handleChange} value={formik.values.contrasenia} placeholder={' Contraseña'} />
            <FormErrorMessage>{formik.errors.contrasenia}</FormErrorMessage>
          </FormControl>

          <DivButtons>
            <ButtonContinuar type="submit" >Continuar</ButtonContinuar>
            <LinkRegister to={'/register'}><ButtonCrear type="submit" width={'100%'}>Crear Cuentarear</ButtonCrear></LinkRegister>
          </DivButtons>
        </Form>
        <DivFooter>
          <p>¿No puedes ingresar a tu cuenta? <LinkRecuperar to={'/*'} >Recupera el acceso</LinkRecuperar></p>
        </DivFooter>
      </Section>
    </Body>
  )
}

export default FormLogin