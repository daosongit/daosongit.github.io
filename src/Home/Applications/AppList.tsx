import { ChromeSVG, ConverterSVG, SnakeSVG } from './AppIcons';

type appListType = { [key: string]: { link: string; icon: React.ReactElement } };

const appList = {
  'Portfolio': { icon: <ChromeSVG />, link: '/portfolio' },
  'Snake': { icon: <SnakeSVG />, link: '/snake' },
  'Converter': { icon: <ConverterSVG />, link: '/converter' },
} as appListType;

export default appList;
