import React, { Component } from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
import { auth , handleUserProfile } from './firebase/utilis';


import Homepage from './pages/Homepage';
import Registration from './pages/Registration/index';
import Login from './pages/login/index';
import Recovery from './pages/Recovery/index';


import MainLayout from './../src/layouts/MainLayout';
import HomepageLayout from './../src/layouts/HomepageLayout';

import './default.scss';

const initialState = {
  currentUser: null
};

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    ...initialState
  };
}

authListener = null;

componentDidMount () {
  this.authListener = auth.onAuthStateChanged(async userAuth => {
   if (userAuth) {
     const userRef = await handleUserProfile(userAuth);
     userRef.onSnapshot(snapshot => {
       this.setState({
        currentUser: {
          id: snapshot.id,
          ...snapshot.data()
        }
       })
    })
  }

  this.setState({
    ...initialState
  });
});
}

componentWillUnmount () {
 this.authListener ();
}

  render () {
    const { currentUser } = this.state;

    return (
      <div className='App'>
        
          <Routes>
            <Route path="/" exact element={
              <HomepageLayout currentUser={currentUser}>
                <Homepage/>
              </HomepageLayout>
            } />
            <Route path="/registration" 
            element={ currentUser ? <Navigate to="/"/> : (
              <MainLayout currentUser={currentUser}>
                <Registration/>
              </MainLayout>
            )      
          } />
          <Route path="/login" 
            element={currentUser ? <Navigate to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login/>
              </MainLayout> 
            )} />
          
          <Route path="/recovery" 
          element={currentUser ? <Navigate to="/" /> : (
              <MainLayout currentUser={currentUser}>
                  <Recovery />
              </MainLayout>
          )} />

          </Routes>   
        
      </div>
    );
  }
  
}

export default App;

