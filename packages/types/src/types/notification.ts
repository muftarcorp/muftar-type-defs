
export interface Notification {
    id: string;
    created_at: number;
    updated_at: number;
    user_id?: string;
    description?: string;
    read: boolean;
    type?: string;
    metadata?: any;
    status?: string;
}
