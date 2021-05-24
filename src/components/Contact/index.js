/* Contact: contact form for users to leave me messages. */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [successMessage, setSuccess] = useState("");
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
            setErrorMessage(`Your ${e.target.name} is required.`);
        }
        else {
            setErrorMessage("");
        }
    }

    // clear errors, then add them back one by one
    function checkErrors() {
        let errString = "";
        if (!formState.name) {
            errString += "Your name is required.\n";
        }
        if (!formState.email) {
            errString += "Your email is required.\n";
        }
        else if (!validateEmail(formState.email)) {
            errString += "Your email is invalid.\n";
        }
        if (!formState.message) {
            errString += "Your message is required.\n";
        }
        setErrorMessage(errString);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        checkErrors();
        if (errorMessage) return;
        
        // service id, template id, e.target, user id
        const result = await emailjs.sendForm();

        // console.log(result);
        if (result) {
            setSuccess(`Thank you for reaching out, ${formState.name}! I'll get back to you soon.`);
        }
        else {
            setErrorMessage("Your message failed to send. Please try again later.");
        }
    }

    return (
        <div className="d-flex justify-content-center load-anim-1">
            {/* if message sent successfully, load success message */}
            {successMessage ? <p>{successMessage}</p> :
                <form id="contact-form" className="w-75" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="d-block h5">Name</label>
                        <input
                            type="text" name="name" className="form-control form-control-sm"
                            defaultValue={name} onChange={handleChange} onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="d-block h5">Email Address</label>
                        <input
                            type="email" name="email" className="form-control form-control-sm"
                            defaultValue={email} onChange={handleChange} onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="d-block h5">Message</label>
                        <textarea
                            name="message" rows="4" className="form-control form-control-sm"
                            defaultValue={message} onChange={handleChange} onBlur={handleBlur}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="text-danger">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="btn btn-secondary pt-2 pb-2">Submit</button>
                </form>
            }
        </div>
    );
}

export default ContactForm;
