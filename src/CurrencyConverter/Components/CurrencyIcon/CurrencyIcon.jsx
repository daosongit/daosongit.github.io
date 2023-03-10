import { FaDollarSign as IcoUSD, FaHryvnia as IcoUAH, FaEuroSign as IcoEUR } from 'react-icons/fa';

export default function CurrencyIcon({ currency, color = '#000' }) {
  switch (currency) {
    case 'usd':
      return <IcoUSD color={color} />;
    case 'uah':
      return <IcoUAH color={color} />;
    case 'eur':
      return <IcoEUR color={color} />;
    default:
      return <></>;
  }
}
