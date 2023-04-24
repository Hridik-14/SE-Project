/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

 import React from 'react';
 import Image202303012259237Image from 'src/assets/images/UserRegisterPagewoimage_image_2023_03_01_225923788_removebg_preview_1.png';
 import Image5Image from 'src/assets/images/UserRegisterPagewoimage_image_5.png';
 import Image202303012246016Image from 'src/assets/images/UserRegisterPagewoimage_image_2023_03_01_224601648_removebg_preview_2.png';
 import VectorImage from 'src/assets/images/UserRegisterPagewoimage_Vector.png';
 import Vector1Image from 'src/assets/images/UserRegisterPagewoimage_Vector_1.png';
 import Vector2Image from 'src/assets/images/UserRegisterPagewoimage_Vector_2.png';
 import Vector3Image from 'src/assets/images/UserRegisterPagewoimage_Vector_3.png';
 import { styled } from '@mui/material/styles';
 import BackgroundRemovebgPrImage from 'src/assets/images/UserRegisterPagewoimage_Background_removebg_preview_1.png';
 import ButtonPrimary from './ButtonPrimary';
 import { Button } from '@mui/material';
 // import InputFields from 'src/components/InputFields/InputFields';


 const UserRegisterPageWOIm = styled('div')({
   display: `flex`,
   position: `relative`,
   isolation: `isolate`,
   flexDirection: `row`,
   width: '100%',
   height: `700px`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
 });

 const Page2 = styled('div')({
   backgroundColor: `rgba(255, 255, 255, 0.3)`,
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `1440px`,
   height: `700px`,
   left: `0px`,
   top: `0px`,
 });

 const Background = styled('div')({
   backgroundColor: `rgba(0, 118, 190, 1)`,
   width: `1440px`,
   height: `700px`,
   position: `absolute`,
   left: `0px`,
   top: `0px`,
 });

 const Content = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `399px`,
   height: `230px`,
   left: `118px`,
   top: `251px`,
 });

 const TitleSpan1 = styled('span')({
   whiteSpace: `pre-wrap`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `56px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
 });

 const TitleSpan2 = styled('span')({
   whiteSpace: `pre-wrap`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `36px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
 });

 const Title = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `nullpx`,
   letterSpacing: `NaNpx`,
   textDecoration: `none`,
   textTransform: `none`,
   textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
   width: `399px`,
   position: `absolute`,
   left: `0px`,
   top: `0px`,
 });

 const Title1Span1 = styled('span')({
   whiteSpace: `pre-wrap`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `56px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
 });

 const Title1Span2 = styled('span')({
   whiteSpace: `pre-wrap`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `36px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
 });

 const Title1 = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `nullpx`,
   letterSpacing: `NaNpx`,
   textDecoration: `none`,
   textTransform: `none`,
   textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
   width: `399px`,
   position: `absolute`,
   left: `118px`,
   top: `251px`,
 });

 const BackgroundRemovebgPr = styled('div')({
   backgroundImage: `url(${BackgroundRemovebgPrImage})`,
   backgroundPosition: `center`,
   backgroundSize: `cover`,
   backgroundRepeat: `no-repeat`,
   mixBlendMode: `soft-light`,
   width: `610px`,
   height: `575px`,
   position: `absolute`,
   left: `730px`,
   top: `62px`,
 });

 const Image202303012259237 = styled('img')({
   height: `188px`,
   width: `627px`,
   objectFit: `cover`,
   position: `absolute`,
   left: `4px`,
   top: `23px`,
 });

 const Image5 = styled('img')({
   height: `1080px`,
   width: `1436px`,
   objectFit: `cover`,
   position: `absolute`,
   left: `4px`,
   top: `-190px`,
 });

 const InputFieldsStyle1 =  ({
   width: `327px`,
   height: `50px`,
   position: `absolute`,
   left: `169px`,
   top: `113px`,
 });

 // const InputFields2 = styled(InputFields)(({ theme }) => ({
 //   width: `327px`,
 //   height: `60px`,
 //   position: `absolute`,
 //   left: `169px`,
 //   top: `350px`,
 // }));

 const InputFieldsStyle = ({
   width: `327px`,
   height: `50px`,
   position: `absolute`,
   left: `169px`,
   top: `232px`,
 });

 const InputFieldsStyle2 = ({
   width: `327px`,
   height: `50px`,
   position: `absolute`,
   left: `169px`,
   top: `250px`,
 });
 // const Frame61 = styled(Frame6)(({ theme }) => ({
 //   width: `327px`,
 //   position: `absolute`,
 //   left: `169px`,
 //   top: `468px`,
 // }));

 // const Frame62 = styled(Frame4)(({ theme }) => ({
 //   width: `327px`,
 //   position: `absolute`,
 //   left: `169px`,
 //   top: `564px`,
 // }));

 const Image202303012246016 = styled('img')({
   height: `54px`,
   width: `327px`,
   objectFit: `cover`,
   position: `absolute`,
   left: `152px`,
   top: `24px`,
 });

 const Group11 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `105.82px`,
   height: `252px`,
   left: `176px`,
   top: `78px`,
 });

 const Frame20 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `column`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `38.13px`,
   left: `0px`,
   top: `0px`,
 });

 const Email = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `400`,
   fontSize: `16px`,
   letterSpacing: `-0.17600000381469727px`,
   textDecoration: `none`,
   lineHeight: `24px`,
   textTransform: `none`,
   margin: `0px`,
 });

 const Frame21 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `column`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `78.17px`,
   left: `0px`,
   top: `114px`,
 });

 const YourName = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `400`,
   fontSize: `16px`,
   letterSpacing: `-0.17600000381469727px`,
   textDecoration: `none`,
   lineHeight: `24px`,
   textTransform: `none`,
   margin: `0px`,
 });

 const Frame22 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `column`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `105.82px`,
   left: `0px`,
   top: `128px`,
 });

 const YourPassword = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `400`,
   fontSize: `16px`,
   letterSpacing: `-0.17600000381469727px`,
   textDecoration: `none`,
   lineHeight: `24px`,
   textTransform: `none`,
   margin: `0px`,
 });

 const Vector = styled('img')({
   height: `27px`,
   width: `31px`,
   position: `absolute`,
   left: `456px`,
   top: `131px`,
 });

 const Group9 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `28px`,
   height: `31px`,
   left: `456px`,
   top: `264px`,
 });

 const Vector1 = styled('img')({
   height: `8.52px`,
   width: `5.51px`,
   position: `absolute`,
   left: `11px`,
   top: `17px`,
 });

 const Vector2 = styled('img')({
   height: `20.45px`,
   width: `28px`,
   position: `absolute`,
   left: `0px`,
   top: `11px`,
 });

 const Vector3 = styled('img')({
   height: `10.55px`,
   width: `17.96px`,
   position: `absolute`,
   left: `5px`,
   top: `0px`,
 });

 const Frame1 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `245px`,
   height: `19px`,
   left: `216px`,
   top: `531px`,
 });

 const AlreadyHaveAnAccount = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `400`,
   fontSize: `16px`,
   letterSpacing: `-0.17600000381469727px`,
   textDecoration: `none`,
   textTransform: `none`,
   margin: `0px`,
 });

 const Title2 = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `36px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
   textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
   width: `399px`,
   position: `absolute`,
   left: `720px`,
   top: `73px`,
 });

 const VentureVineOffersADi = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `400`,
   fontSize: `24px`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
   width: `536px`,
   height: `429px`,
   position: `absolute`,
   left: `720px`,
   top: `220px`,
 });

 const Frame23 = styled('div')({
   display: `flex`,
   position: `absolute`,
   isolation: `isolate`,
   flexDirection: `row`,
   justifyContent: `flex-start`,
   alignItems: `flex-start`,
   padding: `0px`,
   boxSizing: `border-box`,
   width: `48px`,
   height: `19px`,
   left: `413px`,
   top: `531px`,
 });

 const FrameButtons = styled('div')({
   display: `flex`,
   position: `absolute`,
   // isolation: `isolate`,
   // flexDirection: `row`,
   justifyContent: `center`,
   alignItems: `center`,
   padding: `0px`,
   // boxSizing: `border-box`,
   width: `330px`,
   height: `200px`,
   left: `170px`,
   top: `420px`,
 });

 const Login = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `700`,
   fontSize: `16px`,
   letterSpacing: `-0.17600000381469727px`,
   textDecoration: `underline`,
   textTransform: `none`,
   width: `48px`,
   position: `absolute`,
   left: `0px`,
   top: `0px`,
 });

 const WelcomeToVentureVine = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Quicksand`,
    fontWeight: `400`,
    fontSize: `24px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `536px`,
    height: `429px`,
    position: `absolute`,
    left: `720px`,
    top: `217px`,
  });
 function UserRegisterPageWOImage(props) {
   return (
     <UserRegisterPageWOIm className={props.className}>
       <Page2>
         <Background></Background>
         {false && (
           <Content>
             <Title>
               <TitleSpan1>{`Cultivating Creativity: `}</TitleSpan1>
               <TitleSpan2>{`Helping Start-ups Thrive `}</TitleSpan2>
             </Title>
           </Content>
         )}
         {false && (
           <Title1>
             <Title1Span1>{`Cultivating Creativity: `}</Title1Span1>
             <Title1Span2>{`Helping Start-ups Thrive `}</Title1Span2>
           </Title1>
         )}
         {false && <BackgroundRemovebgPr></BackgroundRemovebgPr>}
         {false && (
           <Image202303012259237
             src={Image202303012259237Image}
             loading="lazy"
             alt={'image_2023-03-01_225923788-removebg-preview 1'}
           />
         )}
         {false && <Image5 src={Image5Image} loading="lazy" alt={'image 5'} />}
         <input type="text" style={InputFieldsStyle1}/>
         {/* <input type="email" style={InputFieldsStyle}/> */}
         <input type="text" style={InputFieldsStyle2}/>

         {/* <InputFields2 />
         <InputFields3 /> */}
         {/* <Frame61 />
         <Frame62 /> */}
       </Page2>
       <Image202303012246016
         src={Image202303012246016Image}
         loading="lazy"
         alt={'image_2023-03-01_224601648-removebg-preview 2'}
       />
       <Group11>
         <Frame20>
           <Email>{`Email`}</Email>
         </Frame20>
         {/* <Frame21>
           <YourName>{`Your Name`}</YourName>
         </Frame21> */}
         <Frame22>
           <YourPassword>{`Your Password`}</YourPassword>
         </Frame22>
       </Group11>
       <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
       <Group9>
         <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
         <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
         <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
       </Group9>
       <Frame1>
         <AlreadyHaveAnAccount>
           {`Already have an account?`}
         </AlreadyHaveAnAccount>
       </Frame1>
       <FrameButtons>
         {/* <ButtonPrimary topMargin={"30px"} title={"Register"}  width={`327px`}></ButtonPrimary> */}
         <ButtonPrimary topMargin={"0px"} title={"Sign-In"} width={`327px`} endPoint={"start-up-landing-page"}></ButtonPrimary>
       </FrameButtons>
       <Title2>{`Start-ups today, Unicorns tomorrow `}</Title2>
       <WelcomeToVentureVine>
       {`Welcome to VentureVine, your go-to platform for startup funding!

 At VentureVine, we believe in the power of innovation and entrepreneurship, and we are passionate about helping startups grow and succeed. Whether you are a first-time entrepreneur or an experienced business owner, we are here to support you on your journey.
 So why wait? Join the VentureVine community today and take the first step towards turning your idea into a successful business!`}
      </WelcomeToVentureVine>
       <Frame23>
         <Login>{`Login`}</Login>

       </Frame23>
     </UserRegisterPageWOIm>
   );
 }

 export default UserRegisterPageWOImage;
