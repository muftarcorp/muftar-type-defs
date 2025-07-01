
export interface Equipment {
    id: string;
    created_at: number;
    updated_at: number;
    type?: string;
    unit_number?: string;
    vin?: string;
    make?: string;
    model?: string;
    year?: string;
    capacity?: string;
    category?: string;
    reference_id: string;
    reference_table: string;
    status: string;
    metadata?: any;
    device_name?: string;
    name?: string;
}