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
                                UniqueCode??? ????????? ??? ??????????????????????<br />UniqueCode ?????? ??? ?????? ??????????????? ????????????.
              </CardContent>
                            <CardActions>
                                <Button href='https://uniquecode.team' target='_blank'>????????????</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Project title='Uniquebots' desc='???????????? ????????? ???????????? ?????????.' url='https://uniquebots.kr' />
                    <Project title='FreeAI' desc='??????, ?????? ??? ????????? ???.' url='https://freeai.me' />
                    <Project title='?????? Api' desc='????????????, ?????? ??? Api ?????? ??????.' url='https://github.com/UniqueDevStorm?tab=repositories' />
                    <Project title='Portfolio' desc='DevStorm ???????????????' url='https://github.com/UniqueDevStorm/portfolio' id='Project' />
                </Grid>
            </div>
            <Footer />
        </MuiThemeProvider >
    );
}

export default App;
