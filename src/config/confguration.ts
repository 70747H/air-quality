const DEFAULT_SERVER_PORT = 3000;

export interface Configuration {
  app: AppSetting;
  postgresDatabase: PostgresDatabase;
  iqair: IQAIR;
}

export interface AppSetting {
  env: string;
  port: number;
  swaggerTitle: string;
  swaggerVersion: number;
}

export interface PostgresDatabase {
  host: string;
  name?: string;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
}

export interface IQAIR {
  url: string;
  apiKey: string;
}

export const configuration = (): Configuration => {
  const defaultConfiguration: Configuration = {
    app: {
      env: process.env.NODE_ENV,
      port:
        parseInt(process.env.SERVER_PORT as string, 10) || DEFAULT_SERVER_PORT,
      swaggerTitle: process.env.SWAGGER_TITLE,
      swaggerVersion: parseFloat(process.env.SWAGGER_VERSION),
    },
    postgresDatabase: {
      host: process.env.POSTGRES_HOST as string,
      database: process.env.POSTGRES_DATABASE as string,
      username: process.env.POSTGRES_USERNAME as string,
      password: process.env.POSTGRES_PASSWORD as string,
      ssl: process.env.SSL && process.env.SSL == 'true',
    },
    iqair: {
      url: process.env.IQAIR_API_URL as string,
      apiKey: process.env.IQAIR_API_KEY as string,
    },
  };
  return defaultConfiguration;
};
