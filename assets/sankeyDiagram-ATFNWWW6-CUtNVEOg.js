import{_ as s,d as Y,g as Q,s as q,b as H,c as J,q as Z,p as tt,t as et,e as nt,o as st,O as it}from"./mermaid.core-CXVKNwJq.js";import{s as M}from"./isEmpty-DrOE0CRk.js";import{S as rt,d as at,l as ot,r as lt,c as ct,j as ht}from"./sankeyLinkHorizontal-CgO6js3K.js";import{o as ut}from"./ordinal-Cboi1Yqb.js";import{d as yt}from"./Tableau10-CvOaoHrI.js";import"./index-NXYFgAjv.js";import"./owner-BSI_Vh2r.js";import"./StyledButton-DkLDqqqY.js";import"./proxy-DqEdd0_T.js";import"./line-Ci9EUk7u.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./init-Gi6I4Gst.js";var V=function(){var a=s(function(m,t,e,n){for(e=e||{},n=m.length;n--;e[m[n]]=t);return e},"o"),c=[1,9],f=[1,10],O=[1,5,10,12],E={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:s(function(t,e,n,o,l,r,A){var x=r.length-1;switch(l){case 7:const k=o.findOrCreateNode(r[x-4].trim().replaceAll('""','"')),v=o.findOrCreateNode(r[x-2].trim().replaceAll('""','"')),C=parseFloat(r[x].trim());o.addLink(k,v,C);break;case 8:case 9:case 11:this.$=r[x];break;case 10:this.$=r[x-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:c,20:f},{1:[2,6],7:11,10:[1,12]},a(f,[2,4],{9:13,5:[1,14]}),{12:[1,15]},a(O,[2,8]),a(O,[2,9]),{19:[1,16]},a(O,[2,11]),{1:[2,1]},{1:[2,5]},a(f,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:c,20:f},{15:18,16:7,17:8,18:c,20:f},{18:[1,19]},a(f,[2,3]),{12:[1,20]},a(O,[2,10]),{15:21,16:7,17:8,18:c,20:f},a([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:s(function(t,e){if(e.recoverable)this.trace(t);else{var n=new Error(t);throw n.hash=e,n}},"parseError"),parse:s(function(t){var e=this,n=[0],o=[],l=[null],r=[],A=this.table,x="",k=0,v=0,C=2,U=1,X=r.slice.call(arguments,1),h=Object.create(this.lexer),b={yy:{}};for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy,P)&&(b.yy[P]=this.yy[P]);h.setInput(t,b.yy),b.yy.lexer=h,b.yy.parser=this,typeof h.yylloc>"u"&&(h.yylloc={});var w=h.yylloc;r.push(w);var T=h.options&&h.options.ranges;typeof b.yy.parseError=="function"?this.parseError=b.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function i(p){n.length=n.length-2*p,l.length=l.length-p,r.length=r.length-p}s(i,"popStack");function u(){var p;return p=o.pop()||h.lex()||U,typeof p!="number"&&(p instanceof Array&&(o=p,p=o.pop()),p=e.symbols_[p]||p),p}s(u,"lex");for(var y,I,g,W,N={},L,S,B,D;;){if(I=n[n.length-1],this.defaultActions[I]?g=this.defaultActions[I]:((y===null||typeof y>"u")&&(y=u()),g=A[I]&&A[I][y]),typeof g>"u"||!g.length||!g[0]){var z="";D=[];for(L in A[I])this.terminals_[L]&&L>C&&D.push("'"+this.terminals_[L]+"'");h.showPosition?z="Parse error on line "+(k+1)+`:
`+h.showPosition()+`
Expecting `+D.join(", ")+", got '"+(this.terminals_[y]||y)+"'":z="Parse error on line "+(k+1)+": Unexpected "+(y==U?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(z,{text:h.match,token:this.terminals_[y]||y,line:h.yylineno,loc:w,expected:D})}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+y);switch(g[0]){case 1:n.push(y),l.push(h.yytext),r.push(h.yylloc),n.push(g[1]),y=null,v=h.yyleng,x=h.yytext,k=h.yylineno,w=h.yylloc;break;case 2:if(S=this.productions_[g[1]][1],N.$=l[l.length-S],N._$={first_line:r[r.length-(S||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(S||1)].first_column,last_column:r[r.length-1].last_column},T&&(N._$.range=[r[r.length-(S||1)].range[0],r[r.length-1].range[1]]),W=this.performAction.apply(N,[x,v,k,b.yy,g[1],l,r].concat(X)),typeof W<"u")return W;S&&(n=n.slice(0,-1*S*2),l=l.slice(0,-1*S),r=r.slice(0,-1*S)),n.push(this.productions_[g[1]][0]),l.push(N.$),r.push(N._$),B=A[n[n.length-2]][n[n.length-1]],n.push(B);break;case 3:return!0}}return!0},"parse")},_=function(){var m={EOF:1,parseError:s(function(e,n){if(this.yy.parser)this.yy.parser.parseError(e,n);else throw new Error(e)},"parseError"),setInput:s(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:s(function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:s(function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===o.length?this.yylloc.first_column:0)+o[o.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:s(function(t){this.unput(this.match.slice(t))},"less"),pastInput:s(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+e+"^"},"showPosition"),test_match:s(function(t,e){var n,o,l;if(this.options.backtrack_lexer&&(l={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(l.yylloc.range=this.yylloc.range.slice(0))),o=t[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in l)this[r]=l[r];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,n,o;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),r=0;r<l.length;r++)if(n=this._input.match(this.rules[l[r]]),n&&(!e||n[0].length>e[0].length)){if(e=n,o=r,this.options.backtrack_lexer){if(t=this.test_match(n,l[r]),t!==!1)return t;if(this._backtrack){e=!1;continue}else return!1}else if(!this.options.flex)break}return e?(t=this.test_match(e,l[o]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){var e=this.next();return e||this.lex()},"lex"),begin:s(function(e){this.conditionStack.push(e)},"begin"),popState:s(function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:s(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:s(function(e){this.begin(e)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(e,n,o,l){switch(o){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return m}();E.lexer=_;function d(){this.yy={}}return s(d,"Parser"),d.prototype=E,E.Parser=d,new d}();V.parser=V;var j=V,F=[],R=[],$=new Map,pt=s(()=>{F=[],R=[],$=new Map,et()},"clear"),ft=class{constructor(a,c,f=0){this.source=a,this.target=c,this.value=f}static{s(this,"SankeyLink")}},dt=s((a,c,f)=>{F.push(new ft(a,c,f))},"addLink"),gt=class{constructor(a){this.ID=a}static{s(this,"SankeyNode")}},mt=s(a=>{a=nt.sanitizeText(a,Y());let c=$.get(a);return c===void 0&&(c=new gt(a),$.set(a,c),R.push(c)),c},"findOrCreateNode"),_t=s(()=>R,"getNodes"),xt=s(()=>F,"getLinks"),kt=s(()=>({nodes:R.map(a=>({id:a.ID})),links:F.map(a=>({source:a.source.ID,target:a.target.ID,value:a.value}))}),"getGraph"),vt={nodesMap:$,getConfig:s(()=>Y().sankey,"getConfig"),getNodes:_t,getLinks:xt,getGraph:kt,addLink:dt,findOrCreateNode:mt,getAccTitle:Q,setAccTitle:q,getAccDescription:H,setAccDescription:J,getDiagramTitle:Z,setDiagramTitle:tt,clear:pt},K=class G{static{s(this,"Uid")}static{this.count=0}static next(c){return new G(c+ ++G.count)}constructor(c){this.id=c,this.href=`#${c}`}toString(){return"url("+this.href+")"}},bt={left:ot,right:lt,center:ct,justify:ht},St=s(function(a,c,f,O){const{securityLevel:E,sankey:_}=Y(),d=st.sankey;let m;E==="sandbox"&&(m=M("#i"+c));const t=E==="sandbox"?M(m.nodes()[0].contentDocument.body):M("body"),e=E==="sandbox"?t.select(`[id="${c}"]`):M(`[id="${c}"]`),n=_?.width??d.width,o=_?.height??d.width,l=_?.useMaxWidth??d.useMaxWidth,r=_?.nodeAlignment??d.nodeAlignment,A=_?.prefix??d.prefix,x=_?.suffix??d.suffix,k=_?.showValues??d.showValues,v=O.db.getGraph(),C=bt[r];rt().nodeId(i=>i.id).nodeWidth(10).nodePadding(10+(k?15:0)).nodeAlign(C).extent([[0,0],[n,o]])(v);const h=ut(yt);e.append("g").attr("class","nodes").selectAll(".node").data(v.nodes).join("g").attr("class","node").attr("id",i=>(i.uid=K.next("node-")).id).attr("transform",function(i){return"translate("+i.x0+","+i.y0+")"}).attr("x",i=>i.x0).attr("y",i=>i.y0).append("rect").attr("height",i=>i.y1-i.y0).attr("width",i=>i.x1-i.x0).attr("fill",i=>h(i.id));const b=s(({id:i,value:u})=>k?`${i}
${A}${Math.round(u*100)/100}${x}`:i,"getText");e.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(v.nodes).join("text").attr("x",i=>i.x0<n/2?i.x1+6:i.x0-6).attr("y",i=>(i.y1+i.y0)/2).attr("dy",`${k?"0":"0.35"}em`).attr("text-anchor",i=>i.x0<n/2?"start":"end").text(b);const P=e.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(v.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),w=_?.linkColor??"gradient";if(w==="gradient"){const i=P.append("linearGradient").attr("id",u=>(u.uid=K.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",u=>u.source.x1).attr("x2",u=>u.target.x0);i.append("stop").attr("offset","0%").attr("stop-color",u=>h(u.source.id)),i.append("stop").attr("offset","100%").attr("stop-color",u=>h(u.target.id))}let T;switch(w){case"gradient":T=s(i=>i.uid,"coloring");break;case"source":T=s(i=>h(i.source.id),"coloring");break;case"target":T=s(i=>h(i.target.id),"coloring");break;default:T=w}P.append("path").attr("d",at()).attr("stroke",T).attr("stroke-width",i=>Math.max(1,i.width)),it(void 0,e,0,l)},"draw"),Et={draw:St},At=s(a=>a.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),wt=j.parse.bind(j);j.parse=a=>wt(At(a));var Ut={parser:j,db:vt,renderer:Et};export{Ut as diagram};
