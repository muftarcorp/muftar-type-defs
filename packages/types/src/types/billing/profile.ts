
export interface BillingProfile {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    organization_id: number;
    type: string;
    plan: string;
    amount: number;
    start_date?: number;
    end_date?: number;
    next_billing_date?: number;
    frequency: string;
    stripe_customer_id?: string;
    status: string;
    metadata?: any;
}