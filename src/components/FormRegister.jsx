import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { object, string } from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { postRegisterUser } from "../services/useService";
import Swal from "sweetalert2";

let schema = object({
  nombre: string("Por favor ingrese todo en texto").required(
    "Este campo es obligatorio"
  ),
  tipodoc: string("Por favor ingrese todo en texto").required(
    "Este campo es obligatorio"
  ),
  email: string()
    .email("Por favor ingrese un email valido")
    .required("Este campo es obligatorio"),
  contrasenia: string("Por favor ingrese todo en texto").required(
    "Este campo es obligatorio"
  ),
  genero: string("Por favor ingrese todo en texto").required(
    "Este campo es obligatorio"
  ),
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
`;
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
`;
const H1 = styled.h1`
  color: #171a1f;
  font-family: Sarabun;
  font-size: 45px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const H2 = styled.h2`
  color: #171a1f;
  font-family: Sarabun;
  font-size: 30px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  color: #808080;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;
const DivButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const LinkInicioSesion = styled(Link)`
  color: #6c6cfe;
`;
const ButtonCrearCuenta = styled(Button)`
  background: #11d295;
  border-radius: 15px;
  color: #ffffff;
  width: 80%;
`;
const FormRegister = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      tipodoc: "",
      email: "",
      contrasenia: "",
      genero: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      const data = await postRegisterUser(
        formik.values.nombre,
        formik.values.tipodoc,
        formik.values.email,
        formik.values.contrasenia,
        formik.values.genero
      );
      if (data) {
        Swal.fire("Excelente!", "Te has registrado  exitosamente!", "success");
      } else {
        Swal.fire("error", "Oops...", "Algo salio mal!");
      }
    },
  });

  return (
    <Body>
      <Section>
        <H1>Crear Cuenta</H1>
        <P>
          Si ya eres parte de E-flight, no necesitas crear una cuenta nueva.{" "}
          <LinkInicioSesion to={"/Login"}>Inicia sesión</LinkInicioSesion> con
          tus datos de siempre.
        </P>
        <H2>Datos Personales</H2>
        <P>
          Ingresa tus datos tal como aparecen en tu documento de identidad. Los
          usaremos cuando compres tus pasajes.
        </P>
        <Form onSubmit={formik.handleSubmit}>
          <FormControl width={"80%"} isInvalid={formik.errors.nombre}>
            <FormLabel>Nombre</FormLabel>
            <Input
              width={"80%"}
              border={"1px"}
              borderRadius={"15px"}
              type="text"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              placeholder={"Ingresa tu nombre"}
            />
            <FormErrorMessage>{formik.errors.nombre}</FormErrorMessage>
          </FormControl>
          <FormControl width={"80%"} isInvalid={formik.errors.tipodoc}>
            <FormLabel>Tipo Documento</FormLabel>
            <Select
              width={"100%"}
              border={"1px"}
              borderRadius={"15px"}
              name="tipodoc"
              onChange={formik.handleChange}
              value={formik.values.tipodoc}
              placeholder="Select option"
            >
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="PP">PP</option>
            </Select>
            <FormErrorMessage>{formik.errors.tipodoc}</FormErrorMessage>
          </FormControl>
          <FormControl width={"80%"} isInvalid={formik.errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              width={"80%"}
              border={"1px"}
              borderRadius={"15px"}
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder={"Email"}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl width={"80%"} isInvalid={formik.errors.contrasenia}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              width={"80%"}
              border={"1px"}
              borderRadius={"15px"}
              type="password"
              name="contrasenia"
              onChange={formik.handleChange}
              value={formik.values.contrasenia}
              placeholder={"Ingresa tu contraseña"}
            />
            <FormErrorMessage>{formik.errors.contrasenia}</FormErrorMessage>
          </FormControl>
          <FormControl width={"80%"} isInvalid={formik.errors.genero}>
            <FormLabel>Genero</FormLabel>
            <Select
              border={"1px"}
              borderRadius={"15px"}
              name="genero"
              onChange={formik.handleChange}
              value={formik.values.genero}
              placeholder="Select option"
            >
              <option value="f">F</option>
              <option value="m">M</option>
              <option value="otro">Otro</option>
            </Select>
            <FormErrorMessage>{formik.errors.genero}</FormErrorMessage>
          </FormControl>
          <DivButtons>
            <ButtonCrearCuenta
              colorScheme="green"
              width={["100%", "100%"]}
              type="submit"
            >
              Crear Cuenta
            </ButtonCrearCuenta>
          </DivButtons>
        </Form>
      </Section>
    </Body>
  );
};

export default FormRegister;
