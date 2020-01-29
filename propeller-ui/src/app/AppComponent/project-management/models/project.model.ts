import { AccessBundle } from './access.bundle.model';

export interface Project {
    name : string;
    desc : string;
    email : string;
    accessBundles : AccessBundle[];
}