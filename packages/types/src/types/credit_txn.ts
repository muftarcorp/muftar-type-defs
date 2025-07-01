
export interface CreditTransaction {
    id: string;
    created_at: number;
    updated_at: number;
    user_id?: string;
    amount: number;
    description?: string;
    metadata?: any;
    status?: string;
}
