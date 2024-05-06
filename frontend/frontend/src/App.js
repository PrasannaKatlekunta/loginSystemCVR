import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './registration/studentSignUp';
import StudentLogin from './login/StudentLogin';
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/StudentRegistration' element={<SignUp />} />
        <Route path="/studentlogin" element={<StudentLogin />}></Route>
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
