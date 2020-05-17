import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header>

        <div className="container">
          <section className="filters">
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar" />

              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            <button className="filters__item is-selected">
              Nome <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              País <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>

        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
