export interface SidebarMenuItem {
    caption: string;
    routerPath: string;
    active: boolean;
    children?: SidebarMenuItem[];
}
