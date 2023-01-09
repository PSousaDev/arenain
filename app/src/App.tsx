import { useState } from 'react';
import Button from './components/button';
import Form from './components/form';
import Gallery from './components/galery';
import { ArrowLeft,ArrowRight} from './components/galery/styles';
import Icon from './components/icons';
import { GlobalStyles } from './styles/globalstyles'
import {
  Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle,  DivButton, DivIcons, SectionAbout, DivAboutMars, SecondSubTitle, TextMars, GalleryContent, ContainerAbout, TextLogo, DivLogo, TextSubscribe, DivLogoIN, SectionForm,
  DivForm, IconForm, TitleForm, SubtitleForm, DivRocketImage, DivInputCheckbox, InputCheckbox, TextCheckbox, SectionFooter, DivFooterBottom, DivSocial, DivFooterMenu, ContainerForm , AstrounautIllustration, TrophyImage
} from './styles/styles'



import pixelToRem from './utils/pxToRem'

export function App() {
  const [check,setCheck]=useState(false)
  const handleCheckedBox=() => {
    setCheck((current) => !current)
  };
  const handleClickForm = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Container flex='column' margin={pixelToRem(24, 112, 50)}>
        <GlobalStyles />

        <Header>
          <Logo />
        </Header>

        <Main>
          <FirstTitle>O maior evento de programação!</FirstTitle>

          <SecondTitle>Seu desafio começa agora<span>.</span></SecondTitle>

          <Subtitle>O evento mais aguardado de programação irá ter sua primeira edição no dia 05/02/2023
          </Subtitle>

          <AstrounautIllustration />

          <DivButton>
            <Button text="Inscreva-se agora" fullWidth onClick={handleClickForm} />
          </DivButton>

        </Main>

        <DivIcons
          whileInView="visible"
          initial="initial"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            },
          }}
        >
          <Icon src="/images/icon-rocket.svg" txt="Decole sua carreira no evento mais aguardado " alt="Rocket" />

          <Icon src="/images/icon-flag.svg" txt="Um marco na sua carreira como desenvolvedor" alt="Flag" />
          
          <Icon src="/images/icon-telescope.svg" txt="Experiencia única
        e exclusiva." alt="Telescope" />
        </DivIcons>
        </Container>



  


      <SectionAbout
        flex='column'
        

      >

        
          <Container width='100%' >
         
          <ContainerAbout width="100%" alignItems='center' justifyContent='center' id='sobre'>
          
            <DivAboutMars
              whileInView="visible"
              initial="initial"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
            >
              <FirstTitle>O que eu posso esperar?</FirstTitle>

              <SecondSubTitle>O evento </SecondSubTitle>

              <TextMars>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</TextMars>

              <TextMars>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</TextMars>
            </DivAboutMars>

          </ContainerAbout>
        </Container>

        <GalleryContent>

          <DivLogoIN
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              },
            }}>

            <DivLogo>
              <Logo />
            </DivLogo>

            <TextLogo>Seja um campeão da arena<span>.</span></TextLogo>

            <TextSubscribe

              whileInView="visible"
              initial="initial"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: -20,
                  transition: { duration: 1, delay: 1 },
                },
              }}
              onClick={handleClickForm} >
              Inscreva-se agora
            </TextSubscribe>
          </DivLogoIN>

          <ArrowLeft />
          <Gallery />
          <ArrowRight />


        </GalleryContent>

      </SectionAbout>


      <SectionForm
      id="form">
        <ContainerForm>
          <DivForm
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1.5 },
              },
            }}

          >
            <IconForm />

            <TitleForm id='form'>
              Garanta sua vaga 
            </TitleForm>

            <SubtitleForm>
              Preencha os campos abaixo para entrar na arena
            </SubtitleForm>

            <Form type="text" text='Seu nome' />
            <Form type="email" text='E-mail' />
            <Form type="number" text='Telefone' />
            {check==false &&(
              <DivInputCheckbox >
              <InputCheckbox type="checkbox" onChange={handleCheckedBox}/>
              <TextCheckbox>Irei levar um convidado</TextCheckbox>
            </DivInputCheckbox>
            
            )}
            
            {check &&(<>
             
              <InputCheckbox type="checkbox"  onChange={handleCheckedBox}/>
              <Form type="text" text='Seu nome' />
              </>
            
            )}

            <Button text="Garantir minha vaga" fullWidth value/>

          </DivForm>

          <DivRocketImage
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: -100,
                transition: { duration: 1, delay: 1 },
              },
            }}

          >
           
          </DivRocketImage>
        </ContainerForm>

        <SectionFooter>


          <DivFooterBottom>
            <DivSocial>
              <a href="https://www.instagram.com/infinity.school/" target='_blank'><img src="/images/instagram.svg" alt=""/></a>
              <a href="https://infinityschool.com.br" target='_blank'><img src="/images/INOrange.ico" alt=""/></a>
       
            </DivSocial>

            <DivFooterMenu>
              <ul>
                <li><a >Início</a></li>
                <li><a onClick={handleClickAbout}>Sobre O evento</a></li>
                <li><a href='http://infinityschool.com.br/contacts/'target='_blank'>Contato</a></li>
              </ul>
            </DivFooterMenu>
          </DivFooterBottom>
        </SectionFooter>

      </SectionForm>

    </>

  );
}

