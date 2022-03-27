// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ques from './components/Ques/Ques';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Ques></Ques>
      <Footer></Footer>
    </div>
  );
}

export default App;
