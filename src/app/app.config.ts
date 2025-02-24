import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideNgxMatNativeDate } from 'projects/datetime-picker/src';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideZoneChangeDetection(), provideRouter(APP_ROUTES), provideNgxMatNativeDate()],
};
