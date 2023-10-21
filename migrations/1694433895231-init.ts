import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1694433895231 implements MigrationInterface {
  name = 'Init1694433895231';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "air_quality" (
        "id" SERIAL NOT NULL,
        "city" character varying NOT NULL,
        "state" character varying NOT NULL,
        "country" character varying NOT NULL,
        "location" geography(Point,4326),
        "pollution_ts" character varying NOT NULL,
        "pollution_aqius" numeric NOT NULL DEFAULT '0',
        "pollution_mainus" character varying NOT NULL,
        "pollution_aqicn" numeric NOT NULL DEFAULT '0',
        "pollution_maincn" character varying NOT NULL,
        "weather_ts" character varying NOT NULL,
        "weather_tp" numeric NOT NULL DEFAULT '0',
        "weather_pr" numeric NOT NULL DEFAULT '0',
        "weather_hu" numeric NOT NULL DEFAULT '0',
        "weather_ws" numeric NOT NULL DEFAULT '0',
        "weather_wd" numeric NOT NULL DEFAULT '0',
        "weather_ic" character varying NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_a6610ad4c60b148aebb53530b37" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_268cb67e54a0f6522b97049165" ON "air_quality" ("city") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a68aaf10be584035dd7f44718f" ON "air_quality" USING GiST ("location") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a68aaf10be584035dd7f44718f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_268cb67e54a0f6522b97049165"`,
    );
    await queryRunner.query(`DROP TABLE "air_quality"`);
  }
}
