import React from 'react';

function Avatar(props) {
  
  return (

  <span className='contact__avatar'>
    <img src={props.image} alt={props.name}></img> 
  </span> 

  )
}

function TextContact(props) {
  return (
  <span className={'contact__data'}>{props.value}</span>
  )
}

export default function Contact(props) {

  return (

    <article className='contact' data-testid='contact'>

      <Avatar image={props.data.avatar} name={props.data.name} />
      <Avatar value={props.data.name} />
      <Avatar value={props.data.phone} />
      <Avatar value={props.data.country} />
      <Avatar value={props.data.admissionDate} />
      <Avatar value={props.data.company} />
      <Avatar value={props.data.department} />
      
    </article>

  )

}
