import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchBox from './components/SearchBox/SearchBox';
import ItemList from './components/Items/ItemList/ItemList';

const App = () => {
    return (
      <BrowserRouter>
        <SearchBox />
        <Switch>
          <Route exact path="/items" component={ItemList} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
