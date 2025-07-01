
export interface CreditWallet {
    id: string;
    created_at: number;
    updated_at: number;
    user_id?: string;
    balance: number;
}