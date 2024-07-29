import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="all">
            <div className="details">
                <h1 className="head">CONTACT US</h1>
                <p className="desc">
                "We create interactive storybooks and educational platforms that blend captivating stories with engaging multimedia elements. 
                <br></br>Our apps use animations, sounds, and interactive games to make learning enjoyable and effective. 
                <br></br>Designed to support literacy and critical thinking, they offer a dynamic alternative to traditional education methods."
                </p>
                <div className="contact-item">
                   <h2 className="head">Address</h2>
                   <p className="desc">1234 Main Street, Anytown, USA</p>
                </div>
                <div className="contact-item">
                   <h2 className="head">Phone</h2>
                   <p className="desc">(123) 456-7890</p>
                </div>
                <div className="contact-item">
                   <h2 className="head">Email</h2>
                   <p className="desc">info@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
