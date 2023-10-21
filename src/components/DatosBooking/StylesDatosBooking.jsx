import styled from "styled-components";
import { Form, Field} from 'formik';

/**PASSAGER DETAILS */
export const StyledForm = styled(Form)`
    background-color:white;
    padding: 5% 8%;
`;

export const TitlePassagerDetails = styled.div`
  display: flex;  
  align-items: center;
`;
export const ImgPassagerDetails = styled.img`
  width: 24px;
  height: 24px;  
`;
export const H3PassagerDetails = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    color: #6C6CFE;
    font-size: 20px;
    font-family:'Sarabun', sans-serif;
    font-weight: 600;
    line-height: 30px;
    word-wrap: break-word;
`;
export const ParrafoPassagerDetails = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    color: #565E6C;
    font-size: 14px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
    margin-bottom:2%;
`;

export const DivFormulario= styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const LabelsPassagerDetails = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@700&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: #424955;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    
`;

export const ErrorsPassagerDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: red;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    word-wrap: break-word;
  
`;
export const DivField =styled.div`
    display: flex;
    flex-direction: column;
    width:47%;
    margin-right: 3%;
    margin-bottom: 2%;
    @media screen and (max-width: 570px) 
    {
        width:95%;
    }

`;
export const DivFieldSelect =styled.div`
    display: flex;
    flex-direction: column;
    width:31%;
    margin-right: 2%;
    @media screen and (max-width: 570px) 
    {
        width:95%;
    }
`;
export const DivFieldComplete =styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-right: 2%;
    margin-bottom: 2%;
`;
export const StyledField= styled(Field)`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    background-color:#F2F3F5;
    font-size: 14px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
    border-radius:10px;
    padding-left: 2%;
    height:30px;
    border:none;
`;

/**IDENTIFY */
export const DivIdentify = styled.div`
    margin-top:2%;
`;

export const PIdentify = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
    width:98%; 
    background-color:#EFEFFE;
    color:#6C6CFE;
    font-size: 14px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 500;
    line-height: 22px;
    word-wrap: break-word;
    padding: 2%;
    margin-top:2%;
    margin-bottom:2%;
    border-radius:10px;
    
`;
//div contact
export const DivContact = styled.div`
    margin-top:2%;
`;
export const TitleContact = styled.div`
    display: flex;  
    margin-bottom:2%;
`;

//Boton booking
export const BottomBooking = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    width:97%;
    color: #FEFEFE;
    font-size: 16px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
    background-color: #11D295;
    margin-top:7%;
    margin-bottom:7%;
    height:44px;
    border-radius:5px;
    border:none;
`;