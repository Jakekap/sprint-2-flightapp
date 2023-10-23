
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {StyledForm, TitlePassagerDetails, ImgPassagerDetails, H3PassagerDetails, ParrafoPassagerDetails, DivFormulario, LabelsPassagerDetails, ErrorsPassagerDetails, DivField, StyledField, DivFieldSelect, DivIdentify,PIdentify,DivFieldComplete,DivContact,TitleContact, BottomBooking} from './StylesDatosBooking'

import { useContext } from 'react'
import { Context } from '../../App'; 



const DatosPassagerDetails = () => {
    const {value, setValue} = useContext(Context);
    
    const nextStepSlider =()=>{
      setValue (value + 1);
       
    }

  return (
    <Formik
        initialValues={{
            name:'',
            surname: '',
            title:'', 
            birthday:'',
            nationality:'',
            pNumber:'',
            country:'',
            expiryDate:'',
            nameContact:'',
            surnameContact:'',
            titleContact:'',
            emailContact:'',
            numberContact:''
        }}
        validate={(values)=>{
            let errores ={};
            //validacion nombre
            if(!values.name)
            {
                errores.name = 'Please enter your name';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
            {
                errores.name = 'The name can only contain letters and spaces';
            }

            //validacion apellido
            if(!values.surname)
            {
                errores.surname = 'Please enter your surname';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname))
            {
                errores.surname = 'The surname can only contain letters and spaces';
                
            }

            //passport number
            if(!values.pNumber)
            {
                errores.pNumber = 'Please enter your passport number';
            }
            else if( !/^[0-9-]+$/.test(values.pNumber))
            {
                errores.pNumber = 'The passport number can only contain numbers and dashes';
            }
            //name contact
            if(!values.nameContact)
            {
                errores.nameContact = 'Please enter your name';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nameContact))
            {
                errores.nameContact = 'The name can only contain letters and spaces';
            }

            //surname contact
            if(!values.surnameContact)
            {
                errores.surnameContact = 'Please enter your surname';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surnameContact))
            {
                errores.surnameContact = 'The surname can only contain letters and spaces';
                
            }
            //email
            if(!values.emailContact)
            {
                errores.emailContact = 'Please enter your email';
            }
            else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.emailContact))
            {
                errores.emailContact = 'email can only have letters, numbers, periods and dashes';
                
            }
            
            //phone number
            if(!values.numberContact)
            {
                errores.numberContact = 'Please enter your phone number';
            }
            else if( !/^[0-9]+$/.test(values.numberContact))
            {
                errores.numberContact = 'The phone number cannot contain letters or space characters';
                
            }
            return errores;
        }}
        onSubmit={(values, {resetForm})=>{
            localStorage.setItem('passager',JSON.stringify(values));
            resetForm();
            nextStepSlider();
            console.log(values);
            
        }}
    >
        {({ errors, values, handleChange})=>(
            <StyledForm>
                <div>
                    <TitlePassagerDetails>
                        <ImgPassagerDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697571091/Sprint2React-Eflight/Frame_vt80ki.png' alt="passager" />
                        <H3PassagerDetails>Passenger details</H3PassagerDetails>
                    </TitlePassagerDetails>
                    <ParrafoPassagerDetails>Name as on ID card/passport without title and punctuation</ParrafoPassagerDetails>
                    <DivFormulario>
                        <DivField>
                            <LabelsPassagerDetails htmlFor="name">Name</LabelsPassagerDetails>
                            <StyledField type="text" id="name" name="name" value={values.name} onChange={handleChange} placeholder="Enter your name" />
                            <ErrorMessage name="name" component={()=>(<ErrorsPassagerDetails> {errors.name}</ErrorsPassagerDetails>)} />
                        </DivField>

                        <DivField>
                            <LabelsPassagerDetails htmlFor="surname">Surname</LabelsPassagerDetails>
                            <StyledField type="text" id="surname" name="surname" value={values.surname} onChange={handleChange} placeholder="Enter your surname" />
                            <ErrorMessage name="surname" component={()=>(<ErrorsPassagerDetails> {errors.surname}</ErrorsPassagerDetails>)} />
                        </DivField>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="title">Title</LabelsPassagerDetails>
                            <StyledField id='title' name="title" as="select" value={values.title} onChange={handleChange}>
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="miss">Miss</option>
                            </StyledField>
                        </DivFieldSelect>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="birthday">Birthday</LabelsPassagerDetails>
                            <StyledField  id='birthday' name="birthday" type="date"  value={values.birthday} onChange={handleChange} />
                            
                        </DivFieldSelect>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="nationality">Nationality</LabelsPassagerDetails>
                            <StyledField  id='nationality'  name="nationality" as="select" value={values.nationality} onChange={handleChange}>
                                {/*<option value="" disabled selected>Selecciona una opción</option>*/}
                                <option value="mexico">Mexico</option>
                                <option value="guatemala">Guatemala</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="colombia">Colombia</option>
                                <option value="peru">Peru</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="estados unidos">Estados Unidos</option>
                                <option value="españa">España</option>
                            </StyledField>
                        </DivFieldSelect>
                        
                    </DivFormulario>
                </div>
                <DivIdentify>
                    <TitlePassagerDetails>
                        <ImgPassagerDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697571092/Sprint2React-Eflight/Frame_dbb96o.svg' alt="identify" />
                        <H3PassagerDetails>Identify</H3PassagerDetails>
                    </TitlePassagerDetails>
                    <PIdentify>
                        Passport valid for at least 6 months from departure date is required for international travel or transit abroad <br/><br/> Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License.<br/> Avoid any mistake, because some airlines don't allow name corrections after booking.
                    </PIdentify>
                    <DivFormulario>
                        <DivFieldComplete>
                            <LabelsPassagerDetails htmlFor="pNumber">Passport number</LabelsPassagerDetails>
                            <StyledField type="number" id="pNumber" name="pNumber" value={values.pNumber} onChange={handleChange} placeholder="Enter your passport number" />
                            <ErrorMessage name="pNumber" component={()=>(<ErrorsPassagerDetails> {errors.pNumber}</ErrorsPassagerDetails>)} />
                        </DivFieldComplete>

                        <DivField>
                            <LabelsPassagerDetails htmlFor="country">Country of Issue</LabelsPassagerDetails>
                            <StyledField id='country' name="country" as="select" value={values.country} onChange={handleChange}>
                                <option value="mexico">Mexico</option>
                                <option value="guatemala">Guatemala</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="colombia">Colombia</option>
                                <option value="peru">Peru</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="estados unidos">Estados Unidos</option>
                                <option value="españa">España</option>
                            </StyledField>
                        </DivField>

                        <DivField>
                            <LabelsPassagerDetails htmlFor="expiryDate">Passport Expiry Date</LabelsPassagerDetails>
                            <StyledField  id='expiryDate' name="expiryDate" type="date"  value={values.expiryDate} onChange={handleChange} />
                            
                        </DivField>    
                    </DivFormulario>
                </DivIdentify>

                <DivContact>
                    <TitleContact>
                        <ImgPassagerDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697571091/Sprint2React-Eflight/Contact_ybghi4.svg' alt="contact" />
                        <H3PassagerDetails>Contact details</H3PassagerDetails>
                    </TitleContact>
                    <DivFormulario>
                        <DivField>
                            <LabelsPassagerDetails htmlFor="nameContact">Name</LabelsPassagerDetails>
                            <StyledField type="text" id="nameContact" name="nameContact" value={values.nameContact} onChange={handleChange} placeholder="Enter your name " />
                            <ErrorMessage name="nameContact" component={()=>(<ErrorsPassagerDetails> {errors.nameContact}</ErrorsPassagerDetails>)} />
                        </DivField>

                        <DivField>
                            <LabelsPassagerDetails htmlFor="surnameContact">Surname</LabelsPassagerDetails>
                            <StyledField type="text" id="surnameContact" name="surnameContact" value={values.surnameContact} onChange={handleChange} placeholder="Enter your surname " />
                            <ErrorMessage name="surnameContact" component={()=>(<ErrorsPassagerDetails> {errors.surnameContact}</ErrorsPassagerDetails>)} />
                        </DivField>
                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="titleContact">Title</LabelsPassagerDetails>
                            <StyledField id='titleContact' name="titleContact" as="select" value={values.titleContact} onChange={handleChange}>
                                <option value="mrContact1">Mr</option>
                                <option value="mrsContact2">Mrs</option>
                                <option value="missContact3">Miss</option>
                            </StyledField>
                        </DivFieldSelect>
                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="emailContact">Email</LabelsPassagerDetails>
                            <StyledField type="email" id="emailContact" name="emailContact" value={values.emailContact} onChange={handleChange} placeholder="Enter your email " />
                            <ErrorMessage name="emailContact" component={()=>(<ErrorsPassagerDetails> {errors.emailContact}</ErrorsPassagerDetails>)} />
                        </DivFieldSelect>
                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="numberContact">Phone number</LabelsPassagerDetails>
                            <StyledField type="number" id="numberContact" name="numberContact" value={values.numberContact} onChange={handleChange} placeholder="Enter your email " />
                            <ErrorMessage name="numberContact" component={()=>(<ErrorsPassagerDetails> {errors.numberContact}</ErrorsPassagerDetails>)} />
                        </DivFieldSelect>
                           
                    </DivFormulario>
                </DivContact>
                <BottomBooking type='submit'>Submit</BottomBooking>
            </StyledForm>
        )}
    </Formik>
  )
}

export default DatosPassagerDetails