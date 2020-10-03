import { PreviewComponentInterface } from '../interfaces/preview-component.interface';

export type PreviewComponentClass<T> = new (...args: any[]) => PreviewComponentInterface<T>;
