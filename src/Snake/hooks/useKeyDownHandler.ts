import { useEffect } from 'react';
import { MOVE_DIRECTION } from '../constants';

interface KeyDownHandlerProps {
  direction: string;
  changeDirection: (d: string) => void;
}

export default function useKeyDownHandler({ direction, changeDirection }: KeyDownHandlerProps) {
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (Object.values(MOVE_DIRECTION).includes(e.key)) {
        changeDirection(e.key);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [direction]);
}
