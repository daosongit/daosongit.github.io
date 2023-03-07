import { Box } from '@mui/material';
import {
  SiJavascript as IcoJS,
  SiReact as IcoReact,
  SiTypescript as IcoTypescript,
  SiGit as IcoGit,
  SiMaterialui as IcoMUI,
  SiRedux as IcoRedux,
  SiHtml5 as IcoHTML,
  SiCss3 as IcoCss,
} from 'react-icons/si';

import {
  GitStack,
  HtmlCssStack,
  JsStack,
  MUIStack,
  ReactStack,
  ReduxtStack,
  TypescriptStack,
} from './TechDescription';

const stackList = [
  {
    label: 'JavaScript',
    _icon: <IcoJS size={20} color="#efd81d" />,
    get icon() {
      return this._icon;
    },
    set icon(value) {
      this._icon = value;
    },
    aria: 'JavaScript knowledges',
    text: <JsStack />,
  },
  {
    label: 'React',
    icon: <IcoReact size={20} color="#61dafb" />,
    aria: 'React knowledges',
    text: <ReactStack />,
  },
  {
    label: 'Typescript',
    icon: <IcoTypescript size={20} color="#0076c6" />,
    aria: 'Typescript knowledges',
    text: <TypescriptStack />,
  },
  {
    label: 'Redux',
    icon: <IcoRedux size={20} color="#7248b6" />,
    aria: 'Redux knowledges',
    text: <ReduxtStack />,
  },
  {
    label: 'MUI',
    icon: <IcoMUI size={20} color="#007bf7" />,
    aria: 'MUI knowledges',
    text: <MUIStack />,
  },
  {
    label: 'HTML/CSS',
    icon: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IcoHTML size={20} color="#ec7531" /> <IcoCss size={20} color="#254bdd" />
      </Box>
    ),
    aria: 'HTML/CSS knowledges',
    text: <HtmlCssStack />,
  },

  {
    label: 'Git',
    icon: <IcoGit size={20} color="#e84d31" />,
    aria: 'Git knowledges',
    text: <GitStack />,
  },
];

export default stackList;
