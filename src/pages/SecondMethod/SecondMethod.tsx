import React from 'react';

import './SecondMethod.scss';

export default function SecondMethod() {
  const [number, setNumber] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);
  const [choise, setChoise] = React.useState<string>(' °C');

  const [arr, setArr] = React.useState<Array<number>>(Array.from({ length: 100 }, (_, index) => index + 1));

  const [convertFrom, setConvertFrom] = React.useState<string>('celsius');
  const [convertTo, setConvertTo] = React.useState<string>('celsius');

  const handleBackButton = () => {
    setArr(arr.map((el: number) => el - 100));
  };

  const handleNextButton = () => {
    setArr(arr.map((el: number) => el + 100));
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
      <div className="title">Second Method</div>
      <div>
        <div className="number_choosen">{'You choose: ' + number}</div>

        <div className="mainBlock">
          <button
            disabled={arr[0] === -499 ? true : false}
            className="buttonTable"
            onClick={handleBackButton}
          >
            back
          </button>

          <table>
            {Array.from(Array(11).keys()).map((el) => (
              <tr>
                {arr.slice(el + 9 * (el - 1) - 1, el * 10).map((value) => (
                  <td
                    onClick={() => setNumber(value)}
                    className={number === value ? 'number__choosen' : 'number'}
                  >
                    {value.toString()}
                  </td>
                ))}
              </tr>
            ))}
          </table>
          <button
            disabled={arr[99] === 500 ? true : false}
            className="buttonTable"
            onClick={handleNextButton}
          >
            next
          </button>
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
