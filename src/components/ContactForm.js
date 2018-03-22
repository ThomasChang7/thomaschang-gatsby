import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { media } from '../components/Breakpoints';
import OutLink from '../components/OutLink';

const Input = styled.input`
  display: flex;
`;

const ContactSection = styled.div`
  width: 100%;
  margin: auto;
  ${media.tablet`width: 80%;`};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `};
`;

const InputControl = styled.input`
  flex: 1;

  font-size: 0.875em;

  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #111111;

  border: solid 1px #8fbbbc;

  border-bottom: none;

  transition: all 0.3s ease-in-out;
  &:hover {
    background: #8fbbbc;
    color: #ffffff;
  }
  ${media.tablet`border-left: ${props => (props.right ? 'none' : '')};`};
`;

const TextAreaControl = styled.textarea`
  flex: 1;

  height: 110px;
  max-height: 110px;
  padding: 15px;
  background: transparent;
  outline: none;

  color: #111111;

  font-size: 0.875em;

  border: solid 1px #8fbbbc;
  border-bottom: none;
  transition: all 0.3s ease-in-out;
  resize: none;
  &:hover {
    background: #8fbbbc;
    color: #ffffff;
  }
`;

const Submit = styled.input`
  flex: 1;

  padding: 10px;

  font-size: 0.875em;
  color: #8fbbbc;

  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: solid 1px #8fbbbc;
  &:hover {
    background: #8fbbbc;
    color: #ffffff;
  }
`;
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(navigateTo('/thanks'))
      .catch(error => console.log(error));

    e.preventDefault();
  };

  render() {
    return (
      <ContactSection>
        <p>
          Feel free to ask me any questions using this form or email me at{' '}
          <OutLink
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:tomchang93@gmail.com"
          >
            tomchang93@gmail.com
          </OutLink>
        </p>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <FormGroup>
            <InputControl
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <InputControl
              type="email"
              name="email"
              placeholder="Email"
              right
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup />
          <FormGroup>
            <InputControl
              type="subject"
              name="subject"
              placeholder="Subject"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <TextAreaControl
              data-gramm_editor="false"
              name="message"
              placeholder="Message"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Submit type="submit" value="Send" />
          </FormGroup>
        </form>
      </ContactSection>
    );
  }
}
