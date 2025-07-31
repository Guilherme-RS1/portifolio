'use client';

import { useEffect, useRef } from 'react';
import '../styles/AnimatedTitle.css';

export default function AnimatedTitle({ text }) {
  const h1Ref = useRef();

  useEffect(() => {
    const h1 = h1Ref.current;
    const letras = [...text];
    h1.innerHTML = letras.map((letra, i) => {
      return letra === ' '
        ? '&nbsp;'
        : `<span style="--i:${i}">${letra}</span>`;
    }).join('');
  }, [text]);

  return <h1 ref={h1Ref}></h1>;
}