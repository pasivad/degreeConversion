import React from 'react';

import './FourthMethod.scss';

export default function FourthMethod() {
  const [number, setNumber] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);
  const [choise, setChoise] = React.useState<string>(' °C');
  const [step, setStep] = React.useState<number>(1);

  const [convertFrom, setConvertFrom] = React.useState<string>('celsius');
  const [convertTo, setConvertTo] = React.useState<string>('celsius');

  const handleCalculateClick = () => {
    // Celsius
    if (convertFrom === 'celsius') {
      if (convertTo === 'fahrenheit') {
        setResult(number * 1.8 + 32);
        setChoise(' °F');
      } else if (convertTo === 'kelvins') {
        setResult(number + 273.15);
        setChoise(' K');
      } else {
        setResult(number);
        setChoise(' °C');
      }
    }
    // Fahrenheit
    if (convertFrom === 'fahrenheit') {
      if (convertTo === 'celsius') {
        setResult(((number - 32) * 5) / 9);
        setChoise(' °C');
      } else if (convertTo === 'kelvins') {
        setResult(((number - 32) * 5) / 9 + 273.15);
        setChoise(' K');
      } else {
        setResult(number);
        setChoise(' °F');
      }
    }
    // Kelvin
    if (convertFrom === 'kelvins') {
      if (convertTo === 'celsius') {
        setChoise(' °C');
        setResult(number - 273.15);
      } else if (convertTo === 'fahrenheit') {
        setChoise(' °F');
        setResult(1.8 * (number - 273.15) + 32);
      } else {
        setResult(number);
        setChoise(' K');
      }
    }
  };

  return (
    <>
      <div className="title">Fourth Method</div>
      <div className="enterStep">
        <label
          htmlFor="enterStep"
          className="enterStep_label"
        >
          Enter Step
        </label>
        <input
          type="number"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
          className="enterStep_input"
        />
      </div>
      <div className="fourthMethod">
        <div className="stepButtons_group">
          <button
            className="stepButton"
            onClick={() => setNumber(number - step)}
          >
            -
          </button>
          <button
            className="stepButton"
            onClick={() => setNumber(number + step)}
          >
            +
          </button>
        </div>
        <div className="number_choosen">{'You choose: ' + number}</div>

        <div className="convertBlock">
          <div className="convertFrom">
            <label
              htmlFor="startPos"
              className="convert_label"
            >
              Convert from
            </label>
            <select
              onChange={(e) => setConvertFrom(e.target.value)}
              name="startPos"
              className="convert_input"
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvins">Kelvins</option>
            </select>
          </div>
          <div className="convertTo">
            <label
              htmlFor="endPos"
              className="convert_label"
            >
              Convert to
            </label>
            <select
              onChange={(e) => setConvertTo(e.target.value)}
              name="endPos"
              className="convert_input"
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvins">Kelvins</option>
            </select>
          </div>
        </div>
        <button
          className="calculateButton"
          onClick={handleCalculateClick}
        >
          Calculate
        </button>
        <div className="result">
          {Math.round(result * 100) / 100}
          <span>{choise}</span>
        </div>
      </div>
    </>
  );
}
