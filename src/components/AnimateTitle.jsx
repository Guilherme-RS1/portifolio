'use client';

import { useEffect, useRef } from 'react';
import '../styles/AnimatedTitle.css';

export default function AnimatedTitle({ text }) {
  const h2Ref = useRef();

  useEffect(() => {
    const h2 = h2Ref.current;
    const letras = [...text];
    h2.innerHTML = letras.map((letra, i) => {
      return letra === ' '
        ? '&nbsp;'
        : `<span style="--i:${i}">${letra}</span>`;
    }).join('');
  }, [text]);

  return <h2 ref={h2Ref}></h2>;
}