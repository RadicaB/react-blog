import {Fragment} from 'react';
import { Header } from './Components/Header/header.js';
import { BlogList } from './Components/Blog/blog.js';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}
export default App;

