import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

export class GetNearestCityDataDto {
  @IsNotEmpty()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  longitude: number;
}
