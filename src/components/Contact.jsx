import React from 'react';
import * as Icons from 'react-icons/all';

export default class Contact extends React.Component {
    render() {
        const Icon = Icons[this.props.logo]
        return (
            <a href={this.props.url} className='Icons' rel='noreferrer'>
                <Icon />
            </a>
        )
    }
}