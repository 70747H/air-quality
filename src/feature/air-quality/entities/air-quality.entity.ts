import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from 'typeorm';
import { Point } from 'geojson';

@Entity()
export class AirQuality {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  location: Point;

  @Column()
  pollution_ts: string;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  pollution_aqius: number;

  @Column()
  pollution_mainus: string;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  pollution_aqicn: number;

  @Column()
  pollution_maincn: string;

  @Column()
  weather_ts: string;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  weather_tp: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  weather_pr: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  weather_hu: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  weather_ws: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  weather_wd: number;

  @Column()
  weather_ic: string;

  @CreateDateColumn()
  public created_at: Date;
}
