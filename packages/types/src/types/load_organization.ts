import { Organization } from "./organization";
import { Load } from "./load";
import { Driver } from "./driver";

export interface LoadOrganization {
    id: string;
    created_at: number;
    updated_at: number;
    status: string | null;
    metadata: any | null;
    load_id: string | null;
    organization_id: string | null;
    driver_id: string | null;
    role: string | null;
}

export interface LoadOrganizationNode {
    load_organization: LoadOrganization;
    organization: Organization | null;
    load: Load | null;
    driver: Driver | null;
}
