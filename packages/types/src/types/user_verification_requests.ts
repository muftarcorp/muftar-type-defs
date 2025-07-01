
export interface UserVerificationRequest {
    id: string;
    created_at: number;
    token: string;
    user_id: string;
    expires_at: number;
    status: 'pending' | 'verified' | 'expired';
    metadata: any;
}
