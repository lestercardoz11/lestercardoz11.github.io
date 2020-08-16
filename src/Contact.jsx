import React from 'react';
import './styles/App.css';

function Contact() {
return (
<main id="contact-section">
    <div>
        <h1>Contact</h1>
    </div>
    <div className="contact-content">
        <div>
            <p>
            You can see some of my work on GitHub.
            <br /><br />
            If you love my work and want to get in touch, you can find me on LinkedIn.
            <br /><br />
            You can also reach me at lestercardoz11@gmail.com.
            <br /><br />
            </p>
            <div className="button-wrapper">
                <div className="button-effect"></div>
                <a href="mailto:lestercardoz11@gmail.com"> Mail me </a>
            </div>
        </div>
    </div>
</main>
);
}

export default Contact;