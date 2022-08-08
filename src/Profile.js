import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    render() {
        const {user} = this.props.auth0;
        return (
            <>
                { user &&
                    <>
                      <p>Hello {user.name}</p>
                      <p>Email : {user.email}</p>
                      <img src={user.picture} alt='IMG'/>
                    </>

                }
            </>
        );
    }
}

export default withAuth0(Profile); 