import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const [state, handleSubmit] = useForm("movablel");

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    useEffect(() => {
        if (state.succeeded) {
            setStatus({ success: true, message: 'Message sent successfully!' });
            setFormDetails(formInitialDetails);
        } else if (state.errors?.length > 0) {
            setStatus({ success: false, message: 'Something went wrong. Please try again.' });
        }
    }, [state.succeeded, state.errors]);

    const submitForm = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        await handleSubmit(e)
        setButtonText('Send');
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={submitForm}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" id="firstName" name="FirstName" value={formDetails.firstName} placeholder="First Name*" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                                <ValidationError
                                                    prefix="FirstName"
                                                    field="firstName"
                                                    errors={state.errors}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" id="lastName" name="LastName" value={formDetails.lastName} placeholder="Last Name*" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                                <ValidationError
                                                    prefix="LastName"
                                                    field="lastName"
                                                    errors={state.errors}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" id="email" name="email" value={formDetails.email} placeholder="Email Address*" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                                <ValidationError
                                                    prefix="Eame"
                                                    field="email"
                                                    errors={state.errors}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" id="phone" name="Phone" value={formDetails.phone} placeholder="Phone No.*" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                                <ValidationError
                                                    prefix="Phone"
                                                    field="phone"
                                                    errors={state.errors}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" id="message" name="Message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <ValidationError
                                                    prefix="Message"
                                                    field="message"
                                                    errors={state.errors}
                                                />

                                                <button type="submit" disabled={state.submitting}><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
