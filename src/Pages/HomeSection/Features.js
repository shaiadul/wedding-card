import React from 'react';
import "./Home.css"

const Features = () => {
    return (
        <section className='features row justify-content-center align-items-center mx-auto'>
            <div className='col-12 col-lg-4 mx-auto text-center'>
                <div className='box-shadow mx-auto'></div>
                <p>Create your card in just 5 mins</p>
            </div>
            <div className='col-12 col-lg-4 mx-auto text-center'>
                <div className='box-shadow mx-auto'></div>
                <p>Customize the Text with "Edit this Page" Option</p>
            </div>
            <div className='col-12 col-lg-4 mx-auto text-center'>
                <div className='box-shadow mx-auto'></div>
                <p>Editing is available after purchase also</p>
            </div>
        </section>
    );
};

export default Features;