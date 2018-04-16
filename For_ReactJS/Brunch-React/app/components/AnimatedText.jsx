import React from 'react';

const strarr = ['Главная', 'О нас' , 'Наши работы' , 'Контакты'];

const  clname = 'animated-text';

function SplitAndWrap (StringArray) {
  let arr = [];
    StringArray.forEach(element => {
     arr[StringArray.indexOf(element)] = element.split('')
    }); 
    return arr;
}

let charr = SplitAndWrap(strarr);
console.log(charr[1]);

export default class AnimText extends React.Component {
  render() {
    return (
      <a>
        {charr.map(p => 
          <p key={p.indexOf(p)}>{p}</p>
        )}
      </a>  
    );
  }
}
