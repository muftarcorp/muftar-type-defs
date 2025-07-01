import { BillingProfile } from "./billing/profile";
export interface Organization {
    id: string;
    created_at: number;
    updated_at: number;
    owner_id: string;
    ein: string;
    mc_number: string;
    us_dot: string;
    state_formed: string;
    operation_type: string; //'carrier' | 'broker' | 'both' | 'shipper' | 'other';
    status: string; //'active' | 'inactive' | 'pending' | 'suspended';
    metadata: any;
    phone: string;
    email: string;
    org_type: string;
    cargo_carried_type: {
        types: string[];
        specifications?: Record<string, any>;
    };
    verified_at?: number;
    name?: string;
    logo?: string;
    location_id?: string;
    billing_profile_id?: string | null;
    billing_profile?: BillingProfile;
}