import { Box } from '@mui/material';
import { useState } from 'react';

const zIndex = 10000000000000;

const initialState = { y: 0, x: 0, opacity: 0.9 };

export default function Comp() {
  const [state, setState] = useState(
    () => (JSON.parse(localStorage.getItem('di')!) as typeof initialState) ?? initialState
  );

  const handleChange = (name: string) => (evt: any) => {
    setState(prev => ({
      ...prev,
      [name]: Number(evt.target.value)
    }));
  };

  return (
    <>
      <Box
        component='img'
        src='../design/mobile-design-theme-2.jpg'
        sx={{
          position: 'fixed',
          top: state.y,
          left: state.x,
          opacity: state.opacity,
          mixBlendMode: 'difference'
        }}
      ></Box>
      <Box
        sx={{
          position: 'fixed',
          left: 10,
          top: 10,
          zIndex,
          '& input': {
            width: 80
          }
        }}
      >
        <Box component='input' placeholder='y' type='number' value={state.y} onChange={handleChange('y')} />
        <Box component='input' placeholder='x' type='number' value={state.x} onChange={handleChange('x')} />
        <Box
          component='input'
          placeholder='opacity'
          type='number'
          value={state.opacity}
          onChange={handleChange('opacity')}
        />
        <button
          onClick={() => {
            localStorage.setItem('di', JSON.stringify(state));
          }}
        >
          save
        </button>
      </Box>
    </>
  );
}
