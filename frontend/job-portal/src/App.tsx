import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { create } from 'domain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Router } from 'tabler-icons-react';
import SignUpPage from './SignUpLogin/SignUpPage';
import Header from './Header/Header';
import { Footprints, Home, LogIn } from 'lucide-react';
import MyInfoPage from './Pages/MyInfoPage';
import JobSearch from './LandingPage/JobSearch';
import LoginPage from './SignUpLogin/Login';
import MyCV from './CV/MyCV';
import CompanyListing from './Pages/ListCompany';
import SavedJobs from './Pages/SavedJob';
import JobApply from './Pages/JobApplyed';
import JobSearchPage from './Pages/SuitableJob';
import CVUploadPage from './CV/UploadCv';
import CVTemplatesPage from './CV/CVTemplates';
import CVpreview from './CV/CVpreview';
import TopCVJobListing from './Pages/DetaiJobs';
import CVHubJobListing from './Pages/DetaiJobs';
import AlbertaCompanyPage from './Pages/CompanyDetail';
import CVBuilder from './CV/buildCV';
import DreamJob from './LandingPage/DreamJob';
import Footer from './Footer/Footer'; // Import Footer component

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
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path="/find-jobs" element={<HomePage />} /> 
          <Route path="/sign-up" element={<SignUpPage />} /> 
          <Route path="/info" element={<MyInfoPage/>} /> 
          <Route path="/jobsearch" element={<JobSearch/>} /> 
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/myCV" element={<MyCV/>} /> 
          <Route path="/list-company" element={<CompanyListing/>} /> 
          <Route path="/saved-jobs" element={<SavedJobs/>} /> 
          <Route path="/jobs-applyed" element={<JobApply/>} /> 
          <Route path="/suitable-jobs" element={<JobSearchPage/>} /> 
          <Route path="/upload-cv" element={<CVUploadPage/>} /> 
          <Route path="/template-cv" element={<CVTemplatesPage/>} /> 
          <Route path="/preview-cv" element={<CVpreview/>} /> 
          <Route path="/job-details/:id" element={<CVHubJobListing/>} />
          <Route path="/company-details" element={<AlbertaCompanyPage/>} /> 
          <Route path="/build-cv" element={<CVBuilder/>} /> 
          <Route path="/" element={<DreamJob/>} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
}
export default App;