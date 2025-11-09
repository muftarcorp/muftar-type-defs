/**
 * Statement Transaction Type
 * 
 * Represents a single transaction within a statement.
 * Replaces the old JSONB array system (loads, fuel, reimbursements, deductions).
 * 
 * Categories:
 * - 'load': Load-related transactions
 * - 'fuel': Fuel expense transactions
 * - 'reimbursement': Reimbursement transactions
 * - 'deduction': Deduction transactions
 */
export interface StatementTxn {
    id: string;
    created_at: number;
    updated_at: number;
    status: string; // 'active', 'inactive', 'deleted', etc.
    metadata: Record<string, any>;
    
    // Core fields
    statement_id: string;
    statement_block_id?: string | null; // Optional, can be derived from statement
    user_id: string;
    category: 'load' | 'fuel' | 'reimbursement' | 'deduction' | string; // Allow string for flexibility
    date: string; // ISO date string (YYYY-MM-DD)
    amount: number;
    discount?: number | null;
    net_balance?: number | null;
    description: string;
    
    // Category-specific fields (null if not applicable to category)
    broker_id?: string | null;
    load_id?: string | null;
    gross_amount?: number | null; // For load transactions
    organization_id?: string | null;
    commission_rate?: number | null; // For load transactions
    station?: string | null; // For fuel transactions
    location?: string | null; // For fuel transactions
}

/**
 * Input type for creating a new statement transaction
 */
export type CreateStatementTxnInput = Omit<StatementTxn, 'id' | 'created_at' | 'updated_at'>;

/**
 * Input type for updating an existing statement transaction
 */
export type UpdateStatementTxnInput = Partial<Omit<StatementTxn, 'id' | 'created_at' | 'updated_at' | 'statement_id'>>;

/**
 * Type guard to check if a transaction is a load transaction
 */
export const isLoadTxn = (txn: StatementTxn): boolean => txn.category === 'load';

/**
 * Type guard to check if a transaction is a fuel transaction
 */
export const isFuelTxn = (txn: StatementTxn): boolean => txn.category === 'fuel';

/**
 * Type guard to check if a transaction is a reimbursement transaction
 */
export const isReimbursementTxn = (txn: StatementTxn): boolean => txn.category === 'reimbursement';

/**
 * Type guard to check if a transaction is a deduction transaction
 */
export const isDeductionTxn = (txn: StatementTxn): boolean => txn.category === 'deduction';

