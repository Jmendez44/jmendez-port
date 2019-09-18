import React, { useState } from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => setValues({ ...form, [e.target.name]: e.target.value });

  const { name, email, message } = form;

  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-form">
          <div className="form">
            <form
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <p className="form-stuff">
                <label>
                  Your Name
                  <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="input-sizing"
                  />
                </label>
              </p>
              <p className="form-stuff">
                <label>
                  Your Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="input-sizing"
                  />
                </label>
              </p>
              <p className="form-stuff">
                <label>
                  Message
                  <textarea
                    name="message"
                    value={message}
                    onChange={handleChange}
                    className="input-sizing"
                    rows="10"
                  />
                </label>
              </p>
              <p className="btn-stuff">
                <button className="submit" type="submit">
                  Send
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>{" "}
      */
    </>
  );
};

export default Contact;

/* <div className="contact-container" id="contact">
          <div className="contact-form">
            <div className="form">
              <form
                name="contact"
                method="POST"
                onSubmit={this.handleSubmit}
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p className="form-stuff">
                  <label>
                    Your Name
                    <input
                      type="name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      className="input-sizing"
                    />
                  </label>
                </p>
                <p className="form-stuff">
                  <label>
                    Your Email
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      className="input-sizing"
                    />
                  </label>
                </p>
                <p className="form-stuff">
                  <label>
                    Message
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      className="input-sizing"
                      rows="10"
                    />
                  </label>
                </p>
                <p className="btn-stuff">
                  <button className="submit" type="submit">
                    Send
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div> */
