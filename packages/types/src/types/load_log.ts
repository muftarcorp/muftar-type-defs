export interface LoadLog {
    id: string;
    created_at: number;
    updated_at: number;
    status: string;
    metadata: Record<string, any>;
    details: string;
    load_id: string;
}
