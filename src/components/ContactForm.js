import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      email: '', 
      phone: '', 
      message: '',
      isValidated: false 
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    const { fontColor } = this.props;
    const labelStyle = { color: fontColor };
    const inputStyle = { color: 'black', borderColor: fontColor };

    return (
      <form
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor={"name"} style={labelStyle}>
            Your name
          </label>
          <div className="control">
            <input
              className="input"
              type={"text"}
              name={"name"}
              value={this.state.name}
              onChange={this.handleChange}
              id={"name"}
              required={true}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"email"} style={labelStyle}>
            Email
          </label>
          <div className="control">
            <input
              className="input"
              type={"email"}
              name={"email"}
              value={this.state.email}
              onChange={this.handleChange}
              id={"email"}
              required={true}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"phone"} style={labelStyle}>
            Phone
          </label>
          <div className="control">
            <input
              className="input"
              type={"tel"}
              name={"phone"}
              value={this.state.phone}
              onChange={this.handleChange}
              id={"phone"}
              required={true}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"message"} style={labelStyle}>
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name={"message"}
              value={this.state.message}
              onChange={this.handleChange}
              id={"message"}
              required={true}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link has-background-primary has-text-black" type="submit" style={labelStyle}>
            Send
          </button>
        </div>
      </form>
    );
  }
}
