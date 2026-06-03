!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="019e8e4f-ddaa-76b0-8597-900a7e552ff2")}catch(e){}}();import{M as J,aC as K,N as Y,aD as tt,Q as et,aF as at,a as p,aj as F,P as rt,m as nt,aB as it,ap as st,w as ot,n as lt,G as ct}from"./mermaid.core-Dekj9IjN.js";import{p as ut}from"./chunk-4BX2VUAB-WqEP4_D1.js";import{p as pt}from"./wardley-L42UT6IY-DKUS-d1f.js";import{g as S,M as R,c as dt}from"./transform-CDJPnnFl.js";import{d as I}from"./arc-DKcc6eCb.js";import{o as gt}from"./ordinal-D8o73TQ0.js";import"./index-C0jvi1h7.js";import"./init-Gi6I4Gst.js";import"./index-BkD7Hj8s.js";function ft(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ht(t){return t}function mt(){var t=ht,a=ft,f=null,w=S(0),s=S(R),d=S(0);function o(e){var n,l=(e=dt(e)).length,g,h,v=0,c=new Array(l),i=new Array(l),x=+w.apply(this,arguments),y=Math.min(R,Math.max(-R,s.apply(this,arguments)-x)),m,D=Math.min(Math.abs(y)/l,d.apply(this,arguments)),$=D*(y<0?-1:1),u;for(n=0;n<l;++n)(u=i[c[n]=n]=+t(e[n],n,e))>0&&(v+=u);for(a!=null?c.sort(function(A,C){return a(i[A],i[C])}):f!=null&&c.sort(function(A,C){return f(e[A],e[C])}),n=0,h=v?(y-l*$)/v:0;n<l;++n,x=m)g=c[n],u=i[g],m=x+(u>0?u*h:0)+$,i[g]={data:e[g],index:n,value:u,startAngle:x,endAngle:m,padAngle:D};return i}return o.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),o):t},o.sortValues=function(e){return arguments.length?(a=e,f=null,o):a},o.sort=function(e){return arguments.length?(f=e,a=null,o):f},o.startAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),o):w},o.endAngle=function(e){return arguments.length?(s=typeof e=="function"?e:S(+e),o):s},o.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:S(+e),o):d},o}var vt=ct.pie,W={sections:new Map,showData:!1},T=W.sections,z=W.showData,xt=structuredClone(vt),St=p(()=>structuredClone(xt),"getConfig"),wt=p(()=>{T=new Map,z=W.showData,lt()},"clear"),yt=p(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),At=p(()=>T,"getSections"),Ct=p(t=>{z=t},"setShowData"),Dt=p(()=>z,"getShowData"),_={getConfig:St,clear:wt,setDiagramTitle:at,getDiagramTitle:et,setAccTitle:tt,getAccTitle:Y,setAccDescription:K,getAccDescription:J,addSection:yt,getSections:At,setShowData:Ct,getShowData:Dt},$t=p((t,a)=>{ut(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:p(async t=>{const a=await pt("pie",t);F.debug(a),$t(a,_)},"parse")},Mt=p(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=Mt,Et=p(t=>{const a=[...t.values()].reduce((s,d)=>s+d,0),f=[...t.entries()].map(([s,d])=>({label:s,value:d})).filter(s=>s.value/a*100>=1);return mt().value(s=>s.value).sort(null)(f)},"createPieArcs"),bt=p((t,a,f,w)=>{F.debug(`rendering pie chart
`+t);const s=w.db,d=rt(),o=nt(s.getConfig(),d.pie),e=40,n=18,l=4,g=450,h=g,v=it(a),c=v.append("g");c.attr("transform","translate("+h/2+","+g/2+")");const{themeVariables:i}=d;let[x]=st(i.pieOuterStrokeWidth);x??=2;const y=o.textPosition,m=Math.min(h,g)/2-e,D=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*y).outerRadius(m*y);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+x/2).attr("class","pieOuterCircle");const u=s.getSections(),A=Et(u),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let M=0;u.forEach(r=>{M+=r});const G=A.filter(r=>(r.data.value/M*100).toFixed(0)!=="0"),k=gt(C).domain([...u.keys()]);c.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(G).enter().append("text").text(r=>(r.data.value/M*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const V=c.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),N=[...u.entries()].map(([r,b])=>({label:r,value:b})),E=c.selectAll(".legend").data(N).enter().append("g").attr("class","legend").attr("transform",(r,b)=>{const O=n+l,Z=O*N.length/2,q=12*n,H=b*O-Z;return"translate("+q+","+H+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+l).attr("y",n-l).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const j=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),U=h+e+n+l+j,B=V.node()?.getBoundingClientRect().width??0,Q=h/2-B/2,X=h/2+B/2,L=Math.min(0,Q),P=Math.max(U,X)-L;v.attr("viewBox",`${L} 0 ${P} ${g}`),ot(v,g,P,o.useMaxWidth)},"draw"),Rt={draw:bt},_t={parser:Tt,db:_,renderer:Rt,styles:kt};export{_t as diagram};
//# sourceMappingURL=pieDiagram-4H26LBE5-BPlcRl6a.js.map

//# chunkId=019e8e4f-ddaa-76b0-8597-900a7e552ff2