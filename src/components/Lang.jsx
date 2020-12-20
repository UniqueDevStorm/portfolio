import React from 'react';
import * as Icons from 'react-icons/all';


export default class Lang extends React.Component {
    render() {
        const Icon = Icons[this.props.logo]
        return (
            <div className='Hover'>
                <Icon />
                <br />
                <span>{this.props.name}</span>
            </div>
        )
    }
}