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
                   <h2 className="head"><i className="fas fa-map-marker-alt"></i> Address</h2>
                   <p className="desc">1234 Main Street, Anytown, USA</p>
                </div>
                <div className="contact-item">
                   <h2 className="head"><i className="fas fa-phone"></i> Phone</h2>
                   <p className="desc">(123) 456-7890</p>
                </div>
                <div className="contact-item">
                   <h2 className="head"><i className="fas fa-envelope"></i> Email</h2>
                   <p className="desc">info@example.com</p>
                </div>
                <h1 className='head'>Connect With Us</h1>
                <form className="contact-form">
                    <div className="form-item">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" id="fname" name="fname" className="form-input" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" id="lname" name="lname" className="form-input" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="message" className="form-label">What can we help you with?</label>
                        <textarea id="message" name="message" className="form-input" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
