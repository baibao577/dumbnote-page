!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="019e843d-07e4-7700-9256-201377db3d5c")}catch(e){}}();import{D as S,b0 as R,f as H,V as J,aP as K,W as tt,aQ as et,$ as at,aS as rt,a as p,at as W,Y as nt,r as it,aO as st,aB as ot,B as lt,s as ct,O as ut}from"./mermaid.core-CTymcLfW.js";import{p as pt}from"./chunk-4BX2VUAB-DMJVJpSC.js";import{p as dt}from"./wardley-L42UT6IY-TZZzTWof.js";import"./transform-C3k1rBga.js";import{d as I}from"./arc-C87QgdnG.js";import{o as gt}from"./ordinal-D8o73TQ0.js";import"./index-nf7lE7WK.js";import"./init-Gi6I4Gst.js";import"./index-BkD7Hj8s.js";function ft(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ht(t){return t}function mt(){var t=ht,a=ft,f=null,y=S(0),s=S(R),d=S(0);function o(e){var n,l=(e=H(e)).length,g,h,v=0,c=new Array(l),i=new Array(l),x=+y.apply(this,arguments),w=Math.min(R,Math.max(-R,s.apply(this,arguments)-x)),m,C=Math.min(Math.abs(w)/l,d.apply(this,arguments)),$=C*(w<0?-1:1),u;for(n=0;n<l;++n)(u=i[c[n]=n]=+t(e[n],n,e))>0&&(v+=u);for(a!=null?c.sort(function(A,D){return a(i[A],i[D])}):f!=null&&c.sort(function(A,D){return f(e[A],e[D])}),n=0,h=v?(w-l*$)/v:0;n<l;++n,x=m)g=c[n],u=i[g],m=x+(u>0?u*h:0)+$,i[g]={data:e[g],index:n,value:u,startAngle:x,endAngle:m,padAngle:C};return i}return o.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),o):t},o.sortValues=function(e){return arguments.length?(a=e,f=null,o):a},o.sort=function(e){return arguments.length?(f=e,a=null,o):f},o.startAngle=function(e){return arguments.length?(y=typeof e=="function"?e:S(+e),o):y},o.endAngle=function(e){return arguments.length?(s=typeof e=="function"?e:S(+e),o):s},o.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:S(+e),o):d},o}var vt=ut.pie,z={sections:new Map,showData:!1},T=z.sections,B=z.showData,xt=structuredClone(vt),St=p(()=>structuredClone(xt),"getConfig"),yt=p(()=>{T=new Map,B=z.showData,ct()},"clear"),wt=p(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),W.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),At=p(()=>T,"getSections"),Dt=p(t=>{B=t},"setShowData"),Ct=p(()=>B,"getShowData"),_={getConfig:St,clear:yt,setDiagramTitle:rt,getDiagramTitle:at,setAccTitle:et,getAccTitle:tt,setAccDescription:K,getAccDescription:J,addSection:wt,getSections:At,setShowData:Dt,getShowData:Ct},$t=p((t,a)=>{pt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:p(async t=>{const a=await dt("pie",t);W.debug(a),$t(a,_)},"parse")},bt=p(t=>`
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
`,"getStyles"),kt=bt,Et=p(t=>{const a=[...t.values()].reduce((s,d)=>s+d,0),f=[...t.entries()].map(([s,d])=>({label:s,value:d})).filter(s=>s.value/a*100>=1);return mt().value(s=>s.value).sort(null)(f)},"createPieArcs"),Mt=p((t,a,f,y)=>{W.debug(`rendering pie chart
`+t);const s=y.db,d=nt(),o=it(s.getConfig(),d.pie),e=40,n=18,l=4,g=450,h=g,v=st(a),c=v.append("g");c.attr("transform","translate("+h/2+","+g/2+")");const{themeVariables:i}=d;let[x]=ot(i.pieOuterStrokeWidth);x??=2;const w=o.textPosition,m=Math.min(h,g)/2-e,C=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*w).outerRadius(m*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+x/2).attr("class","pieOuterCircle");const u=s.getSections(),A=Et(u),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;u.forEach(r=>{b+=r});const F=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),k=gt(D).domain([...u.keys()]);c.selectAll("mySlices").data(F).enter().append("path").attr("d",C).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(F).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const V=c.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),O=[...u.entries()].map(([r,M])=>({label:r,value:M})),E=c.selectAll(".legend").data(O).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const P=n+l,Y=P*O.length/2,Z=12*n,q=M*P-Y;return"translate("+Z+","+q+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+l).attr("y",n-l).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const U=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),j=h+e+n+l+U,G=V.node()?.getBoundingClientRect().width??0,Q=h/2-G/2,X=h/2+G/2,L=Math.min(0,Q),N=Math.max(j,X)-L;v.attr("viewBox",`${L} 0 ${N} ${g}`),lt(v,g,N,o.useMaxWidth)},"draw"),Rt={draw:Mt},_t={parser:Tt,db:_,renderer:Rt,styles:kt};export{_t as diagram};
//# sourceMappingURL=pieDiagram-4H26LBE5-DKJWyF5o.js.map

//# chunkId=019e843d-07e4-7700-9256-201377db3d5c