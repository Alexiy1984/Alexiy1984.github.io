import React from 'react';

function UserList(props) {
  let user = [];
  for (let i = 0; i < props.users.length; i++) {
    user.push(props.children(props.users[i]));
    // console.log(props.users[i]);
    // console.log(props.children(i));
  }
  return <ul className={props.Mclass}>{user}</ul>;
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
    // console.log(props.children(i));
  }
  return <div>{items}</div>;
}

export default class Contacts extends React.Component {
  render () {
    const bemBlockContactList     = 'contact-list';
    const bemBlockContactListItem = bemBlockContactList + '__item';
    const bemElementListItemRow   = bemBlockContactListItem + '__row';
    const bemElementListItemCol   = bemBlockContactListItem + '__col';
    const bemItemPostfixs = ['-drop-shadow'];
    const bemColPostfixs = ['-xs', '-sm', '-md', '-lg'];
    const bemRowPostfixs = ['-colored', '-underlined'];
    const users = [
      {id: 1, name: 'Vasiliy' , post: 'Team lead',   tel: '+7978 777 55 01', email: 'boss@perfteam.com'}, 
      {id: 2, name: 'Pete' , post: 'Team member', tel: '+7978 777 55 02', email: 'work1@perfteam.com'}, 
      {id: 3, name: 'Nike' , post: 'Team member', tel: '+7978 777 55 03', email: 'work2@perfteam.com'}, 
      {id: 4, name: 'Stephan', post: 'Team member', tel: '+7978 777 55 04', email: 'work3@perfteam.com'}
    ];
    const num = 7;
    return (
      <div className="wrapper__inner">
        <UserList users={users} Mclass={bemBlockContactList}>
          {(user) => <li key={user.id} className={bemBlockContactListItem+' '+bemBlockContactListItem+bemItemPostfixs}>
            <span className={bemElementListItemRow+' '+bemElementListItemRow+bemRowPostfixs[0]}><span className={bemElementListItemCol+bemColPostfixs[1]}>Name:  </span>{user.name}</span>
            <span className={bemElementListItemRow+' '+bemElementListItemRow+bemRowPostfixs[1]}><span className={bemElementListItemCol+bemColPostfixs[1]}>Post:  </span>{user.post}</span>
            <span className={bemElementListItemRow+' '+bemElementListItemRow+bemRowPostfixs[1]}><span className={bemElementListItemCol+bemColPostfixs[1]}>Tel:   </span>{user.tel}</span>
            <span className={bemElementListItemRow+' '+bemElementListItemRow+bemRowPostfixs[1]}><span className={bemElementListItemCol+bemColPostfixs[1]}>Email: </span>{user.email}</span>
          </li>}
        </UserList>
        {/* <Repeat numTimes={num}>
          {(index) => <div key={index}>This is item {index+1} in the list</div>}
        </Repeat> */}
      </div>
    )
  }
}
