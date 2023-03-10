import { useEffect, useState } from 'react';
import cl from './Converter.module.scss';
import Converter from './Components/Converter/Converter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import fetchCurrency from './api/fetchCurrency';
import TopNavigation from '../Components/TopNavigation';

export default function App() {
  const [rate, setRate] = useState();
  const currentDay = new Date().getDate();

  useEffect(() => {
    // fetching currency rate only once a day
    const storage = JSON.parse(localStorage.getItem('rates'));
    if (storage && storage.day === currentDay) {
      setRate(storage.rates);
      return;
    }
    (async () => {
      const responce = await fetchCurrency();
      const storage = JSON.stringify({ rates: responce, day: currentDay });
      localStorage.setItem('rates', storage);
      setRate(responce);
    })();
  }, [currentDay]);

  return (
    <>
      <TopNavigation />
      <Header rate={rate} />
      <main className={cl.main}>
        <div className={cl.converterContainer}>
          {rate ? <Converter rate={rate} /> : <span className={cl.loader}></span>}
        </div>
      </main>
      <Footer />
    </>
  );
}
