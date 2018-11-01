export enum Source {
   FacebookMessenger,
   GoogleVoice,
   GMail,
   MicrosoftChat,
   Passport,
   GoogleHangouts
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
   process: (fileText: string, fileName: string) => Message[];
   /** Parse a single message from the exported file. */
   parse: (msg: any) => Message | null;
}

export interface Writer {
   serialize: (m: Message) => string;
   write: (messages: Message[]) => string;
   fileName: string;
}

export interface Person {
   name: string;
   alias: string[];
   email: string[];
   phone: string[];
}

export type People = { [key: number]: Person };

export namespace Chat {
   export interface User {
      FriendlyName: string;
      LogonName: string;
   }

   export interface Participant {
      User: User;
   }

   export interface Text {
      '#text': string;
      Style: string;
   }

   export interface Message {
      SessionID: number;
      Time: string;
      Date: string;
      DateTime: string;
      From: Participant;
      To: Participant | Participant[];
      Text: string;
   }

   export interface Log {
      FirstSessionID: number;
      LastSessionID: number;
      LogonName: string;
      Message: Message[];
   }

   export interface Conversation {
      Log: Log;
   }
}

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

export namespace Hangouts {
   export type EventType =
      | 'START_HANGOUT'
      | 'END_HANGOUT'
      | 'HANGOUT_EVENT'
      | 'ADD_USER'
      | 'REMOVE_USER'
      | 'REGULAR_CHAT_MESSAGE';
   export type ConversationType = 'GROUP' | 'STICKY_ONE_TO_ONE';
   export type Status = 'ACTIVE';
   export type MediumType = 'BABEL_MEDIUM' | 'GOOGLE_VOICE_MEDIUM';
   export type NotificationLevel = 'RING';
   export type LeaveReason = 'LEAVE_REASON_UNKNOWN';
   export type NetworkType = 'BABEL';
   export type SegmentType = 'TEXT' | 'LINE_BREAK';
   export type AttachmentType = 'PLUS_AUDIO_V2';
   export type View = 'INBOX_VIEW';
   export type Toggle = 'ENABLED';
   export type ParticipantType = 'GAIA' | 'OFF_NETWORK_PHONE';
   export type InvitationStatus = 'ACCEPTED_INVITATION';

   export interface Identifier {
      id: string;
   }

   export interface User {
      gaia_id: string;
      chat_id: string;
   }

   export interface Delivery {
      medium_type: MediumType;
   }

   export interface EmbedItem {
      type: AttachmentType[];
   }

   export interface Attachment {
      id: string;
      embed_item: EmbedItem;
   }

   export interface Participant {
      id: User;
      fallback_name: string;
      invitation_status: InvitationStatus;
      participant_type: ParticipantType;
      new_invitation_status: InvitationStatus;
      in_different_customer_as_requester: boolean;
      domain_id: string;
   }

   export interface EventState {
      user_id: User;
      client_generated_id: string;
      notification_level: NotificationLevel;
   }

   export interface Style {
      bold: boolean;
      italics: boolean;
      strikethrough: boolean;
      underline: boolean;
   }

   export interface Segment {
      type: SegmentType;
      text: string;
      formatting: Style;
   }

   export interface Content {
      segment?: Segment[];
      attachment?: Attachment[];
   }

   export interface Message {
      /** Sender name added during processing */
      senderName?: string;
      message_content: Content;
   }

   export interface MembershipChange {
      type: any;
      participant_id: User;
      leave_reason: LeaveReason;
   }

   export interface Event {
      conversation_id: Identifier;
      sender_id: User;
      timestamp: string;
      self_event_state: EventState;
      hangout_event?: any;
      event_id: string;
      advances_sort_timestamp: boolean;
      membership_change?: MembershipChange;
      chat_message?: Message;
      event_otr: string;
      delivery_medium: Delivery;
      event_type: EventType;
      event_version: string;
   }

   export interface Message {}

   export interface ReadState {
      participant_id: User;
      latest_read_timestamp: string;
   }

   export interface ConversationState {
      self_read_state: ReadState;
      status: Status;
      notification_level: string;
      view: View[];
      inviter_id: User;
      invite_timestamp: string;
      sort_timestamp: string;
      active_timestamp: string;
      is_guest: boolean;
   }

   export interface AboutConversation {
      id: Identifier;
      self_conversation_state: ConversationState;
      read_state: ReadState[];
      has_active_hangout: boolean;
      current_participant: User | User[];
      participant_data: Participant[];
   }

   export interface Conversation {
      conversation_id: Identifier;
      conversation: AboutConversation;
   }

   export interface ConversationItem {
      conversation: Conversation;
      events: Event[];
   }

   export interface Export {
      conversations: ConversationItem[];
   }
}

export namespace Passport {
   export interface Message {
      /** Content */
      RD: string;
      /** From */
      RM: string;
      /** To */
      RO: string;
      /** Time */
      RT: string;
      /** Added during processing */
      date?: string;
      /** Added during processing */
      defaultFrom?: string;
   }

   /** Misspellings in original */
   export interface Conversation {
      ContactFirendName: string;
      ContactLoginName: string;
      CreateDate: string;
      OwnerFirendName: string;
      OwnerLoginName: string;
      RS: Message[];
   }

   export interface History {
      History: Conversation[];
   }

   export interface Log {
      Historys: History;
   }
}
