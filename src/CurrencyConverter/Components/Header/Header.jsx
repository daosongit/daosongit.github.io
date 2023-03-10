import cl from './Header.module.scss';
import CurrencyIcon from '../CurrencyIcon/CurrencyIcon';
import { ConverterSVG } from '../../../Home/Applications/AppIcons';

export default function Header({ rate }) {
  return (
    <header className={cl.header}>
      <div className={cl.title}>
        <div className={cl.logo}>
          <ConverterSVG />
          {/* <img src="images/currency-logo.png" alt="logo" /> */}
        </div>
        <span>Currency converter</span>
      </div>
      <div className={cl.rateContainer}>
        <span className={cl.rate}>
          <CurrencyIcon currency="usd" color="#fff" /> {rate?.usd.uah.toFixed(2) || 0}
        </span>
        <span className={cl.rate}>
          <CurrencyIcon currency="eur" color="#fff" /> {rate?.eur.uah.toFixed(2) || 0}
        </span>
      </div>
    </header>
  );
}
