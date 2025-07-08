export interface StatementLoad {
    id: string;
    date: number;
    broker: string;
    load_number: string;
    description: string;
    gross: number;
    commission: number;
    net: number;
}

export interface StatementFuel {
    id: string;
    date: number;
    station: string;
    location: string;
    amount: number;
    net_balance: number;
}

export interface StatementReimbursement {
    id: string;
    date: number;
    type: string;
    description: string;
    amount: number;
    net_balance: number;
}

export interface StatementDeduction {
    id: string;
    category: string;
    description: string;
    charge: number;
    ytd: number;
    net_balance: number;
}

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