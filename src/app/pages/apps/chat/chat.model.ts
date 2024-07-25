/**
 * Chat User List
 */
export interface ChatModel {
  id?: number;
  name: any;
  profile?: any;
  messagecount?: any;
  desc?: any;
  status?: any;
  nickname?: any;
}

// isImg?: boolean;
/**
 * Contact List
 */
export interface ContactModel {
  title?: string;
  contacts?: Array<{
    id?: number;
    name?: any;
    status?: string;
    roomId?: number;
    isImg?: boolean;
    profile?: string;
    image?: string;
  }>;
}

/**
 * CallsList
 */
export interface CallsModel {
  id?: number;
  name?: string;
  date?: string;
  time?: string;
  icon?: string;
  image?: string;
  isImg?: any;
  profile?: any;
}

/**
 * Bookmark List
 */
export interface BookmarkModel {
  id?: any;
  icon?: string;
  fileName?: string;
  size?: string;
}

/**
 * Attachment List
 */
export interface AttachmentModel {
  id?: number;
  foldericon?: string;
  foldername?: string;
  foldersize?: string;
}

/**
 * Chat Message List
 */
export interface ChatMessage {
  id?: number;
  roomId?: any;
  sender?: any;
  message?: string;
  createdAt?: any;
  isSender?: boolean;
  isReplied?: number;
}
