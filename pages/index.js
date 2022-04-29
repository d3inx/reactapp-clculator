import { useState } from 'react';

export default function Home() {

  const [result , setResult] = useState(0);
  const [number , setNumber] = useState('');
  const [screen , setScreen] = useState('');
  const [sign , setSign] = useState('');
  const calHandler = e => {
    screen === '' ? setScreen(e.target.innerHTML) : setScreen(screen + e.target.innerHTML)
    number === '' ? setNumber(e.target.innerHTML) : setNumber(number + e.target.innerHTML)
  }
  const clearHandler = e => {
    setResult(0)
    setNumber('')
    setScreen('')
    setNumber('')
  }
  const singHandler = e => {
    setSign(e.target.innerHTML);
    screen === '' ? setScreen(e.target.innerHTML) : setScreen(screen + e.target.innerHTML)
    console.log(sign);
    switch (sign || e.target.innerHTML) {
      case "/":
        result === 0 ? setResult(Number(number)) : setResult(result / Number(number))
        break;
      case "*":
        result === 0 ? setResult(Number(number)) : setResult(result * Number(number))
        break;
      case "+":
        result === 0 ? setResult(Number(number)) : setResult(result + Number(number))
        break;
      case "-":
        result === 0 ? setResult(Number(number)) : setResult(result - Number(number))
        break;
      default:
        break;
    }
    setNumber('')
  }
  const equalHandler = e => {
    switch (sign) {
      case "/":
        setResult(result / Number(number))
        setScreen(result / Number(number))
        break;
      case "*":
        setResult(result * Number(number))
        setScreen(result * Number(number))
        break;
      case "+":
        setResult(result + Number(number))
        setScreen(result + Number(number))
        break;
      case "-":
        setResult(result - Number(number))
        setScreen(result - Number(number))
        break;
      case "":
        setResult(Number(number))
      default:
        break;
    }
    setNumber('')
  }

  return (
    <div className="calculator">
      <div className="screen">{screen}
      <span className='result'>{result}</span>
      </div>
      <div className="buttons">
        <div className="numbers">
          <button data-val="9" onClick={calHandler}>9</button>
          <button data-val="8" onClick={calHandler}>8</button>
          <button data-val="7" onClick={calHandler}>7</button>
          <button data-val="6" onClick={calHandler}>6</button>
          <button data-val="5" onClick={calHandler}>5</button>
          <button data-val="4" onClick={calHandler}>4</button>
          <button data-val="3" onClick={calHandler}>3</button>
          <button data-val="2" onClick={calHandler}>2</button>
          <button data-val="1" onClick={calHandler}>1</button>
          <button data-val="clear" onClick={clearHandler}>C</button>
          <button data-val="." onClick={calHandler}>.</button>
          <button data-val="0" onClick={calHandler}>0</button>
        </div>
        <div className="operators">
          <button data-val="÷" onClick={singHandler}>/</button>
          <button data-val="x" onClick={singHandler}>*</button>
          <button data-val="-" onClick={singHandler}>-</button>
          <button data-val="+" onClick={singHandler}>+</button>
          <button data-val="=" onClick={equalHandler}>=</button>
        </div>
      </div>
    </div>
  )
}
