"use strict";(self.webpackChunkangular_material_components=self.webpackChunkangular_material_components||[]).push([[435],{2435:(X,C,a)=>{a.r(C),a.d(C,{DemoFileInputComponent:()=>B});var I=a(1731),p=a(8893),f=a(5299),h=a(2757),v=a(1292),u=a(9836),c=a(3484),y=a(5246),g=a(4848),b=a(6355),F=a(7171),x=a(1022);function j(i){return l=>{if(i=Number(i),isNaN(i))throw"MaxSizeValidator: max of size of file is invalid";if(!l.value)return null;let o=l.value;return Array.isArray(l.value)||(o=[l.value]),o.length&&o.map(s=>s.size).reduce((s,r)=>s+r)>i?{maxSize:!0}:null}}var d=a(6115),t=a(9323),M=a(8173),k=a(1206),_=a(1586);const E=["inputFile"],R=["inputValue"],P=[[["","ngxMatFileInputIcon",""]]],O=["[ngxMatFileInputIcon]"];function D(i,l){1&i&&(t.j41(0,"mat-icon",6),t.EFF(1,"attach_file"),t.k0s())}let S=0;class N{constructor(l,o,e,n){this._defaultErrorStateMatcher=l,this._parentForm=o,this._parentFormGroup=e,this.ngControl=n,this.stateChanges=new M.B}}let T=(()=>{var i;class l extends N{get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,d.he)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,d.he)(e)}get required(){return this._required}set required(e){this._required=(0,d.he)(e)}get value(){return this._value}set value(e){this._value=e}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,d.he)(e)}get accept(){return this._accept}set accept(e){this._accept=e}constructor(e,n,s,r,m,Y,J){super(J,m,Y,r),this._elementRef=e,this._platform=n,this._cd=s,this.ngControl=r,this._inputFileRef=(0,t.ebz)("inputFile"),this._inputValueRef=(0,t.ebz)("inputValue"),this.color=(0,t.hFB)("primary"),this.fileNames=null,this._uid="ngx-mat-fileinput-".concat(S++),this.stateChanges=new M.B,this.focused=!1,this.controlType="ngx-mat-file-input",this.autofilled=!1,this._onTouched=()=>{},this._onChange=()=>{},this._disabled=!1,this._multiple=!1,this.placeholder="Choose a file",this.separator=(0,t.hFB)(","),this._required=!1,this._readonly=!0,this.id=this.id,this.ngControl&&(this.ngControl.valueAccessor=this)}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}ngDoCheck(){this.ngControl&&this.updateErrorState()}updateErrorState(){var e;this.errorState=(null!==(e=this.errorStateMatcher)&&void 0!==e?e:this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentForm)}writeValue(e){this._updateInputValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}focus(e){this._inputValueRef().nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(!this.readonly||!e)&&(this.focused=e,this.stateChanges.next())}_markAsTouched(){this._onTouched(),this._cd.markForCheck(),this.stateChanges.next()}_isBadInput(){let e=this._inputValueRef().nativeElement.validity;return e&&e.badInput}get empty(){return!this._inputValueRef().nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){return this.focused||!this.empty}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}openFilePicker(e){this._inputFileRef().nativeElement.click(),e&&(e.preventDefault(),e.stopPropagation()),this._markAsTouched()}handleFiles(e){if(e.length>0){const n=new Array;for(let s=0;s<e.length;s++)n.push(e.item(s));this._updateInputValue(n),this._resetInputFile(),this._onChange(this.multiple?n:n[0])}}onContainerClick(e){}_resetInputFile(){this._inputFileRef().nativeElement.value=""}_updateInputValue(e){let n=null;e&&(n=Array.isArray(e)?this._multiple?e.map(s=>s.name).join(this.separator()):e[0].name:null!=e.name?e.name:null),this._inputValueRef().nativeElement.value=n}}return(i=l).\u0275fac=function(e){return new(e||i)(t.rXU(t.aKT),t.rXU(k.OD),t.rXU(t.gRc),t.rXU(p.vO,10),t.rXU(p.cV,8),t.rXU(p.j4,8),t.rXU(_.es))},i.\u0275cmp=t.VBU({type:i,selectors:[["ngx-mat-file-input"]],viewQuery:function(e,n){1&e&&(t.wEZ(n._inputFileRef,E,5),t.wEZ(n._inputValueRef,R,5)),2&e&&t.NyB(2)},hostAttrs:[1,"ngx-mat-file-input"],inputs:{color:[1,"color"],disabled:"disabled",id:"id",multiple:"multiple",placeholder:"placeholder",separator:[1,"separator"],required:"required",errorStateMatcher:"errorStateMatcher",value:"value",readonly:"readonly",accept:"accept"},exportAs:["ngx-mat-file-input"],features:[t.Jv_([{provide:u.qT,useExisting:(0,t.Rfq)(()=>i)}]),t.Vt3,t.OA$],ngContentSelectors:O,decls:8,vars:12,consts:[["inputValue",""],["inputFile",""],["autocomplete","off",1,"mat-mdc-input-element","mat-mdc-form-field-input-control","mdc-text-field__input",3,"disabled","required"],[1,"mat-mdc-form-field-suffix"],["matSuffix","","mat-icon-button","","type","button",1,"button-browse",3,"click","color","disabled"],["type","file",1,"input-file",3,"change","multiple","accept"],[1,"ngx-mat-file-input--default-icon"]],template:function(e,n){if(1&e){const s=t.RV6();t.NAR(P),t.nrm(0,"input",2,0),t.j41(2,"div",3)(3,"button",4),t.bIt("click",function(m){return t.eBV(s),t.Njj(n.openFilePicker(m))}),t.SdG(4,0,null,D,2,0),t.k0s()(),t.j41(6,"input",5,1),t.bIt("change",function(m){return t.eBV(s),t.Njj(n.handleFiles(m.target.files))}),t.k0s()}2&e&&(t.Y8G("disabled",n.disabled)("required",n.required),t.BMQ("id",n.id)("placeholder",n.placeholder)("readonly",n.readonly||null)("aria-describedby",n._ariaDescribedby||null)("aria-invalid",n.errorState)("aria-required",n.required.toString()),t.R7$(3),t.Y8G("color",n.color())("disabled",n.disabled),t.R7$(3),t.Y8G("multiple",n.multiple)("accept",n.accept))},dependencies:[c.m_,c.An,f.Hl,f.iY],styles:[".mat-mdc-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}\n"],encapsulation:2}),l})();var w=a(6359);function $(i,l){if(1&i&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&i){const o=l.$implicit;t.R7$(),t.JRh(null==o?null:o.name)}}function z(i,l){if(1&i&&(t.j41(0,"mat-radio-button",22),t.EFF(1),t.k0s()),2&i){const o=l.$implicit;t.Y8G("value",o.value),t.R7$(),t.SpI(" ",o.label,"")}}function A(i,l){if(1&i&&(t.j41(0,"mat-radio-button",22),t.EFF(1),t.k0s()),2&i){const o=l.$implicit;t.Y8G("value",o.value),t.R7$(),t.SpI(" ",o.label,"")}}function V(i,l){if(1&i&&(t.j41(0,"mat-option",24),t.EFF(1),t.k0s()),2&i){const o=l.$implicit;t.Y8G("value",o),t.R7$(),t.SpI(" ",o," ")}}function G(i,l){if(1&i&&(t.j41(0,"mat-option",24),t.EFF(1),t.k0s()),2&i){const o=l.$implicit;t.Y8G("value",o),t.R7$(),t.SpI(" ",o," ")}}let B=(()=>{var i;class l{constructor(){this.color="primary",this.disabled=!1,this.multiple=!1,this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.listAccepts=[null,".png","image/*",".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"],this.code3='<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    \x3c!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> --\x3e\n  </ngx-mat-file-input>\n</mat-form-field>',this.code4='<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>',this.code5='<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>',this.code1="npm install --save @ngxmc/file-input",this.code2="import { NgxMatFileInputComponent } from '@ngxmc/file-input';\n\n  @Component({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputComponent\n     ]\n     ...\n  })\n  export class AppComponent { }",this.code6='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.maxSize=16,this.nbFiles=0,this.fileControl=new p.MJ(this.files,[p.k0.required,j(1024*this.maxSize)]),this.file2Control=new p.MJ(this.files),this.file3Control=new p.MJ(this.files)}ngOnInit(){this.fileControl.valueChanges.subscribe(e=>{this.files=Array.isArray(e)?e:[e]}),this.file3Control.valueChanges.subscribe(e=>{let n;n=Array.isArray(e)?e:[e],this.nbFiles=n.length})}onDisabledChanged(e){e?this.fileControl.disable():this.fileControl.enable()}}return(i=l).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.VBU({type:i,selectors:[["app-demo-fileinput"]],decls:161,vars:22,consts:[[3,"mat-stretch-tabs"],["label","API"],["href","https://www.buymeacoffee.com/gnurub","target","_blank"],["src","https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png","alt","Buy Me A Coffee",2,"height","35px !important","width","150px !important"],["href","https://www.npmjs.com/package/@ngxmc/file-input","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"],["ngxMatHighlight",""],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-picker"],[3,"formControl","multiple","accept","color"],[1,"zone","zone-value","flex-column"],[1,"title"],[1,"value"],[1,"zone","zone-errors","flex-column"],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModelChange","ngModel"],[1,"example-radio-button",3,"value"],[3,"ngModelChange","ngModel"],[3,"value"],["ngxMatHighlight","",1,"language-html"],[3,"formControl"],["ngxMatFileInputIcon",""],["appearance","outline"]],template:function(e,n){1&e&&(t.j41(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"p"),t.EFF(3,"Thank you so much for your coffee \u2764\ufe0f"),t.k0s(),t.j41(4,"a",2),t.nrm(5,"img",3),t.k0s(),t.j41(6,"h1"),t.EFF(7,"API reference for @angular-material-components/file-input"),t.k0s(),t.j41(8,"h2"),t.EFF(9,"Getting started"),t.k0s(),t.j41(10,"a",4),t.nrm(11,"img",5),t.k0s(),t.j41(12,"pre")(13,"code",6),t.EFF(14),t.k0s()(),t.j41(15,"h2"),t.EFF(16,"Setup"),t.k0s(),t.j41(17,"pre")(18,"code",7),t.EFF(19),t.k0s()(),t.j41(20,"h2"),t.EFF(21,"Properties @Input"),t.k0s(),t.j41(22,"table",8)(23,"tbody")(24,"tr")(25,"th"),t.EFF(26,"Name"),t.k0s(),t.j41(27,"th"),t.EFF(28,"Type"),t.k0s(),t.j41(29,"th"),t.EFF(30,"Default value"),t.k0s(),t.j41(31,"th"),t.EFF(32,"Description"),t.k0s()(),t.j41(33,"tr")(34,"td")(35,"div"),t.EFF(36,"disabled"),t.k0s()(),t.j41(37,"td"),t.EFF(38,"boolean"),t.k0s(),t.j41(39,"td"),t.EFF(40,"null"),t.k0s(),t.j41(41,"td")(42,"p"),t.EFF(43,"If true, the file input is readonly."),t.k0s()()(),t.j41(44,"tr")(45,"td")(46,"div"),t.EFF(47,"multiple"),t.k0s()(),t.j41(48,"td"),t.EFF(49,"boolean"),t.k0s(),t.j41(50,"td"),t.EFF(51,"false"),t.k0s(),t.j41(52,"td")(53,"p"),t.EFF(54,"If true, the file input allows the user to select more than one file."),t.k0s()()(),t.j41(55,"tr")(56,"td")(57,"div"),t.EFF(58,"accept"),t.k0s()(),t.j41(59,"td"),t.EFF(60,"string"),t.k0s(),t.j41(61,"td"),t.EFF(62,"null"),t.k0s(),t.j41(63,"td")(64,"p"),t.EFF(65,' Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) '),t.k0s()()(),t.j41(66,"tr")(67,"td")(68,"div"),t.EFF(69,"color"),t.k0s()(),t.j41(70,"td"),t.EFF(71,"ThemePalette"),t.k0s(),t.j41(72,"td"),t.EFF(73,"null"),t.k0s(),t.j41(74,"td")(75,"p"),t.EFF(76,"Theme color palette for the component."),t.k0s()()()()(),t.j41(77,"h2"),t.EFF(78,"Theming"),t.k0s(),t.j41(79,"p"),t.EFF(80," @see @angular/material "),t.j41(81,"a",9),t.EFF(82,"Using a pre-built theme"),t.k0s()(),t.j41(83,"p"),t.EFF(84,"Add the Material Design icon font to your index.html"),t.k0s(),t.j41(85,"pre")(86,"code",10),t.EFF(87),t.k0s()()(),t.j41(88,"mat-tab",11)(89,"mat-card",12)(90,"mat-card-content")(91,"mat-form-field"),t.nrm(92,"ngx-mat-file-input",13),t.k0s()()(),t.j41(93,"mat-card",14)(94,"mat-card-content")(95,"div",15),t.EFF(96,"Selected file(s):"),t.k0s(),t.j41(97,"div",16)(98,"ul"),t.Z7z(99,$,2,1,"li",null,t.fX1),t.k0s()()()(),t.j41(101,"mat-card",17)(102,"mat-card-content")(103,"div",15),t.EFF(104),t.k0s(),t.j41(105,"div",16),t.EFF(106),t.nI1(107,"json"),t.k0s()()(),t.j41(108,"mat-card",18)(109,"mat-card-content")(110,"div",19)(111,"span",20),t.EFF(112,"disabled (Default: false) "),t.k0s(),t.j41(113,"mat-radio-group",21),t.bIt("ngModelChange",function(r){return n.onDisabledChanged(r)}),t.Z7z(114,z,2,2,"mat-radio-button",22,t.fX1),t.k0s()(),t.j41(116,"div",19)(117,"span",20),t.EFF(118,"multiple (Default: false) "),t.k0s(),t.j41(119,"mat-radio-group",21),t.mxI("ngModelChange",function(r){return t.DH7(n.multiple,r)||(n.multiple=r),r}),t.Z7z(120,A,2,2,"mat-radio-button",22,t.fX1),t.k0s()(),t.j41(122,"div",19)(123,"span",20),t.EFF(124,"accept (Default: null) "),t.k0s(),t.j41(125,"mat-form-field")(126,"mat-label"),t.EFF(127,"Select accept"),t.k0s(),t.j41(128,"mat-select",23),t.mxI("ngModelChange",function(r){return t.DH7(n.accept,r)||(n.accept=r),r}),t.Z7z(129,V,2,2,"mat-option",24,t.fX1),t.k0s()()(),t.j41(131,"div",19)(132,"span",20),t.EFF(133,"color (Default: primary) "),t.k0s(),t.j41(134,"mat-form-field")(135,"mat-label"),t.EFF(136,"Select color"),t.k0s(),t.j41(137,"mat-select",23),t.mxI("ngModelChange",function(r){return t.DH7(n.color,r)||(n.color=r),r}),t.Z7z(138,G,2,2,"mat-option",24,t.fX1),t.k0s()()()()(),t.j41(140,"pre")(141,"code",25),t.EFF(142),t.k0s()(),t.j41(143,"h4"),t.EFF(144,"You can provide a custom icon by using the directive ngxMatFileInputIcon"),t.k0s(),t.j41(145,"pre")(146,"code",25),t.EFF(147),t.k0s()(),t.j41(148,"mat-form-field")(149,"ngx-mat-file-input",26)(150,"mat-icon",27),t.EFF(151,"folder"),t.k0s()()(),t.j41(152,"h4"),t.EFF(153,"You can use with all properties of MatFormField such as appearance variants, hint..."),t.k0s(),t.j41(154,"pre")(155,"code",25),t.EFF(156),t.k0s()(),t.j41(157,"mat-form-field",28),t.nrm(158,"ngx-mat-file-input",26),t.j41(159,"mat-hint"),t.EFF(160),t.k0s()()()()),2&e&&(t.Y8G("mat-stretch-tabs",!1),t.R7$(14),t.JRh(n.code1),t.R7$(5),t.JRh(n.code2),t.R7$(68),t.JRh(n.code6),t.R7$(5),t.Y8G("formControl",n.fileControl)("multiple",n.multiple)("accept",n.accept)("color",n.color),t.R7$(7),t.Dyx(n.files),t.R7$(5),t.SpI("Errors (Max size: ",n.maxSize,"Ko)"),t.R7$(2),t.JRh(t.bMT(107,20,n.fileControl.errors)),t.R7$(7),t.Y8G("ngModel",n.disabled),t.R7$(),t.Dyx(n.options),t.R7$(5),t.R50("ngModel",n.multiple),t.R7$(),t.Dyx(n.options),t.R7$(8),t.R50("ngModel",n.accept),t.R7$(),t.Dyx(n.listAccepts),t.R7$(8),t.R50("ngModel",n.color),t.R7$(),t.Dyx(n.listColors),t.R7$(4),t.JRh(n.code3),t.R7$(5),t.JRh(n.code4),t.R7$(2),t.Y8G("formControl",n.file2Control),t.R7$(7),t.JRh(n.code5),t.R7$(2),t.Y8G("formControl",n.file3Control),t.R7$(2),t.SpI("",n.nbFiles," selected file(s)"))},dependencies:[p.YN,p.BC,p.vS,I.TG,f.Hl,h.Hu,h.RN,h.m2,v.g7,u.RG,u.rl,u.nJ,u.MV,c.m_,c.An,y.fS,g.Wk,g.VT,g._g,b.Ve,b.VO,_.wT,F.RI,F.mq,F.T8,T,w.b,x.Xg,p.X1,p.l_],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:block}"]}),l})()}}]);