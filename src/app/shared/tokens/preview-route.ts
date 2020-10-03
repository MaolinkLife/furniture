import { PreviewRouteInterface } from './../interfaces/preview-route.interface';
import { InjectionToken } from '@angular/core';

export const ROUTES_INJECTION_TOKEN: InjectionToken<PreviewRouteInterface[]> = new InjectionToken('ROUTES');
