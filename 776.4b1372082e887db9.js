"use strict";(self.webpackChunkmy_ng3=self.webpackChunkmy_ng3||[]).push([[776],{776:(it,Z,l)=>{l.r(Z),l.d(Z,{StarWarModule:()=>nt});var c=l(9808),p=l(3072),m=l(3900),t=l(1223),u=l(4004);function g(a){return Object.assign(Object.assign({},a),{count:parseInt(a.count)})}function _(a){return Object.assign(Object.assign({},a),{created:new Date(a.created),edited:new Date(a.edited)})}function f(a){return Object.assign(Object.assign({},_(a)),{height:parseFloat(a.height),mass:parseFloat(a.mass)})}function S(a){return Object.assign(Object.assign({},_(a)),{average_height:parseFloat(a.average_height),average_lifespan:parseFloat(a.average_lifespan)})}function v(a){return Object.assign(Object.assign({},g(a)),{results:(a.results||[]).map(n=>S(n))})}function T(a){return Object.assign({},_(a))}var h=l(520);const w="https://swapi.dev/api/people/";let C=(()=>{class a{constructor(e){this.http=e}getAll(e){return this.http.get(w,{params:e}).pipe((0,u.U)(r=>function U(a){return Object.assign(Object.assign({},g(a)),{results:(a.results||[]).map(n=>f(n))})}(r)))}get(e){return this.http.get(`${w}${e}/`).pipe((0,u.U)(r=>f(r)))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(h.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var o=l(2382);function x(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).onItemClick(s.url)}),t.TgZ(1,"label"),t._uU(2),t.qZA(),t.qZA()}if(2&a){const e=n.$implicit;t.xp6(2),t.Oqu(e.name)}}function L(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"form",3),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSearch()}),t._UZ(2,"input",4),t.qZA(),t.TgZ(3,"div",5),t.YNc(4,x,3,1,"div",6),t.TgZ(5,"div",7),t.TgZ(6,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.previous)}),t.TgZ(7,"i",9),t._uU(8," arrow_left "),t.qZA(),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.next)}),t.TgZ(10,"i",9),t._uU(11," arrow_right "),t.qZA(),t.qZA(),t.TgZ(12,"p"),t._uU(13,"Total "),t.TgZ(14,"b"),t._uU(15),t.qZA(),t._uU(16," results."),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.formGroup),t.xp6(3),t.Q6J("ngForOf",e.data.results),t.xp6(2),t.Q6J("disabled",null===e.data.previous),t.xp6(3),t.Q6J("disabled",null===e.data.next),t.xp6(6),t.Oqu(e.data.count)}}function y(a,n){1&a&&(t._UZ(0,"div",11),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let k=(()=>{class a{constructor(e){this.fb=e,this.data=null,this.search={},this.searchChange=new t.vpe,this.itemSelect=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({search:[this.search.search||null],page:[this.search.page||null]}),this.emit()}changePage(e){const r=new URL(e);this.formGroup.setValue({search:r.searchParams.get("search"),page:r.searchParams.get("page")}),this.emit()}onSearch(){var e;null===(e=this.formGroup.get("page"))||void 0===e||e.setValue(null),this.emit()}onItemClick(e){const i=new URL(e).pathname.split("/").filter(s=>s).pop();this.itemSelect.emit(i)}emit(){const e={},r=this.formGroup.value;r.search&&(e.search=r.search),r.page&&(e.page=r.page),this.searchChange.emit(this.formGroup.value)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-people-list"]],inputs:{data:"data",search:"search"},outputs:{searchChange:"searchChange",itemSelect:"itemSelect"},decls:3,vars:2,consts:[["class","cmp-star-war-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-star-war-container"],[1,"cmp-search-box",3,"formGroup","ngSubmit"],["type","search","formControlName","search","placeholder"," Search Here ",1,"search-box"],[1,"cmp-item"],["class","cmp-item-list",3,"click",4,"ngFor","ngForOf"],[1,"cmp-paginator"],["type","button",3,"disabled","click"],[1,"material-icons"],[1,"cmp-item-list",3,"click"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,L,17,5,"div",0),t.YNc(1,y,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],styles:[""]}),a})(),O=(()=>{class a{constructor(e,r,i){this.service=e,this.route=r,this.router=i}ngOnInit(){this.search=this.route.snapshot.queryParams,this.data$=this.route.queryParams.pipe((0,m.w)(e=>(this.search=e,this.service.getAll(e))))}onSearch(e){this.router.navigate([],{relativeTo:this.route,queryParams:e,replaceUrl:!0})}onItemSelect(e){this.router.navigate([e],{relativeTo:this.route})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C),t.Y36(p.gz),t.Y36(p.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-people-list-page"]],decls:2,vars:4,consts:[[3,"data","search","searchChange","itemSelect"]],template:function(e,r){1&e&&(t.TgZ(0,"app-star-war-people-list",0),t.NdJ("searchChange",function(s){return r.onSearch(s)})("itemSelect",function(s){return r.onItemSelect(s)}),t.ALo(1,"async"),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,2,r.data$))("search",r.search)},directives:[k],pipes:[c.Ov],styles:[""]}),a})();function J(a,n){if(1&a&&(t.TgZ(0,"div",2),t.TgZ(1,"p"),t.TgZ(2,"b"),t._uU(3,"Name"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p"),t.TgZ(6,"b"),t._uU(7,"Gender"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p"),t.TgZ(10,"b"),t._uU(11,"Birth Year"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p"),t.TgZ(14,"b"),t._uU(15,"Height"),t.qZA(),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"p"),t.TgZ(19,"b"),t._uU(20,"Mass"),t.qZA(),t._uU(21),t.ALo(22,"number"),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.hij(" ",e.data.name," "),t.xp6(4),t.hij(" ",e.data.gender," "),t.xp6(4),t.hij(" ",e.data.birth_year," "),t.xp6(4),t.hij(" ",t.xi3(17,5,e.data.height,"1.2-2")," cm. "),t.xp6(5),t.hij(" ",t.xi3(22,8,e.data.mass,"1.2-2")," kg. ")}}function I(a,n){1&a&&(t._UZ(0,"div",3),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let F=(()=>{class a{constructor(){this.data=null}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-person-view"]],inputs:{data:"data"},decls:3,vars:2,consts:[["class","cmp-view-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-view-container"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,J,23,11,"div",0),t.YNc(1,I,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5],pipes:[c.JJ],styles:[""]}),a})(),j=(()=>{class a{constructor(e,r){this.service=e,this.route=r}ngOnInit(){this.data$=this.route.params.pipe((0,m.w)(e=>this.service.get(e.id)))}goBack(){history.back()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C),t.Y36(p.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-person-view-page"]],decls:5,vars:3,consts:[[3,"data"],["type","button",1,"cmd-back-button",3,"click"],[1,"material-icons"]],template:function(e,r){1&e&&(t._UZ(0,"app-star-war-person-view",0),t.ALo(1,"async"),t.TgZ(2,"button",1),t.NdJ("click",function(){return r.goBack()}),t.TgZ(3,"i",2),t._uU(4," arrow_back "),t.qZA(),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,1,r.data$))},directives:[F],pipes:[c.Ov],styles:[""]}),a})();const A="https://swapi.dev/api/planets/";let P=(()=>{class a{constructor(e){this.http=e}getAll(e){return this.http.get(A,{params:e}).pipe((0,u.U)(r=>function W(a){return Object.assign(Object.assign({},g(a)),{results:(a.results||[]).map(n=>T(n))})}(r)))}get(e){return this.http.get(`${A}${e}/`).pipe((0,u.U)(r=>T(r)))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(h.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function V(a,n){if(1&a&&(t.TgZ(0,"div",2),t.TgZ(1,"p"),t.TgZ(2,"b"),t._uU(3,"Name"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p"),t.TgZ(6,"b"),t._uU(7,"Rotation period"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p"),t.TgZ(10,"b"),t._uU(11,"Orbital period"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p"),t.TgZ(14,"b"),t._uU(15,"Diameter"),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p"),t.TgZ(18,"b"),t._uU(19,"Climate"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"p"),t.TgZ(22,"b"),t._uU(23,"Gravity"),t.qZA(),t._uU(24),t.qZA(),t.TgZ(25,"p"),t.TgZ(26,"b"),t._uU(27,"Terrain"),t.qZA(),t._uU(28),t.qZA(),t.TgZ(29,"p"),t.TgZ(30,"b"),t._uU(31,"Surface water"),t.qZA(),t._uU(32),t.qZA(),t.TgZ(33,"p"),t.TgZ(34,"b"),t._uU(35,"Population"),t.qZA(),t._uU(36),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.hij(" ",e.data.name," "),t.xp6(4),t.hij(" ",e.data.rotation_period," "),t.xp6(4),t.hij(" ",e.data.orbital_period," "),t.xp6(4),t.hij(" ",e.data.diameter," "),t.xp6(4),t.hij(" ",e.data.climate," "),t.xp6(4),t.hij(" ",e.data.gravity," "),t.xp6(4),t.hij(" ",e.data.terrain," "),t.xp6(4),t.hij(" ",e.data.surface_water," "),t.xp6(4),t.hij(" ",e.data.population," ")}}function N(a,n){1&a&&(t._UZ(0,"div",3),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let Y=(()=>{class a{constructor(){this.data=null}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-planet-view"]],inputs:{data:"data"},decls:3,vars:2,consts:[["class","cmp-view-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-view-container"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,V,37,9,"div",0),t.YNc(1,N,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5],styles:[""]}),a})(),G=(()=>{class a{constructor(e,r){this.service=e,this.route=r}ngOnInit(){this.data$=this.route.params.pipe((0,m.w)(e=>this.service.get(e.id)))}goBack(){history.back()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(P),t.Y36(p.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-planet-view-page"]],decls:5,vars:3,consts:[[3,"data"],["type","button",1,"cmd-back-button",3,"click"],[1,"material-icons"]],template:function(e,r){1&e&&(t._UZ(0,"app-star-war-planet-view",0),t.ALo(1,"async"),t.TgZ(2,"button",1),t.NdJ("click",function(){return r.goBack()}),t.TgZ(3,"i",2),t._uU(4," arrow_back "),t.qZA(),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,1,r.data$))},directives:[Y],pipes:[c.Ov],styles:[""]}),a})();function M(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).onItemClick(s.url)}),t.TgZ(1,"label"),t._uU(2),t.qZA(),t.qZA()}if(2&a){const e=n.$implicit;t.xp6(2),t.Oqu(e.name)}}function Q(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"form",3),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSearch()}),t._UZ(2,"input",4),t.qZA(),t.TgZ(3,"div",5),t.YNc(4,M,3,1,"div",6),t.TgZ(5,"div",7),t.TgZ(6,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.previous)}),t.TgZ(7,"i",9),t._uU(8," arrow_left "),t.qZA(),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.next)}),t.TgZ(10,"i",9),t._uU(11," arrow_right "),t.qZA(),t.qZA(),t.TgZ(12,"p"),t._uU(13,"Total "),t.TgZ(14,"b"),t._uU(15),t.qZA(),t._uU(16," results."),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.formGroup),t.xp6(3),t.Q6J("ngForOf",e.data.results),t.xp6(2),t.Q6J("disabled",null===e.data.previous),t.xp6(3),t.Q6J("disabled",null===e.data.next),t.xp6(6),t.Oqu(e.data.count)}}function $(a,n){1&a&&(t._UZ(0,"div",11),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let H=(()=>{class a{constructor(e){this.fb=e,this.data=null,this.search={},this.searchChange=new t.vpe,this.itemSelect=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({search:[this.search.search||null],page:[this.search.page||null]}),this.emit()}changePage(e){const r=new URL(e);this.formGroup.setValue({search:r.searchParams.get("search"),page:r.searchParams.get("page")}),this.emit()}onSearch(){var e;null===(e=this.formGroup.get("page"))||void 0===e||e.setValue(null),this.emit()}onItemClick(e){const i=new URL(e).pathname.split("/").filter(s=>s).pop();this.itemSelect.emit(i)}emit(){const e={},r=this.formGroup.value;r.search&&(e.search=r.search),r.page&&(e.page=r.page),this.searchChange.emit(this.formGroup.value)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-planets-list"]],inputs:{data:"data",search:"search"},outputs:{searchChange:"searchChange",itemSelect:"itemSelect"},decls:3,vars:2,consts:[["class","cmp-star-war-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-star-war-container"],[1,"cmp-search-box",3,"formGroup","ngSubmit"],["type","search","formControlName","search","placeholder"," Search Here ",1,"search-box"],[1,"cmp-item"],["class","cmp-item-list",3,"click",4,"ngFor","ngForOf"],[1,"cmp-paginator"],["type","button",3,"disabled","click"],[1,"material-icons"],[1,"cmp-item-list",3,"click"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,Q,17,5,"div",0),t.YNc(1,$,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],styles:[""]}),a})(),E=(()=>{class a{constructor(e,r,i){this.service=e,this.route=r,this.router=i}ngOnInit(){this.search=this.route.snapshot.queryParams,this.data$=this.route.queryParams.pipe((0,m.w)(e=>(this.search=e,this.service.getAll(e))))}onSearch(e){this.router.navigate([],{relativeTo:this.route,queryParams:e,replaceUrl:!0})}onItemSelect(e){this.router.navigate([e],{relativeTo:this.route})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(P),t.Y36(p.gz),t.Y36(p.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-planets-list-page"]],decls:2,vars:4,consts:[[3,"data","search","searchChange","itemSelect"]],template:function(e,r){1&e&&(t.TgZ(0,"app-star-war-planets-list",0),t.NdJ("searchChange",function(s){return r.onSearch(s)})("itemSelect",function(s){return r.onItemSelect(s)}),t.ALo(1,"async"),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,2,r.data$))("search",r.search)},directives:[H],pipes:[c.Ov],styles:[""]}),a})();const d="https://swapi.dev/api/species/";let q=(()=>{class a{constructor(e){this.http=e}getAll(e){return this.http.get(d,{params:e}).pipe((0,u.U)(r=>v(r)))}getHome(e){return this.http.get(d,{params:e}).pipe((0,u.U)(r=>v(r)))}get(e){return this.http.get(`${d}${e}/`).pipe((0,u.U)(r=>S(r)))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(h.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function X(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).onItemClick(s.url)}),t.TgZ(1,"label"),t._uU(2),t.qZA(),t.qZA()}if(2&a){const e=n.$implicit;t.xp6(2),t.Oqu(e.name)}}function z(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"form",3),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSearch()}),t._UZ(2,"input",4),t.qZA(),t.TgZ(3,"div",5),t.YNc(4,X,3,1,"div",6),t.TgZ(5,"div",7),t.TgZ(6,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.previous)}),t.TgZ(7,"i",9),t._uU(8," arrow_left "),t.qZA(),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.changePage(i.data.next)}),t.TgZ(10,"i",9),t._uU(11," arrow_right "),t.qZA(),t.qZA(),t.TgZ(12,"p"),t._uU(13,"Total "),t.TgZ(14,"b"),t._uU(15),t.qZA(),t._uU(16," results."),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.formGroup),t.xp6(3),t.Q6J("ngForOf",e.data.results),t.xp6(2),t.Q6J("disabled",null===e.data.previous),t.xp6(3),t.Q6J("disabled",null===e.data.next),t.xp6(6),t.Oqu(e.data.count)}}function B(a,n){1&a&&(t._UZ(0,"div",11),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let R=(()=>{class a{constructor(e){this.fb=e,this.data=null,this.search={},this.searchChange=new t.vpe,this.itemSelect=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({search:[this.search.search||null],page:[this.search.page||null]}),this.emit()}changePage(e){const r=new URL(e);this.formGroup.setValue({search:r.searchParams.get("search"),page:r.searchParams.get("page")}),this.emit()}onSearch(){var e;null===(e=this.formGroup.get("page"))||void 0===e||e.setValue(null),this.emit()}onItemClick(e){const i=new URL(e).pathname.split("/").filter(s=>s).pop();this.itemSelect.emit(i)}emit(){const e={},r=this.formGroup.value;r.search&&(e.search=r.search),r.page&&(e.page=r.page),this.searchChange.emit(this.formGroup.value)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-species-list"]],inputs:{data:"data",search:"search"},outputs:{searchChange:"searchChange",itemSelect:"itemSelect"},decls:3,vars:2,consts:[["class","cmp-star-war-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-star-war-container"],[1,"cmp-search-box",3,"formGroup","ngSubmit"],["type","search","formControlName","search","placeholder"," Search Here ",1,"search-box"],[1,"cmp-item"],["class","cmp-item-list",3,"click",4,"ngFor","ngForOf"],[1,"cmp-paginator"],["type","button",3,"disabled","click"],[1,"material-icons"],[1,"cmp-item-list",3,"click"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,z,17,5,"div",0),t.YNc(1,B,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg],styles:[""]}),a})(),D=(()=>{class a{constructor(e,r,i){this.service=e,this.route=r,this.router=i}ngOnInit(){this.search=this.route.snapshot.queryParams,this.data$=this.route.queryParams.pipe((0,m.w)(e=>(this.search=e,this.service.getAll(e))))}onSearch(e){this.router.navigate([],{relativeTo:this.route,queryParams:e,replaceUrl:!0})}onItemSelect(e){this.router.navigate([e],{relativeTo:this.route})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(q),t.Y36(p.gz),t.Y36(p.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-species-list-page"]],decls:2,vars:4,consts:[[3,"data","search","searchChange","itemSelect"]],template:function(e,r){1&e&&(t.TgZ(0,"app-star-war-species-list",0),t.NdJ("searchChange",function(s){return r.onSearch(s)})("itemSelect",function(s){return r.onItemSelect(s)}),t.ALo(1,"async"),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,2,r.data$))("search",r.search)},directives:[R],pipes:[c.Ov],styles:[""]}),a})();function K(a,n){if(1&a&&(t.TgZ(0,"div",2),t.TgZ(1,"p"),t.TgZ(2,"b"),t._uU(3,"Name"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p"),t.TgZ(6,"b"),t._uU(7,"Classification"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p"),t.TgZ(10,"b"),t._uU(11,"Designation"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p"),t.TgZ(14,"b"),t._uU(15,"Average height"),t.qZA(),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"p"),t.TgZ(19,"b"),t._uU(20,"Skin colors"),t.qZA(),t._uU(21),t.qZA(),t.TgZ(22,"p"),t.TgZ(23,"b"),t._uU(24,"Hair colors"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"p"),t.TgZ(27,"b"),t._uU(28,"Average lifespan"),t.qZA(),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"p"),t.TgZ(32,"b"),t._uU(33,"Homeworld"),t.qZA(),t.TgZ(34,"a",3),t._uU(35),t.qZA(),t.qZA(),t.TgZ(36,"p"),t.TgZ(37,"b"),t._uU(38,"Language"),t.qZA(),t._uU(39),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.hij(" ",e.data.name," "),t.xp6(4),t.hij(" ",e.data.classification," "),t.xp6(4),t.hij(" ",e.data.designation," "),t.xp6(4),t.hij(" ",t.xi3(17,10,e.data.average_height,"1.2-2")," cm. "),t.xp6(5),t.hij(" ",e.data.skin_colors," "),t.xp6(4),t.hij(" ",e.data.hair_colors," "),t.xp6(4),t.hij(" ",t.xi3(30,13,e.data.average_lifespan,"1.2-2")," years. "),t.xp6(5),t.MGl("href","./star-war/planets/",e.data.homeworld.slice(-2),"",t.LSH),t.xp6(1),t.hij(" Click to see ",e.data.name," homeworld infomation. "),t.xp6(4),t.hij(" ",e.data.language," ")}}function tt(a,n){1&a&&(t._UZ(0,"div",4),t.TgZ(1,"p"),t._uU(2,"Loading..."),t.qZA())}let et=(()=>{class a{constructor(){this.data=null}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-species-view"]],inputs:{data:"data"},decls:3,vars:2,consts:[["class","cmp-view-container",4,"ngIf","ngIfElse"],["loading",""],[1,"cmp-view-container"],["target","blank",3,"href"],[1,"loading-animation"]],template:function(e,r){if(1&e&&(t.YNc(0,K,40,16,"div",0),t.YNc(1,tt,3,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",r.data)("ngIfElse",i)}},directives:[c.O5],pipes:[c.JJ],styles:[""]}),a})();const at=[{path:"",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war"]],decls:22,vars:0,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href","https://fonts.googleapis.com/icon?family=Material+Icons"],["rel","stylesheet","type","text/css","href","//use.fontawesome.com/releases/v5.7.2/css/all.css"],[1,"cmp-nav"],["routerLink","./people","routerLinkActive","st-active"],["routerLink","./species","routerLinkActive","st-active"],["routerLink","./planets","routerLinkActive","st-active"]],template:function(e,r){1&e&&(t.TgZ(0,"html",0),t.TgZ(1,"head"),t._UZ(2,"meta",1),t._UZ(3,"meta",2),t._UZ(4,"meta",3),t._UZ(5,"link",4),t._UZ(6,"link",5),t.qZA(),t.TgZ(7,"body"),t.TgZ(8,"h2"),t._uU(9,"Star-War"),t.qZA(),t.TgZ(10,"nav",6),t.TgZ(11,"ul"),t.TgZ(12,"li"),t.TgZ(13,"a",7),t._uU(14,"People"),t.qZA(),t.qZA(),t.TgZ(15,"li"),t.TgZ(16,"a",8),t._uU(17,"Species"),t.qZA(),t.qZA(),t.TgZ(18,"li"),t.TgZ(19,"a",9),t._uU(20,"Planets"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(21,"router-outlet"),t.qZA(),t.qZA())},directives:[p.yS,p.Od,p.lC],styles:[""]}),a})(),children:[{path:"",redirectTo:"people",pathMatch:"full"},{path:"people",component:O},{path:"people/:id",component:j},{path:"species",component:D},{path:"species/:id",component:(()=>{class a{constructor(e,r){this.service=e,this.route=r}ngOnInit(){this.data$=this.route.params.pipe((0,m.w)(e=>this.service.get(e.id)))}goBack(){history.back()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(q),t.Y36(p.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-star-war-species-view-page"]],decls:5,vars:3,consts:[[3,"data"],["type","button",1,"cmd-back-button",3,"click"],[1,"material-icons"]],template:function(e,r){1&e&&(t._UZ(0,"app-star-war-species-view",0),t.ALo(1,"async"),t.TgZ(2,"button",1),t.NdJ("click",function(){return r.goBack()}),t.TgZ(3,"i",2),t._uU(4," arrow_back "),t.qZA(),t.qZA()),2&e&&t.Q6J("data",t.lcZ(1,1,r.data$))},directives:[et],pipes:[c.Ov],styles:[""]}),a})()},{path:"planets",component:E},{path:"planets/:id",component:G}]}];let rt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[p.Bz.forChild(at)],p.Bz]}),a})(),nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.ez,rt,o.UX]]}),a})()}}]);