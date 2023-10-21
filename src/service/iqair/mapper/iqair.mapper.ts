import { Point } from 'geojson';
import { IqairApiResponse } from '../interface/iqair-response.interface';

export class IqairApiResponseMapper {
  public static toDomain(iqairApiResponse: IqairApiResponse) {
    const {
      data: {
        current: { pollution },
      },
    } = iqairApiResponse;

    return {
      Result: {
        Pollution: {
          ...pollution,
        },
      },
    };
  }

  public static toPersistance(iqairApiResponse: IqairApiResponse) {
    const {
      data: {
        city,
        state,
        country,
        location,
        current: { pollution, weather },
      },
    } = iqairApiResponse;
    return {
      city: city,
      state: state,
      country: country,
      location: {
        type: 'Point',
        coordinates: [location.coordinates[0], location.coordinates[1]],
      } as Point,
      pollution_ts: pollution.ts,
      pollution_aqius: pollution.aqius,
      pollution_mainus: pollution.mainus,
      pollution_aqicn: pollution.aqicn,
      pollution_maincn: pollution.maincn,
      weather_ts: weather.ts,
      weather_tp: weather.tp,
      weather_pr: weather.pr,
      weather_hu: weather.hu,
      weather_ws: weather.ws,
      weather_wd: weather.wd,
      weather_ic: weather.ic,
    };
  }
}
