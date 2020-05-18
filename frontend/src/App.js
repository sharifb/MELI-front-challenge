import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchBox from './components/SearchBox/SearchBox';
import ItemList from './components/Items/ItemList/ItemList';
import ItemDescription from './components/Items/ItemDescription/ItemDescription';

const App = () => {
    return (
      <BrowserRouter>
        <SearchBox />
        <Switch>
          <Route exact path="/items" component={ItemList} />
          <Route exact path="/items/:id" component={ItemDescription} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
