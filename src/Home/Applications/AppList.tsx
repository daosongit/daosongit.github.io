import { ChromeSVG, SnakeSVG } from './AppIcons';

type appListType = { [key: string]: { link: string; icon: React.ReactElement } };

const appList = {
  'Portfolio': { icon: <ChromeSVG />, link: '/portfolio' },
  'Snake': { icon: <SnakeSVG />, link: '/snake' },
} as appListType;

export default appList;
