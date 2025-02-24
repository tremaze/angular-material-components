import { PlatformModule } from '@angular/cdk/platform';
import { importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { NgxMatDateAdapter } from './date-adapter';
import { NGX_MAT_DATE_FORMATS } from './date-formats';
import { NgxMatNativeDateAdapter } from './native-date-adapter';
import { NGX_MAT_NATIVE_DATE_FORMATS } from './native-date-formats';

export function provideNgxMatNativeDate() {
  return makeEnvironmentProviders([
    importProvidersFrom(PlatformModule),
    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
    { provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_NATIVE_DATE_FORMATS },
  ]);
}
