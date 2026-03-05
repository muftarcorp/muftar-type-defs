
export interface DriverReport {
    id: string;
    internal_id: number;
    index: number;
    created_at: number;
    updated_at: number;
    message: string;
    status: string;
    metadata: Record<string, any>;
    attachments: Record<string, any>;
    category: string;
    user_id: number;
    organization_id: number;
}