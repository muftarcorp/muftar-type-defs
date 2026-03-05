export interface LoadLog {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status: string;
    metadata: Record<string, any>;
    details: string;
    load_id: number;
}
