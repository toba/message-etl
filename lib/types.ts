export enum Source {
   FacebookMessenger,
   GoogleVoice,
   GMail
}

// export const Relation: { [key: string]: number } = {
//    Self: 1,
//    Other: 2
// };

export enum Relation {
   None = 0,
   Self,
   Other
}

export interface Message {
   from: Relation;
   on: Date;
   subject?: string;
   source: Source;
   text: string | null;
}

export interface Adapter {
   sourceName: string;
   filter: (fileName: string) => boolean;
   process: (fileText: string) => Message[];
   parse: (msg: any) => Message | null;
}

export interface Person {
   name: string;
   alias: string[];
   email: string[];
   phone: string[];
}

export type People = { [key: number]: Person };
