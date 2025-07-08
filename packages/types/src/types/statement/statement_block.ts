export interface StatementBlock {
    id: string;
    created_at: number;
    updated_at: number;
    status: string; // "open", "closed", "processing"
    metadata: any;
    block_number: string;
    organization_id: string;
    period_start: number;
    period_end: number;
    total_statements: number;
    total_gross_amount: number;
    total_net_amount: number;
    total_fuel_deductions: number;
    total_reimbursements: number;
    total_other_deductions: number;
}