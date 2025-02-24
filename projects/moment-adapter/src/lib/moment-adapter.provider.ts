import { makeEnvironmentProviders } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter } from '@ngxmc/datetime-picker';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, NgxMatMomentAdapter } from './moment-adapter';
import { NGX_MAT_MOMENT_FORMATS } from './moment-formats';

export function provideNgxMatMomentDate() {
  return makeEnvironmentProviders([
    {
      provide: NgxMatDateAdapter,
      useClass: NgxMatMomentAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_MOMENT_FORMATS },
  ]);
}
