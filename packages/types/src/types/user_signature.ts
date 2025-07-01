
export interface UserSignature {
    id: string;
    created_at: number;
    updated_at: number;
    signature: Record<string, any>;
    status: string;
    metadata: Record<string, any>;
    user_id?: string;
}