
export interface UserFcmToken {
    id: string;
    created_at: number;
    updated_at: number;
    status: string;
    metadata: Record<string, any>;
    user_id: string;
    fcm_token: string;
}
