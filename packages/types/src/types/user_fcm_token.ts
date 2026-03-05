
export interface UserFcmToken {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status: string;
    metadata: Record<string, any>;
    user_id: number;
    fcm_token: string;
}
