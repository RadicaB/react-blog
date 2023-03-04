import React from 'react';
import { Posts } from '../../Posts/posts';
import { MainContent } from '../Main/main';
import './blog.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {Posts.map((item, index) => (
        <MainContent title = {item.title} body = {item.body} key = {index}/>
    ))}
    </div>
);