import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import './App.css';
import Login from './Login';
import Car from './Car';
import Home from './Home';
import Homepage from './pages/Homepage';
import Life from './Life';
import InsuranceForm from './InsuranceForm';
import RegistrationForm from './RegistrationForm';
import Jeevan from './Jeevan';
import Bachat from './Bachat';
import NewChildren from './NewChildren';
import Endowment from './Endowment';
import Fire from './Fire';
import BurglaryTheftForm from './BurglaryTheftForm';
import ReplaceForm from './ReplaceForm';
import LossOfRentForm from './LossOfRentForm';
import Products from './Products';
import CarDamageForm from './CarDamageForm';
import DamagesInsideCarForm from './DamagesInsideCarForm';
import DamageOfCarForm from './DamageOfCarForm';
import About from './About';
import Policy from './Policy';
import Contact from './Contact';
import Premium from './Premium';
import Payments from './Payments';
import Money20 from './Money20';
import Fireinsurace from './Fireinsurance';
import DamByCar from './DamByCar';
import Landing from './Landing';
import Paymentpage from './Paymentpage';
function App() {
  return (
    <div className='App'>
    <><BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path="/" element={<Landing />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Car' element={<Car/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Life' element={<Life/>}/>
          <Route path='/InsuranceForm' element={<InsuranceForm/>}/>
          <Route path='/RegistrationForm'element={<RegistrationForm/>}/>
          <Route path='/Jeevan' element={<Jeevan/>}/>
          <Route path='/Bachat' element={<Bachat/>}/>
          <Route path='/NewChildren' element={<NewChildren/>}/>
          <Route path='/Endowment'element={<Endowment/>}/>
          <Route path='/Fire' element={<Fire/>}/>
          <Route path='/BurglaryTheftForm' element={<BurglaryTheftForm/>}/>
          <Route path='/ReplaceForm' element={<ReplaceForm/>}/>
          <Route path='/LossOfRentForm'element={<LossOfRentForm/>}/>
          <Route path='/Products'element={<Products/>}/>
          <Route path='/CarDamageForm'element={<CarDamageForm/>}/>
          <Route path='/DamagesInsideCarForm'element={<DamagesInsideCarForm/>}/>
          <Route path='/DamageOfCarForm'element={<DamageOfCarForm/>}/>
          <Route path='/About'element={<About/>}/>
          <Route path='/Policy'element={<Policy/>}/>
          <Route path='/Contact'element={<Contact/>}/>
          <Route path='/Premium'element={<Premium/>}/>
          <Route path='/Payments'element={<Payments/>}/>
          <Route path='/Products'element={<Products/>}/>
          <Route path='/Money20'element={<Money20/>}/>
          <Route path='/Fireinsurance'element={<Fireinsurace/>}/>
          <Route path='/DamByCar'element={<DamByCar/>}/>
          <Route path="/Paymentpage"element={<Paymentpage/>}/>
        </Routes>
    </BrowserRouter></>
    </div>

  );
};

export default App;
