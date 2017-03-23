import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  if (props.auth.status === 'LOGGED_IN'){
    return( <div className='authbox'>
              <p className='greeting'> Hi {props.auth.username}! </p>
              <Button className='auth-button' bsStyle="primary" onClick={props.logOut}>Log Out</Button>
            </div>
    );
  } else {
    return( <div className='authbox'>
              <Button className='auth-button' bsStyle="primary" onClick={()=>props.logIn()}>Log In</Button>
            </div>
    );
  }
};
