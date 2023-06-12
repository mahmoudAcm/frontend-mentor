//@ts-nocheck
import React, { useState } from 'react';

const zIndex = 10000000000000;

const initialState = { y: 0, x: 0, opacity: 0.9 };

export default function Comp() {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem('di')) || initialState);

  const handleChange = name => evt => {
    setState(prev => ({
      ...prev,
      [name]: Number(evt.target.value)
    }));
  };

  const handleSave = () => {
    localStorage.setItem('di', JSON.stringify(state));
  };

  return (
    <>
      <img
        src='../design/desktop-design.jpg'
        style={{
          position: 'fixed',
          top: state.y,
          left: state.x,
          opacity: state.opacity,
          mixBlendMode: 'difference'
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: 10,
          top: 10,
          zIndex,
          display: 'flex'
        }}
      >
        <input className='w-[80px]' placeholder='y' type='number' value={state.y} onChange={handleChange('y')} />
        <input className='w-[80px]' placeholder='x' type='number' value={state.x} onChange={handleChange('x')} />
        <input
          className='w-[80px]'
          placeholder='opacity'
          type='number'
          value={state.opacity}
          onChange={handleChange('opacity')}
        />
        <button onClick={handleSave}>save</button>
      </div>
    </>
  );
}
