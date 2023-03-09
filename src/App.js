import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './screens/admin-login';
import StudentLogin from './screens/student-login';
import SignUp from './screens/register';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import AddQuestion from './screens/add-question';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='admin-login' element={<AdminLogin />} />
        <Route path='student-login' element={<StudentLogin />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='dashboard'>
          <Route index element={<Dashboard />} />
          <Route path='add-question' element={<AddQuestion />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
