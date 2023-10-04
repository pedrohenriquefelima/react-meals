import { useState } from 'react';
import NavigationBar from './components/navigationBar/NavigationBar';
import HomePage from './pages/home/HomePage';
import CardModal from "./modals/CardModal";

function App() {

  const [cardIsShown, setCardIsShown] = useState(false);

  function showCardHandler(){
    setCardIsShown(true);
  }

  function hideCardHandler(){
    setCardIsShown(false);
  }

  return (
    <>
      {cardIsShown && <CardModal onHideCard={hideCardHandler}/>}
      <NavigationBar onShowCard={showCardHandler}/>
      <HomePage/>
    </>
  );
}

export default App;
