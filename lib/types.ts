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
   text: string | null;
}

export interface Adapter {
   sourceName: string;
   filter: (fileName: string) => boolean;
   process: (fileText: string) => (Message | null)[];
   parse: (msg: any) => Message | null;
}

export interface Person {
   name: string;
   email: string[];
   phone: string[];
}
