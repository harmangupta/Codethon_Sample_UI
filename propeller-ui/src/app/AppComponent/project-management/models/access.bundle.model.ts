import { AccessEntity } from './access.entity.model';

export interface AccessBundle {
    name : string;
    desc : string;
    accessEntities : AccessEntity[];
}