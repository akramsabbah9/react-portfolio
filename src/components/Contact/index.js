/* Contact: contact form for users to leave me messages. */
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleBlur(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) setErrorMessage("Your email is invalid.");
            else setErrorMessage("");
        }
        else if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        }
        else {
            setErrorMessage("");
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) console.log(formState);
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div>
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} onBlur={handleBlur} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
