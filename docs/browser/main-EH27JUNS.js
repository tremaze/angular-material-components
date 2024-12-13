import { g as B, f as ct, a as et, h as lt, e as rt, i as se, b as tt } from './chunk-AZPN2TNB.js';
import { b as at, d as dt, c as st } from './chunk-ONMLRU6N.js';
import { b as _t } from './chunk-Q4EMGIXM.js';
import {
  M as $,
  Ia as A,
  Qa as Ae,
  jb as Be,
  F as C,
  J as Ce,
  Kb as D,
  ca as De,
  Ea as E,
  Ja as Ee,
  nc as F,
  Ra as Fe,
  Oa as G,
  da as H,
  Pc as He,
  fa as I,
  vb as Ie,
  X as J,
  v as K,
  Vb as L,
  fc as Le,
  _b as M,
  la as Me,
  Xb as N,
  hc as Ne,
  sa as O,
  Fb as Oe,
  ta as P,
  Ib as Pe,
  wa as Q,
  hb as Re,
  Ba as Se,
  Kc as T,
  gb as Te,
  ub as U,
  Sb as V,
  Wb as Ve,
  Da as W,
  xc as Z,
  Hb as _,
  Yb as b,
  ia as d,
  ya as ee,
  tb as f,
  m as g,
  Z as h,
  Gb as ie,
  wb as j,
  Ub as je,
  yb as k,
  aa as ke,
  Pb as l,
  Qb as m,
  $b as ne,
  f as o,
  Rb as oe,
  Zb as p,
  Eb as re,
  Ta as te,
  gc as u,
  ac as w,
  C as we,
  fb as x,
  L as xe,
  bc as y,
  E as ye,
  wc as ze,
} from './chunk-TLOIBPPF.js';
import { d as ft, e as gt, b as ht, a as pt, c as ut } from './chunk-TOSCH5IN.js';
import {
  K as $e,
  c as Ge,
  O as Je,
  H as Ke,
  a as Qe,
  Q as R,
  f as S,
  d as Ue,
  b as We,
  G as Xe,
  z as Ye,
  v as Ze,
  g as ae,
  ka as it,
  ma as nt,
  la as ot,
  w as qe,
  l as z,
} from './chunk-YCKKHTDK.js';
import { f as ce, d as de, g as le, i as me, c as mt } from './chunk-YQJNRNJO.js';
var X = ['*'],
  Ft = ['content'],
  Tt = [[['mat-drawer']], [['mat-drawer-content']], '*'],
  Rt = ['mat-drawer', 'mat-drawer-content', '*'];
function Bt(n, r) {
  if (n & 1) {
    let s = V();
    l(0, 'div', 1),
      L('click', function () {
        O(s);
        let t = N();
        return P(t._onBackdropClicked());
      }),
      m();
  }
  if (n & 2) {
    let s = N();
    _('mat-drawer-shown', s._isShowingBackdrop());
  }
}
function It(n, r) {
  n & 1 && (l(0, 'mat-drawer-content'), p(1, 2), m());
}
var Ot = [[['mat-sidenav']], [['mat-sidenav-content']], '*'],
  Pt = ['mat-sidenav', 'mat-sidenav-content', '*'];
function jt(n, r) {
  if (n & 1) {
    let s = V();
    l(0, 'div', 1),
      L('click', function () {
        O(s);
        let t = N();
        return P(t._onBackdropClicked());
      }),
      m();
  }
  if (n & 2) {
    let s = N();
    _('mat-drawer-shown', s._isShowingBackdrop());
  }
}
function Vt(n, r) {
  n & 1 && (l(0, 'mat-sidenav-content'), p(1, 2), m());
}
var Lt =
    '.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
  vt = {
    transformDrawer: mt('transform', [
      le('open, open-instant', ce({ transform: 'none', visibility: 'visible' })),
      le('void', ce({ 'box-shadow': 'none', visibility: 'hidden' })),
      me('void => open-instant', de('0ms')),
      me('void <=> open, open-instant => void', de('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
  };
var Nt = new I('MAT_DRAWER_DEFAULT_AUTOSIZE', { providedIn: 'root', factory: zt }),
  fe = new I('MAT_DRAWER_CONTAINER');
function zt() {
  return !1;
}
var q = (() => {
    let r = class r extends B {
      constructor() {
        let t = d(A),
          i = d(ct),
          a = d(E);
        super(t, i, a);
        o(this, '_platform', d(z));
        o(this, '_changeDetectorRef', d(Z));
        o(this, '_container', d(he));
      }
      ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }
      _shouldBeHidden() {
        if (this._platform.isBrowser) return !1;
        let { start: t, end: i } = this._container;
        return (
          (t != null && t.mode !== 'over' && t.opened) ||
          (i != null && i.mode !== 'over' && i.opened)
        );
      }
    };
    o(r, '\u0275fac', function (i) {
      return new (i || r)();
    }),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-drawer-content']],
          hostAttrs: [1, 'mat-drawer-content'],
          hostVars: 6,
          hostBindings: function (i, a) {
            i & 2 &&
              (ie('margin-left', a._container._contentMargins.left, 'px')(
                'margin-right',
                a._container._contentMargins.right,
                'px',
              ),
              _('mat-drawer-content-hidden', a._shouldBeHidden()));
          },
          features: [F([{ provide: B, useExisting: r }]), j],
          ngContentSelectors: X,
          decls: 1,
          vars: 0,
          template: function (i, a) {
            i & 1 && (b(), p(0));
          },
          encapsulation: 2,
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  pe = (() => {
    let r = class r {
      constructor() {
        o(this, '_elementRef', d(A));
        o(this, '_focusTrapFactory', d(Ke));
        o(this, '_focusMonitor', d($e));
        o(this, '_platform', d(z));
        o(this, '_ngZone', d(E));
        o(this, '_interactivityChecker', d(Xe));
        o(this, '_doc', d(T, { optional: !0 }));
        o(this, '_container', d(fe, { optional: !0 }));
        o(this, '_focusTrap', null);
        o(this, '_elementFocusedBeforeDrawerWasOpened', null);
        o(this, '_enableAnimations', !1);
        o(this, '_isAttached');
        o(this, '_anchor');
        o(this, '_position', 'start');
        o(this, '_mode', 'over');
        o(this, '_disableClose', !1);
        o(this, '_autoFocus');
        o(this, '_opened', !1);
        o(this, '_openedVia');
        o(this, '_animationStarted', new g());
        o(this, '_animationEnd', new g());
        o(this, '_animationState', 'void');
        o(this, 'openedChange', new W(!0));
        o(
          this,
          '_openedStream',
          this.openedChange.pipe(
            C((e) => e),
            K(() => {}),
          ),
        );
        o(
          this,
          'openedStart',
          this._animationStarted.pipe(
            C((e) => e.fromState !== e.toState && e.toState.indexOf('open') === 0),
            $(void 0),
          ),
        );
        o(
          this,
          '_closedStream',
          this.openedChange.pipe(
            C((e) => !e),
            K(() => {}),
          ),
        );
        o(
          this,
          'closedStart',
          this._animationStarted.pipe(
            C((e) => e.fromState !== e.toState && e.toState === 'void'),
            $(void 0),
          ),
        );
        o(this, '_destroyed', new g());
        o(this, 'onPositionChanged', new W());
        o(this, '_content');
        o(this, '_modeChanged', new g());
        o(this, '_injector', d(ee));
        o(this, '_changeDetectorRef', d(Z));
        this.openedChange.pipe(h(this._destroyed)).subscribe((e) => {
          e
            ? (this._doc && (this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement),
              this._takeFocus())
            : this._isFocusWithinDrawer() && this._restoreFocus(this._openedVia || 'program');
        }),
          this._ngZone.runOutsideAngular(() => {
            we(this._elementRef.nativeElement, 'keydown')
              .pipe(
                C((e) => e.keyCode === 27 && !this.disableClose && !Ye(e)),
                h(this._destroyed),
              )
              .subscribe((e) =>
                this._ngZone.run(() => {
                  this.close(), e.stopPropagation(), e.preventDefault();
                }),
              );
          }),
          this._animationEnd.subscribe((e) => {
            let { fromState: t, toState: i } = e;
            ((i.indexOf('open') === 0 && t === 'void') ||
              (i === 'void' && t.indexOf('open') === 0)) &&
              this.openedChange.emit(this._opened);
          });
      }
      get position() {
        return this._position;
      }
      set position(e) {
        (e = e === 'end' ? 'end' : 'start'),
          e !== this._position &&
            (this._isAttached && this._updatePositionInParent(e),
            (this._position = e),
            this.onPositionChanged.emit());
      }
      get mode() {
        return this._mode;
      }
      set mode(e) {
        (this._mode = e), this._updateFocusTrapState(), this._modeChanged.next();
      }
      get disableClose() {
        return this._disableClose;
      }
      set disableClose(e) {
        this._disableClose = S(e);
      }
      get autoFocus() {
        let e = this._autoFocus;
        return e == null ? (this.mode === 'side' ? 'dialog' : 'first-tabbable') : e;
      }
      set autoFocus(e) {
        (e === 'true' || e === 'false' || e == null) && (e = S(e)), (this._autoFocus = e);
      }
      get opened() {
        return this._opened;
      }
      set opened(e) {
        this.toggle(S(e));
      }
      _forceFocus(e, t) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let i = () => {
              e.removeEventListener('blur', i),
                e.removeEventListener('mousedown', i),
                e.removeAttribute('tabindex');
            };
            e.addEventListener('blur', i), e.addEventListener('mousedown', i);
          })),
          e.focus(t);
      }
      _focusByCssSelector(e, t) {
        let i = this._elementRef.nativeElement.querySelector(e);
        i && this._forceFocus(i, t);
      }
      _takeFocus() {
        if (!this._focusTrap) return;
        let e = this._elementRef.nativeElement;
        switch (this.autoFocus) {
          case !1:
          case 'dialog':
            return;
          case !0:
          case 'first-tabbable':
            te(
              () => {
                !this._focusTrap.focusInitialElement() && typeof e.focus == 'function' && e.focus();
              },
              { injector: this._injector },
            );
            break;
          case 'first-heading':
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            break;
          default:
            this._focusByCssSelector(this.autoFocus);
            break;
        }
      }
      _restoreFocus(e) {
        this.autoFocus !== 'dialog' &&
          (this._elementFocusedBeforeDrawerWasOpened
            ? this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, e)
            : this._elementRef.nativeElement.blur(),
          (this._elementFocusedBeforeDrawerWasOpened = null));
      }
      _isFocusWithinDrawer() {
        let e = this._doc.activeElement;
        return !!e && this._elementRef.nativeElement.contains(e);
      }
      ngAfterViewInit() {
        (this._isAttached = !0),
          this._position === 'end' && this._updatePositionInParent('end'),
          this._platform.isBrowser &&
            ((this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement)),
            this._updateFocusTrapState());
      }
      ngAfterContentChecked() {
        this._platform.isBrowser && (this._enableAnimations = !0);
      }
      ngOnDestroy() {
        var e, t;
        (e = this._focusTrap) == null || e.destroy(),
          (t = this._anchor) == null || t.remove(),
          (this._anchor = null),
          this._animationStarted.complete(),
          this._animationEnd.complete(),
          this._modeChanged.complete(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      open(e) {
        return this.toggle(!0, e);
      }
      close() {
        return this.toggle(!1);
      }
      _closeViaBackdropClick() {
        return this._setOpen(!1, !0, 'mouse');
      }
      toggle(e = !this.opened, t) {
        e && t && (this._openedVia = t);
        let i = this._setOpen(e, !e && this._isFocusWithinDrawer(), this._openedVia || 'program');
        return e || (this._openedVia = null), i;
      }
      _setOpen(e, t, i) {
        return (
          (this._opened = e),
          e
            ? (this._animationState = this._enableAnimations ? 'open' : 'open-instant')
            : ((this._animationState = 'void'), t && this._restoreFocus(i)),
          this._changeDetectorRef.markForCheck(),
          this._updateFocusTrapState(),
          new Promise((a) => {
            this.openedChange.pipe(xe(1)).subscribe((c) => a(c ? 'open' : 'close'));
          })
        );
      }
      _getWidth() {
        return (this._elementRef.nativeElement && this._elementRef.nativeElement.offsetWidth) || 0;
      }
      _updateFocusTrapState() {
        var e;
        this._focusTrap &&
          (this._focusTrap.enabled =
            !!((e = this._container) != null && e.hasBackdrop) && this.opened);
      }
      _updatePositionInParent(e) {
        if (!this._platform.isBrowser) return;
        let t = this._elementRef.nativeElement,
          i = t.parentNode;
        e === 'end'
          ? (this._anchor ||
              ((this._anchor = this._doc.createComment('mat-drawer-anchor')),
              i.insertBefore(this._anchor, t)),
            i.appendChild(t))
          : this._anchor && this._anchor.parentNode.insertBefore(t, this._anchor);
      }
    };
    o(r, '\u0275fac', function (t) {
      return new (t || r)();
    }),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-drawer']],
          viewQuery: function (t, i) {
            if ((t & 1 && ne(Ft, 5), t & 2)) {
              let a;
              w((a = y())) && (i._content = a.first);
            }
          },
          hostAttrs: ['tabIndex', '-1', 1, 'mat-drawer'],
          hostVars: 12,
          hostBindings: function (t, i) {
            t & 1 &&
              Ve('@transform.start', function (c) {
                return i._animationStarted.next(c);
              })('@transform.done', function (c) {
                return i._animationEnd.next(c);
              }),
              t & 2 &&
                (je('@transform', i._animationState),
                re('align', null),
                _('mat-drawer-end', i.position === 'end')('mat-drawer-over', i.mode === 'over')(
                  'mat-drawer-push',
                  i.mode === 'push',
                )('mat-drawer-side', i.mode === 'side')('mat-drawer-opened', i.opened));
          },
          inputs: {
            position: 'position',
            mode: 'mode',
            disableClose: 'disableClose',
            autoFocus: 'autoFocus',
            opened: 'opened',
          },
          outputs: {
            openedChange: 'openedChange',
            _openedStream: 'opened',
            openedStart: 'openedStart',
            _closedStream: 'closed',
            closedStart: 'closedStart',
            onPositionChanged: 'positionChanged',
          },
          exportAs: ['matDrawer'],
          ngContentSelectors: X,
          decls: 3,
          vars: 0,
          consts: [
            ['content', ''],
            ['cdkScrollable', '', 1, 'mat-drawer-inner-container'],
          ],
          template: function (t, i) {
            t & 1 && (b(), l(0, 'div', 1, 0), p(2), m());
          },
          dependencies: [B],
          encapsulation: 2,
          data: { animation: [vt.transformDrawer] },
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  he = (() => {
    let r = class r {
      constructor() {
        o(this, '_dir', d(Je, { optional: !0 }));
        o(this, '_element', d(A));
        o(this, '_ngZone', d(E));
        o(this, '_changeDetectorRef', d(Z));
        o(this, '_animationMode', d(G, { optional: !0 }));
        o(this, '_allDrawers');
        o(this, '_drawers', new Ee());
        o(this, '_content');
        o(this, '_userContent');
        o(this, '_autosize', d(Nt));
        o(this, '_backdropOverride');
        o(this, 'backdropClick', new W());
        o(this, '_start');
        o(this, '_end');
        o(this, '_left');
        o(this, '_right');
        o(this, '_destroyed', new g());
        o(this, '_doCheckSubject', new g());
        o(this, '_contentMargins', { left: null, right: null });
        o(this, '_contentMarginChanges', new g());
        o(this, '_injector', d(ee));
        var t;
        let e = d(lt);
        (t = this._dir) == null ||
          t.change.pipe(h(this._destroyed)).subscribe(() => {
            this._validateDrawers(), this.updateContentMargins();
          }),
          e
            .change()
            .pipe(h(this._destroyed))
            .subscribe(() => this.updateContentMargins());
      }
      get start() {
        return this._start;
      }
      get end() {
        return this._end;
      }
      get autosize() {
        return this._autosize;
      }
      set autosize(e) {
        this._autosize = S(e);
      }
      get hasBackdrop() {
        return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
      }
      set hasBackdrop(e) {
        this._backdropOverride = e == null ? null : S(e);
      }
      get scrollable() {
        return this._userContent || this._content;
      }
      ngAfterContentInit() {
        this._allDrawers.changes.pipe(J(this._allDrawers), h(this._destroyed)).subscribe((e) => {
          this._drawers.reset(e.filter((t) => !t._container || t._container === this)),
            this._drawers.notifyOnChanges();
        }),
          this._drawers.changes.pipe(J(null)).subscribe(() => {
            this._validateDrawers(),
              this._drawers.forEach((e) => {
                this._watchDrawerToggle(e), this._watchDrawerPosition(e), this._watchDrawerMode(e);
              }),
              (!this._drawers.length ||
                this._isDrawerOpen(this._start) ||
                this._isDrawerOpen(this._end)) &&
                this.updateContentMargins(),
              this._changeDetectorRef.markForCheck();
          }),
          this._ngZone.runOutsideAngular(() => {
            this._doCheckSubject
              .pipe(Ce(10), h(this._destroyed))
              .subscribe(() => this.updateContentMargins());
          });
      }
      ngOnDestroy() {
        this._contentMarginChanges.complete(),
          this._doCheckSubject.complete(),
          this._drawers.destroy(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      open() {
        this._drawers.forEach((e) => e.open());
      }
      close() {
        this._drawers.forEach((e) => e.close());
      }
      updateContentMargins() {
        let e = 0,
          t = 0;
        if (this._left && this._left.opened) {
          if (this._left.mode == 'side') e += this._left._getWidth();
          else if (this._left.mode == 'push') {
            let i = this._left._getWidth();
            (e += i), (t -= i);
          }
        }
        if (this._right && this._right.opened) {
          if (this._right.mode == 'side') t += this._right._getWidth();
          else if (this._right.mode == 'push') {
            let i = this._right._getWidth();
            (t += i), (e -= i);
          }
        }
        (e = e || null),
          (t = t || null),
          (e !== this._contentMargins.left || t !== this._contentMargins.right) &&
            ((this._contentMargins = { left: e, right: t }),
            this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins)));
      }
      ngDoCheck() {
        this._autosize &&
          this._isPushed() &&
          this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
      }
      _watchDrawerToggle(e) {
        e._animationStarted
          .pipe(
            C((t) => t.fromState !== t.toState),
            h(this._drawers.changes),
          )
          .subscribe((t) => {
            t.toState !== 'open-instant' &&
              this._animationMode !== 'NoopAnimations' &&
              this._element.nativeElement.classList.add('mat-drawer-transition'),
              this.updateContentMargins(),
              this._changeDetectorRef.markForCheck();
          }),
          e.mode !== 'side' &&
            e.openedChange
              .pipe(h(this._drawers.changes))
              .subscribe(() => this._setContainerClass(e.opened));
      }
      _watchDrawerPosition(e) {
        e &&
          e.onPositionChanged.pipe(h(this._drawers.changes)).subscribe(() => {
            te(
              () => {
                this._validateDrawers();
              },
              { injector: this._injector, phase: Fe.Read },
            );
          });
      }
      _watchDrawerMode(e) {
        e &&
          e._modeChanged.pipe(h(ye(this._drawers.changes, this._destroyed))).subscribe(() => {
            this.updateContentMargins(), this._changeDetectorRef.markForCheck();
          });
      }
      _setContainerClass(e) {
        let t = this._element.nativeElement.classList,
          i = 'mat-drawer-container-has-open';
        e ? t.add(i) : t.remove(i);
      }
      _validateDrawers() {
        (this._start = this._end = null),
          this._drawers.forEach((e) => {
            e.position == 'end'
              ? (this._end != null, (this._end = e))
              : (this._start != null, (this._start = e));
          }),
          (this._right = this._left = null),
          this._dir && this._dir.value === 'rtl'
            ? ((this._left = this._end), (this._right = this._start))
            : ((this._left = this._start), (this._right = this._end));
      }
      _isPushed() {
        return (
          (this._isDrawerOpen(this._start) && this._start.mode != 'over') ||
          (this._isDrawerOpen(this._end) && this._end.mode != 'over')
        );
      }
      _onBackdropClicked() {
        this.backdropClick.emit(), this._closeModalDrawersViaBackdrop();
      }
      _closeModalDrawersViaBackdrop() {
        [this._start, this._end]
          .filter((e) => e && !e.disableClose && this._drawerHasBackdrop(e))
          .forEach((e) => e._closeViaBackdropClick());
      }
      _isShowingBackdrop() {
        return (
          (this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start)) ||
          (this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end))
        );
      }
      _isDrawerOpen(e) {
        return e != null && e.opened;
      }
      _drawerHasBackdrop(e) {
        return this._backdropOverride == null ? !!e && e.mode !== 'side' : this._backdropOverride;
      }
    };
    o(r, '\u0275fac', function (t) {
      return new (t || r)();
    }),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-drawer-container']],
          contentQueries: function (t, i, a) {
            if ((t & 1 && (M(a, q, 5), M(a, pe, 5)), t & 2)) {
              let c;
              w((c = y())) && (i._content = c.first), w((c = y())) && (i._allDrawers = c);
            }
          },
          viewQuery: function (t, i) {
            if ((t & 1 && ne(q, 5), t & 2)) {
              let a;
              w((a = y())) && (i._userContent = a.first);
            }
          },
          hostAttrs: [1, 'mat-drawer-container'],
          hostVars: 2,
          hostBindings: function (t, i) {
            t & 2 && _('mat-drawer-container-explicit-backdrop', i._backdropOverride);
          },
          inputs: { autosize: 'autosize', hasBackdrop: 'hasBackdrop' },
          outputs: { backdropClick: 'backdropClick' },
          exportAs: ['matDrawerContainer'],
          features: [F([{ provide: fe, useExisting: r }])],
          ngContentSelectors: Rt,
          decls: 4,
          vars: 2,
          consts: [
            [1, 'mat-drawer-backdrop', 3, 'mat-drawer-shown'],
            [1, 'mat-drawer-backdrop', 3, 'click'],
          ],
          template: function (t, i) {
            t & 1 &&
              (b(Tt),
              k(0, Bt, 1, 2, 'div', 0),
              p(1),
              p(2, 1),
              k(3, It, 2, 0, 'mat-drawer-content')),
              t & 2 && (D(i.hasBackdrop ? 0 : -1), x(3), D(i._content ? -1 : 3));
          },
          dependencies: [q],
          styles: [
            '.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  Y = (() => {
    let r = class r extends q {};
    o(
      r,
      '\u0275fac',
      (() => {
        let e;
        return function (i) {
          return (e || (e = Q(r)))(i || r);
        };
      })(),
    ),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-sidenav-content']],
          hostAttrs: [1, 'mat-drawer-content', 'mat-sidenav-content'],
          features: [F([{ provide: B, useExisting: r }]), j],
          ngContentSelectors: X,
          decls: 1,
          vars: 0,
          template: function (t, i) {
            t & 1 && (b(), p(0));
          },
          encapsulation: 2,
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  ge = (() => {
    let r = class r extends pe {
      constructor() {
        super(...arguments);
        o(this, '_fixedInViewport', !1);
        o(this, '_fixedTopGap', 0);
        o(this, '_fixedBottomGap', 0);
      }
      get fixedInViewport() {
        return this._fixedInViewport;
      }
      set fixedInViewport(t) {
        this._fixedInViewport = S(t);
      }
      get fixedTopGap() {
        return this._fixedTopGap;
      }
      set fixedTopGap(t) {
        this._fixedTopGap = ae(t);
      }
      get fixedBottomGap() {
        return this._fixedBottomGap;
      }
      set fixedBottomGap(t) {
        this._fixedBottomGap = ae(t);
      }
    };
    o(
      r,
      '\u0275fac',
      (() => {
        let t;
        return function (a) {
          return (t || (t = Q(r)))(a || r);
        };
      })(),
    ),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-sidenav']],
          hostAttrs: ['tabIndex', '-1', 1, 'mat-drawer', 'mat-sidenav'],
          hostVars: 17,
          hostBindings: function (i, a) {
            i & 2 &&
              (re('align', null),
              ie('top', a.fixedInViewport ? a.fixedTopGap : null, 'px')(
                'bottom',
                a.fixedInViewport ? a.fixedBottomGap : null,
                'px',
              ),
              _('mat-drawer-end', a.position === 'end')('mat-drawer-over', a.mode === 'over')(
                'mat-drawer-push',
                a.mode === 'push',
              )('mat-drawer-side', a.mode === 'side')('mat-drawer-opened', a.opened)(
                'mat-sidenav-fixed',
                a.fixedInViewport,
              ));
          },
          inputs: {
            fixedInViewport: 'fixedInViewport',
            fixedTopGap: 'fixedTopGap',
            fixedBottomGap: 'fixedBottomGap',
          },
          exportAs: ['matSidenav'],
          features: [F([{ provide: pe, useExisting: r }]), j],
          ngContentSelectors: X,
          decls: 3,
          vars: 0,
          consts: [
            ['content', ''],
            ['cdkScrollable', '', 1, 'mat-drawer-inner-container'],
          ],
          template: function (i, a) {
            i & 1 && (b(), l(0, 'div', 1, 0), p(2), m());
          },
          dependencies: [B],
          encapsulation: 2,
          data: { animation: [vt.transformDrawer] },
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  bt = (() => {
    let r = class r extends he {
      constructor() {
        super(...arguments);
        o(this, '_allDrawers');
        o(this, '_content');
      }
    };
    o(
      r,
      '\u0275fac',
      (() => {
        let t;
        return function (a) {
          return (t || (t = Q(r)))(a || r);
        };
      })(),
    ),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-sidenav-container']],
          contentQueries: function (i, a, c) {
            if ((i & 1 && (M(c, Y, 5), M(c, ge, 5)), i & 2)) {
              let v;
              w((v = y())) && (a._content = v.first), w((v = y())) && (a._allDrawers = v);
            }
          },
          hostAttrs: [1, 'mat-drawer-container', 'mat-sidenav-container'],
          hostVars: 2,
          hostBindings: function (i, a) {
            i & 2 && _('mat-drawer-container-explicit-backdrop', a._backdropOverride);
          },
          exportAs: ['matSidenavContainer'],
          features: [
            F([
              { provide: fe, useExisting: r },
              { provide: he, useExisting: r },
            ]),
            j,
          ],
          ngContentSelectors: Pt,
          decls: 4,
          vars: 2,
          consts: [
            [1, 'mat-drawer-backdrop', 3, 'mat-drawer-shown'],
            [1, 'mat-drawer-backdrop', 3, 'click'],
          ],
          template: function (i, a) {
            i & 1 &&
              (b(Ot),
              k(0, jt, 1, 2, 'div', 0),
              p(1),
              p(2, 1),
              k(3, Vt, 2, 0, 'mat-sidenav-content')),
              i & 2 && (D(a.hasBackdrop ? 0 : -1), x(3), D(a._content ? -1 : 3));
          },
          dependencies: [Y],
          styles: [Lt],
          encapsulation: 2,
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })(),
  wt = (() => {
    let r = class r {};
    o(r, '\u0275fac', function (t) {
      return new (t || r)();
    }),
      o(r, '\u0275mod', U({ type: r })),
      o(r, '\u0275inj', H({ imports: [R, se, se, R] }));
    let n = r;
    return n;
  })();
var Qt = ['*', [['mat-toolbar-row']]],
  Wt = ['*', 'mat-toolbar-row'],
  Gt = (() => {
    let r = class r {};
    o(r, '\u0275fac', function (t) {
      return new (t || r)();
    }),
      o(
        r,
        '\u0275dir',
        Ie({
          type: r,
          selectors: [['mat-toolbar-row']],
          hostAttrs: [1, 'mat-toolbar-row'],
          exportAs: ['matToolbarRow'],
        }),
      );
    let n = r;
    return n;
  })(),
  yt = (() => {
    let r = class r {
      constructor() {
        o(this, '_elementRef', d(A));
        o(this, '_platform', d(z));
        o(this, '_document', d(T));
        o(this, 'color');
        o(this, '_toolbarRows');
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          (this._checkToolbarMixedModes(),
          this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes()));
      }
      _checkToolbarMixedModes() {
        this._toolbarRows.length;
      }
    };
    o(r, '\u0275fac', function (t) {
      return new (t || r)();
    }),
      o(
        r,
        '\u0275cmp',
        f({
          type: r,
          selectors: [['mat-toolbar']],
          contentQueries: function (t, i, a) {
            if ((t & 1 && M(a, Gt, 5), t & 2)) {
              let c;
              w((c = y())) && (i._toolbarRows = c);
            }
          },
          hostAttrs: [1, 'mat-toolbar'],
          hostVars: 6,
          hostBindings: function (t, i) {
            t & 2 &&
              (Pe(i.color ? 'mat-' + i.color : ''),
              _('mat-toolbar-multiple-rows', i._toolbarRows.length > 0)(
                'mat-toolbar-single-row',
                i._toolbarRows.length === 0,
              ));
          },
          inputs: { color: 'color' },
          exportAs: ['matToolbar'],
          ngContentSelectors: Wt,
          decls: 2,
          vars: 0,
          template: function (t, i) {
            t & 1 && (b(Qt), p(0), p(1, 1));
          },
          styles: [
            '.mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        }),
      );
    let n = r;
    return n;
  })();
var Ct = (() => {
  let r = class r {};
  o(r, '\u0275fac', function (t) {
    return new (t || r)();
  }),
    o(r, '\u0275mod', U({ type: r })),
    o(r, '\u0275inj', H({ imports: [R, R] }));
  let n = r;
  return n;
})();
function Zt(n, r) {
  n & 1 && (l(0, 'a', 5), oe(1, 'img', 14), m());
}
var xt = (() => {
  let r = class r {
    constructor(e) {
      (this.breakpointObserver = e),
        (this.nameApp = 'angular-material-components'),
        (this._destroyed = new g()),
        this.breakpointObserver
          .observe([qe.XSmall])
          .pipe(h(this._destroyed))
          .subscribe((t) => {
            (this.isHandset = t == null ? void 0 : t.matches),
              this.isHandset ? this.activateHandsetLayout() : this.activateWebLayout();
          });
    }
    ngOnDestroy() {
      this._destroyed.next(), this._destroyed.complete();
    }
    activateHandsetLayout() {
      (this.sidenavMode = 'over'), (this.sidenavHasBackdrop = !0), (this.sidenavOpened = !1);
    }
    activateWebLayout() {
      (this.sidenavMode = 'side'), (this.sidenavHasBackdrop = !1), (this.sidenavOpened = !0);
    }
  };
  (r.ɵfac = function (t) {
    return new (t || r)(Te(Ze));
  }),
    (r.ɵcmp = f({
      type: r,
      selectors: [['app-root']],
      decls: 39,
      vars: 7,
      consts: [
        ['sidenav', ''],
        ['color', 'primary', 1, 'header'],
        ['mat-button', '', 1, 'app-menu-button', 3, 'click'],
        [1, 'material-icons'],
        [1, 'title'],
        ['mat-button', '', 'href', 'https://github.com/GNURub/angular-material-components'],
        [1, 'sidenav'],
        [3, 'mode', 'opened', 'disableClose', 'fixedInViewport', 'fixedBottomGap'],
        [
          'mat-list-item',
          '',
          'routerLink',
          '/home',
          'routerLinkActive',
          'active',
          1,
          'sidebar-item',
        ],
        [
          'mat-list-item',
          '',
          'routerLink',
          '/datetimepicker',
          'routerLinkActive',
          'active',
          1,
          'sidebar-item',
        ],
        [
          'mat-list-item',
          '',
          'routerLink',
          '/timepicker',
          'routerLinkActive',
          'active',
          1,
          'sidebar-item',
        ],
        [
          'mat-list-item',
          '',
          'routerLink',
          '/colorpicker',
          'routerLinkActive',
          'active',
          1,
          'sidebar-item',
        ],
        [
          'mat-list-item',
          '',
          'routerLink',
          '/fileinput',
          'routerLinkActive',
          'active',
          1,
          'sidebar-item',
        ],
        [1, 'app-content'],
        ['src', './assets/GitHub-Mark-Light-32px.png'],
      ],
      template: function (t, i) {
        if (t & 1) {
          let a = V();
          l(0, 'mat-toolbar', 1)(1, 'button', 2),
            L('click', function () {
              O(a);
              let v = Le(9);
              return P(v.toggle());
            }),
            l(2, 'i', 3),
            u(3, 'menu'),
            m()(),
            l(4, 'span', 4),
            u(5),
            m(),
            k(6, Zt, 2, 0, 'a', 5),
            m(),
            l(7, 'mat-sidenav-container', 6)(8, 'mat-sidenav', 7, 0)(10, 'mat-nav-list')(
              11,
              'a',
              8,
            )(12, 'mat-icon'),
            u(13, 'home'),
            m(),
            l(14, 'span'),
            u(15, 'Home'),
            m()(),
            l(16, 'a', 9)(17, 'mat-icon'),
            u(18, 'date_range'),
            m(),
            l(19, 'span'),
            u(20, 'Datetime picker'),
            m()(),
            l(21, 'a', 10)(22, 'mat-icon'),
            u(23, 'access_time'),
            m(),
            l(24, 'span'),
            u(25, 'Time picker'),
            m()(),
            l(26, 'a', 11)(27, 'mat-icon'),
            u(28, 'colorize'),
            m(),
            l(29, 'span'),
            u(30, 'Color picker'),
            m()(),
            l(31, 'a', 12)(32, 'mat-icon'),
            u(33, 'attach_file'),
            m(),
            l(34, 'span'),
            u(35, 'File input'),
            m()()()(),
            l(36, 'mat-sidenav-content')(37, 'div', 13),
            oe(38, 'router-outlet'),
            m()()();
        }
        t & 2 &&
          (x(5),
          Ne(i.nameApp),
          x(),
          D(i.isHandset ? -1 : 6),
          x(2),
          Oe('mode', i.sidenavMode)('opened', i.sidenavOpened)('disableClose', !i.isHandset)(
            'fixedInViewport',
            !1,
          )('fixedBottomGap', 0));
      },
      dependencies: [rt, tt, et, wt, ge, bt, Y, Ct, yt, nt, ot, dt, st, at, it, gt, pt, ht, ut],
      styles: [
        '.app-content[_ngcontent-%COMP%]{padding:20px}[_nghost-%COMP%]     mat-sidenav-container{height:100%}[_nghost-%COMP%]     mat-sidenav-container mat-sidenav .mat-mdc-nav-list{padding:0}[_nghost-%COMP%]     mat-sidenav-container mat-sidenav .mat-mdc-nav-list .sidebar-item .mdc-list-item__content .mdc-list-item__primary-text{display:flex;align-items:center;column-gap:8px}[_nghost-%COMP%]     mat-sidenav-container mat-sidenav .mat-mdc-nav-list .sidebar-item.active{background-color:#009b77}[_nghost-%COMP%]     mat-sidenav-container mat-sidenav .mat-mdc-nav-list .sidebar-item.active .mdc-list-item__content .mdc-list-item__primary-text{color:#fff}',
      ],
    }));
  let n = r;
  return n;
})();
var qt = '@',
  Yt = (() => {
    let r = class r {
      constructor(e, t, i, a, c) {
        o(this, 'doc');
        o(this, 'delegate');
        o(this, 'zone');
        o(this, 'animationType');
        o(this, 'moduleImpl');
        o(this, '_rendererFactoryPromise', null);
        o(this, 'scheduler', d(Se, { optional: !0 }));
        o(this, 'loadingSchedulerFn', d(Xt, { optional: !0 }));
        o(this, '_engine');
        (this.doc = e),
          (this.delegate = t),
          (this.zone = i),
          (this.animationType = a),
          (this.moduleImpl = c);
      }
      ngOnDestroy() {
        var e;
        (e = this._engine) == null || e.flush();
      }
      loadImpl() {
        let e = () => {
            var i;
            return (i = this.moduleImpl) != null ? i : import('./chunk-V3RRJ6KN.js').then((a) => a);
          },
          t;
        return (
          this.loadingSchedulerFn ? (t = this.loadingSchedulerFn(e)) : (t = e()),
          t
            .catch((i) => {
              throw new ke(5300, !1);
            })
            .then(({ ɵcreateEngine: i, ɵAnimationRendererFactory: a }) => {
              this._engine = i(this.animationType, this.doc);
              let c = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = c), c;
            })
        );
      }
      createRenderer(e, t) {
        var c, v;
        let i = this.delegate.createRenderer(e, t);
        if (i.ɵtype === 0) return i;
        typeof i.throwOnSyntheticProps == 'boolean' && (i.throwOnSyntheticProps = !1);
        let a = new _e(i);
        return (
          (c = t == null ? void 0 : t.data) != null &&
            c.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          (v = this._rendererFactoryPromise) == null ||
            v
              .then((ve) => {
                var be;
                let Et = ve.createRenderer(e, t);
                a.use(Et), (be = this.scheduler) == null || be.notify(11);
              })
              .catch((ve) => {
                a.use(i);
              }),
          a
        );
      }
      begin() {
        var e, t;
        (t = (e = this.delegate).begin) == null || t.call(e);
      }
      end() {
        var e, t;
        (t = (e = this.delegate).end) == null || t.call(e);
      }
      whenRenderingDone() {
        var e, t, i;
        return (i = (t = (e = this.delegate).whenRenderingDone) == null ? void 0 : t.call(e)) !=
          null
          ? i
          : Promise.resolve();
      }
    };
    o(r, '\u0275fac', function (t) {
      Re();
    }),
      o(r, '\u0275prov', De({ token: r, factory: r.ɵfac }));
    let n = r;
    return n;
  })(),
  _e = class {
    constructor(r) {
      o(this, 'delegate');
      o(this, 'replay', []);
      o(this, '\u0275type', 1);
      this.delegate = r;
    }
    use(r) {
      if (((this.delegate = r), this.replay !== null)) {
        for (let s of this.replay) s(r);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(r, s) {
      return this.delegate.createElement(r, s);
    }
    createComment(r) {
      return this.delegate.createComment(r);
    }
    createText(r) {
      return this.delegate.createText(r);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(r, s) {
      this.delegate.appendChild(r, s);
    }
    insertBefore(r, s, e, t) {
      this.delegate.insertBefore(r, s, e, t);
    }
    removeChild(r, s, e) {
      this.delegate.removeChild(r, s, e);
    }
    selectRootElement(r, s) {
      return this.delegate.selectRootElement(r, s);
    }
    parentNode(r) {
      return this.delegate.parentNode(r);
    }
    nextSibling(r) {
      return this.delegate.nextSibling(r);
    }
    setAttribute(r, s, e, t) {
      this.delegate.setAttribute(r, s, e, t);
    }
    removeAttribute(r, s, e) {
      this.delegate.removeAttribute(r, s, e);
    }
    addClass(r, s) {
      this.delegate.addClass(r, s);
    }
    removeClass(r, s) {
      this.delegate.removeClass(r, s);
    }
    setStyle(r, s, e, t) {
      this.delegate.setStyle(r, s, e, t);
    }
    removeStyle(r, s, e) {
      this.delegate.removeStyle(r, s, e);
    }
    setProperty(r, s, e) {
      this.shouldReplay(s) && this.replay.push((t) => t.setProperty(r, s, e)),
        this.delegate.setProperty(r, s, e);
    }
    setValue(r, s) {
      this.delegate.setValue(r, s);
    }
    listen(r, s, e) {
      return (
        this.shouldReplay(s) && this.replay.push((t) => t.listen(r, s, e)),
        this.delegate.listen(r, s, e)
      );
    }
    shouldReplay(r) {
      return this.replay !== null && r.startsWith(qt);
    }
  },
  Xt = new I('');
function kt(n = 'animations') {
  return (
    Ae('NgAsyncAnimations'),
    Me([
      { provide: Be, useFactory: (r, s, e) => new Yt(r, s, e, n), deps: [T, Ge, E] },
      { provide: G, useValue: n === 'noop' ? 'NoopAnimations' : 'BrowserAnimations' },
    ])
  );
}
var Dt = [
  { path: 'home', loadComponent: () => import('./chunk-7JL5USZ5.js').then((n) => n.HomeComponent) },
  {
    path: 'datetimepicker',
    loadComponent: () => import('./chunk-5LMAYK2A.js').then((n) => n.DemoDatetimeComponent),
  },
  {
    path: 'timepicker',
    loadComponent: () => import('./chunk-6WM5KGJD.js').then((n) => n.DemoTimeComponent),
  },
  {
    path: 'colorpicker',
    loadComponent: () => import('./chunk-ZL2NS6U2.js').then((n) => n.DemoColorpickerComponent),
  },
  {
    path: 'fileinput',
    loadComponent: () => import('./chunk-UWFP5XJ6.js').then((n) => n.DemoFileInputComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var Mt = { providers: [kt(), Qe(We()), ft(Dt), _t(), He] };
function St() {
  Ue(xt, Mt).catch(console.error);
}
ze() || void 0;
document.readyState === 'complete' ? St() : document.addEventListener('DOMContentLoaded', St);
