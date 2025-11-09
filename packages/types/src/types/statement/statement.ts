import { StatementTxn } from './statement_txn.js';

/**
 * Statement Interface
 * 
 * Represents a financial statement for a user within a statement block.
 * 
 * Uses statement_txns table for all transaction data.
 * The transactions field contains all statement transactions (loads, fuel, reimbursements, deductions).
 * 
 * Calculated fields (gross_revenue, expenses, total_deductions, etc.) are computed from statement_txns
 * and may be stored in the database for performance, but should be recalculated from transactions when needed.
 */
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
    
    /**
     * Calculated totals (computed from statement_txns)
     * These fields are calculated from transactions and may be cached in the database
     */
    gross_revenue?: number; // Sum of load transaction gross_amount
    user_share?: number; // gross_revenue * commission_rate
    expenses?: number; // Sum of fuel transaction amounts
    total_reimbursements?: number; // Sum of reimbursement transaction amounts
    user_earnings?: number; // user_share - expenses + total_reimbursements
    subtotal?: number; // Same as user_earnings
    total_deductions?: number; // Sum of deduction transaction amounts
    net_earnings?: number; // subtotal - total_deductions
    
    notes?: string;
    metadata?: any;
    statement_block_id?: string;
    
    /**
     * Transactions array
     * Contains all statement transactions (loads, fuel, reimbursements, deductions)
     * This is the primary way to access statement data.
     */
    transactions?: StatementTxn[];
}