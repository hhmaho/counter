import React from 'react';
import Points from './components/Points';
import List from './components/List';
import Count from './components/Count';

const App = () =>
      <div>
        <Count/>
        <Points/>
        <List names={
          ["An", "Steve", "Sarah", "Jan"]
        }/>
      </div >


export default App;