
export interface DriverReport {
    id: string;
    created_at: number;
    updated_at: number;
    message: string;
    status: string;
    metadata: Record<string, any>;
    attachments: Record<string, any>;
    category: string;
}