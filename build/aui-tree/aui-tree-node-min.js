AUI.add("aui-tree-node",function(AB){var v=AB.Lang,AZ=v.isString,AR=v.isBoolean,Ag="alwaysShowHitArea",n="",S="boundingBox",G="children",AV="clearfix",Y="collapsed",B="container",z="content",W="contentBox",J="expanded",O="helper",s="hidden",g="hitarea",F="hitAreaEl",r="icon",Af="iconEl",AN="id",AF="label",t="labelEl",q="lastSelected",AU="leaf",Q="node",AH="over",w="ownerTree",E="parentNode",AT="selected",T=" ",H="tree",h="tree-node",U=function(A){return AB.get(A);},Ac=function(){return Array.prototype.slice.call(arguments).join(T);},AK=function(A){return(A instanceof AB.TreeNode);},Ab=function(A){return(A instanceof AB.TreeView);},f=AB.ClassNameManager.getClassName,AD=f(O,AV),Z=f(H,Y),C=f(H,B),Ah=f(H,J),V=f(H,s),AO=f(H,g),e=f(H,r),K=f(H,AF),d=f(H,Q,z),AP=f(H,Q,s,g),I=f(H,Q,AU),AY=f(H,Q,AH),i=f(H,Q,AT),AA='<div class="'+AO+'"></div>',R='<div class="'+e+'"></div>',D='<div class="'+K+'"></div>',Ae="<ul></ul>",X="<li></li>",x='<div class="'+Ac(AD,d)+'"></div>';function l(A){l.superclass.constructor.apply(this,arguments);}AB.mix(l,{NAME:h,ATTRS:{draggable:{value:true,validator:AR},ownerTree:{value:null},label:{value:n,validator:AZ},expanded:{value:false,validator:AR},id:{validator:AZ},leaf:{value:true,setter:function(A){if(A&&this.get(G).length){return false;}return A;},validator:AR},nextSibling:{value:null,validator:AK},prevSibling:{value:null,validator:AK},parentNode:{value:null,validator:function(A){return AK(A)||Ab(A);}},labelEl:{setter:U,valueFn:function(){var A=this.get(AF);return AB.Node.create(D).html(A).unselectable();}},hitAreaEl:{setter:U,valueFn:function(){return AB.Node.create(AA);}},alwaysShowHitArea:{value:true,validator:AR},iconEl:{setter:U,valueFn:function(){return AB.Node.create(R);}},tabIndex:{value:null}}});AB.extend(l,AB.TreeData,{BOUNDING_TEMPLATE:X,CONTENT_TEMPLATE:x,initializer:function(){var A=this;A._syncTreeNodeBBId();l.superclass.initializer.apply(this,arguments);},bindUI:function(){var A=this;A.publish("collapse",{defaultFn:A._collapse});A.publish("expand",{defaultFn:A._expand});A.after("childrenChange",AB.bind(A._afterSetChildren,A));A.after("idChange",A._afterSetId,A);},_renderUI:function(A){this._renderBoxClassNames();},renderUI:function(){var A=this;A._renderBoundingBox();A._renderContentBox();},syncUI:function(){var A=this;A._syncHitArea(A.get(G));},_renderContentBox:function(Ak){var A=this;var L=A.get(W);if(A.isLeaf()){L.addClass(I);}else{L.addClass(A.get(J)?Ah:Z);}return L;},_renderBoundingBox:function(){var A=this;var Ak=A.get(S);var L=A.get(W);var Al=null;if(!A.isLeaf()){L.append(A.get(F));Al=A._createNodeContainer();}L.append(A.get(Af));L.append(A.get(t));Ak.append(L);if(Al){if(!A.get(J)){Al.addClass(V);}Ak.append(Al);}return Ak;},_createNodeContainer:function(){var A=this;var L=A.get(B)||AB.Node.create(Ae);L.addClass(C);A.set(B,L);A.eachChildren(function(Ak){A.appendChild(Ak);});return L;},_syncHitArea:function(L){var A=this;if(A.get(Ag)||L.length){A.showHitArea();}else{A.hideHitArea();A.collapse();}},appendChild:function(){var A=this;if(!A.isLeaf()){l.superclass.appendChild.apply(A,arguments);}},collapse:function(){var A=this;if(A.get(J)){var L=A.getEventOutputMap(A);A.bubbleEvent("collapse",L);}},_collapse:function(Al){if(Al.stopActionPropagation){return false;}var A=this;if(!A.isLeaf()){var Ak=A.get(B);var L=A.get(W);L.replaceClass(Ah,Z);if(Ak){Ak.addClass(V);}A.set(J,false);}},collapseAll:function(){var A=this;l.superclass.collapseAll.apply(A,arguments);A.collapse();},contains:function(A){return A.isAncestor(this);},expand:function(){var A=this;if(!A.get(J)){var L=A.getEventOutputMap(A);A.bubbleEvent("expand",L);}},_expand:function(Al){if(Al.stopActionPropagation){return false;}var A=this;if(!A.isLeaf()){var Ak=A.get(B);var L=A.get(W);L.replaceClass(Z,Ah);if(Ak){Ak.removeClass(V);}A.set(J,true);}},expandAll:function(){var A=this;l.superclass.expandAll.apply(A,arguments);A.expand();},getDepth:function(){var Ak=0;var L=this;var A=L.get(E);while(A){++Ak;A=A.get(E);}return Ak;},hasChildNodes:function(){var A=this;return(!A.isLeaf()&&l.superclass.hasChildNodes.apply(this,arguments));},isSelected:function(){return this.get(W).hasClass(i);},isLeaf:function(){var A=this;return A.get(AU);},isAncestor:function(Ak){var L=this;var A=L.get(E);while(A){if(A==Ak){return true;}A=A.get(E);}return false;},insertAfter:function(Ak,L){var A=this;l.superclass.insertAfter.apply(this,[Ak,A]);},insertBefore:function(L){var A=this;l.superclass.insertBefore.apply(this,[L,A]);},removeChild:function(L){var A=this;if(!A.isLeaf()){l.superclass.removeChild.apply(A,arguments);}},toggle:function(){var A=this;if(A.get(J)){A.collapse();}else{A.expand();}},select:function(){var A=this;var L=A.get(w);if(L){L.set(q,A);}A.get(W).addClass(i);A.fire("select");},unselect:function(){var A=this;A.get(W).removeClass(i);A.fire("unselect");},over:function(){this.get(W).addClass(AY);},out:function(){this.get(W).removeClass(AY);},showHitArea:function(){var A=this;var L=A.get(F);L.removeClass(AP);},hideHitArea:function(){var A=this;var L=A.get(F);L.addClass(AP);},_syncTreeNodeBBId:function(L){var A=this;A.get(S).attr(AN,A.get(AN));},_afterSetChildren:function(L){var A=this;A._syncHitArea(L.newVal);}});AB.TreeNode=l;var AQ=v.isFunction,Aa="cache",AG="io",Ad="loaded",Ai="loading",AM="tree-node-io",a=f(H,Q,AG,Ai);function k(A){k.superclass.constructor.apply(this,arguments);}AB.mix(k,{NAME:AM,ATTRS:{io:{lazyAdd:false,value:null,setter:function(A){return this._setIO(A);}},loading:{value:false,validator:AR},loaded:{value:false,validator:AR},cache:{value:true,validator:AR},leaf:{value:false,validator:AR}}});AB.extend(k,AB.TreeNode,{createNode:function(L){var A=this;AB.each(L,function(Al){var Ak=k.superclass.createNode.apply(A,[Al]);A.appendChild(Ak);});},expand:function(){var L=this;var Ak=L.get(Aa);var Ao=L.get(AG);var Am=L.get(Ad);var An=L.get(Ai);var Al=L.get(w);if(!Ao&&Al){L.set(AG,AB.clone(Al.get(AG)));Ao=L.get(AG);}if(!Ak){L.set(Ad,false);}if(!Ao||Am){k.superclass.expand.apply(this,arguments);}else{if(!An){if(!Ak){L.empty();
}if(AQ(Ao.cfg.data)){Ao.cfg.data=Ao.cfg.data.apply(L,[L]);}if(AQ(Ao.loader)){var A=AB.bind(Ao.loader,L);A(Ao.url,Ao.cfg,L);}else{AB.io(Ao.url,Ao.cfg);}}}},ioStartHandler:function(){var A=this;var L=A.get(W);A.set(Ai,true);L.addClass(a);},ioCompleteHandler:function(){var A=this;var L=A.get(W);A.set(Ai,false);A.set(Ad,true);L.removeClass(a);},ioSuccessHandler:function(){var A=this;var Ap=A.get(AG);var Ak=Array.prototype.slice.call(arguments);var Am=Ak.length;var L=Ak[0];if(Am>=2){var Ao=Ak[1];try{L=AB.JSON.parse(Ao.responseText);}catch(An){}}var Al=Ap.formatter;if(Al){L=Al(L);}A.createNode(L);A.expand();},ioFailureHandler:function(){var A=this;A.set(Ai,false);A.set(Ad,false);},_setIO:function(Ak){var A=this;if(!Ak){return null;}else{if(AZ(Ak)){Ak={url:Ak};}}Ak=Ak||{};Ak.cfg=Ak.cfg||{};Ak.cfg.on=Ak.cfg.on||{};var L={start:AB.bind(A.ioStartHandler,A),complete:AB.bind(A.ioCompleteHandler,A),success:AB.bind(A.ioSuccessHandler,A),failure:AB.bind(A.ioFailureHandler,A)};AB.each(L,function(An,Al){var Ao=Ak.cfg.on[Al];if(AQ(Ao)){var Am=function(){An.apply(A,arguments);Ao.apply(A,arguments);};Ak.cfg.on[Al]=AB.bind(Am,A);}else{Ak.cfg.on[Al]=An;}});return Ak;}});AB.TreeNodeIO=k;var M="checkbox",P="checked",y="checkContainerEl",AW="checkEl",m="checkName",u=".",N="name",b="tree-node-check",AE=f(H,Q,M),AJ=f(H,Q,M,B),AL=f(H,Q,P),p='<div class="'+AJ+'"></div>',AI='<input class="'+AE+'" type="checkbox" />';function AS(A){AS.superclass.constructor.apply(this,arguments);}AB.mix(AS,{NAME:b,ATTRS:{checked:{value:false,validator:AR},checkName:{value:b,validator:AZ},checkContainerEl:{setter:U,valueFn:function(){return AB.Node.create(p);}},checkEl:{setter:U,valueFn:function(){var A=this.get(m);return AB.Node.create(AI).attr(N,A);}}}});AB.extend(AS,AB.TreeNodeIO,{renderUI:function(){var L=this;AS.superclass.renderUI.apply(L,arguments);var Ak=L.get(t);var A=L.get(AW);var Al=L.get(y);A.hide();Al.append(A);Ak.placeBefore(Al);if(L.isChecked()){L.check();}},bindUI:function(){var A=this;var L=A.get(W);var Ak=A.get(t);AS.superclass.bindUI.apply(A,arguments);A.publish("check");A.publish("uncheck");L.delegate("click",AB.bind(A.toggleCheck,A),u+AJ);L.delegate("click",AB.bind(A.toggleCheck,A),u+K);Ak.swallowEvent("dblclick");},check:function(){var L=this;var Ak=L.get(W);var A=L.get(AW);Ak.addClass(AL);L.set(P,true);A.attr(P,P);L.fire("check");},uncheck:function(){var L=this;var Ak=L.get(W);var A=L.get(AW);Ak.removeClass(AL);L.set(P,false);A.attr(P,n);L.fire("uncheck");},toggleCheck:function(){var L=this;var A=L.get(AW);var Ak=A.attr(P);if(!Ak){L.check();}else{L.uncheck();}},isChecked:function(){var A=this;return A.get(P);}});AB.TreeNodeCheck=AS;var c="child",o="tree-node-task",j="unchecked",AX=function(A){return A instanceof AB.TreeNodeCheck;},AC=f(H,Q,c,j);function Aj(A){Aj.superclass.constructor.apply(this,arguments);}AB.mix(Aj,{NAME:o});AB.extend(Aj,AB.TreeNodeCheck,{check:function(Al){var L=this;var A=L.get(E);var Ak=L.get(W);Aj.superclass.check.apply(this,arguments);if(!Al){Ak.removeClass(AC);L.eachParent(function(Am){if(AX(Am)){var An=false;Am.check(true);Am.get(W).addClass(AC);Am.eachChildren(function(Ao){if(AX(Ao)&&!Ao.isChecked()){An=true;}},true);if(!An){Am.get(W).removeClass(AC);}}});if(!L.isLeaf()){L.eachChildren(function(Am){if(AX(Am)){Am.check();}});}}},uncheck:function(){var A=this;var L=A.get(W);Aj.superclass.uncheck.apply(this,arguments);L.removeClass(AC);A.eachParent(function(Ak){if(AX(Ak)&&Ak.isChecked()){Ak.get(W).addClass(AC);}});if(!A.isLeaf()){A.eachChildren(function(Ak){if(Ak instanceof AB.TreeNodeCheck){Ak.uncheck();}});}}});AB.TreeNodeTask=Aj;AB.TreeNode.nodeTypes={task:AB.TreeNodeTask,check:AB.TreeNodeCheck,node:AB.TreeNode,io:AB.TreeNodeIO};},"@VERSION@",{requires:["aui-tree-data","io","json"],skinnable:false});