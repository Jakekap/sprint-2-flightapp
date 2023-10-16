import React, { useState } from 'react'
import { useFormik } from "formik";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, border } from '@chakra-ui/react';
import { object, string} from 'yup';
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
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: rgba(16, 0, 79, 0.12) 0px 0.125rem 0.7rem;
`
const DivLogo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`
const LogoText = styled.h1`
  color: #6C6CFE;
  font-family: Sarabun;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`
const Form = styled.form`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  gap: 10px;
`
const TextLogin = styled.h2`
  color: #171A1F;
  font-family: scss;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
`
const SubTextLogin = styled.p`
  color: #171A1F;
  font-family: Sarabun;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px; /* 150% */
`

const DivButtons = styled.div`
  display: flex;
  width: 85%;
  height: 50%;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
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
    border-top: 2px solid #E5E5E5;
`  
const LinkRecuperar = styled(Link)`
    color: #6C6CFE;
    &:hover{
      cursor: pointer;
    }
`

const Login = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  const formik = useFormik({
    initialValues: {
      email: '',
      contrasenia: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <Body>
        <Section>
          <DivLogo>
            <img src="/Image 1.png" alt="" />
            <LogoText>E-flight</LogoText>
          </DivLogo>
              <TextLogin>Ingresa tus datos para iniciar sescion</TextLogin>
              <Form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} placeholder={'Email'} />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.contrasenia}>
                  <FormLabel>Contraseña</FormLabel>
                  <Input type='password' name='contrasenia' onChange={formik.handleChange} value={formik.values.contrasenia} placeholder={'Contraseña'} />
                  <FormErrorMessage>{formik.errors.contrasenia}</FormErrorMessage>
                </FormControl>  
                <DivButtons>
                  <Button colorScheme='whatsapp' type="submit" width={'100%'}>Continuar</Button>
                  <LinkRegister to={'/register'}><Button colorScheme='green' type="submit" width={'100%'}>Crear Cuentarear</Button></LinkRegister>
                </DivButtons>
            </Form>
            <DivFooter>
                  <p>¿No puedes ingresar a tu cuenta? <LinkRecuperar to={'/*'} >Recupera el acceso</LinkRecuperar></p>
            </DivFooter>
        </Section>
      </Body>
  )
}

export default Login