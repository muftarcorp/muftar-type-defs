// Base interface for common statement fields
export interface BaseStatementItem {
    id: string;
    date: number;
    description: string;
    amount: number;
    ytd: number;
    net_balance: number;
}

// Specific statement types extending the base
export interface StatementLoad extends BaseStatementItem {
    type: 'load';
    broker: string;
    load_number: string;
    gross: number;
    commission: number;
}

export interface StatementFuel extends BaseStatementItem {
    type: 'fuel';
    station: string;
    location: string;
}

export interface StatementReimbursement extends BaseStatementItem {
    type: 'reimbursement';
    category: string;
}

export interface StatementDeduction extends BaseStatementItem {
    type: 'deduction';
    category: string;
}

// Union type for all statement items with type discrimination
export type StatementItem = StatementLoad | StatementFuel | StatementReimbursement | StatementDeduction;

// Main statement interface with all original fields
export interface Statement {
    id: string;
    created_at: number;
    updated_at: number;
    statement_number?: string;
    user_id: string;
    organization_id: string;
    role: string;
    pay_period_start_at: number;
    pay_period_end_at?: number;
    payment_date_at?: number;
    status?: string;
    total_amount?: number;
    payment_method?: string;
    commission_rate?: number;
    gross_revenue?: number;
    user_share?: number;
    expenses?: number;
    total_reimbursements?: number;
    user_earnings?: number;
    subtotal?: number;
    total_deductions?: number;
    net_earnings?: number;
    loads?: StatementLoad[];
    fuel?: StatementFuel[];
    reimbursements?: StatementReimbursement[];
    deductions?: StatementDeduction[];
    notes?: string;
    metadata?: any;
    statement_block_id?: string;
}

// Helper type guards for type safety
export const isStatementLoad = (item: StatementItem): item is StatementLoad => item.type === 'load';
export const isStatementFuel = (item: StatementItem): item is StatementFuel => item.type === 'fuel';
export const isStatementReimbursement = (item: StatementItem): item is StatementReimbursement => item.type === 'reimbursement';
export const isStatementDeduction = (item: StatementItem): item is StatementDeduction => item.type === 'deduction';