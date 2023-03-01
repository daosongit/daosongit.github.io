import { Button, Collapse, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { JS_CODE_EXAMPLE, REACT_CODE_EXAMPLE } from './code-example';
import { AiOutlineFile as IcoFile } from 'react-icons/ai';
import { SlArrowRight as IcoArrowRight, SlArrowDown as IcoArrowDown } from 'react-icons/sl';

type CollapseNodeProps = {
  open: boolean;
  link: string;
  language: 'js' | 'jsx';
  code: string;
};

const CodeEditorNode = (props: { code: string; language: 'js' | 'jsx' }) => {
  return (
    <CodeEditor
      value={props.code}
      language={props.language}
      padding={15}
      data-color-mode="dark"
      style={{
        height: '500px',
        overflowY: 'scroll',
        fontSize: 12,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
};

const CollapseNode = (props: CollapseNodeProps) => {
  const { open, link, language, code } = props;
  return (
    <Collapse in={open} sx={{ mx: 'auto', width: '90%' }}>
      <Link
        target="_blank"
        href={link}
        sx={{ display: 'flex', alignItems: 'center', my: '10px', columnGap: '5px' }}>
        <IcoFile color="grey" />
        source
      </Link>
      <CodeEditorNode code={code} language={language} />
    </Collapse>
  );
};

export default function FirstSteps() {
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(false);

  return (
    <Stack>
      <Typography sx={{ color: 'yellow' }}>------TODO REMINDER------</Typography>
      <Button
        onClick={() => setJs(!js)}
        sx={{ display: 'flex', justifyContent: 'flex-start', columnGap: '10px' }}>
        <Typography>My first steps in JS</Typography>
        {js ? <IcoArrowDown size={10} /> : <IcoArrowRight size={10} />}
      </Button>
      <CollapseNode
        open={js}
        language="js"
        code={JS_CODE_EXAMPLE}
        link="https://github.com/daosongit/modapogoda/blob/main/js/cart.js"
      />
      <Button
        onClick={() => setReact(!react)}
        sx={{ display: 'flex', justifyContent: 'flex-start', columnGap: '10px' }}>
        <Typography>My first steps in React</Typography>
        {react ? <IcoArrowDown size={10} /> : <IcoArrowRight size={10} />}
      </Button>
      <CollapseNode
        open={react}
        language="jsx"
        code={REACT_CODE_EXAMPLE}
        link="https://github.com/daosongit/modapogoda.react/blob/master/src/components/ProductCart/ProductCart.jsx"
      />
    </Stack>
  );
}
