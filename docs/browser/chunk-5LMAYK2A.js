import{a as le,b as me}from"./chunk-6WRA6FNP.js";import{d as E,e as te,f as ie,g as ne,h as ae,i as oe,j as re}from"./chunk-Q4EMGIXM.js";import{a as ge,b as he,c as Me}from"./chunk-7HUTVKTT.js";import{a as de,b as pe,c as se,d as ce,e as ue,f as fe}from"./chunk-Q53VEYO2.js";import{I as $,J as ee,a as W,e as F,q,t as J,w as K,x as Z}from"./chunk-AZPN2TNB.js";import"./chunk-YQJNRNJO.js";import{Ca as G,Ja as Q,Ka as X,ca as N,ia as V,ja as H,ka as L,la as B,ma as U,qa as Y,ua as j,ya as R,za as z}from"./chunk-YCKKHTDK.js";import{Fb as l,Mb as x,Nb as h,Ob as M,Pb as e,Qb as t,Rb as y,Sb as I,Vb as v,dc as P,ec as O,fb as a,fc as D,gc as i,hc as f,ic as s,kc as S,lc as b,mc as _,nc as A,ob as k,sa as u,ta as g,tb as T}from"./chunk-TLOIBPPF.js";var Se=(r,d)=>d.value;function be(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function _e(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function xe(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function Ce(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function ye(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function we(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function De(r,d){if(r&1&&(e(0,"mat-radio-button",26),i(1),t()),r&2){let m=d.$implicit;l("value",m.value),a(),s(" ",m.label,"")}}function Ee(r,d){if(r&1&&(e(0,"mat-option",30),i(1),t()),r&2){let m=d.$implicit;l("value",m),a(),s(" ",m," ")}}function ve(r,d){if(r&1&&(e(0,"mat-option",30),i(1),t()),r&2){let m=d.$implicit;l("value",m),a(),s(" ",m," ")}}function ke(r,d){if(r&1&&(e(0,"mat-option",30),i(1),t()),r&2){let m=d.$implicit;l("value",m),a(),s(" ",m," ")}}function Te(r,d){if(r&1&&(e(0,"mat-option",30),i(1),t()),r&2){let m=d.$implicit;l("value",m),a(),s(" ",m," ")}}var it=(()=>{let d=class d{constructor(){this.pickerElement=k(E),this.disabled=!1,this.showSpinners=!0,this.showSeconds=!1,this.touchUi=!1,this.enableMeridian=!1,this.stepHour=1,this.stepMinute=1,this.stepSecond=1,this.color="primary",this.disableMinute=!1,this.hideTime=!1,this.dateControl=new R(null),this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.stepHours=[1,2,3,4,5],this.stepMinutes=[1,5,10,15,20,25],this.stepSeconds=[1,5,10,15,20,25],this.code1="npm install --save @ngxmc/datetime-picker",this.code3='\n  <mat-form-field>\n    <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date" [formControl]="dateControl"\n      [min]="minDate" [max]="maxDate" [disabled]="disabled">\n    <ngx-mat-datepicker-toggle matSuffix [for]="picker"></ngx-mat-datepicker-toggle>\n    <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds"\n      [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi"\n      [color]="color" [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n    </ngx-mat-datetime-picker>\n  </mat-form-field>\n',this.code2="\n  import {\n    NgxMatDatetimePickerComponent,\n    NgxMatNativeDateComponent,\n    NgxMatTimepickerComponent\n  } from '@ngxmc/datetime-picker';\n\n  @Component({\n    imports: [\n      ...\n      NgxMatDatetimePickerComponent,\n      NgxMatTimepickerComponent,\n      NgxMatNativeDateComponent,\n      ...\n    ]\n  })\n  export class AppComponent { }",this.code4="npm install --save  @ngxmc/moment-adapter",this.code5="@Injectable()\n  export class CustomDateAdapter extends NgxMatDateAdapter<D> {...}\n  // D can be Date, Moment or customized type",this.code6="@Component({\n    providers: [\n      {\n        provide: NgxMatDateAdapter,\n        useClass: CustomDateAdapter,\n        deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]\n      }\n    ],\n  })\n  export class CustomDateComponent { }\n",this.code7='// If using Moment\nconst CUSTOM_DATE_FORMATS: NgxMatDateFormats = {\n  parse: {\n    dateInput: "l, LTS"\n  },\n  display: {\n    dateInput: "l, LTS",\n    monthYearLabel: "MMM YYYY",\n    dateA11yLabel: "LL",\n    monthYearA11yLabel: "MMMM YYYY"\n  }\n};\n\n//and in the module providers\nproviders: [\n    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }\n  ]',this.code8='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.code9='<mat-form-field>\n  <input\n    matInput\n    [ngxMatDatetimePicker]="pickerCustomIcon"\n    placeholder="Choose a date"\n    [formControl]="dateControl"\n    [min]="minDate"\n    [max]="maxDate"\n    [disabled]="disabled" />\n  <ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon"></ngx-mat-datepicker-toggle>\n  <ngx-mat-datetime-picker\n    #pickerCustomIcon\n    [showSpinners]="showSpinners"\n    [showSeconds]="showSeconds"\n    [stepHour]="stepHour"\n    [stepMinute]="stepMinute"\n    [stepSecond]="stepSecond"\n    [touchUi]="touchUi"\n    [color]="color"\n    [enableMeridian]="enableMeridian"\n    [disableMinute]="disableMinute"\n    [hideTime]="hideTime">\n    <ngx-mat-datepicker-actions>\n      <div class="datepicker-acctions">\n        <button mat-button ngxMatDatepickerClear close="true">Clear</button>\n\n        <div>\n          <button mat-button ngxMatDatepickerCancel>Cancel</button>\n          <button mat-raised-button color="primary" ngxMatDatepickerApply [color]="color">\n            Apply\n          </button>\n        </div>\n      </div>\n    </ngx-mat-datepicker-actions>\n  </ngx-mat-datetime-picker>\n</mat-form-field>',this.code10='\n  <mat-form-field>\n    <input\n      matInput\n      [ngxMatDatetimePicker]="pickerCustomIcon"\n      placeholder="Choose a date"\n      [formControl]="dateControl"\n      [min]="minDate"\n      [max]="maxDate"\n      [disabled]="disabled" />\n    <ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon">\n      <mat-icon ngxMatDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n    </ngx-mat-datepicker-toggle>\n    <ngx-mat-datetime-picker\n      #pickerCustomIcon\n      [showSpinners]="showSpinners"\n      [showSeconds]="showSeconds"\n      [stepHour]="stepHour"\n      [stepMinute]="stepMinute"\n      [stepSecond]="stepSecond"\n      [touchUi]="touchUi"\n      [color]="color"\n      [enableMeridian]="enableMeridian"\n      [disableMinute]="disableMinute"\n      [hideTime]="hideTime">\n    </ngx-mat-datetime-picker>\n  </mat-form-field>'}toggleMinDate(C){C.checked?this._setMinDate():this.minDate=null}toggleMaxDate(C){C.checked?this._setMaxDate():this.maxDate=null}closePicker(){this.pickerElement().close()}_setMinDate(){let C=new Date;this.minDate=new Date,this.minDate.setDate(C.getDate()-1)}_setMaxDate(){let C=new Date;this.maxDate=new Date,this.maxDate.setDate(C.getDate()+1)}};d.\u0275fac=function(w){return new(w||d)},d.\u0275cmp=T({type:d,selectors:[["app-demo-datetime"]],viewQuery:function(w,n){w&1&&P(n.pickerElement,E,5),w&2&&O()},features:[A([{provide:K,useValue:{appearance:"fill"}}])],decls:388,vars:89,consts:[["picker",""],["pickerWithActions",""],["pickerCustomIcon",""],[3,"mat-stretch-tabs"],["label","API"],["href","https://www.buymeacoffee.com/gnurub","target","_blank"],["src","https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png","alt","Buy Me A Coffee",2,"height","35px !important","width","150px !important"],["href","https://www.npmjs.com/package/@ngxmc/datetime-picker","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg"],["ngxMatHighlight",""],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://www.npmjs.com/package/@ngxmc/moment-adapter"],["ngxMatHighlight","",1,"language-html"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-picker"],[1,"datepicker-wrapper"],["matInput","","placeholder","Choose a date",3,"ngxMatDatetimePicker","formControl","min","max","disabled"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModelChange","ngModel","color"],[1,"example-radio-button",3,"value"],[1,"config-wrapper","config-wrapper_step"],[3,"color"],[3,"ngModelChange","ngModel"],[3,"value"],[3,"change","color"],[1,"datepicker-acctions"],["mat-button","","ngxMatDatepickerClear","","close","true"],["mat-button","","ngxMatDatepickerCancel",""],["mat-raised-button","","color","primary","ngxMatDatepickerApply","",3,"color"],["ngxMatDatepickerToggleIcon",""]],template:function(w,n){if(w&1){let p=I();e(0,"mat-tab-group",3)(1,"mat-tab",4)(2,"p"),i(3,"Thank you so much for your coffee \u2764\uFE0F"),t(),e(4,"a",5),y(5,"img",6),t(),e(6,"h1"),i(7,"API reference for @angular-material-components/datetime-picker"),t(),e(8,"h2"),i(9,"Getting started"),t(),e(10,"a",7),y(11,"img",8),t(),e(12,"pre")(13,"code",9),i(14),t()(),e(15,"h2"),i(16,"Setup"),t(),e(17,"pre"),i(18,"      "),e(19,"code",10),i(20),t(),i(21,"\n    "),t(),e(22,"h2"),i(23,"Properties @Input"),t(),e(24,"table",11)(25,"tbody")(26,"tr")(27,"th"),i(28,"Name"),t(),e(29,"th"),i(30,"Type"),t(),e(31,"th"),i(32,"Default value"),t(),e(33,"th"),i(34,"Description"),t()(),e(35,"tr")(36,"td")(37,"div"),i(38,"disabled"),t()(),e(39,"td"),i(40,"boolean"),t(),e(41,"td"),i(42,"null"),t(),e(43,"td")(44,"p"),i(45,"If true, the picker is readonly and can't be modified"),t()()(),e(46,"tr")(47,"td")(48,"div"),i(49,"showSpinners"),t()(),e(50,"td"),i(51,"boolean"),t(),e(52,"td"),i(53,"true"),t(),e(54,"td")(55,"p"),i(56,"If true, the spinners above and below input are visible"),t()()(),e(57,"tr")(58,"td")(59,"div"),i(60,"showSeconds"),t()(),e(61,"td"),i(62,"boolean"),t(),e(63,"td"),i(64,"true"),t(),e(65,"td")(66,"p"),i(67,"If true, it is not possible to select seconds"),t()()(),e(68,"tr")(69,"td")(70,"div"),i(71,"disableMinute"),t()(),e(72,"td"),i(73,"boolean"),t(),e(74,"td"),i(75,"false"),t(),e(76,"td")(77,"p"),i(78,"If true, the minute is readonly"),t()()(),e(79,"tr")(80,"td")(81,"div"),i(82,"defaultTime"),t()(),e(83,"td"),i(84,"Array"),t(),e(85,"td"),i(86,"undefined"),t(),e(87,"td")(88,"p"),i(89,"An array [hour, minute, second] for default time when the date is not yet defined"),t()()(),e(90,"tr")(91,"td")(92,"div"),i(93,"stepHour"),t()(),e(94,"td"),i(95,"number"),t(),e(96,"td"),i(97,"1"),t(),e(98,"td")(99,"p"),i(100,"The number of hours to add/substract when clicking hour spinners"),t()()(),e(101,"tr")(102,"td")(103,"div"),i(104,"stepMinute"),t()(),e(105,"td"),i(106,"number"),t(),e(107,"td"),i(108,"1"),t(),e(109,"td")(110,"p"),i(111,"The number of minutes to add/substract when clicking minute spinners"),t()()(),e(112,"tr")(113,"td")(114,"div"),i(115,"stepSecond"),t()(),e(116,"td"),i(117,"number"),t(),e(118,"td"),i(119,"1"),t(),e(120,"td")(121,"p"),i(122,"The number of seconds to add/substract when clicking second spinners"),t()()(),e(123,"tr")(124,"td")(125,"div"),i(126,"color"),t()(),e(127,"td"),i(128,"ThemePalette"),t(),e(129,"td"),i(130,"undefined"),t(),e(131,"td")(132,"p"),i(133,"Color palette to use on the datepicker's calendar"),t()()(),e(134,"tr")(135,"td")(136,"div"),i(137,"enableMeridian"),t()(),e(138,"td"),i(139,"boolean"),t(),e(140,"td"),i(141,"false"),t(),e(142,"td")(143,"p"),i(144,"Whether to display 12H or 24H mode"),t()()(),e(145,"tr")(146,"td")(147,"div"),i(148,"hideTime"),t()(),e(149,"td"),i(150,"boolean"),t(),e(151,"td"),i(152,"false"),t(),e(153,"td")(154,"p"),i(155,"If true, the time is hidden"),t()()(),e(156,"tr")(157,"td")(158,"div"),i(159,"touchUi"),t()(),e(160,"td"),i(161,"boolean"),t(),e(162,"td"),i(163,"false"),t(),e(164,"td")(165,"p"),i(166," Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. "),t()()()()(),e(167,"h2"),i(168,"Choosing a date implementation and date format settings"),t(),e(169,"p"),i(170," The datepicker was built to be date implementation agnostic. This means that it can be made to work with a variety of different date implementations. However it also means that developers need to make sure to provide the appropriate pieces for the datepicker to work with their chosen implementation. "),t(),e(171,"p"),i(172,"The easiest way to ensure this is to import one of the provided date modules:"),t(),e(173,"table",11)(174,"tbody")(175,"tr"),y(176,"th"),e(177,"th"),i(178,"NgxMatNativeDateModule"),t(),e(179,"th"),i(180,"NgxMatMomentModule"),t()(),e(181,"tr")(182,"td"),i(183,"Date type"),t(),e(184,"td"),i(185,"Date"),t(),e(186,"td"),i(187,"Moment"),t()(),e(188,"tr")(189,"td"),i(190,"Dependencies"),t(),e(191,"td"),i(192,"None"),t(),e(193,"td"),i(194,"Moment.js"),t()(),e(195,"tr")(196,"td"),i(197,"Import from"),t(),e(198,"td"),i(199,"@angular-material-components/datetime-picker"),t(),e(200,"td")(201,"a",12),i(202,"@angular-material-components/moment-adapter"),t()()()()(),i(203," To use "),e(204,"strong"),i(205,"NgxMatMomentModule"),t(),i(206,": "),e(207,"pre")(208,"code",9),i(209),t()(),e(210,"p"),i(211," Please note: "),e(212,"strong"),i(213,"NgxMatNativeDateModule"),t(),i(214," is based off the functionality available in JavaScript's native Date object. Thus it is not suitable for many locales. One of the biggest shortcomings of the native Date object is the inability to set the parse format. "),t(),e(215,"p"),i(216," We highly recommend using the "),e(217,"strong"),i(218,"NgxMatMomentModule"),t(),i(219," or a custom "),e(220,"strong"),i(221,"NgxMatDateAdapter"),t(),i(222," that works with the formatting/parsing library of your choice. "),t(),i(223," For example: Creating a custom date adapter "),e(224,"pre")(225,"code",10),i(226),t()(),i(227," Creating a custom date adapter module "),e(228,"pre")(229,"code",10),i(230),t()(),i(231," You can also customize the date format by providing your custom "),e(232,"strong"),i(233,"NGX_MAT_DATE_FORMATS"),t(),i(234," in your module. "),e(235,"pre")(236,"code",10),i(237),t()(),e(238,"h2"),i(239,"Datetime picker with action buttons"),t(),e(240,"pre")(241,"code",13),i(242),t()(),e(243,"h2"),i(244,"Datetime picker with custom icon"),t(),e(245,"pre")(246,"code",13),i(247),t()(),e(248,"h2"),i(249,"Theming"),t(),e(250,"p"),i(251," @see @angular/material "),e(252,"a",14),i(253,"Using a pre-built theme"),t()(),e(254,"p"),i(255,"Add the Material Design icon font to your index.html"),t(),e(256,"pre")(257,"code",15),i(258),t()()(),e(259,"mat-tab",16)(260,"mat-card",17)(261,"mat-card-content")(262,"div",18)(263,"mat-form-field"),y(264,"input",19)(265,"ngx-mat-datepicker-toggle",20)(266,"ngx-mat-datetime-picker",21,0),t()(),e(268,"h4"),i(269),t()()(),e(270,"mat-card",22)(271,"mat-card-content")(272,"div",23)(273,"span",24),i(274,"disabled (Default: false) "),t(),e(275,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.disabled,o)||(n.disabled=o),g(o)}),h(276,be,2,2,"mat-radio-button",26,Se),t()(),e(278,"div",23)(279,"span",24),i(280,"showSpinners (Default: true) "),t(),e(281,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.showSpinners,o)||(n.showSpinners=o),g(o)}),h(282,_e,2,2,"mat-radio-button",26,x),t()(),e(284,"div",23)(285,"span",24),i(286,"showSeconds (Default: false) "),t(),e(287,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.showSeconds,o)||(n.showSeconds=o),g(o)}),h(288,xe,2,2,"mat-radio-button",26,x),t()(),e(290,"div",23)(291,"span",24),i(292,"disableMinute (Default: false) "),t(),e(293,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.disableMinute,o)||(n.disableMinute=o),g(o)}),h(294,Ce,2,2,"mat-radio-button",26,x),t()(),e(296,"div",23)(297,"span",24),i(298,"touchUi (Default: false) "),t(),e(299,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.touchUi,o)||(n.touchUi=o),g(o)}),h(300,ye,2,2,"mat-radio-button",26,x),t()(),e(302,"div",23)(303,"span",24),i(304,"hideTime (Default: false) "),t(),e(305,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.hideTime,o)||(n.hideTime=o),g(o)}),h(306,we,2,2,"mat-radio-button",26,x),t()(),e(308,"div",23)(309,"span",24),i(310,"enableMeridian (Default: false) "),t(),e(311,"mat-radio-group",25),_("ngModelChange",function(o){return u(p),b(n.enableMeridian,o)||(n.enableMeridian=o),g(o)}),h(312,De,2,2,"mat-radio-button",26,x),t()(),e(314,"div",27)(315,"span",24),i(316,"steps "),t(),e(317,"mat-form-field",28)(318,"mat-label"),i(319,"hour (default: 1)"),t(),e(320,"mat-select",29),_("ngModelChange",function(o){return u(p),b(n.stepHour,o)||(n.stepHour=o),g(o)}),h(321,Ee,2,2,"mat-option",30,x),t()(),e(323,"mat-form-field",28)(324,"mat-label"),i(325,"minute (default: 1)"),t(),e(326,"mat-select",29),_("ngModelChange",function(o){return u(p),b(n.stepMinute,o)||(n.stepMinute=o),g(o)}),h(327,ve,2,2,"mat-option",30,x),t()(),e(329,"mat-form-field",28)(330,"mat-label"),i(331,"second (default: 1)"),t(),e(332,"mat-select",29),_("ngModelChange",function(o){return u(p),b(n.stepSecond,o)||(n.stepSecond=o),g(o)}),h(333,ke,2,2,"mat-option",30,x),t()()(),e(335,"div",23)(336,"span",24),i(337,"color (Default: primary) "),t(),e(338,"mat-form-field",28)(339,"mat-label"),i(340,"Select color"),t(),e(341,"mat-select",29),_("ngModelChange",function(o){return u(p),b(n.color,o)||(n.color=o),g(o)}),h(342,Te,2,2,"mat-option",30,x),t()()(),e(344,"div",23)(345,"mat-checkbox",31),v("change",function(o){return u(p),g(n.toggleMinDate(o))}),i(346),t()(),e(347,"div",23)(348,"mat-checkbox",31),v("change",function(o){return u(p),g(n.toggleMaxDate(o))}),i(349),t()()()(),e(350,"pre")(351,"code",13),i(352),t()(),e(353,"h2"),i(354,"Datetime picker with action buttons"),t(),e(355,"pre")(356,"code",13),i(357),t()(),e(358,"mat-card",17)(359,"mat-card-content")(360,"mat-form-field"),y(361,"input",19)(362,"ngx-mat-datepicker-toggle",20),e(363,"ngx-mat-datetime-picker",21,1)(365,"ngx-mat-datepicker-actions")(366,"div",32)(367,"button",33),i(368,"Clear"),t(),e(369,"div")(370,"button",34),i(371,"Cancel"),t(),e(372,"button",35),i(373," Apply "),t()()()()()()()(),e(374,"h2"),i(375,"Datetime picker with custom icon"),t(),e(376,"pre")(377,"code",13),i(378),t()(),e(379,"mat-card",17)(380,"mat-card-content")(381,"mat-form-field"),y(382,"input",19),e(383,"ngx-mat-datepicker-toggle",20)(384,"mat-icon",36),i(385,"keyboard_arrow_down"),t()(),y(386,"ngx-mat-datetime-picker",21,2),t()()()()()}if(w&2){let p=D(267),c=D(364),o=D(387);l("mat-stretch-tabs",!1),a(14),f(n.code1),a(6),s("",n.code2,"\n      "),a(189),f(n.code4),a(17),f(n.code5),a(4),f(n.code6),a(7),f(n.code7),a(5),f(n.code9),a(5),f(n.code10),a(11),f(n.code8),a(6),l("ngxMatDatetimePicker",p)("formControl",n.dateControl)("min",n.minDate)("max",n.maxDate)("disabled",n.disabled),a(),l("for",p),a(),l("showSpinners",n.showSpinners)("showSeconds",n.showSeconds)("stepHour",n.stepHour)("stepMinute",n.stepMinute)("stepSecond",n.stepSecond)("touchUi",n.touchUi)("color",n.color)("enableMeridian",n.enableMeridian)("disableMinute",n.disableMinute)("hideTime",n.hideTime),a(3),s("Selected date: ",n.dateControl.value==null?null:n.dateControl.value.toLocaleString(),""),a(6),S("ngModel",n.disabled),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.showSpinners),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.showSeconds),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.disableMinute),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.touchUi),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.hideTime),l("color",n.color),a(),M(n.options),a(5),S("ngModel",n.enableMeridian),l("color",n.color),a(),M(n.options),a(5),l("color",n.color),a(3),S("ngModel",n.stepHour),a(),M(n.stepHours),a(2),l("color",n.color),a(3),S("ngModel",n.stepMinute),a(),M(n.stepMinutes),a(2),l("color",n.color),a(3),S("ngModel",n.stepSecond),a(),M(n.stepSeconds),a(5),l("color",n.color),a(3),S("ngModel",n.color),a(),M(n.listColors),a(3),l("color",n.color),a(),s(" Min date (Default: null, Demo: now - 1 day) = ",n.minDate==null?null:n.minDate.toLocaleString()," "),a(2),l("color",n.color),a(),s(" Max date (Default: null, Demo: now + 2 days) = ",n.maxDate==null?null:n.maxDate.toLocaleString()," "),a(3),f(n.code3),a(5),f(n.code9),a(4),l("ngxMatDatetimePicker",c)("formControl",n.dateControl)("min",n.minDate)("max",n.maxDate)("disabled",n.disabled),a(),l("for",c),a(),l("showSpinners",n.showSpinners)("showSeconds",n.showSeconds)("stepHour",n.stepHour)("stepMinute",n.stepMinute)("stepSecond",n.stepSecond)("touchUi",n.touchUi)("color",n.color)("enableMeridian",n.enableMeridian)("disableMinute",n.disableMinute)("hideTime",n.hideTime),a(9),l("color",n.color),a(6),f(n.code10),a(4),l("ngxMatDatetimePicker",o)("formControl",n.dateControl)("min",n.minDate)("max",n.maxDate)("disabled",n.disabled),a(),l("for",o),a(3),l("showSpinners",n.showSpinners)("showSeconds",n.showSeconds)("stepHour",n.stepHour)("stepMinute",n.stepMinute)("stepSecond",n.stepSecond)("touchUi",n.touchUi)("color",n.color)("enableMeridian",n.enableMeridian)("disableMinute",n.disableMinute)("hideTime",n.hideTime)}},dependencies:[Q,Y,j,z,F,W,L,V,H,me,le,U,B,ee,$,Z,q,J,se,de,pe,ue,ce,N,Me,ge,he,ae,te,ne,ie,oe,re,E,fe,X,G],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.table[_ngcontent-%COMP%]{border-collapse:collapse;margin-bottom:30px;height:250px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;color:#fff}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{background-color:#268fa7}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{background-color:#8a178c}.datepicker-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.datepicker-acctions[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}"]});let r=d;return r})();export{it as DemoDatetimeComponent};
