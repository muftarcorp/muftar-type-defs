
export type ChatCategory = 'direct' | 'group' | 'support';
export type ChatStatus = 'active' | 'archived' | 'deleted';

export interface Chat {
    id: string;
    created_at: number;
    updated_at: number;
    status: ChatStatus;
    metadata: Record<string, any>;
    category: ChatCategory;
}