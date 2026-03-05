
export interface UserVerificationRequest {
    id: string;
    internal_id: number;
    created_at: number;
    token: string;
    user_id: number;
    expires_at: number;
    status: 'pending' | 'verified' | 'expired';
    metadata: any;
}
