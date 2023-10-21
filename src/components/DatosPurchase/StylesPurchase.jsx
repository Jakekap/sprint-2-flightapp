import styled from "styled-components";
import { Form, Field} from 'formik';

/**Payment */
export const StyledForm = styled(Form)`
    background-color:white;
    padding: 5% 8%;
`;
export const DivTargets =styled.div`
    /*background-color: ${props => props.isVisa  ? '#11D295' : 'white'};*/
    display: flex;
    width:47%;
    height:4rem;
    margin-right: 3%;
    margin-bottom: 2%;
    margin-top:2%;
    border:3px solid #F2F3F5;
    align-items: center;
    padding-left:2%;
    border-radius:10px;
`;

export const ImgTargeta = styled.img`
    width:88px;
    height:25px;
    margin-left:2%;
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

export const TitlePayment = styled.div`
  display: flex;  
  margin-bottom:3%;
`;
export const ImgPayment = styled.img`
  width: 24px;
  height: 24px;  
`;
export const H3Payment = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    color: #6C6CFE;
    font-size: 20px;
    font-family:'Sarabun', sans-serif;
    font-weight: 600;
    line-height: 30px;
    word-wrap: break-word;
`;
export const DivFormulario= styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const DivField =styled.div`
    display: flex;
    flex-direction: column;
    width:47%;
    margin-right: 3%;
    margin-bottom: 2%;
    margin-top:2%;
    @media screen and (max-width: 570px) 
    {
        width:95%;
    }

`;

export const Labels = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@700&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: #424955;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    
`;

export const Errors = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: red;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    word-wrap: break-word;
  
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

export const DivFieldComplete =styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-right: 2%;
    margin-bottom: 2%;
`;

export const H3Final = styled.h3`
    color: #171A1F;
    font-size: 11px;
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word
`;

export const SpanH3= styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: #171A1F;
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    word-wrap: break-word;
`;