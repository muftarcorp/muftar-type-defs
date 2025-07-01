import { Userdata } from "./user";
import { Equipment } from "./equipment";

export interface Driver {
    id: string;
    created_at: number;
    updated_at: number;
    status?: string;
    metadata?: any;
    current_location_id?: string;
    organization_id?: string | null;
    license_number?: string;
    current_load_id?: string;
    experience?: string;
    user_id?: string;
    equipment_id?: string;
    user?: Userdata;
}
