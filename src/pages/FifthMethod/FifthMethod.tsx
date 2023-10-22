import React from 'react';

import './FifthMethod.scss';
import { Slider, Stack } from '@mui/material';

const celsiusMarks = [
  {
    value: -200,
    label: '-200°C',
  },
  {
    value: -150,
    label: '-150°C',
  },
  {
    value: -100,
    label: '-100°C',
  },
  {
    value: -50,
    label: '-50°C',
  },
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 50,
    label: '50°C',
  },
  {
    value: 100,
    label: '100°C',
  },
  {
    value: 150,
    label: '150°C',
  },
  {
    value: 200,
    label: '200°C',
  },
];

const fahrenheitMarks = [
  {
    value: -400,
    label: '-400°F',
  },
  {
    value: -300,
    label: '-300°F',
  },
  {
    value: -200,
    label: '-200°F',
  },
  {
    value: -100,
    label: '-100°F',
  },
  {
    value: 0,
    label: '0°F',
  },
  {
    value: 100,
    label: '100°F',
  },
  {
    value: 200,
    label: '200°F',
  },
  {
    value: 300,
    label: '300°F',
  },
  {
    value: 400,
    label: '400°F',
  },
];

const kelvinsMarks = [
  {
    value: 0,
    label: '0K',
  },
  {
    value: 50,
    label: '50K',
  },
  {
    value: 100,
    label: '100K',
  },
  {
    value: 150,
    label: '150K',
  },
  {
    value: 200,
    label: '200K',
  },
  {
    value: 250,
    label: '250K',
  },
  {
    value: 300,
    label: '300K',
  },
  {
    value: 350,
    label: '350K',
  },
  {
    value: 400,
    label: '400K',
  },
  {
    value: 450,
    label: '450K',
  },
  {
    value: 500,
    label: '500K',
  },
];

export default function FifthMethod() {
  const [celsius, setCelsius] = React.useState<number>(0);
  const [fahrenheit, setFahrenheit] = React.useState<number>(0);
  const [kelvins, setKelvins] = React.useState<number>(0);

  const handleChangeCelsius = (event: Event) => {
    setCelsius(Number((event.target as HTMLInputElement).value));
    setFahrenheit(Math.round((celsius * 1.8 + 32) * 100) / 100);
    setKelvins(Math.round((celsius + 273.15) * 100) / 100);
  };

  const handleChangeFahrenheit = (event: Event) => {
    setFahrenheit(Number((event.target as HTMLInputElement).value));
    setCelsius(Math.round((((fahrenheit - 32) * 5) / 9) * 100) / 100);
    setKelvins(Math.round((((fahrenheit - 32) * 5) / 9 + 273.15) * 100) / 100);
  };

  const handleChangeKelvins = (event: Event) => {
    setKelvins(Number((event.target as HTMLInputElement).value));
    setCelsius(Math.round((kelvins - 273.15) * 100) / 100);
    setFahrenheit(Math.round((1.8 * (kelvins - 273.15) + 32) * 100) / 100);
  };

  return (
    <>
      <div className="title">Fifth Method</div>
      <div className="fifthMethod">
        <Stack
          sx={{ height: 500 }}
          spacing={20}
          direction="row"
        >
          <Slider
            orientation="vertical"
            min={-200}
            max={200}
            defaultValue={0}
            aria-label="Default"
            marks={celsiusMarks}
            valueLabelDisplay="on"
            onChange={handleChangeCelsius}
            value={celsius}
          />

          <Slider
            orientation="vertical"
            min={-400}
            max={400}
            defaultValue={0}
            aria-label="Default"
            marks={fahrenheitMarks}
            valueLabelDisplay="on"
            onChange={handleChangeFahrenheit}
            value={fahrenheit}
          />

          <Slider
            orientation="vertical"
            min={0}
            max={500}
            defaultValue={250}
            aria-label="Default"
            marks={kelvinsMarks}
            valueLabelDisplay="on"
            onChange={handleChangeKelvins}
            value={kelvins}
          />
        </Stack>
      </div>
    </>
  );
}
