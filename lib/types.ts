export enum Source {
   FacebookMessenger,
   GoogleVoice,
   GMail
}

export interface Message {
   from: string;
   to: string;
   on: Date;
   subject?: string;
   source: Source;
}

export interface Adapter {
   filter: (fileName: string) => boolean;
   process: (path: string) => Message[];
   source: Source;
}
