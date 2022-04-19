import { Container,Col,Row} from 'react-bootstrap';
import './App.css';
import Home from './Components/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SecondNavBar from './Components/NavigationBar/SecondNavBar/SecondNavBar';
import { BrowserRouter,Routes,Link,Route, Navigate, NavLink } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus';
import Activities from './Components/Activities/Activities';
import Resort from './Components/Resort/Resort';
import Accomadation from './Components/Accomadation/Accomadation';
import EnvironmentPolicies from './Components/EnvironmentPolicies/EnvironmentPolicies';
import Ayurweda from './Components/Ayurweda/Ayurweda';
import Reservations from './Components/Reservations/Reservations';



function App() {
  return (
    <div >
      <Row>
      <Container className='body-container'>
        <Col>
        <NavigationBar/>
        <div className='secondfooter'>
        <SecondNavBar/>
        </div>
        <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/activity' element={<Activities/>}/>
        <Route path='/resort' element={<Resort/>}/>
        <Route path='/accomadation' element={<Accomadation/>}/>
        <Route path='/environment' element={<EnvironmentPolicies/>}/>
        <Route path='/ayurweda' element={<Ayurweda/>}/>
        <Route path='/reservation' element={<Reservations/>}/>
       
      </Routes>

      </BrowserRouter>
        
        
        </Col>
        
      </Container>
      </Row>

     
     

    </div>
  );
}

export default App;
