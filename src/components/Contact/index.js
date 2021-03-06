/*
ContactForm Component
*/

import React, { useState}  from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [ formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [ errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(`${e.target.value} valid: ${isValid}`);
            setErrorMessage(isValid ? '' : 'Your email is invalid');
        }
        else {
            setErrorMessage( e.target.value.length ? '' : `${e.target.name} is required.`);
        }
        if (!errorMessage) {
            setFormState({...formState, [ e.target.name]: e.target.value});
        }
        console.log('errorMessage:', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="h1tag"> Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue = { name } onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue = { email } onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue = { message } onBlur={handleChange}/>
                </div>
                { errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;