import React from 'react'
import { useEffect } from 'react';
import "./playground.css"

const playground = () => {
  const box = React.useRef(null);
  const letters = React.useRef(null);

  useEffect(() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

    const handleOnMove = e => {
      const rect = box.current.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      letters.current.style.setProperty("--x", `${x}px`);
      letters.current.style.setProperty("--y", `${y}px`);

      letters.current.innerText = randomString(1500);
    }

    box.current.addEventListener("mousemove", handleOnMove);

    box.current.addEventListener("touchmove", e => handleOnMove(e.touches[0]));
  }, [])

  return (
    <div>
      <div className='custom-grid'>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="card-track">
            <div className="card-wrapper">
              <div className="card" ref={box}>
                <div className="card-image">
                  <img src="https://assets.codepen.io/1468070/Hyperplexed+Logo+-+Color+5.svg" />
                </div>
                <div className="card-gradient"></div>
                <div className="card-letters" ref={letters}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default playground