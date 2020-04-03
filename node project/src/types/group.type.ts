import { Permission } from ".";

export default interface Group {
    id?: string;
    name: string;
    permissions: Array<Permission>;
}
