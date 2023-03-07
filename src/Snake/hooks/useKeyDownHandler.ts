import { Theme, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { MOVE_DIRECTION } from '../modules/constants';

interface KeyDownHandlerProps {
  direction: string;
  changeDirection: (d: string) => void;
}

export default function useKeyDownHandler({ direction, changeDirection }: KeyDownHandlerProps) {
  const MD_DISPLAY = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    if (!MD_DISPLAY) return;
    const keyDownHandler = (e: KeyboardEvent) => {
      if (Object.values(MOVE_DIRECTION).includes(e.key)) {
        changeDirection(e.key);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [direction, MD_DISPLAY, changeDirection]);
}
