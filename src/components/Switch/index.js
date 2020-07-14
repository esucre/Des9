import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  News,
  Merch,
  Nosotros,
  Login,
  PanelUsuario,
  RegistroUsuario,
  RecuperarContrasena,
  Goals,
  Car,
} from './../../pages';

export default function Switcher() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/index.html" exact component={Home}></Route>
      <Route path="/mercancia" exact component={Merch}></Route>
      <Route path="/nosotros" exact component={Nosotros}></Route>
      <Route path="/iniciosesion" exact component={Login}></Route>
      <Route path="/panelusuario" exact component={PanelUsuario}></Route>
      <Route path="/RegistroUsuario" exact component={RegistroUsuario}></Route>
      <Route path="/RecuperarContrasena" exact component={RecuperarContrasena}></Route>
      <Route path="/noticias" exact component={News}></Route>
      <Route path="/metas" exact component={Goals}></Route>
      <Route path="/carrito" component={Car} />
      <Route
        component={() => <h1 className="mt-5 text-center text-capitalize">Error 404</h1>}
      ></Route>
      
    </Switch>
  );
}
