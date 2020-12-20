import React from 'react';
import Icon from '../components/Icon';
import Logo from '../logo.png';

const MainSection = () => {
    return (
        <div className='Desc' id="home">
            <img src={Logo} className='Logo' alt='Logo'></img>
            <h1 className='MyNameIs'>
                UniqueCode 소속 STORM
        </h1>
            <h2 className='Description'>
                To be Perfect Developer
        </h2>
            <Icon url='mailto:storm@stormdev.club' logo='AiFillMail' />
            <Icon url='https://github.com/UniqueDevStorm' logo='SiGithub' id='Doit' />
            <Icon url='https://discord.com/users/299895531701010442' logo='SiDiscord' />
        </div>
    );
};

export default MainSection;