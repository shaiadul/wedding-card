import React from 'react';
import Main from './Main';
import Top from './Top';
import './Home.css'

const Home = () => {
    return (
        <section className='card-part'>
            <Top/>
            <Main/>
        </section>
    );
};

export default Home;