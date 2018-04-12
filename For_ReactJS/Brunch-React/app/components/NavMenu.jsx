import React from 'react';

const pages = [
  {id:1, name: 'Главная'     ,link: 'Index.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:2, name: 'О нас'       ,link: 'About.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:3, name: 'Наши работы' ,link: 'Works.html'    , iclass: 'nav-menu__item', aclass: 'nav-menu__link'},
  {id:4, name: 'Контакты'    ,link: 'Contacts.html' , iclass: 'nav-menu__item', aclass: 'nav-menu__link'}
];

const mappingFunction = p => <li key={p.id}>{p.name}</li>;

export default class NavMenu extends React.Component {
  render() {
    return (
      <div className="navigation-menu" id="nav">
        <ul className="nav-menu">
          {pages.map(p => <li key={p.id} className={p.iclass}><a href={p.link} className={p.aclass}>{p.name}</a></li>)}
        </ul>
      </div>
    );
  }
}
