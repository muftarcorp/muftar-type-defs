
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'deleted';

export interface ChatMessage {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    chat_id: number;
    user_id: number;
    content: string;
    media: string[] | null;
    status: MessageStatus;
    metadata: Record<string, any>;
}