import React from 'react';

const bemBlockMain = 'mainblock';
const bemBlockInner = 'inner';
const bemElementHeading = '__heading';
const bemElementText = '__text';

function BemIdNaming(count, prefix) {
  let arr = [];
  for (let index = 0; index<=count-1; index++) {
    arr[index] = prefix + '-' + (1 + index);
  }
  return arr;
}

let bemBlockIds = BemIdNaming(3,'mb'); 

export default class MainContent extends React.Component {
  render () {
    return (
      <div className={this.props.wrpinncls}>
        <div className={bemBlockMain} id={bemBlockIds[0]}></div>
        <div className={bemBlockMain} id={bemBlockIds[1]}>
          <div className={bemBlockInner}>
            <h1 className={bemBlockInner+bemElementHeading}>Home company</h1>
            <p className={bemBlockInner+bemElementText}>
              Non qui voluptate sit cillum aliquip adipisicing esse dolore duis. Deserunt Lorem cupidatat labore nulla duis duis deserunt nostrud aliquip sunt occaecat. Ad ut nisi irure ad tempor deserunt qui ullamco mollit exercitation veniam non commodo. Reprehenderit anim nulla labore fugiat non ullamco Lorem minim nisi deserunt deserunt aute tempor enim.
            </p>
          </div>
        </div>
        <div className={bemBlockMain} id={bemBlockIds[2]}></div>
      </div>
    )
  }
}
