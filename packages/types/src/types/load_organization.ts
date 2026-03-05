import { Organization } from "./organization";
import { Load } from "./load";
import { Driver } from "./driver";

export interface LoadOrganization {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status: string | null;
    metadata: any | null;
    load_id: number | null;
    organization_id: number | null;
    driver_id: number | null;
    role: string | null;
}

export interface LoadOrganizationNode {
    load_organization: LoadOrganization;
    organization: Organization | null;
    load: Load | null;
    driver: Driver | null;
}
