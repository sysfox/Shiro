import{p as M,d as _,s as R}from"./styles-e2b9d258-9gfxkveI.js";import{s as w,l as D}from"./isEmpty-DrOE0CRk.js";import{G as B}from"./graph-ChHpIDLX.js";import{l as d,c,u as G,J as z,K as E,L as C,i as A}from"./index.demo-DlqKd_3x.js";import{r as P}from"./index-9620d214-CT3WGFkT.js";import"./owner-BSI_Vh2r.js";import"./layout-DX5Bo6CE.js";import"./_baseUniq-CQvDY-0n.js";import"./index-NXYFgAjv.js";import"./util-DkYpfY90.js";import"./viewport-BolDZsoB.js";import"./use-ref-value-Mo2_v78l.js";import"./Shiki-DqAvoUyD.js";import"./index-BfhiJUOb.js";import"./StyledButton-DkLDqqqY.js";import"./proxy-DqEdd0_T.js";import"./spring-C80N1tKa.js";import"./use-event-callback-Bd5z-v00.js";import"./dom-BowoBODo.js";import"./index-BdTV7XHI.js";import"./index-CGTxCqfm.js";import"./use-motion-template-CzIari3g.js";import"./visual-element-DbBQCm5i.js";import"./provider-CQaN5NIX.js";import"./use-is-unmounted-D7ob97g3.js";import"./use-drag-controls-B-cgHcGm.js";import"./use-is-dark-DymJGP0e.js";import"./LinkCard-DMcnVdki.js";import"./image-D3-nsFdW.js";import"./Gallery-ClZPejp7.js";import"./useQuery-Dfw48QMy.js";import"./alert-DynCCeRb.js";import"./index-D5PjLMDq.js";import"./FloatPopover-BWUQVeTv.js";import"./SocialSourceLink-CqLY7BT0.js";import"./Collapse-BgYyBf-z.js";import"./CodeEditor-C46Dt40c.js";import"./index-LAI3pait.js";import"./cookie-BzcPnGYt.js";import"./Mermaid-CNM7Myad.js";import"./json-Cvdpg1DH.js";import"./clone-D6aGXHSA.js";import"./_basePickBy-DHAxAhpL.js";import"./edges-5962ec63-dzNTzgVq.js";import"./createText-4a4f35c9-DUWtKI8A.js";import"./line-Ci9EUk7u.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const S=s=>A.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,e,m,n){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(a){var o,r;const l=s[a],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};e.setNode(l.id,p),$(l.classes,e,m,n,l.id),d.info("setNode",p)})},$=function(s,e,m,n,t){const a=Object.keys(s);d.info("keys:",a),d.info(s),a.filter(o=>s[o].parent==t).forEach(function(o){var r,l;const i=s[o],p=i.cssClasses.join(" "),y=E(i.styles),u=i.label??i.id,b=0,f={labelStyle:y.labelStyle,shape:"class_box",labelText:S(u),classData:i,rx:b,ry:b,class:p,style:y.style,id:i.id,domId:i.domId,tooltip:n.db.getTooltip(i.id,t)||"",haveCallback:i.haveCallback,link:i.link,width:i.type==="group"?500:void 0,type:i.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};e.setNode(i.id,f),t&&e.setParent(i.id,t),d.info("setNode",f)})},F=function(s,e,m,n){d.info(s),s.forEach(function(t,a){var o,r;const l=t,i="",p={labelStyle:"",style:""},y=l.text,u=0,h={labelStyle:p.labelStyle,shape:"note",labelText:S(y),noteData:l,rx:u,ry:u,class:i,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(e.setNode(l.id,h),d.info("setNode",h),!l.class||!(l.class in n))return;const f=m+a,x={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:C(k.curve,D)};e.setEdge(l.id,l.class,x,f)})},H=function(s,e){const m=c().flowchart;let n=0;s.forEach(function(t){var a;n++;const o={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${n}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:N(t.relation.type1),arrowTypeEnd:N(t.relation.type2),style:"fill:none",labelStyle:"",curve:C(m?.curve,D)};if(d.info(o,t),t.style!==void 0){const r=E(t.style);o.style=r.style,o.labelStyle=r.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((a=c().flowchart)==null?void 0:a.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+t.text+"</span>"):(o.labelType="text",o.label=t.text.replace(A.lineBreakRegex,`
`),t.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),e.setEdge(t.id1,t.id2,o,n)})},J=function(s){k={...k,...s}},K=async function(s,e,m,n){d.info("Drawing class - ",e);const t=c().flowchart??c().class,a=c().securityLevel;d.info("config:",t);const o=t?.nodeSpacing??50,r=t?.rankSpacing??50,l=new B({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),i=n.db.getNamespaces(),p=n.db.getClasses(),y=n.db.getRelations(),u=n.db.getNotes();d.info(y),q(i,l,e,n),$(p,l,e,n),H(y,l),F(u,l,y.length+1,p);let b;a==="sandbox"&&(b=w("#i"+e));const h=a==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),f=h.select(`[id="${e}"]`),x=h.select("#"+e+" g");if(await P(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),G.insertTitle(f,"classTitleText",t?.titleTopMargin??5,n.db.getDiagramTitle()),z(l,f,t?.diagramPadding,t?.useMaxWidth),!t?.htmlLabels){const T=a==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function N(s){let e;switch(s){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}const V={setConf:J,draw:K},qt={parser:M,db:_,renderer:V,styles:R,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{qt as diagram};
