import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    Email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(contact, null, 2));
  };

  return (
    <>
      <div className="contact">
        <div className="contactlogo">
          <h1>contact us</h1>
          <div className="contactlogopic">
            <img src="customercare.jpeg" alt="Description of the image" />
          </div>
        </div>
        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <div className='contactin'>
              <label htmlFor="username">username</label><br/>
              <input
                type="text"
                name="username"
                className="username"
                id="uname"
                value={contact.username}
                onChange={handleInput}
                placeholder="username"
              />
              <br/>
              <label htmlFor="Email">Email</label> <br/>
              <input
                type="email"
                name="Email"
                className="email"
                id="umail"
                value={contact.Email}
                onChange={handleInput}
                placeholder="Email"
              /><br/>
              <label htmlFor="message">Message</label><br/>
              <textarea
                type="text"
                name="message"
                className="message"
                id="umessage"
                value={contact.message}
                onChange={handleInput}
                placeholder="Message"
              />
              <button type='submit' className='submitbutton'>submit now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
