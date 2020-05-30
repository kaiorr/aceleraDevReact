import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState("Meu Usuário")
  const [avatar, setAvatar] = useState("")
  const [username, setUsername] = useState("user")
  const [email, setEmail] = useState("user@gmail.com")
  const [submit, setSubmit] = useState(false)

  const handleSetName = (event) => {
    const { value } = event.target 
    setName(value)
  }

  const handleSetAvatar = (event) => {
    const { value } = event.target 
    setAvatar(value)
  }

  const handleSetUserName = (event) => {
    const { value } = event.target
    setUsername(value)
  }

  const handleSetEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleAddUser = (event) => {
    event.preventDefault()
    
    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    })
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      metod: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postObject,
    }).then(() => setSubmit(true))
  }


  return (
    <React.Fragment>

      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user">
                <div className="user__thumb">
                  {avatar  ? (
                    <img src={avatar} alt=""/>
                  ) : (
                    <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=""/>
                  )}
                </div>
                {name && (
                  <p className="user__name">
                    <span>@{username}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input 
              type="text"
              value={name}
              placeholder="Ex: Usuário"
              onChange={(event) => handleSetName(event)}
            />

            <label>Usuário</label>
            <input 
              type="text"
              value={username}
              placeholder="Ex: my_user"
              onChange={(event) => handleSetUserName(event)}
            />

            <label>Email</label>
            <input 
              type="text"
              value={email}
              placeholder="Ex: email@email.com"
              onChange={(event) => handleSetEmail(event)}
            />

            <label>Url da Imagem do Perfil</label>
            <input 
              type="text"
              placeholder="http://..."
              onChange={(event) => handleSetAvatar(event)}
            />

          <button type="button" onClick={(event) => handleAddUser(event)}>
            Cadastrar
          </button>

          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}

    </React.Fragment>
  );
};

export default UserForm;
