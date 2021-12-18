import React, { useState } from 'react';
import Authors from '../Authors/Authors';
import FavAuthor from '../FavAuthor/FavAuthor';
import "./Home.css";

const Home = () => {
    const [control, setControl] = useState('authors')
    return (
        <div className='row admin-container'>
            <div className='col-md-2 sidebar'>
                <ul>
                    <li onClick={()=>{setControl('authors')}}>Author</li>
                    <li onClick={()=>{setControl('favAuthors')}}>Fav Author</li>
                </ul>
            </div>
            <div className='col-md-10'>
                {control === 'authors' && <Authors/>}
                {control === 'favAuthors' && <FavAuthor/>}
            </div>
        </div>
    );
};

export default Home;