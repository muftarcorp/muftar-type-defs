
export interface BillingInvoice {
    id: string;
    created_at: number;
    updated_at: number;
    due_at?: number;
    organization_id: string;
    subtotal: number;
    credits: number;
    tax: number;
    total: number;
    stripe_txn_id?: string;
    stripe_invoice_id?: string;
    stripe_customer_id?: string;
    status: string; // draft, open, paid, failed, void
    payment_method?: string;
    notes?: string;
    cycle?: string; // YYYY-MM
    metadata?: any;
    line_items?: any[]; // This will be populated by the resolver
}