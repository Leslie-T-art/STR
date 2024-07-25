/**
 * Todo List
 */
export interface Task {
    id?: any;
    title?: any;
    image?: any;
    description?: any;
    category?: Array<{}>;
    assignedTo?: Array<{
        name?: any;
        avatarURL?: any;
    }>;
    views?: any;
    comments?: any;
    attachments?: any;
    progress?: any;
    board?: any;
}
