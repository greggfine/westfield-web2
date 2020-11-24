// FORMSPREE ENDPOINT:  https://formspree.io/xyynberj

import React, { useState } from "react";
import axios from "axios";
import styles from "./contact.module.scss";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xyynberj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className={styles.contactFormMain}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Let's Discuss Your Project!</h1>
        <p className={styles.subMessage}>
          Ready to get started on your new website or app? Or maybe you're
          looking to optimize and redesign your current site? Let's start a
          conversation. I look forward to hearing from you!
        </p>
        <form onSubmit={handleOnSubmit} className={styles.contactForm}>
          <label htmlFor="name" className={styles.contactFormLabel}>
            Name
          </label>
          <input
            id="name"
            type="name"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.name}
            className={styles.contactFormInput}
          />
          <label htmlFor="email" className={styles.contactFormLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            className={styles.contactFormInput}
          />
          <label htmlFor="message" className={styles.contactFormLabel}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            className={styles.contactFormTextArea}
          />
          <button
            type="submit"
            disabled={status.submitting}
            className={styles.contactFormBtn}
          >
            {!status.submitting
              ? !status.submitted
                ? "Send a message"
                : "Message sent!"
              : "Submitting..."}
          </button>
        </form>
        {status.info.error && (
          <div className={styles.error}>Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </div>
      <div className={styles.Contact__bottomWrapper}>
        <div className={styles.Contact__additional}>
          <p>NEW JERSEY</p>
          {/* <p>522 Summit Ave. Westfield, NJ 07090</p> */}
          {/* <p>(917)355-4217</p> */}
        </div>
        <div className={styles.Contact__colorDiv}>
          <div className={styles.Contact__colorDivItem}>
            <img src="/gregg-secondary.jpg" alt="" />
          </div>
        </div>
        <div className={styles.Contact__colorDiv}>
          <div className={styles.Contact__colorDivItem}>
            <img src="/domenico-loia-hGV2TfOh0ns-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
