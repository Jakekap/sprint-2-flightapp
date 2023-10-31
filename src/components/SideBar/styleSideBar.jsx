import styled from "styled-components";

export const StyledMain = styled.main`
  width: 50%;
  padding: 70px 10px 0 10px;
  @media (max-width: 391px) {
    width: 100%;
  }
`;
export const Header = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DivAerolinea = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ImgAerolinea = styled.img`
  width: 18px;
  height: 18px;
`;
export const H1Aerolinea = styled.h1`
  color: #323842;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
  font-family: "Sarabun", sans-serif;
  font-weight: 600;
  @import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap");
`;
export const Closed = styled.img`
  height: 24px;
  width: 24px;
`;

export const MiniNavbar = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  border: 2px solid red;
  justify-content: space-between;
  
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media (max-width: 768px) {
    gap: 70px;
  }
  @media (max-width: 391px) {
    padding: 5px;
    display: inline;
  }
`;
export const DivImage = styled.img`
  width: 16px;
  height: 16px;
`;
export const DivH3 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  color: #565e6c;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
`;

export const DivFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5%;
  align-items: center;
`;
export const DivFl = styled.div`
  display: flex;
  align-items: center;
`;
export const Price = styled.h2`
  color: #fe902b;
  font-size: 20px;
  line-height: 30px;
  word-wrap: break-word;
  font-family: "Sarabun", sans-serif;
  font-weight: 600;
  @import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap");
`;
export const Pax = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  color: #8f949f;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
`;
export const ImgFooter = styled.img`
  width: 16px;
  height: 16px;
`;
export const ButtonFooter = styled.button`
  background-color: #11d295;
  border-radius: 25px;
  color: white;
  margin-left: 5%;
  width: 115px;
  height: 50px;
`;
