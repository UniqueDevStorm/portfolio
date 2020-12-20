import './App.css';
import Logo from './logo.png';
import Header from './components/Header';
import Contact from './components/Contact';
import Lang from './components/Lang';
import Project from './components/Project';
import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider, CssBaseline, Grid, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark') !== null);
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  })
  // className={`App ${isDarkMode ? 'dark' : ''}`}

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={() => {
        const value = !isDarkMode
        setIsDarkMode(value)
        if (value) {
          localStorage.dark = '1'
        } else {
          delete localStorage.dark
        }
      }} dark={isDarkMode} />
      <div className='Desc'>
        <img src={Logo} className='Logo' alt='Logo'></img>
        <h1 className='MyNameIs'>
          UniqueCode 소속 STORM
        </h1>
        <h2 className='Description'>
          To be Perfect Developer
        </h2>
        <Contact url='mailto:storm@stormdev.club' logo='AiFillMail' />
        <Contact url='https://github.com/UniqueDevStorm' logo='SiGithub' />
        <Contact url='https://discord.com/users/299895531701010442' logo='SiDiscord' />
      </div>
      <div className='Doit'>
        <h1 style={{ fontSize: '40px' }}>Do it</h1>
        <div className='Lang'>
          <Lang name='Python' logo='SiPython' />
          <Lang name='Node.js' logo='FaNodeJs' />
          <Lang name='React.js' logo='DiReact' />
          <Lang name='Javascript' logo='DiJavascript1' />
          <Lang name='HTML5' logo='SiHtml5' />
          <Lang name='CSS' logo='DiCss3' />
        </div>
      </div>
      <div className='Projects' style={{ padding: 20 }}>
        <div style={{ fontSize: '40px' }}>
          Projects
        </div>
        <Grid container spacing={2} style={{ marginBottom: '30vh', marginTop: '5vh' }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="UniqueCode" />
              <CardContent style={{ fontSize: '20px' }}>
                UniqueCode는 팀인데 왜 프로젝트냐구요?<br />UniqueCode 만큼 잘 만든 프로젝트도 없습니다.
              </CardContent>
              <CardActions>
                <Button href='https://uniquecode.team' target='_blank'>바로가기</Button>
              </CardActions>
            </Card>
          </Grid>
          <Project title='Uniquebots' desc='유니크한 봇들을 홍보하는 서비스.' url='https://uniquebots.kr' />
          <Project title='FreeAI' desc='게임, 음악 등 다기능 봇.' url='https://freeai.me' />
          <Project title='각종 Api' desc='오버워치, 급식 등 Api 모듈 제작.' url='https://github.com/UniqueDevStorm?tab=repositories' />
          <Project title='Portfolio' desc='DevStorm 포트폴리오' url='https://github.com/UniqueDevStorm/portfolio' />
        </Grid>
      </div>
      <div className='Contact'>
        <h1>Contacts</h1>
      </div>
      <Footer />
    </MuiThemeProvider >
  );
}

export default App;
