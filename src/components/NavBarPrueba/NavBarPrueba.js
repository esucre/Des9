import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogoNavBar from '../../assets/img/LogoNombre.png';

const SpanNoticias = (route) => <span className="front fas fa-newspaper"></span>;

const LinkWrapper = ({ children, route }) => {
  const history = useHistory();

  const click = useCallback(() => {
    history.push(route || '/');
  }, [route, history]);

  return (
    <div onClick={click}>
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </div>
  );
};

const NavbBarPrueba = () => {
  return (
    <ul className="menu">
      <li className="menu_list">
        <Link to="/">
          <span className="front">
            <img className="logo" src={LogoNavBar} alt="" />
          </span>
        </Link>
      </li>

      <li className="menu_list">
        <LinkWrapper route="/iniciosesion">
          <span className="front fas fa-user-astronaut"></span>

          <Link to="/iniciosesion" className="side">
            Inicio sesión
          </Link>
        </LinkWrapper>
      </li>
      <li className="menu_list">
        <LinkWrapper route="/panelusuario">
          <span className="front fas fa-user"></span>
          <Link to="/car" className="side">
            Perfil
          </Link>
        </LinkWrapper>
      </li>
      <li className="menu_list">
        <LinkWrapper route="/nosotros">
          <span className="front fas fa-users"></span>
          <Link to="/nosotros" className="side">
            Nosotros
          </Link>
        </LinkWrapper>
      </li>
      <li className="menu_list">
        <LinkWrapper route="/noticias">
          <span className="front fas fa-newspaper"></span>
          <Link to="/noticias" className="side">
            Noticias
          </Link>
        </LinkWrapper>
      </li>
      <li className="menu_list">
        <LinkWrapper route="/mercancia">
          <span className="front fas fa-briefcase"></span>
          <Link to="/mercancia" className="side">
            Mercancía
          </Link>
        </LinkWrapper>
      </li>

      <li className="menu_list">
        <LinkWrapper route="/metas">
          <span className="front fas fa-flag"></span>
          <Link to="/metas" className="side">
            Metas
          </Link>
        </LinkWrapper>
      </li>
      <li className="menu_list">
        <LinkWrapper route="/carrito">
          <span className="front fas fa-shopping-cart"></span>
          <Link to="/carrito" className="side">
            Carrito
          </Link>
        </LinkWrapper>
      </li>
    </ul>
  );
};

export default NavbBarPrueba;
