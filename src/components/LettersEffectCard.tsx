import React from 'react'
import { useEffect } from 'react';
import "./playground.css"

const LettersEffectCard = () => {
  const box = React.useRef<HTMLDivElement>(null);
  const letters = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");

    const handleOnMove = (e: { clientX: number; clientY: number; }) => {
      if (!box.current || !letters.current) return;
      const rect = box.current.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      letters.current.style.setProperty("--x", `${x}px`);
      letters.current.style.setProperty("--y", `${y}px`);

      letters.current.innerText = randomString(1500);
    }

    if (!box.current || !letters.current) return;

    box.current.addEventListener("mousemove", handleOnMove);

    box.current.addEventListener("touchmove", e => handleOnMove(e.touches[0]));
  }, [])

  return (
    <div className="card-track">
      <div className="card-wrapper">
        <div className="card" ref={box}>
          {/* <div className="card-image">
            <img src="https://assets.codepen.io/1468070/Hyperplexed+Logo+-+Color+5.svg" />
          </div> */}
          <div className="card-gradient"></div>
          <div className="card-letters" ref={letters}></div>
        </div>
      </div>
    </div>
  )
}

export default LettersEffectCard;