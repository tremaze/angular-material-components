import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxMatNativeDate } from '@ngxmc/datetime-picker';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(), provideRouter(APP_ROUTES), provideNgxMatNativeDate()],
};
