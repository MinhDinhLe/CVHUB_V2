import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { create } from 'domain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'tabler-icons-react';
import SignUpPage from './Pages/SignUpPage';
import Header from './Header/Header';
import { Home } from 'lucide-react';
import MyInfoPage from './Pages/MyInfoPage';

function App() {
const theme = createTheme({
  colors: {
    'white': ['#ffffff','#efefef','#dcdcdc','#bdbdbd','#989898','#7c7c7c','#656565','#525252','#464646','#3d3d3d','#292929',
    ],
    'green-haze': [
    '#ebfef5','#d0fbe5', '#a4f6d1','#6aebb9','#2fd89b','#0abf84','#009b6c','#007c5a', '#036248', '#04503d','#012d23',
]
  }
})

return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/find-jobs" element={<HomePage />} /> 
    <Route path="/find-talent" element={<div>Find Talent Page</div>} />
    <Route path="/upload-job" element={<div>Upload Job Page</div>} />
    <Route path="/about" element={<div>About Page</div>} />
    <Route path="/sign-up" element={<SignUpPage />} /> 
    <Route path="/info" element={<MyInfoPage/>} /> 
  </Routes>
</BrowserRouter>
);
}
export default App;
