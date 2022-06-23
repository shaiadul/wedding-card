import React from 'react';
import './Home.css'
import Slider from './Slider';

const Main = () => {
    return (
        <section className='main-part row justify-content-center align-items-center '>
            {/* slider division */}
            <div className='col-12 col-lg-8'>
                <Slider/>
            </div>
            {/* title division */}
            <div className='col-12 col-lg-4'>
                <h1 className='text-center pb-3'>Card Title</h1>
                <div className=' d-flex justify-content-between'>
                    <h4>$400 <small><del>$2000</del></small></h4>

                    <h5 className='text-success'>75%Off</h5>
                </div>
                <article className='text-justify'>Donec eu ornare mi. Sed finibus condimentum mauris, ut dictum eros maximus vitae. Nullam condimentum tortor ac elit feugiat iaculis. Aenean mauris nisl, blandit</article>
                <button className='title-btn'>Try this Card</button>
            </div>
        </section>
    );
};

export default Main;