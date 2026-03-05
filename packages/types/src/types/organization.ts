import { BillingProfile } from "./billing/profile";
import { OrganizationStatementProfile } from "./organization_statement_profile";

export interface Organization {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    owner_id: number;
    ein: string | null;
    mc_number: string | null;
    us_dot: string | null;
    state_formed: string;
    operation_type: string; //'carrier' | 'broker' | 'both' | 'shipper' | 'other';
    status: string; //'active' | 'inactive' | 'pending' | 'suspended';
    metadata: any;
    phone: string | null;
    email: string;
    org_type: string;
    cargo_carried_type: {
        types: string[];
        specifications?: Record<string, any>;
    };
    verified_at?: number | null;
    name?: string | null;
    logo?: string | null;
    location_id?: number | null;
    billing_profile_id?: number | null;
    billing_profile?: BillingProfile;
    organization_statement_profile?: OrganizationStatementProfile;
}