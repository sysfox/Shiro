import{_ as n,K as ii,l as vt,I as ei,C as lt,B as Lt,A as si,i as ni,q as Et,s as ai,g as oi,p as ri,b as hi,c as li,t as ci,F as ui,j as gi}from"./mermaid.core-CXVKNwJq.js";import"./isEmpty-DrOE0CRk.js";import{b as kt}from"./band-dPffDWoQ.js";import{l as Tt}from"./linear-CedLLJJa.js";import{l as Rt}from"./line-Ci9EUk7u.js";import"./index-NXYFgAjv.js";import"./owner-BSI_Vh2r.js";import"./StyledButton-DkLDqqqY.js";import"./proxy-DqEdd0_T.js";import"./init-Gi6I4Gst.js";import"./ordinal-Cboi1Yqb.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var at=function(){var t=n(function(M,r,l,c){for(l=l||{},c=M.length;c--;l[M[c]]=r);return l},"o"),i=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],o=[1,5],p=[1,6],g=[1,7],m=[1,5,10,12,14,16,18,19,21,23,34,35,36],T=[1,25],E=[1,26],S=[1,28],R=[1,29],I=[1,30],V=[1,31],_=[1,32],L=[1,33],f=[1,34],C=[1,35],h=[1,36],D=[1,37],X=[1,43],yt=[1,42],bt=[1,47],$=[1,50],b=[1,10,12,14,16,18,19,21,23,34,35,36],J=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],P=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],At=[1,64],tt={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:n(function(r,l,c,u,y,a,N){var x=a.length-1;switch(y){case 5:u.setOrientation(a[x]);break;case 9:u.setDiagramTitle(a[x].text.trim());break;case 12:u.setLineData({text:"",type:"text"},a[x]);break;case 13:u.setLineData(a[x-1],a[x]);break;case 14:u.setBarData({text:"",type:"text"},a[x]);break;case 15:u.setBarData(a[x-1],a[x]);break;case 16:this.$=a[x].trim(),u.setAccTitle(this.$);break;case 17:case 18:this.$=a[x].trim(),u.setAccDescription(this.$);break;case 19:this.$=a[x-1];break;case 20:this.$=[Number(a[x-2]),...a[x]];break;case 21:this.$=[Number(a[x])];break;case 22:u.setXAxisTitle(a[x]);break;case 23:u.setXAxisTitle(a[x-1]);break;case 24:u.setXAxisTitle({type:"text",text:""});break;case 25:u.setXAxisBand(a[x]);break;case 26:u.setXAxisRangeData(Number(a[x-2]),Number(a[x]));break;case 27:this.$=a[x-1];break;case 28:this.$=[a[x-2],...a[x]];break;case 29:this.$=[a[x]];break;case 30:u.setYAxisTitle(a[x]);break;case 31:u.setYAxisTitle(a[x-1]);break;case 32:u.setYAxisTitle({type:"text",text:""});break;case 33:u.setYAxisRangeData(Number(a[x-2]),Number(a[x]));break;case 37:this.$={text:a[x],type:"text"};break;case 38:this.$={text:a[x],type:"text"};break;case 39:this.$={text:a[x],type:"markdown"};break;case 40:this.$=a[x];break;case 41:this.$=a[x-1]+""+a[x];break}},"anonymous"),table:[t(i,e,{3:1,4:2,7:4,5:s,34:o,35:p,36:g}),{1:[3]},t(i,e,{4:2,7:4,3:8,5:s,34:o,35:p,36:g}),t(i,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:o,35:p,36:g}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},t(m,[2,34]),t(m,[2,35]),t(m,[2,36]),{1:[2,1]},t(i,e,{4:2,7:4,3:21,5:s,34:o,35:p,36:g}),{1:[2,3]},t(m,[2,5]),t(i,[2,7],{4:22,34:o,35:p,36:g}),{11:23,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},{11:39,13:38,24:X,27:yt,29:40,30:41,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},{11:45,15:44,27:bt,33:46,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},{11:49,17:48,24:$,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},{11:52,17:51,24:$,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},{20:[1,53]},{22:[1,54]},t(b,[2,18]),{1:[2,2]},t(b,[2,8]),t(b,[2,9]),t(J,[2,37],{40:55,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D}),t(J,[2,38]),t(J,[2,39]),t(P,[2,40]),t(P,[2,42]),t(P,[2,43]),t(P,[2,44]),t(P,[2,45]),t(P,[2,46]),t(P,[2,47]),t(P,[2,48]),t(P,[2,49]),t(P,[2,50]),t(P,[2,51]),t(b,[2,10]),t(b,[2,22],{30:41,29:56,24:X,27:yt}),t(b,[2,24]),t(b,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},t(b,[2,11]),t(b,[2,30],{33:60,27:bt}),t(b,[2,32]),{31:[1,61]},t(b,[2,12]),{17:62,24:$},{25:63,27:At},t(b,[2,14]),{17:65,24:$},t(b,[2,16]),t(b,[2,17]),t(P,[2,41]),t(b,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},t(b,[2,31]),{27:[1,69]},t(b,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},t(b,[2,15]),t(b,[2,26]),t(b,[2,27]),{11:59,32:72,37:24,38:T,39:E,40:27,41:S,42:R,43:I,44:V,45:_,46:L,47:f,48:C,49:h,50:D},t(b,[2,33]),t(b,[2,19]),{25:73,27:At},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:n(function(r,l){if(l.recoverable)this.trace(r);else{var c=new Error(r);throw c.hash=l,c}},"parseError"),parse:n(function(r){var l=this,c=[0],u=[],y=[null],a=[],N=this.table,x="",j=0,Ct=0,Kt=2,wt=1,Zt=a.slice.call(arguments,1),A=Object.create(this.lexer),W={yy:{}};for(var it in this.yy)Object.prototype.hasOwnProperty.call(this.yy,it)&&(W.yy[it]=this.yy[it]);A.setInput(r,W.yy),W.yy.lexer=A,W.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var et=A.yylloc;a.push(et);var Jt=A.options&&A.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ti(k){c.length=c.length-2*k,y.length=y.length-k,a.length=a.length-k}n(ti,"popStack");function St(){var k;return k=u.pop()||A.lex()||wt,typeof k!="number"&&(k instanceof Array&&(u=k,k=u.pop()),k=l.symbols_[k]||k),k}n(St,"lex");for(var w,O,v,st,z={},G,B,_t,Q;;){if(O=c[c.length-1],this.defaultActions[O]?v=this.defaultActions[O]:((w===null||typeof w>"u")&&(w=St()),v=N[O]&&N[O][w]),typeof v>"u"||!v.length||!v[0]){var nt="";Q=[];for(G in N[O])this.terminals_[G]&&G>Kt&&Q.push("'"+this.terminals_[G]+"'");A.showPosition?nt="Parse error on line "+(j+1)+`:
`+A.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[w]||w)+"'":nt="Parse error on line "+(j+1)+": Unexpected "+(w==wt?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(nt,{text:A.match,token:this.terminals_[w]||w,line:A.yylineno,loc:et,expected:Q})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+w);switch(v[0]){case 1:c.push(w),y.push(A.yytext),a.push(A.yylloc),c.push(v[1]),w=null,Ct=A.yyleng,x=A.yytext,j=A.yylineno,et=A.yylloc;break;case 2:if(B=this.productions_[v[1]][1],z.$=y[y.length-B],z._$={first_line:a[a.length-(B||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(B||1)].first_column,last_column:a[a.length-1].last_column},Jt&&(z._$.range=[a[a.length-(B||1)].range[0],a[a.length-1].range[1]]),st=this.performAction.apply(z,[x,Ct,j,W.yy,v[1],y,a].concat(Zt)),typeof st<"u")return st;B&&(c=c.slice(0,-1*B*2),y=y.slice(0,-1*B),a=a.slice(0,-1*B)),c.push(this.productions_[v[1]][0]),y.push(z.$),a.push(z._$),_t=N[c[c.length-2]][c[c.length-1]],c.push(_t);break;case 3:return!0}}return!0},"parse")},Qt=function(){var M={EOF:1,parseError:n(function(l,c){if(this.yy.parser)this.yy.parser.parseError(l,c);else throw new Error(l)},"parseError"),setInput:n(function(r,l){return this.yy=l||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var l=r.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:n(function(r){var l=r.length,c=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===u.length?this.yylloc.first_column:0)+u[u.length-c.length].length-c[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(r){this.unput(this.match.slice(r))},"less"),pastInput:n(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var r=this.pastInput(),l=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:n(function(r,l){var c,u,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],c=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var a in y)this[a]=y[a];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,l,c,u;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),a=0;a<y.length;a++)if(c=this._input.match(this.rules[y[a]]),c&&(!l||c[0].length>l[0].length)){if(l=c,u=a,this.options.backtrack_lexer){if(r=this.test_match(c,y[a]),r!==!1)return r;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(r=this.test_match(l,y[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var l=this.next();return l||this.lex()},"lex"),begin:n(function(l){this.conditionStack.push(l)},"begin"),popState:n(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:n(function(l){this.begin(l)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(l,c,u,y){switch(u){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return M}();tt.lexer=Qt;function q(){this.yy={}}return n(q,"Parser"),q.prototype=tt,tt.Parser=q,new q}();at.parser=at;var xi=at;function ot(t){return t.type==="bar"}n(ot,"isBarPlot");function ct(t){return t.type==="band"}n(ct,"isBandAxisData");function F(t){return t.type==="linear"}n(F,"isLinearAxisData");var It=class{constructor(t){this.parentGroup=t}static{n(this,"TextDimensionCalculatorWithFont")}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((o,p)=>Math.max(p.length,o),0)*i,height:i};const e={width:0,height:0},s=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const o of t){const p=ii(s,1,o),g=p?p.width:o.length*i,m=p?p.height:i;e.width=Math.max(e.width,g),e.height=Math.max(e.height,m)}return s.remove(),e}},Dt=.7,Pt=.2,Vt=class{constructor(t,i,e,s){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}static{n(this,"BaseAxis")}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){Dt*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(Dt*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=Pt*t.width;this.outerPadding=Math.min(e.width/2,s);const o=e.height+this.axisConfig.labelPadding*2;this.labelTextHeight=e.height,o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),s=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,s<=i&&(i-=s,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=Pt*t.height;this.outerPadding=Math.min(e.height/2,s);const o=e.width+this.axisConfig.labelPadding*2;o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),s=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,s<=i&&(i-=s,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${i},${this.getScaleValue(e)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(e)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i} L ${this.getScaleValue(e)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(e)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},pi=class extends Vt{static{n(this,"BandAxis")}constructor(t,i,e,s,o){super(t,s,o,i),this.categories=e,this.scale=kt().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=kt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),vt.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},di=class extends Vt{static{n(this,"LinearAxis")}constructor(t,i,e,s,o){super(t,s,o,i),this.domain=e,this.scale=Tt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=Tt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function rt(t,i,e,s){const o=new It(s);return ct(t)?new pi(i,e,t.categories,t.title,o):new di(i,e,[t.min,t.max],t.title,o)}n(rt,"getAxis");var fi=class{constructor(t,i,e,s){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}static{n(this,"ChartTitle")}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),s=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=s&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=s,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function Bt(t,i,e,s){const o=new It(s);return new fi(o,t,i,e)}n(Bt,"getChartTitleComponent");var mi=class{constructor(t,i,e,s,o){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=s,this.plotIndex=o}static{n(this,"LinePlot")}getDrawableElement(){const t=this.plotData.data.map(e=>[this.xAxis.getScaleValue(e[0]),this.yAxis.getScaleValue(e[1])]);let i;return this.orientation==="horizontal"?i=Rt().y(e=>e[0]).x(e=>e[1])(t):i=Rt().x(e=>e[0]).y(e=>e[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},yi=class{constructor(t,i,e,s,o,p){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=s,this.orientation=o,this.plotIndex=p}static{n(this,"BarPlot")}getDrawableElement(){const t=this.barData.data.map(o=>[this.xAxis.getScaleValue(o[0]),this.yAxis.getScaleValue(o[1])]),e=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),s=e/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:this.boundingRect.x,y:o[0]-s,height:e,width:o[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:o[0]-s,y:o[1],width:e,height:this.boundingRect.y+this.boundingRect.height-o[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},bi=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}static{n(this,"BasePlot")}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");const t=[];for(const[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{const s=new mi(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break;case"bar":{const s=new yi(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break}return t}};function Mt(t,i,e){return new bi(t,i,e)}n(Mt,"getPlotComponent");var Ai=class{constructor(t,i,e,s){this.chartConfig=t,this.chartData=i,this.componentStore={title:Bt(t,i,e,s),plot:Mt(t,i,e),xAxis:rt(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},s),yAxis:rt(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},s)}}static{n(this,"Orchestrator")}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,o=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),p=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),g=this.componentStore.plot.calculateSpace({width:o,height:p});t-=g.width,i-=g.height,g=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=g.height,i-=g.height,this.componentStore.xAxis.setAxisPosition("bottom"),g=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=g.height,this.componentStore.yAxis.setAxisPosition("left"),g=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=g.width,t-=g.width,t>0&&(o+=t,t=0),i>0&&(p+=i,i=0),this.componentStore.plot.calculateSpace({width:o,height:p}),this.componentStore.plot.setBoundingBoxXY({x:e,y:s}),this.componentStore.xAxis.setRange([e,e+o]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:s+p}),this.componentStore.yAxis.setRange([s,s+p]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:s}),this.chartData.plots.some(m=>ot(m))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,o=0,p=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),g=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),m=this.componentStore.plot.calculateSpace({width:p,height:g});t-=m.width,i-=m.height,m=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=m.height,i-=m.height,this.componentStore.xAxis.setAxisPosition("left"),m=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=m.width,s=m.width,this.componentStore.yAxis.setAxisPosition("top"),m=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=m.height,o=e+m.height,t>0&&(p+=t,t=0),i>0&&(g+=i,i=0),this.componentStore.plot.calculateSpace({width:p,height:g}),this.componentStore.plot.setBoundingBoxXY({x:s,y:o}),this.componentStore.yAxis.setRange([s,s+p]),this.componentStore.yAxis.setBoundingBoxXY({x:s,y:e}),this.componentStore.xAxis.setRange([o,o+g]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:o}),this.chartData.plots.some(T=>ot(T))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},Ci=class{static{n(this,"XYChartBuilder")}static build(t,i,e,s){return new Ai(t,i,e,s).getDrawableElement()}},Y=0,Wt,H=xt(),U=gt(),d=pt(),ht=U.plotColorPalette.split(",").map(t=>t.trim()),K=!1,ut=!1;function gt(){const t=ei(),i=lt();return Lt(t.xyChart,i.themeVariables.xyChart)}n(gt,"getChartDefaultThemeConfig");function xt(){const t=lt();return Lt(si.xyChart,t.xyChart)}n(xt,"getChartDefaultConfig");function pt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}n(pt,"getChartDefaultData");function Z(t){const i=lt();return ni(t.trim(),i)}n(Z,"textSanitizer");function Ot(t){Wt=t}n(Ot,"setTmpSVGG");function zt(t){t==="horizontal"?H.chartOrientation="horizontal":H.chartOrientation="vertical"}n(zt,"setOrientation");function Ft(t){d.xAxis.title=Z(t.text)}n(Ft,"setXAxisTitle");function dt(t,i){d.xAxis={type:"linear",title:d.xAxis.title,min:t,max:i},K=!0}n(dt,"setXAxisRangeData");function Xt(t){d.xAxis={type:"band",title:d.xAxis.title,categories:t.map(i=>Z(i.text))},K=!0}n(Xt,"setXAxisBand");function Nt(t){d.yAxis.title=Z(t.text)}n(Nt,"setYAxisTitle");function Yt(t,i){d.yAxis={type:"linear",title:d.yAxis.title,min:t,max:i},ut=!0}n(Yt,"setYAxisRangeData");function Ht(t){const i=Math.min(...t),e=Math.max(...t),s=F(d.yAxis)?d.yAxis.min:1/0,o=F(d.yAxis)?d.yAxis.max:-1/0;d.yAxis={type:"linear",title:d.yAxis.title,min:Math.min(s,i),max:Math.max(o,e)}}n(Ht,"setYAxisRangeFromPlotData");function ft(t){let i=[];if(t.length===0)return i;if(!K){const e=F(d.xAxis)?d.xAxis.min:1/0,s=F(d.xAxis)?d.xAxis.max:-1/0;dt(Math.min(e,1),Math.max(s,t.length))}if(ut||Ht(t),ct(d.xAxis)&&(i=d.xAxis.categories.map((e,s)=>[e,t[s]])),F(d.xAxis)){const e=d.xAxis.min,s=d.xAxis.max,o=(s-e)/(t.length-1),p=[];for(let g=e;g<=s;g+=o)p.push(`${g}`);i=p.map((g,m)=>[g,t[m]])}return i}n(ft,"transformDataWithoutCategory");function mt(t){return ht[t===0?0:t%ht.length]}n(mt,"getPlotColorFromPalette");function Ut(t,i){const e=ft(i);d.plots.push({type:"line",strokeFill:mt(Y),strokeWidth:2,data:e}),Y++}n(Ut,"setLineData");function $t(t,i){const e=ft(i);d.plots.push({type:"bar",fill:mt(Y),data:e}),Y++}n($t,"setBarData");function qt(){if(d.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return d.title=Et(),Ci.build(H,d,U,Wt)}n(qt,"getDrawableElem");function jt(){return U}n(jt,"getChartThemeConfig");function Gt(){return H}n(Gt,"getChartConfig");var wi=n(function(){ci(),Y=0,H=xt(),d=pt(),U=gt(),ht=U.plotColorPalette.split(",").map(t=>t.trim()),K=!1,ut=!1},"clear"),Si={getDrawableElem:qt,clear:wi,setAccTitle:ai,getAccTitle:oi,setDiagramTitle:ri,getDiagramTitle:Et,getAccDescription:hi,setAccDescription:li,setOrientation:zt,setXAxisTitle:Ft,setXAxisRangeData:dt,setXAxisBand:Xt,setYAxisTitle:Nt,setYAxisRangeData:Yt,setLineData:Ut,setBarData:$t,setTmpSVGG:Ot,getChartThemeConfig:jt,getChartConfig:Gt},_i=n((t,i,e,s)=>{const o=s.db,p=o.getChartThemeConfig(),g=o.getChartConfig();function m(f){return f==="top"?"text-before-edge":"middle"}n(m,"getDominantBaseLine");function T(f){return f==="left"?"start":f==="right"?"end":"middle"}n(T,"getTextAnchor");function E(f){return`translate(${f.x}, ${f.y}) rotate(${f.rotation||0})`}n(E,"getTextTransformation"),vt.debug(`Rendering xychart chart
`+t);const S=ui(i),R=S.append("g").attr("class","main"),I=R.append("rect").attr("width",g.width).attr("height",g.height).attr("class","background");gi(S,g.height,g.width,!0),S.attr("viewBox",`0 0 ${g.width} ${g.height}`),I.attr("fill",p.backgroundColor),o.setTmpSVGG(S.append("g").attr("class","mermaid-tmp-group"));const V=o.getDrawableElem(),_={};function L(f){let C=R,h="";for(const[D]of f.entries()){let X=R;D>0&&_[h]&&(X=_[h]),h+=f[D],C=_[h],C||(C=_[h]=X.append("g").attr("class",f[D]))}return C}n(L,"getGroup");for(const f of V){if(f.data.length===0)continue;const C=L(f.groupTexts);switch(f.type){case"rect":C.selectAll("rect").data(f.data).enter().append("rect").attr("x",h=>h.x).attr("y",h=>h.y).attr("width",h=>h.width).attr("height",h=>h.height).attr("fill",h=>h.fill).attr("stroke",h=>h.strokeFill).attr("stroke-width",h=>h.strokeWidth);break;case"text":C.selectAll("text").data(f.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",h=>h.fill).attr("font-size",h=>h.fontSize).attr("dominant-baseline",h=>m(h.verticalPos)).attr("text-anchor",h=>T(h.horizontalPos)).attr("transform",h=>E(h)).text(h=>h.text);break;case"path":C.selectAll("path").data(f.data).enter().append("path").attr("d",h=>h.path).attr("fill",h=>h.fill?h.fill:"none").attr("stroke",h=>h.strokeFill).attr("stroke-width",h=>h.strokeWidth);break}}},"draw"),ki={draw:_i},zi={parser:xi,db:Si,renderer:ki};export{zi as diagram};
