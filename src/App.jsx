import './App.css';
import Logo from './logo.png';
import Header from './components/Header';
import Contact from './components/Contact';
import Lang from './components/Lang';
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
          <Grid item xs={12} md={6} lg={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="Uniquebots" />
              <CardContent style={{ flexGrow: 1, fontSize: '20px' }}>
                유니크한 봇들을 홍보하는 서비스.
              </CardContent>
              <CardActions>
                <Button href="https://uniquebots.kr" target='_blank'>바로가기</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="FreeAI" />
              <CardContent style={{ flexGrow: 1, fontSize: '20px' }}>
                게임, 음악 등 다기능 봇.
              </CardContent>
              <CardActions>
                <Button href="https://freeai.me" target='_blank'>바로가기</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="각종 Api" />
              <CardContent style={{ flexGrow: 1, fontSize: '20px' }}>
                오버워치, 급식 등 Api 모듈 제작.
              </CardContent>
              <CardActions>
                <Button href="https://github.com/UniqueDevStorm?tab=repositories" target='_blank'>바로가기</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title="Portfolio" />
              <CardContent style={{ flexGrow: 1, fontSize: '20px' }}>
                DevStorm 포트폴리오
              </CardContent>
              <CardActions>
                <Button href="https://github.com/UniqueDevStorm/portfolio" target='_blank'>바로가기</Button>
              </CardActions>
            </Card>
          </Grid>
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
