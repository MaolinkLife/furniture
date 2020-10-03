import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { PreviewComponentClass } from '../types/preview-component-class.type';

/**
 * Расширение рутов для перехода
 */
export interface PreviewRouteInterface extends Route {
    data?: {
        /**
         * Путь перехода
         */
        mark?: string;
        /**
         * Заголовок для браузера
         */
        title?: string;
        /**
         * Компонент, который нужно отобразить на главном блоке
         */
        previewComponent?: PreviewComponentClass<Component> | any;
        /**
         * Любое свойство, которое будет необходимо
         */
        [key: string]: any;
    };
    /**
     * Расширенный интерфейс дочерних элементов
     */
    children?: PreviewRouteInterface[];
}
