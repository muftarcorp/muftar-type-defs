import { Userdata } from "./user";
import { Equipment } from "./equipment";

export interface Driver {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status?: string;
    metadata?: any;
    current_location_id?: number;
    organization_id?: number | null;
    license_number?: string;
    current_load_id?: number;
    experience?: string;
    user_id?: number;
    equipment_id?: string;
    user?: Userdata;
}
