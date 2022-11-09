import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/js/bootstrap"
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddBook from './components/AddBook';
import ListofBooks from './components/ListofBooks';
import Editbook from './components/Editbook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path='/addbook' element={<AddBook></AddBook>}></Route>
    <Route path='/listofbooks' element={<ListofBooks></ListofBooks>}></Route>
    <Route path='/editbook/:id' element={<Editbook></Editbook>}></Route>
    </Route>
  </Routes>
</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
