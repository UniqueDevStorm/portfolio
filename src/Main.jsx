import './App.css';
import Header from './components/Header';
import Lang from './components/Lang';
import Project from './components/Project';
import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider, CssBaseline, Grid, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import Footer from './components/Footer';
import MainSection from './sections/Main'
import { Router } from 'react-router-dom'

function App() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark') !== null);
    const theme = createMuiTheme({
        palette: {
            type: isDarkMode ? 'dark' : 'light'
        }
    })

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
            <MainSection />
            <div className='Doit'>
                <h1 style={{ fontSize: '40px' }}>Do it</h1>
                <div className='Lang' id='Lang'>
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
                <Grid container spacing={2}>
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
                    <Project title='Portfolio' desc='DevStorm 포트폴리오' url='https://github.com/UniqueDevStorm/portfolio' id='Project' />
                </Grid>
            </div>
            <Footer />
        </MuiThemeProvider >
    );
}

export default App;
