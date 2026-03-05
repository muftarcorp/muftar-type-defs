
export interface Notification {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    user_id?: number | null;
    description?: string;
    read: boolean;
    type?: string;
    metadata?: any;
    status?: string;
}
