import React from 'react';
import propsTypes from 'prop-types';
import './main.css';

export const MainContent = (props) => { 
    return(
        <div className='blog-posts'>
            <h5>{props.title}</h5>
            <p>{props.body}</p>
        </div>
    )
}

MainContent.propTypes = {
    title: propsTypes.string.isRequired,
    body: propsTypes.string.isRequired
}

