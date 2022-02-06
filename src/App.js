import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';


// import Myproduct from './components/Myproduct';

function App() {
  return (
  <Layout>
     <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
{/*        
      <h1> My Products</h1>
       <Myproduct text='Sisley cosmetics' />
       <Myproduct text='Dior perfums'/>
       <Myproduct text='Coco chanel'/>
       <Myproduct text='Body Creams'/> */}

</Layout> 

     );
  }

export default App;
