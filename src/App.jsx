import Header from './components/Header';
import Carditem from './components/card/Carditem';
import Footer from './components/Footer';

function App(){
  return(
    <>
    <Header/>
    <main>
      <Carditem/>
      <Carditem/>
      <Carditem/>
      <Carditem/>
    </main>
    <Footer/>
    </>
  ); 
}

export default App;