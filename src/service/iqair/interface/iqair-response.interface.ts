interface Location {
  type: string;
  coordinates: [number, number];
}

interface Pollution {
  ts: string;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

interface Weather {
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

interface Current {
  pollution: Pollution;
  weather: Weather;
}

interface Data {
  city: string;
  state: string;
  country: string;
  location: Location;
  current: Current;
}

export interface IqairApiResponse {
  status: string;
  data: Data;
}
