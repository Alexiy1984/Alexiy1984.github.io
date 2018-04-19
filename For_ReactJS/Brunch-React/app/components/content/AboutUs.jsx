import React from 'react';

let date = new Date();
const infodivclass = 'info-div';
const infodivimgclass = infodivclass + '__img';
const infodivinnerclass = infodivclass + '__inner';
const imgpath = 'images/pers-paceholder.png';

const infoaboutus = [
  { id: 1, name: 'Larce'  , bio: '1965'},
  { id: 2, name: 'Max'    , bio: '1975'},
  { id: 3, name: 'Denis'  , bio: '1982'},
  { id: 4, name: 'Robin'  , bio: '1966'}
];

export default class AboutUs extends React.Component {
  render () {
    return (
      <div className="wrapper__inner wrapper__inner_transparent">
        {infoaboutus.map(props =>
          <div className={infodivclass} key={props.id}>
            <div className={infodivinnerclass}>
              <img className={infodivimgclass} src={imgpath} alt="noimage"/>
            </div>
            <div className={infodivinnerclass}>
              <p>Имя: {props.name}</p>
              <p>Год рождения {props.bio}</p>
              <p>Возраст: {date.getFullYear() - props.bio}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
