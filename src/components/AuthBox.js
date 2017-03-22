import React from 'react';

export default (props) => {
  if (props.auth.status === 'LOGGED_IN'){
    return( <div className='authbox'>
              <p className='greeting'> Hi {props.auth.username}! </p>
              <button onClick={props.logOut}>Log Out</button>
            </div>
    );
  } else {
    return( <div className='authbox'>
              <button onClick={()=>props.logIn()}>Log In</button>
            </div>
    );
  }
};
