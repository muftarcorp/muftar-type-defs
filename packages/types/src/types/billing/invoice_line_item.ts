
export enum BillingLineItemCategory {
    CREDIT = 'credit',
    DEBIT = 'debit'
}

export enum BillingLineItemStatus {
    APPLIED = 'applied',
    REMOVED = 'removed',
    OVERRIDDEN = 'overridden',
    CARRIED_FORWARD = 'carried_forward',
    PENDING = 'pending'
}

export interface BillingLineItem {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    invoice_id: number;
    description: string;
    amount: number;
    quantity?: number;
    category: BillingLineItemCategory;
    status: BillingLineItemStatus;
    metadata?: any;
}