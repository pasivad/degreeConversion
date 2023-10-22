import React from 'react';

import './ThirdMethod.scss';
import { Slider } from '@mui/material';

const marks = [
  {
    value: -200,
    label: '-200',
  },
  {
    value: -150,
    label: '-150',
  },
  {
    value: -100,
    label: '-100',
  },
  {
    value: -50,
    label: '-50',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 100,
    label: '100',
  },
  {
    value: 150,
    label: '150',
  },
  {
    value: 200,
    label: '200',
  },
];

export default function ThirdMethod() {
  const [number, setNumber] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);
  const [choise, setChoise] = React.useState<string>(' °C');

  const [convertFrom, setConvertFrom] = React.useState<string>('celsius');
  const [convertTo, setConvertTo] = React.useState<string>('celsius');

  const handleChange = (event: Event) => {
    setNumber(Number((event.target as HTMLInputElement).value));
  };

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
      <div className="title">ThirdMethod</div>
      <div className="thirdMethod">
        <div>
          <Slider
            min={-200}
            max={200}
            defaultValue={0}
            aria-label="Default"
            marks={marks}
            valueLabelDisplay="on"
            onChange={handleChange}
          />
        </div>
        <div className="convertRadio">
          <div className="convertRadio_group">
            <div className="convertRadio_name">Convert from</div>
            <div className="convertRadio_group__input">
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertFrom"
                  value="celsius"
                  onClick={() => setConvertFrom('celsius')}
                  checked={convertFrom === 'celsius'}
                />
                <label htmlFor="celsius">Celsius</label>
              </div>
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertFrom"
                  value="fahrenheit"
                  onClick={() => setConvertFrom('fahrenheit')}
                  checked={convertFrom === 'fahrenheit'}
                />
                <label htmlFor="fahrenheit">Fahrenheit</label>
              </div>
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertFrom"
                  value="kelvins"
                  onClick={() => setConvertFrom('kelvins')}
                  checked={convertFrom === 'kelvins'}
                />
                <label htmlFor="kelvins">Kelvins</label>
              </div>
            </div>
          </div>
          <div className="convertRadio_group">
            <div className="convertRadio_name">Convert To</div>
            <div className="convertRadio_group__input">
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertTo"
                  value="celsius"
                  onClick={() => setConvertTo('celsius')}
                  checked={convertTo === 'celsius'}
                />
                <label htmlFor="celsius">Celsius</label>
              </div>
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertTo"
                  value="fahrenheit"
                  onClick={() => setConvertTo('fahrenheit')}
                  checked={convertTo === 'fahrenheit'}
                />
                <label htmlFor="fahrenheit">Fahrenheit</label>
              </div>
              <div className="convertRadio_item">
                <input
                  type="radio"
                  name="convertTo"
                  value="kelvins"
                  onClick={() => setConvertTo('kelvins')}
                  checked={convertTo === 'kelvins'}
                />
                <label htmlFor="kelvins">Kelvins</label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="number_choosen">{'You choose: ' + number}</div> */}
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
