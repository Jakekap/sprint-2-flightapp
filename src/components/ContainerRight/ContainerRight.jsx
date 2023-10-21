import React from 'react'
import { Principal,TitlePrice,Title,ImgDetails,Details,DivDetails,H3Details,H3Orage,H3Green,Div,DivCloudy,DivDate,TitleCloudy,ImgDetailCloudy, H3Cloudy, ImgCloudyOrage, H3CloudyOrage, H2Numero, H2Fecha, DivH2, ImgBlue, H3Blue, ImgDestination,DivDirect, ImgVerde, H3Verde,Details2 } from './StylesContainerRight'


const ContainerRight = () => {
  return (
    <Principal>
        <Div>
            <TitlePrice>
                <ImgDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg' alt='imgDetails'/>
                <Title>Price details</Title>
            </TitlePrice>
            <Details>
                <DivDetails>
                    <H3Details>Adult basic fee</H3Details>
                    <H3Details>$150</H3Details>
                </DivDetails>
                <DivDetails>
                    <H3Details>Tax</H3Details>
                    <H3Details>Included</H3Details>
                </DivDetails>
                <DivDetails>
                    <H3Details>Regular total price</H3Details>
                    <H3Details>$150</H3Details>
                </DivDetails>
                <DivDetails>
                    <H3Orage>Save</H3Orage>
                    <H3Orage>- $1.5</H3Orage>
                </DivDetails>
            </Details>
            <DivDetails>
                <H3Details>Total</H3Details>
                <H3Green>$148.5</H3Green>
            </DivDetails>
        </Div>
        <Div>
            <TitlePrice>
                <ImgDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697607271/Sprint2React-Eflight/avion_vwti8f.svg' alt='imgavion'/>
                <Title>Houston - Los Angles</Title>
            </TitlePrice>
            <Details>
                <DivDetails>
                    <DivCloudy>
                        <TitlePrice>
                            <ImgDetailCloudy src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697608072/Sprint2React-Eflight/nuve_imlc3g.svg' alt='imgnuve'/>
                            <TitleCloudy>Cloudy Airlines</TitleCloudy>
                        </TitlePrice>
                        <H3Cloudy>HOU - LAS</H3Cloudy>
                        <TitlePrice>
                            <ImgCloudyOrage src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697608921/Sprint2React-Eflight/avionnaranjasvg_cxynx2.svg' alt='imgAvionNaranja'/>
                            <H3CloudyOrage>Economy</H3CloudyOrage>
                        </TitlePrice>
                    </DivCloudy>
                    <DivDate>
                        <H2Numero>9</H2Numero>
                        <H2Fecha>Feb, 2023</H2Fecha>
                    </DivDate>
                </DivDetails>
                <DivDetails>
                    <DivCloudy>
                        <DivH2>23:15 - 1:25</DivH2>
                        <TitlePrice>
                            <ImgBlue src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610269/Sprint2React-Eflight/miniReloj_i3t1np.svg' alt='imgRelojBlue'/>
                            <H3Blue>2h10m</H3Blue>
                        </TitlePrice>
                    </DivCloudy>
                    <DivDirect>
                        <ImgDestination src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610809/Sprint2React-Eflight/Group_7_vqa5dh.svg' alt='imgRaya'/>
                        <TitlePrice>
                            <ImgBlue src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610307/Sprint2React-Eflight/miniAvion_sgkla9.svg' alt='imgAvionBlue'/>
                            <H3Blue>Direct</H3Blue>
                        </TitlePrice>
                    </DivDirect>
                </DivDetails>
                
            </Details>
            <TitlePrice>
                <ImgVerde src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg' alt='imgAvionVerde'/>
                <H3Verde>Refundable</H3Verde>
            </TitlePrice>
            <TitlePrice>
                <ImgVerde src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697611945/Sprint2React-Eflight/maleta_cfvrwv.svg' alt='imgMaletaVerde'/>
                <H3Verde>Reschedule Available</H3Verde>
            </TitlePrice>

            <Details2>
                <DivDetails>
                    <DivCloudy>
                        <TitlePrice>
                            <ImgDetailCloudy src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697608072/Sprint2React-Eflight/nuve_imlc3g.svg' alt='imgnuve'/>
                            <TitleCloudy>Cloudy Airlines</TitleCloudy>
                        </TitlePrice>
                        <H3Cloudy>LAS - LAX</H3Cloudy>
                        <TitlePrice>
                            <ImgCloudyOrage src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697608921/Sprint2React-Eflight/avionnaranjasvg_cxynx2.svg' alt='imgAvionNaranja'/>
                            <H3CloudyOrage>Economy</H3CloudyOrage>
                        </TitlePrice>
                    </DivCloudy>
                    <DivDate>
                        <H2Numero>10</H2Numero>
                        <H2Fecha>Feb, 2023</H2Fecha>
                    </DivDate>
                </DivDetails>
                <DivDetails>
                    <DivCloudy>
                        <DivH2>2:25 - 7:40</DivH2>
                        <TitlePrice>
                            <ImgBlue src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610269/Sprint2React-Eflight/miniReloj_i3t1np.svg' alt='imgRelojBlue'/>
                            <H3Blue>2h10m</H3Blue>
                        </TitlePrice>
                    </DivCloudy>
                    <DivDirect>
                        <ImgDestination src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610809/Sprint2React-Eflight/Group_7_vqa5dh.svg' alt='imgRaya'/>
                        <TitlePrice>
                            <ImgBlue src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697610307/Sprint2React-Eflight/miniAvion_sgkla9.svg' alt='imgAvionBlue'/>
                            <H3Blue>Direct</H3Blue>
                        </TitlePrice>
                    </DivDirect>
                </DivDetails>
                
            </Details2>
            <TitlePrice>
                <ImgVerde src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg' alt='imgAvionVerde'/>
                <H3Verde>Refundable</H3Verde>
            </TitlePrice>
            <TitlePrice>
                <ImgVerde src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697611945/Sprint2React-Eflight/maleta_cfvrwv.svg' alt='imgMaletaVerde'/>
                <H3Verde>Reschedule Available</H3Verde>
            </TitlePrice>
        </Div>
    </Principal>
  )
}

export default ContainerRight