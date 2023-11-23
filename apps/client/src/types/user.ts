export enum UserStatuses {
  Online = 'online',
  Idle = 'idle',
  DND = 'dnd',
  Offline = 'offline',
  Mobile = 'mobile',
  Pending = 'pending',
  Blocked = 'blocked',
}

enum ActivityTypes {
  Playing = 'playing',
  Streaming = 'streaming',
  Listening = 'listening',
  Watching = 'watching',
}

type UserActivity = {
  type: ActivityTypes;
  name: string;
};

// type VoiceStatus = {
//   mute?: boolean;
//   deaf?: boolean;
//   serverMute?: boolean;
//   serverDeaf?: boolean;
// };

export type UserType = {
  id: string;
  fullName: string;
  username: string;
  bio?: string;
  avatar: string;
  status: UserStatuses;
  activity?: UserActivity;
};
