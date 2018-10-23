export enum Source {
   FacebookMessenger,
   GoogleVoice,
   GMail
}

export enum Relation {
   None = 0,
   Self,
   Other
}

export interface Message {
   /** Who sent the message. */
   from: Relation;
   /** When the message was sent. */
   on: Date;
   subject?: string;
   /** The platform used to convey the message. */
   source: Source;
   /** Content of the message. */
   text: string | null;
   /** An emoji reaction. */
   reaction?: string;
}

/**
 * Methods to process and parse messages from a particular platform.
 */
export interface Reader {
   sourceName: string;
   /** Filter file list so it only includes those for the platform. */
   filter: (fileName: string) => boolean;
   /** Process an exported file. */
   process: (fileText: string) => Message[];
   /** Parse a single message from the exported file. */
   parse: (msg: any) => Message | null;
}

export interface Writer {
   serialize: (m: Message) => string;
   save: (messages: Message[]) => boolean;
}

export interface Person {
   name: string;
   alias: string[];
   email: string[];
   phone: string[];
}

export type People = { [key: number]: Person };

export namespace Facebook {
   export interface Reaction {
      /** Emoji */
      reaction: string;
      /** Person's name */
      actor: string;
   }

   export interface Link {
      uri: string;
   }

   export interface MediaLink extends Link {
      creation_timestamp: number;
   }

   export interface VideoLink extends MediaLink {
      thumbnail: Link;
   }

   export interface Message {
      sender_name: string;
      timestamp_ms: number;
      content: string;
      type: 'Generic';
      sticker?: Link;
      videos?: VideoLink[];
      photos?: MediaLink[];
      reactions?: Reaction[];
   }

   interface Participant {
      name: string;
   }

   /**
    * Exported Facebook Messenger data. Export files are per-conversation.
    * @see https://www.facebook.com/help/1701730696756992?helpref=hc_global_nav
    */
   export interface Conversation {
      participants: Participant[];
      messages: Message[];
      title: string;
      is_still_participant: boolean;
      thread_type: string;
      thread_path: string;
   }
}
