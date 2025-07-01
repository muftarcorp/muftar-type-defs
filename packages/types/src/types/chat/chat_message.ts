
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'deleted';

export interface ChatMessage {
    id: string;
    created_at: number;
    updated_at: number;
    chat_id: string;
    user_id: string;
    content: string;
    media: string[] | null;
    status: MessageStatus;
    metadata: Record<string, any>;
}