import { PreviewComponentClass } from './../types/preview-component-class.type';
import { Component } from '@angular/core';

export interface SidebarMenuItem {
    caption: string;
    routerPath: string;
    active: boolean;
    children?: SidebarMenuItem[];
    previewComponent?: PreviewComponentClass<Component> | any;
}
