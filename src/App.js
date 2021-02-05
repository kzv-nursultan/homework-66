import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Layout from './components/LayOut/LayOut';

function App() {
  return(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' exact component={MainPage}/>
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
