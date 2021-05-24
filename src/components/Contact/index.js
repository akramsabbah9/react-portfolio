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
            setErrorMessage(`A ${e.target.name} is required to proceed.`);
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
        <div className="d-flex justify-content-center load-anim-1">
            <form id="contact-form" className="w-75" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="d-block h5">Name</label>
                    <input type="text" name="name" className="form-control form-control-sm" defaultValue={name} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="d-block h5">Email Address</label>
                    <input type="email" name="email" className="form-control form-control-sm" defaultValue={email} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="d-block h5">Message</label>
                    <textarea name="message" rows="4" className="form-control form-control-sm" defaultValue={message} onChange={handleChange} onBlur={handleBlur} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" class="btn btn-secondary pt-2 pb-2">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
