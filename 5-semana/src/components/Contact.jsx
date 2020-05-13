import React from 'react';

import './Contact.scss';

function ContactImage(props) {
  return (
    <span className="contact__avatar">
      <img src={props.image} alt={props.name}></img>
    </span>
  );
}

function ContactText(props) {
  return (
  <span className='contact__data'>{props.value}</span>
  );
}

export default function Contact(props) {
  return (
      <article className="contact" data-testid="contact">
        <ContactImage image={props.data.avatar} name={props.data.name} />
        <ContactText value={props.data.name} />
        <ContactText value={props.data.phone} />
        <ContactText value={props.data.country} />
        <ContactText value={props.data.admissionDate} />
        <ContactText value={props.data.company} />
        <ContactText value={props.data.department} />
      </article>
  );
}