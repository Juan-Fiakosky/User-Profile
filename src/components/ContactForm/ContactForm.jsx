"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onFormSubmit }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
    };

    const onAnimationEnd = () => {
        if (!expanded) {
            setExpanded(false);
        }
    };

    return (
        <section className={styles.section}>
            <h2 onClick={toggleExpand} className={styles.title}>
                Contact Me
            </h2>
            <form
                className={`${styles.formContainer} ${expanded ? styles.expanded : ""}`}
                onSubmit={handleSubmit}
                onAnimationEnd={onAnimationEnd}
            >
                <label className={styles.label} htmlFor="name">
                    Name:
                </label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="name"
                    name="name"
                    required
                />

                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input
                    className={styles.inputField}
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                <label className={styles.label} htmlFor="message">
                    Message:
                </label>
                <textarea
                    className={styles.inputField}
                    id="message"
                    name="message"
                    rows="4"
                    required
                ></textarea>

                <button className={styles.submitButton} type="submit">
                    Submit
                </button>
            </form>
            {expanded && <div className={styles.spacer}></div>}
        </section>
    );
};

export default ContactForm;
