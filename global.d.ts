declare namespace NodeJS {
    export interface ProcessEnv {
        MONGODB_URI: string;
        NEXT_PUBLIC_APP_NAME: string;
        NEXT_PUBLIC_APP_SLOGAN: string;
        NEXT_PUBLIC_APP_DESCRIPTION: string;
    }
  }