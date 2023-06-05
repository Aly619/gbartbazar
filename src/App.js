
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'
import Post from './Pages/PostPage/Post'
import Profile from './Pages/Profile/Profile'
import LandingPage from './Pages/LandingPage/LandingPage'
import Upload from './Pages/UploadPage/Upload'
import SignInDetails from './Pages/SignInDetails/SignInDetails'
import ForgetPassword from './Pages/ForgetPasswordPage/ForgetPassword';
import Verification from './Pages/PasswordVerificationPage/Verification';
import NewPassword from './Pages/NewPasswordPage/NewPassword';
import EmailCode from './Pages/EmailCodeConfirmationPage/EmailCode';
import EmailVerfication from './Pages/EmailVerificationPage/EmailVerfication';
import ContinuePost from './Pages/ContinuePostPage/ContinuePost';
import EditProfileDetail from './Pages/EditProfileDetails/EditProfileDetail';
import EditPostProduct from './Pages/EditPostProduct/EditPostProduct';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';





function App() {

  const [isLoggedIn, setIsloggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/post' element={<Post/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/editprofiledetail' element={<EditProfileDetail/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/signup' element={<SignIn isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>}/>
        <Route path='/login' element={<SignUp isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/verification' element={<Verification/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/signindetails' element={<SignInDetails/>}/>
        <Route path='/emailcode' element={<EmailCode/>}/>
        <Route path='/emailverification' element={<EmailVerfication/>}/>
        <Route path='/continuepost' element={<ContinuePost/>}/>
        <Route path='/editpostproduct' element={<EditPostProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
