import React, { Component } from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

import UserComponent from '../components/userComponent'


class UserView extends Component {
    render(){
        return (
            <div>
                <Header/>
                <UserComponent/>
            </div> 
        );
    }

}

export default UserView;