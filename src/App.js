
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'
import Post from './Pages/PostPage/Post'
import Profile from './Pages/Profile/Profile'
import ProfileDetail from './Pages/ProfileDetails/ProfileDetail';
import LandingPage from './Pages/LandingPage/LandingPage'
import Upload from './Pages/UploadPage/Upload'
import SignInDetails from './Pages/SignInDetails/SignInDetails'



import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/post' element={<Post/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profiledetails' element={<ProfileDetail/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/signup' element={<SignIn/>}/>
        <Route path='/login' element={<SignUp/>}/>
        <Route path='/signindetails' element={<SignInDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
