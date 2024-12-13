'use strict';
(self.webpackChunkangular_material_components =
  self.webpackChunkangular_material_components || []).push([
  [975],
  {
    3975: (H, u, i) => {
      i.r(u), i.d(u, { DemoTimeModule: () => p });
      var c = i(6895),
        m = i(4006),
        _ = i(4859),
        s = i(3546),
        T = i(6709),
        C = i(9602),
        Z = i(7392),
        b = i(4144),
        d = i(1948),
        f = i(4385),
        h = i(6630),
        g = i(8842),
        v = i(3288),
        e = i(4650),
        M = i(9549),
        O = i(4108),
        J = i(3238),
        A = i(3425);
      function D(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-radio-button', 14), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n.value), e.xp6(1), e.hij(' ', n.label, '');
        }
      }
      function P(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-radio-button', 14), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n.value), e.xp6(1), e.hij(' ', n.label, '');
        }
      }
      function S(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-radio-button', 14), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n.value), e.xp6(1), e.hij(' ', n.label, '');
        }
      }
      function Q(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-radio-button', 14), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n.value), e.xp6(1), e.hij(' ', n.label, '');
        }
      }
      function U(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-radio-button', 14), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n.value), e.xp6(1), e.hij(' ', n.label, '');
        }
      }
      function y(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-option', 15), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n), e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      function w(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-option', 15), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n), e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      function F(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-option', 15), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n), e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      function N(t, o) {
        if ((1 & t && (e.TgZ(0, 'mat-option', 15), e._uU(1), e.qZA()), 2 & t)) {
          const n = o.$implicit;
          e.Q6J('value', n), e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      const q = function () {
        return ['/datetimepicker'];
      };
      class r {
        constructor() {
          (this.disabled = !1),
            (this.showSpinners = !0),
            (this.showSeconds = !1),
            (this.disableMinute = !1),
            (this.enableMeridian = !1),
            (this.stepHour = 1),
            (this.stepMinute = 1),
            (this.stepSecond = 1),
            (this.color = 'primary'),
            (this.codeTimePicker =
              '<ngx-mat-timepicker \n              [(ngModel)]="date" [disabled]="disabled" \n              [showSpinners]="showSpinners"\n              [stepHour]="stepHour" [stepMinute]="stepMinute" \n              [stepSecond]="stepSecond" \n              [showSeconds]="showSeconds"\n              [color]="color">\n  </ngx-mat-timepicker>'),
            (this.date = new Date()),
            (this.options = [
              { value: !0, label: 'True' },
              { value: !1, label: 'False' },
            ]),
            (this.listColors = ['primary', 'accent', 'warn']),
            (this.stepHours = [1, 2, 3, 4, 5]),
            (this.stepMinutes = [1, 5, 10, 15, 20, 25]),
            (this.stepSeconds = [1, 5, 10, 15, 20, 25]);
        }
        ngOnInit() {}
      }
      (r.ɵfac = function (o) {
        return new (o || r)();
      }),
        (r.ɵcmp = e.Xpm({
          type: r,
          selectors: [['app-demo-time']],
          decls: 70,
          vars: 32,
          consts: [
            ['href', 'https://www.buymeacoffee.com/gnurub', 'target', '_blank'],
            [
              'src',
              'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png',
              'alt',
              'Buy Me A Coffee',
              2,
              'height',
              '35px !important',
              'width',
              '150px !important',
            ],
            [3, 'routerLink'],
            [1, 'zone', 'zone-picker'],
            [
              3,
              'ngModel',
              'disabled',
              'showSpinners',
              'stepHour',
              'stepMinute',
              'stepSecond',
              'showSeconds',
              'color',
              'enableMeridian',
              'disableMinute',
              'ngModelChange',
            ],
            [1, 'zone', 'zone-config'],
            [1, 'config-wrapper'],
            [1, 'label'],
            ['aria-label', 'Select an option', 3, 'ngModel', 'ngModelChange'],
            ['class', 'example-radio-button', 3, 'value', 4, 'ngFor', 'ngForOf'],
            [1, 'config-wrapper', 'config-wrapper_step'],
            [3, 'ngModel', 'ngModelChange'],
            [3, 'value', 4, 'ngFor', 'ngForOf'],
            ['ngxMatHighlight', '', 1, 'language-html'],
            [1, 'example-radio-button', 3, 'value'],
            [3, 'value'],
          ],
          template: function (o, n) {
            1 & o &&
              (e.TgZ(0, 'p'),
              e._uU(1, 'Thank you so much for your coffee \u2764\ufe0f '),
              e.qZA(),
              e.TgZ(2, 'a', 0),
              e._UZ(3, 'img', 1),
              e.qZA(),
              e.TgZ(4, 'h2'),
              e._uU(5, 'See '),
              e.TgZ(6, 'a', 2),
              e._uU(7, 'API Datetime-picker'),
              e.qZA(),
              e._uU(8, ' for more details'),
              e.qZA(),
              e.TgZ(9, 'mat-card', 3)(10, 'mat-card-content')(11, 'ngx-mat-timepicker', 4),
              e.NdJ('ngModelChange', function (a) {
                return (n.date = a);
              }),
              e.qZA(),
              e.TgZ(12, 'h4'),
              e._uU(13),
              e.qZA()()(),
              e.TgZ(14, 'mat-card', 5)(15, 'mat-card-content')(16, 'div', 6)(17, 'span', 7),
              e._uU(18, 'disabled (Default: false) '),
              e.qZA(),
              e.TgZ(19, 'mat-radio-group', 8),
              e.NdJ('ngModelChange', function (a) {
                return (n.disabled = a);
              }),
              e.YNc(20, D, 2, 2, 'mat-radio-button', 9),
              e.qZA()(),
              e.TgZ(21, 'div', 6)(22, 'span', 7),
              e._uU(23, 'showSpinners (Default: true) '),
              e.qZA(),
              e.TgZ(24, 'mat-radio-group', 8),
              e.NdJ('ngModelChange', function (a) {
                return (n.showSpinners = a);
              }),
              e.YNc(25, P, 2, 2, 'mat-radio-button', 9),
              e.qZA()(),
              e.TgZ(26, 'div', 6)(27, 'span', 7),
              e._uU(28, 'showSeconds (Default: false) '),
              e.qZA(),
              e.TgZ(29, 'mat-radio-group', 8),
              e.NdJ('ngModelChange', function (a) {
                return (n.showSeconds = a);
              }),
              e.YNc(30, S, 2, 2, 'mat-radio-button', 9),
              e.qZA()(),
              e.TgZ(31, 'div', 6)(32, 'span', 7),
              e._uU(33, 'disableMinute (Default: false) '),
              e.qZA(),
              e.TgZ(34, 'mat-radio-group', 8),
              e.NdJ('ngModelChange', function (a) {
                return (n.disableMinute = a);
              }),
              e.YNc(35, Q, 2, 2, 'mat-radio-button', 9),
              e.qZA()(),
              e.TgZ(36, 'div', 6)(37, 'span', 7),
              e._uU(38, 'enableMeridian (Default: false) '),
              e.qZA(),
              e.TgZ(39, 'mat-radio-group', 8),
              e.NdJ('ngModelChange', function (a) {
                return (n.enableMeridian = a);
              }),
              e.YNc(40, U, 2, 2, 'mat-radio-button', 9),
              e.qZA()(),
              e.TgZ(41, 'div', 10)(42, 'span', 7),
              e._uU(43, 'steps '),
              e.qZA(),
              e.TgZ(44, 'mat-form-field')(45, 'mat-label'),
              e._uU(46, 'hour (default: 1)'),
              e.qZA(),
              e.TgZ(47, 'mat-select', 11),
              e.NdJ('ngModelChange', function (a) {
                return (n.stepHour = a);
              }),
              e.YNc(48, y, 2, 2, 'mat-option', 12),
              e.qZA()(),
              e.TgZ(49, 'mat-form-field')(50, 'mat-label'),
              e._uU(51, 'minute (default: 1)'),
              e.qZA(),
              e.TgZ(52, 'mat-select', 11),
              e.NdJ('ngModelChange', function (a) {
                return (n.stepMinute = a);
              }),
              e.YNc(53, w, 2, 2, 'mat-option', 12),
              e.qZA()(),
              e.TgZ(54, 'mat-form-field')(55, 'mat-label'),
              e._uU(56, 'second (default: 1)'),
              e.qZA(),
              e.TgZ(57, 'mat-select', 11),
              e.NdJ('ngModelChange', function (a) {
                return (n.stepSecond = a);
              }),
              e.YNc(58, F, 2, 2, 'mat-option', 12),
              e.qZA()()(),
              e.TgZ(59, 'div', 6)(60, 'span', 7),
              e._uU(61, 'color (Default: primary) '),
              e.qZA(),
              e.TgZ(62, 'mat-form-field')(63, 'mat-label'),
              e._uU(64, 'Select color'),
              e.qZA(),
              e.TgZ(65, 'mat-select', 11),
              e.NdJ('ngModelChange', function (a) {
                return (n.color = a);
              }),
              e.YNc(66, N, 2, 2, 'mat-option', 12),
              e.qZA()()()()(),
              e.TgZ(67, 'pre')(68, 'code', 13),
              e._uU(69),
              e.qZA()()),
              2 & o &&
                (e.xp6(6),
                e.Q6J('routerLink', e.DdM(31, q)),
                e.xp6(5),
                e.Q6J('ngModel', n.date)('disabled', n.disabled)('showSpinners', n.showSpinners)(
                  'stepHour',
                  n.stepHour,
                )('stepMinute', n.stepMinute)('stepSecond', n.stepSecond)(
                  'showSeconds',
                  n.showSeconds,
                )('color', n.color)('enableMeridian', n.enableMeridian)(
                  'disableMinute',
                  n.disableMinute,
                ),
                e.xp6(2),
                e.hij('Selected date: ', null == n.date ? null : n.date.toLocaleString(), ''),
                e.xp6(6),
                e.Q6J('ngModel', n.disabled),
                e.xp6(1),
                e.Q6J('ngForOf', n.options),
                e.xp6(4),
                e.Q6J('ngModel', n.showSpinners),
                e.xp6(1),
                e.Q6J('ngForOf', n.options),
                e.xp6(4),
                e.Q6J('ngModel', n.showSeconds),
                e.xp6(1),
                e.Q6J('ngForOf', n.options),
                e.xp6(4),
                e.Q6J('ngModel', n.disableMinute),
                e.xp6(1),
                e.Q6J('ngForOf', n.options),
                e.xp6(4),
                e.Q6J('ngModel', n.enableMeridian),
                e.xp6(1),
                e.Q6J('ngForOf', n.options),
                e.xp6(7),
                e.Q6J('ngModel', n.stepHour),
                e.xp6(1),
                e.Q6J('ngForOf', n.stepHours),
                e.xp6(4),
                e.Q6J('ngModel', n.stepMinute),
                e.xp6(1),
                e.Q6J('ngForOf', n.stepMinutes),
                e.xp6(4),
                e.Q6J('ngModel', n.stepSecond),
                e.xp6(1),
                e.Q6J('ngForOf', n.stepSeconds),
                e.xp6(7),
                e.Q6J('ngModel', n.color),
                e.xp6(1),
                e.Q6J('ngForOf', n.listColors),
                e.xp6(3),
                e.Oqu(n.codeTimePicker));
          },
          dependencies: [
            c.sg,
            h.rH,
            M.KE,
            M.hX,
            O.f,
            m.JJ,
            m.On,
            d.VQ,
            d.U0,
            f.gD,
            J.ey,
            s.a8,
            s.dn,
            A.P,
          ],
          styles: [
            '.config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}',
          ],
        }));
      const x = [{ path: '', component: r }];
      class p {}
      (p.ɵfac = function (o) {
        return new (o || p)();
      }),
        (p.ɵmod = e.oAB({ type: p })),
        (p.ɵinj = e.cJS({
          imports: [
            c.ez,
            h.Bz.forChild(x),
            C.FA,
            b.c,
            g.EC,
            g.Yy,
            m.u5,
            m.UX,
            _.ot,
            g.K,
            d.Fk,
            f.LD,
            T.p9,
            Z.Ps,
            s.QW,
            v.m,
          ],
        }));
    },
  },
]);
