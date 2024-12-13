import{b as be}from"./chunk-6WRA6FNP.js";import{a as fe}from"./chunk-Q4EMGIXM.js";import{a as Fe,b as we,c as Pe}from"./chunk-7HUTVKTT.js";import{a as ye,b as ve,c as Se,d as Ee,e as Ie,f as Oe}from"./chunk-Q53VEYO2.js";import{J as Me,d as te,e as F,q as he,r as ge,u as _e,x as xe,y as Ce}from"./chunk-AZPN2TNB.js";import"./chunk-YQJNRNJO.js";import{Ca as de,Da as se,Ja as ce,Ka as ue,V as $,ca as ee,f as y,ia as ie,ja as ne,ka as ae,l as Z,la as w,ma as P,sa as oe,ta as le,ua as re,xa as me,ya as O,za as pe}from"./chunk-YCKKHTDK.js";import{Eb as W,Fb as s,Ha as A,Ia as R,Mb as _,Nb as x,Ob as C,Pb as t,Qb as i,Rb as h,Sb as G,Tc as X,Vb as b,Yb as H,Zb as L,ba as B,dc as z,ec as Q,fb as m,gb as f,gc as a,hc as u,ic as g,kc as S,lc as E,m as D,mc as I,nc as J,ob as V,ra as N,rc as K,sa as T,sc as U,ta as k,tb as v,wb as q,xc as Y}from"./chunk-TLOIBPPF.js";var Be=["inputFile"],Ne=["inputValue"],Re=[[["","ngxMatFileInputIcon",""]]],qe=["[ngxMatFileInputIcon]"];function We(r,l){r&1&&(t(0,"mat-icon",6),a(1,"attach_file"),i())}var Ge=0,j=class{constructor(l,p,e,o){this._defaultErrorStateMatcher=l,this._parentForm=p,this._parentFormGroup=e,this.ngControl=o,this.stateChanges=new D}};var De=(()=>{let l=class l extends j{get disabled(){return this.ngControl&&this.ngControl.disabled!==null?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=y(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get multiple(){return this._multiple}set multiple(e){this._multiple=y(e)}get required(){return this._required}set required(e){this._required=y(e)}get value(){return this._value}set value(e){this._value=e}get readonly(){return this._readonly}set readonly(e){this._readonly=y(e)}get accept(){return this._accept}set accept(e){this._accept=e}constructor(e,o,n,c,d,M,ke){super(ke,d,M,c),this._elementRef=e,this._platform=o,this._cd=n,this.ngControl=c,this._inputFileRef=V("inputFile"),this._inputValueRef=V("inputValue"),this.color=A("primary"),this.fileNames=null,this._uid="ngx-mat-fileinput-".concat(Ge++),this.stateChanges=new D,this.focused=!1,this.controlType="ngx-mat-file-input",this.autofilled=!1,this._onTouched=()=>{},this._onChange=()=>{},this._disabled=!1,this._multiple=!1,this.placeholder="Choose a file",this.separator=A(","),this._required=!1,this._readonly=!0,this.id=this.id,this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}ngDoCheck(){this.ngControl&&this.updateErrorState()}updateErrorState(){var o;let e=this.ngControl?this.ngControl.control:null;this.errorState=((o=this.errorStateMatcher)!=null?o:this._defaultErrorStateMatcher).isErrorState(e,this._parentForm)}writeValue(e){this._updateInputValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}focus(e){this._inputValueRef().nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(!this.readonly||!e)&&(this.focused=e,this.stateChanges.next())}_markAsTouched(){this._onTouched(),this._cd.markForCheck(),this.stateChanges.next()}_isBadInput(){let e=this._inputValueRef().nativeElement.validity;return e&&e.badInput}get empty(){return!this._inputValueRef().nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){return this.focused||!this.empty}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}openFilePicker(e){this._inputFileRef().nativeElement.click(),e&&(e.preventDefault(),e.stopPropagation()),this._markAsTouched()}handleFiles(e){if(e.length>0){let o=new Array;for(let n=0;n<e.length;n++)o.push(e.item(n));this._updateInputValue(o),this._resetInputFile(),this._onChange(this.multiple?o:o[0])}}onContainerClick(e){}_resetInputFile(){this._inputFileRef().nativeElement.value=""}_updateInputValue(e){let o=null;e&&(Array.isArray(e)?o=this._multiple?e.map(n=>n.name).join(this.separator()):e[0].name:o=e.name!=null?e.name:null),this._inputValueRef().nativeElement.value=o}};l.\u0275fac=function(o){return new(o||l)(f(R),f(Z),f(Y),f(le,10),f(me,8),f(se,8),f($))},l.\u0275cmp=v({type:l,selectors:[["ngx-mat-file-input"]],viewQuery:function(o,n){o&1&&(z(n._inputFileRef,Be,5),z(n._inputValueRef,Ne,5)),o&2&&Q(2)},hostAttrs:[1,"ngx-mat-file-input"],inputs:{color:[1,"color"],disabled:"disabled",id:"id",multiple:"multiple",placeholder:"placeholder",separator:[1,"separator"],required:"required",errorStateMatcher:"errorStateMatcher",value:"value",readonly:"readonly",accept:"accept"},exportAs:["ngx-mat-file-input"],features:[J([{provide:_e,useExisting:B(()=>l)}]),q,N],ngContentSelectors:qe,decls:8,vars:12,consts:[["inputValue",""],["inputFile",""],["autocomplete","off",1,"mat-mdc-input-element","mat-mdc-form-field-input-control","mdc-text-field__input",3,"disabled","required"],[1,"mat-mdc-form-field-suffix"],["matSuffix","","mat-icon-button","","type","button",1,"button-browse",3,"click","color","disabled"],["type","file",1,"input-file",3,"change","multiple","accept"],[1,"ngx-mat-file-input--default-icon"]],template:function(o,n){if(o&1){let c=G();H(Re),h(0,"input",2,0),t(2,"div",3)(3,"button",4),b("click",function(M){return T(c),k(n.openFilePicker(M))}),L(4,0,null,We,2,0),i()(),t(6,"input",5,1),b("change",function(M){return T(c),k(n.handleFiles(M.target.files))}),i()}o&2&&(s("disabled",n.disabled)("required",n.required),W("id",n.id)("placeholder",n.placeholder)("readonly",n.readonly||null)("aria-describedby",n._ariaDescribedby||null)("aria-invalid",n.errorState)("aria-required",n.required.toString()),m(3),s("color",n.color())("disabled",n.disabled),m(3),s("multiple",n.multiple)("accept",n.accept))},dependencies:[P,w,F,te],styles:[".mat-mdc-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}\n"],encapsulation:2});let r=l;return r})();function Te(r){return l=>{if(r=Number(r),isNaN(r))throw"MaxSizeValidator: max of size of file is invalid";if(!l.value)return null;let p=l.value;if(Array.isArray(l.value)||(p=[l.value]),!p.length)return null;let e=(n,c)=>n+c;return p.map(n=>n.size).reduce(e)>r?{maxSize:!0}:null}}function He(r,l){if(r&1&&(t(0,"li"),a(1),i()),r&2){let p=l.$implicit;m(),u(p==null?null:p.name)}}function Le(r,l){if(r&1&&(t(0,"mat-radio-button",22),a(1),i()),r&2){let p=l.$implicit;s("value",p.value),m(),g(" ",p.label,"")}}function Qe(r,l){if(r&1&&(t(0,"mat-radio-button",22),a(1),i()),r&2){let p=l.$implicit;s("value",p.value),m(),g(" ",p.label,"")}}function Je(r,l){if(r&1&&(t(0,"mat-option",24),a(1),i()),r&2){let p=l.$implicit;s("value",p),m(),g(" ",p," ")}}function Ke(r,l){if(r&1&&(t(0,"mat-option",24),a(1),i()),r&2){let p=l.$implicit;s("value",p),m(),g(" ",p," ")}}var Gt=(()=>{let l=class l{constructor(){this.color="primary",this.disabled=!1,this.multiple=!1,this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.listAccepts=[null,".png","image/*",".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"],this.code3='<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    <!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> -->\n  </ngx-mat-file-input>\n</mat-form-field>',this.code4='<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>',this.code5='<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>',this.code1="npm install --save @ngxmc/file-input",this.code2="import { NgxMatFileInputComponent } from '@ngxmc/file-input';\n\n  @Component({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputComponent\n     ]\n     ...\n  })\n  export class AppComponent { }",this.code6='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.maxSize=16,this.nbFiles=0,this.fileControl=new O(this.files,[oe.required,Te(this.maxSize*1024)]),this.file2Control=new O(this.files),this.file3Control=new O(this.files)}ngOnInit(){this.fileControl.valueChanges.subscribe(e=>{Array.isArray(e)?this.files=e:this.files=[e]}),this.file3Control.valueChanges.subscribe(e=>{let o;Array.isArray(e)?o=e:o=[e],this.nbFiles=o.length})}onDisabledChanged(e){e?this.fileControl.disable():this.fileControl.enable()}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=v({type:l,selectors:[["app-demo-fileinput"]],decls:161,vars:22,consts:[[3,"mat-stretch-tabs"],["label","API"],["href","https://www.buymeacoffee.com/gnurub","target","_blank"],["src","https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png","alt","Buy Me A Coffee",2,"height","35px !important","width","150px !important"],["href","https://www.npmjs.com/package/@ngxmc/file-input","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"],["ngxMatHighlight",""],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-picker"],[3,"formControl","multiple","accept","color"],[1,"zone","zone-value","flex-column"],[1,"title"],[1,"value"],[1,"zone","zone-errors","flex-column"],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModelChange","ngModel"],[1,"example-radio-button",3,"value"],[3,"ngModelChange","ngModel"],[3,"value"],["ngxMatHighlight","",1,"language-html"],[3,"formControl"],["ngxMatFileInputIcon",""],["appearance","outline"]],template:function(o,n){o&1&&(t(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"p"),a(3,"Thank you so much for your coffee \u2764\uFE0F"),i(),t(4,"a",2),h(5,"img",3),i(),t(6,"h1"),a(7,"API reference for @angular-material-components/file-input"),i(),t(8,"h2"),a(9,"Getting started"),i(),t(10,"a",4),h(11,"img",5),i(),t(12,"pre")(13,"code",6),a(14),i()(),t(15,"h2"),a(16,"Setup"),i(),t(17,"pre")(18,"code",7),a(19),i()(),t(20,"h2"),a(21,"Properties @Input"),i(),t(22,"table",8)(23,"tbody")(24,"tr")(25,"th"),a(26,"Name"),i(),t(27,"th"),a(28,"Type"),i(),t(29,"th"),a(30,"Default value"),i(),t(31,"th"),a(32,"Description"),i()(),t(33,"tr")(34,"td")(35,"div"),a(36,"disabled"),i()(),t(37,"td"),a(38,"boolean"),i(),t(39,"td"),a(40,"null"),i(),t(41,"td")(42,"p"),a(43,"If true, the file input is readonly."),i()()(),t(44,"tr")(45,"td")(46,"div"),a(47,"multiple"),i()(),t(48,"td"),a(49,"boolean"),i(),t(50,"td"),a(51,"false"),i(),t(52,"td")(53,"p"),a(54,"If true, the file input allows the user to select more than one file."),i()()(),t(55,"tr")(56,"td")(57,"div"),a(58,"accept"),i()(),t(59,"td"),a(60,"string"),i(),t(61,"td"),a(62,"null"),i(),t(63,"td")(64,"p"),a(65,' Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) '),i()()(),t(66,"tr")(67,"td")(68,"div"),a(69,"color"),i()(),t(70,"td"),a(71,"ThemePalette"),i(),t(72,"td"),a(73,"null"),i(),t(74,"td")(75,"p"),a(76,"Theme color palette for the component."),i()()()()(),t(77,"h2"),a(78,"Theming"),i(),t(79,"p"),a(80," @see @angular/material "),t(81,"a",9),a(82,"Using a pre-built theme"),i()(),t(83,"p"),a(84,"Add the Material Design icon font to your index.html"),i(),t(85,"pre")(86,"code",10),a(87),i()()(),t(88,"mat-tab",11)(89,"mat-card",12)(90,"mat-card-content")(91,"mat-form-field"),h(92,"ngx-mat-file-input",13),i()()(),t(93,"mat-card",14)(94,"mat-card-content")(95,"div",15),a(96,"Selected file(s):"),i(),t(97,"div",16)(98,"ul"),x(99,He,2,1,"li",null,_),i()()()(),t(101,"mat-card",17)(102,"mat-card-content")(103,"div",15),a(104),i(),t(105,"div",16),a(106),K(107,"json"),i()()(),t(108,"mat-card",18)(109,"mat-card-content")(110,"div",19)(111,"span",20),a(112,"disabled (Default: false) "),i(),t(113,"mat-radio-group",21),b("ngModelChange",function(d){return n.onDisabledChanged(d)}),x(114,Le,2,2,"mat-radio-button",22,_),i()(),t(116,"div",19)(117,"span",20),a(118,"multiple (Default: false) "),i(),t(119,"mat-radio-group",21),I("ngModelChange",function(d){return E(n.multiple,d)||(n.multiple=d),d}),x(120,Qe,2,2,"mat-radio-button",22,_),i()(),t(122,"div",19)(123,"span",20),a(124,"accept (Default: null) "),i(),t(125,"mat-form-field")(126,"mat-label"),a(127,"Select accept"),i(),t(128,"mat-select",23),I("ngModelChange",function(d){return E(n.accept,d)||(n.accept=d),d}),x(129,Je,2,2,"mat-option",24,_),i()()(),t(131,"div",19)(132,"span",20),a(133,"color (Default: primary) "),i(),t(134,"mat-form-field")(135,"mat-label"),a(136,"Select color"),i(),t(137,"mat-select",23),I("ngModelChange",function(d){return E(n.color,d)||(n.color=d),d}),x(138,Ke,2,2,"mat-option",24,_),i()()()()(),t(140,"pre")(141,"code",25),a(142),i()(),t(143,"h4"),a(144,"You can provide a custom icon by using the directive ngxMatFileInputIcon"),i(),t(145,"pre")(146,"code",25),a(147),i()(),t(148,"mat-form-field")(149,"ngx-mat-file-input",26)(150,"mat-icon",27),a(151,"folder"),i()()(),t(152,"h4"),a(153,"You can use with all properties of MatFormField such as appearance variants, hint..."),i(),t(154,"pre")(155,"code",25),a(156),i()(),t(157,"mat-form-field",28),h(158,"ngx-mat-file-input",26),t(159,"mat-hint"),a(160),i()()()()),o&2&&(s("mat-stretch-tabs",!1),m(14),u(n.code1),m(5),u(n.code2),m(68),u(n.code6),m(5),s("formControl",n.fileControl)("multiple",n.multiple)("accept",n.accept)("color",n.color),m(7),C(n.files),m(5),g("Errors (Max size: ",n.maxSize,"Ko)"),m(2),u(U(107,20,n.fileControl.errors)),m(7),s("ngModel",n.disabled),m(),C(n.options),m(5),S("ngModel",n.multiple),m(),C(n.options),m(8),S("ngModel",n.accept),m(),C(n.listAccepts),m(8),S("ngModel",n.color),m(),C(n.listColors),m(4),u(n.code3),m(5),u(n.code4),m(2),s("formControl",n.file2Control),m(7),u(n.code5),m(2),s("formControl",n.file3Control),m(2),g("",n.nbFiles," selected file(s)"))},dependencies:[ce,re,pe,X,F,ae,ie,ne,be,Ce,xe,he,ge,P,w,Me,Se,ye,ve,Ie,Ee,ee,Pe,Fe,we,De,Oe,fe,ue,de],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:block}"]});let r=l;return r})();export{Gt as DemoFileInputComponent};
