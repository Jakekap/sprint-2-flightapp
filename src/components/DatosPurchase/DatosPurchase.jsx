import { Formik, ErrorMessage } from "formik";
import {
  BottomBooking,
  DivField,
  DivFieldComplete,
  DivFormulario,
  DivTargets,
  Errors,
  H3Final,
  H3Payment,
  ImgPayment,
  ImgTargeta,
  Labels,
  SpanH3,
  StyledField,
  StyledForm,
  TitlePayment,
} from "./StylesPurchase";

import { useContext } from "react";
import { Context } from "../../App";

const DatosPurchase = () => {
  const { value, setValue } = useContext(Context);

  const nextStepSlider = () => {
    setValue(value + 1);
  };

  return (
    <Formik
      initialValues={{
        nameOncard: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        address: "",
        nationality: "",
        zipPostal: "",
      }}
      validate={(values) => {
        let errores = {};

        //validacion name on card
        if (!values.nameOncard) {
          errores.nameOncard = "Please enter your name on card";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nameOncard)) {
          errores.nameOncard =
            "The name on card can only contain letters and spaces";
        }
        //validacion card number
        if (!values.cardNumber) {
          errores.cardNumber = "Please enter your card number";
        } else if (!/^[0-9-]+$/.test(values.cardNumber)) {
          errores.cardNumber =
            "The card number can only contain numbers and dashes";
        }
        //validacion cvv
        if (!values.cvv) {
          errores.cvv = "Please enter your cvv";
        } else if (!/^[0-9-]+$/.test(values.cvv)) {
          errores.cvv = "The cvv can only contain numbers";
        }
        //validacion address
        if (!values.address) {
          errores.address = "Please enter your address";
        }
        //validacion zipPostal
        if (!values.zipPostal) {
          errores.zipPostal = "Please enter your zip/postal code";
        } else if (!/^[0-9-]+$/.test(values.zipPostal)) {
          errores.zipPostal =
            "The zip/postal code can only contain numbers and dashes";
        }

        return errores;
      }}
      onSubmit={(values, { resetForm }) => {
        const dataPassager = JSON.parse(localStorage.getItem("passager"));
        const data = Object.assign({}, dataPassager, values);
        localStorage.setItem("passager", JSON.stringify(data));
        nextStepSlider();
        resetForm();
        console.log(values);
      }}
    >
      {({ errors, values, handleChange }) => (
        <StyledForm>
          <div>
            <TitlePayment>
              <ImgPayment
                src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697660991/Sprint2React-Eflight/payment_k2kjux.svg"
                alt="ImgPaymente"
              />
              <H3Payment>Payment method</H3Payment>
            </TitlePayment>

            <TitlePayment>
              <DivTargets>
                <Labels>
                  {" "}
                  <StyledField
                    type="radio"
                    name="visaMasterAmex"
                    value="visaMasterAmex"
                  />{" "}
                </Labels>
                <ImgTargeta
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697678032/Sprint2React-Eflight/visa_iflfdo.svg"
                  alt="Imgvisa"
                />
                <ImgTargeta
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697678032/Sprint2React-Eflight/master_pufscm.svg"
                  alt="ImgMaster"
                />
                <ImgTargeta
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697678032/Sprint2React-Eflight/amex_rktet5.svg"
                  alt="ImgAmer"
                />
              </DivTargets>

              <DivTargets>
                <Labels>
                  {" "}
                  <StyledField type="radio" name="paypal" value="paypal" />{" "}
                </Labels>
                <ImgTargeta
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697678032/Sprint2React-Eflight/paypal_ubcue2.svg"
                  alt="ImgPaypal"
                />
              </DivTargets>
            </TitlePayment>

            <DivFormulario>
              <DivField>
                <Labels htmlFor="nameOncard">Name on card</Labels>
                <StyledField
                  type="text"
                  id="nameOncard"
                  name="nameOncard"
                  value={values.nameOncard}
                  onChange={handleChange}
                  placeholder="Enter your name on card"
                />
                <ErrorMessage
                  name="nameOncard"
                  component={() => <Errors> {errors.nameOncard}</Errors>}
                />
              </DivField>

              <DivField>
                <Labels htmlFor="cardNumber">Card number</Labels>
                <StyledField
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={handleChange}
                  placeholder="Enter your card number"
                />
                <ErrorMessage
                  name="cardNumber"
                  component={() => <Errors> {errors.cardNumber}</Errors>}
                />
              </DivField>

              <DivField>
                <Labels htmlFor="expirationDate">Expiration date</Labels>
                <StyledField
                  id="expirationDate"
                  name="expirationDate"
                  type="date"
                  value={values.expirationDate}
                  onChange={handleChange}
                />
              </DivField>

              <DivField>
                <Labels htmlFor="cvv">CVV</Labels>
                <StyledField
                  type="number"
                  id="cvv"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleChange}
                  placeholder="Enter your cvv"
                />
                <ErrorMessage
                  name="cvv"
                  component={() => <Errors> {errors.cvv}</Errors>}
                />
              </DivField>

              <TitlePayment>
                <Labels>
                  {" "}
                  <StyledField
                    type="radio"
                    name="sameAddress"
                    value="false"
                  />{" "}
                  Use same address as billing info{" "}
                </Labels>
              </TitlePayment>

              <DivFieldComplete>
                <Labels htmlFor="address">Address</Labels>
                <StyledField
                  type="text"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
                <ErrorMessage
                  name="address"
                  component={() => <Errors> {errors.address}</Errors>}
                />
              </DivFieldComplete>

              <DivField>
                <Labels htmlFor="zipPostal">Zip/Postal code</Labels>
                <StyledField
                  type="number"
                  id="zipPostal"
                  name="zipPostal"
                  value={values.zipPostal}
                  onChange={handleChange}
                  placeholder="Enter your zip/postal code"
                />
                <ErrorMessage
                  name="zipPostal"
                  component={() => <Errors> {errors.zipPostal}</Errors>}
                />
              </DivField>

              <DivField>
                <Labels htmlFor="nationality">Nationality</Labels>
                <StyledField
                  id="nationality"
                  name="nationality"
                  as="select"
                  value={values.nationality}
                  onChange={handleChange}
                >
                  {/*<option value="" disabled selected>Selecciona una opción</option>*/}
                  <option value="colombia">Colombia</option>
                  <option value="peru">Peru</option>
                  <option value="ecuador">Ecuador</option>
                </StyledField>
              </DivField>
              <H3Final>
                By selecting the button below, I agree to the{" "}
                <SpanH3>
                  Property Rules, Terms and Conditions, and Privacy Policy
                </SpanH3>
              </H3Final>
            </DivFormulario>
          </div>

          <BottomBooking type="submit">Submit</BottomBooking>
        </StyledForm>
      )}
    </Formik>
  );
};

export default DatosPurchase;
