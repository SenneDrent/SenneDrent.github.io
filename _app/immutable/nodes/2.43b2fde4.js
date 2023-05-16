import{S as J,i as N,s as Q,k as o,q as b,a as x,l as n,m as i,r as p,h as s,c as k,n as a,b as X,F as e,M as S,y as Z,z as ee,A as te,g as re,d as ae,B as se}from"../chunks/index.c0ea25db.js";function ce(V){let t,r,c,l,g,f,u,h,m,T,O,w,P,R,E,L,H,$,I,y,j,_,v,A,C,d,U;return{c(){t=o("div"),r=o("div"),c=o("div"),l=o("h1"),g=b("Interested in working with me? Reach out to me through:"),f=x(),u=o("ul"),h=o("li"),m=b("Email:    "),T=o("a"),O=b("sennedrent@gmail.com"),w=x(),P=o("li"),R=b("Phone:  "),E=o("a"),L=b("+31 6 12 24 22 35"),H=x(),$=o("div"),I=o("h2"),y=b("Or find me at:"),j=x(),_=o("div"),v=o("a"),A=b("Github"),C=x(),d=o("a"),U=b("Linkedn"),this.h()},l(B){t=n(B,"DIV",{id:!0,class:!0});var q=i(t);r=n(q,"DIV",{class:!0});var D=i(r);c=n(D,"DIV",{class:!0});var z=i(c);l=n(z,"H1",{class:!0});var W=i(l);g=p(W,"Interested in working with me? Reach out to me through:"),W.forEach(s),f=k(z),u=n(z,"UL",{class:!0});var M=i(u);h=n(M,"LI",{});var K=i(h);m=p(K,"Email:    "),T=n(K,"A",{href:!0,class:!0});var oe=i(T);O=p(oe,"sennedrent@gmail.com"),oe.forEach(s),K.forEach(s),w=k(M),P=n(M,"LI",{});var Y=i(P);R=p(Y,"Phone:  "),E=n(Y,"A",{href:!0,class:!0});var ne=i(E);L=p(ne,"+31 6 12 24 22 35"),ne.forEach(s),Y.forEach(s),M.forEach(s),z.forEach(s),H=k(D),$=n(D,"DIV",{});var F=i($);I=n(F,"H2",{});var ie=i(I);y=p(ie,"Or find me at:"),ie.forEach(s),j=k(F),_=n(F,"DIV",{class:!0});var G=i(_);v=n(G,"A",{target:!0,rel:!0,href:!0,class:!0});var le=i(v);A=p(le,"Github"),le.forEach(s),C=k(G),d=n(G,"A",{target:!0,rel:!0,href:!0,class:!0});var he=i(d);U=p(he,"Linkedn"),he.forEach(s),G.forEach(s),F.forEach(s),D.forEach(s),q.forEach(s),this.h()},h(){a(l,"class","text-2xl text-center"),a(T,"href","mailto:sennedrent@gmail.com"),a(T,"class","hover:text-red-100"),a(E,"href","tel:+31612242235"),a(E,"class","hover:text-red-100"),a(u,"class","py-6 space-y-2"),a(c,"class","inline-block text-left border-b-2"),a(v,"target","_blank"),a(v,"rel","noopener noreferrer"),a(v,"href","https://github.com/SenneDrent"),a(v,"class","hover:text-red-100"),a(d,"target","_blank"),a(d,"rel","noopener noreferrer"),a(d,"href","https://www.linkedin.com/in/SenneDrent"),a(d,"class","hover:text-red-100"),a(_,"class","flex justify-center space-x-5"),a(r,"class","flex-grow space-y-4"),a(t,"id","contactContainer"),a(t,"class","flex items-center h-screen space-y-4 py-10 m-3")},m(B,q){X(B,t,q),e(t,r),e(r,c),e(c,l),e(l,g),e(c,f),e(c,u),e(u,h),e(h,m),e(h,T),e(T,O),e(u,w),e(u,P),e(P,R),e(P,E),e(E,L),e(r,H),e(r,$),e($,I),e(I,y),e($,j),e($,_),e(_,v),e(v,A),e(_,C),e(_,d),e(d,U)},p:S,i:S,o:S,d(B){B&&s(t)}}}class de extends J{constructor(t){super(),N(this,t,null,ce,Q,{})}}function fe(V){let t,r,c,l,g,f,u,h,m,T,O,w,P,R,E,L,H,$,I,y,j,_,v;return{c(){t=o("div"),r=o("div"),c=o("h1"),l=b("Hi-Horizon Racing Team"),g=x(),f=o("p"),u=b(`Software programmer for a Boat driven by solarPower.\r
            This project has been started with friends and we have been working since 2019. We are competing in the Solar Sport One races\r
            were the goal is to make your Boat as efficient and fast as possible\r
            I am in charge of programming for the embedded telemetry system inside the boat, as well as the data dashboard website.`),h=x(),m=o("h2"),T=b("On board telemetry"),O=x(),w=o("p"),P=b(`Part of my work is the on board telemetry systems, which gathers data from multiple sensors, and saves these locally on a SD card and \r
            display it on a screen inside the boat, but also sends data to an telemetry website through internet.\r
            `),R=o("br"),E=b(`\r
            The system itself consist of multiple sensors coming from different components inside the boat,\r
            like the motorcontroller, battery or solar panels.\r
            These are connected to microcontrollers through a variety of connections with different data Protocols like UART, I2C, SPI and CANBUS.\r
            THe microcontrollers used include boards which use the Arduino framework based on C++, like Teensy or ESP, but there is also being worked on using stm32\r
            boards, using the stm32_HAL based on C.`),L=x(),H=o("h2"),$=b("Telemetry Website"),I=x(),y=o("p"),j=b(`This website is able to view the data collected from to boat on a dashboard. This is useful for strategy calculations we make on land, \r
            think of for example "for long can we drive until the battery is empty?". The data is displayed asynchronously through AJAX request with the database.\r
            Other features include being able to record periods of time so it can be viewed at with a graph.\r
            `),_=o("br"),v=b(`\r
            The website gets this data through the MQTT protocol in which it receives data from the esp inside the boat. \r
            The website itself is made with PHP, javascript and sqllite.`),this.h()},l(A){t=n(A,"DIV",{id:!0,class:!0});var C=i(t);r=n(C,"DIV",{class:!0});var d=i(r);c=n(d,"H1",{class:!0});var U=i(c);l=p(U,"Hi-Horizon Racing Team"),U.forEach(s),g=k(d),f=n(d,"P",{class:!0});var B=i(f);u=p(B,`Software programmer for a Boat driven by solarPower.\r
            This project has been started with friends and we have been working since 2019. We are competing in the Solar Sport One races\r
            were the goal is to make your Boat as efficient and fast as possible\r
            I am in charge of programming for the embedded telemetry system inside the boat, as well as the data dashboard website.`),B.forEach(s),h=k(d),m=n(d,"H2",{class:!0});var q=i(m);T=p(q,"On board telemetry"),q.forEach(s),O=k(d),w=n(d,"P",{class:!0});var D=i(w);P=p(D,`Part of my work is the on board telemetry systems, which gathers data from multiple sensors, and saves these locally on a SD card and \r
            display it on a screen inside the boat, but also sends data to an telemetry website through internet.\r
            `),R=n(D,"BR",{}),E=p(D,`\r
            The system itself consist of multiple sensors coming from different components inside the boat,\r
            like the motorcontroller, battery or solar panels.\r
            These are connected to microcontrollers through a variety of connections with different data Protocols like UART, I2C, SPI and CANBUS.\r
            THe microcontrollers used include boards which use the Arduino framework based on C++, like Teensy or ESP, but there is also being worked on using stm32\r
            boards, using the stm32_HAL based on C.`),D.forEach(s),L=k(d),H=n(d,"H2",{class:!0});var z=i(H);$=p(z,"Telemetry Website"),z.forEach(s),I=k(d),y=n(d,"P",{class:!0});var W=i(y);j=p(W,`This website is able to view the data collected from to boat on a dashboard. This is useful for strategy calculations we make on land, \r
            think of for example "for long can we drive until the battery is empty?". The data is displayed asynchronously through AJAX request with the database.\r
            Other features include being able to record periods of time so it can be viewed at with a graph.\r
            `),_=n(W,"BR",{}),v=p(W,`\r
            The website gets this data through the MQTT protocol in which it receives data from the esp inside the boat. \r
            The website itself is made with PHP, javascript and sqllite.`),W.forEach(s),d.forEach(s),C.forEach(s),this.h()},h(){a(c,"class","pl-10 text-2xl"),a(f,"class","font-bold"),a(m,"class","text-xl"),a(w,"class","font-bold"),a(H,"class","text-xl"),a(y,"class","font-bold"),a(r,"class","flex-grow bg-red p-3"),a(t,"id","HiHorizonContainer"),a(t,"class","flex min-h-screen text-black p-3 text-left space-y-4")},m(A,C){X(A,t,C),e(t,r),e(r,c),e(c,l),e(r,g),e(r,f),e(f,u),e(r,h),e(r,m),e(m,T),e(r,O),e(r,w),e(w,P),e(w,R),e(w,E),e(r,L),e(r,H),e(H,$),e(r,I),e(r,y),e(y,j),e(y,_),e(y,v)},p:S,i:S,o:S,d(A){A&&s(t)}}}class me extends J{constructor(t){super(),N(this,t,null,fe,Q,{})}}function ue(V){let t,r,c;return{c(){t=o("div"),r=o("h1"),c=b("Welcome to the Portfolio of Senne Drent"),this.h()},l(l){t=n(l,"DIV",{id:!0,class:!0});var g=i(t);r=n(g,"H1",{class:!0});var f=i(r);c=p(f,"Welcome to the Portfolio of Senne Drent"),f.forEach(s),g.forEach(s),this.h()},h(){a(r,"class","transition inline-block align-middle text-3xl"),a(t,"id","introContainer"),a(t,"class","flex justify-center items-center h-screen p-5")},m(l,g){X(l,t,g),e(t,r),e(r,c)},p:S,i:S,o:S,d(l){l&&s(t)}}}class be extends J{constructor(t){super(),N(this,t,null,ue,Q,{})}}function pe(V){let t,r,c,l,g,f,u;return r=new be({}),l=new me({}),f=new de({}),{c(){t=o("div"),Z(r.$$.fragment),c=x(),Z(l.$$.fragment),g=x(),Z(f.$$.fragment),this.h()},l(h){t=n(h,"DIV",{class:!0});var m=i(t);ee(r.$$.fragment,m),c=k(m),ee(l.$$.fragment,m),g=k(m),ee(f.$$.fragment,m),m.forEach(s),this.h()},h(){a(t,"class","flex-1 text-center flex-row items-center")},m(h,m){X(h,t,m),te(r,t,null),e(t,c),te(l,t,null),e(t,g),te(f,t,null),u=!0},p:S,i(h){u||(re(r.$$.fragment,h),re(l.$$.fragment,h),re(f.$$.fragment,h),u=!0)},o(h){ae(r.$$.fragment,h),ae(l.$$.fragment,h),ae(f.$$.fragment,h),u=!1},d(h){h&&s(t),se(r),se(l),se(f)}}}class ve extends J{constructor(t){super(),N(this,t,null,pe,Q,{})}}export{ve as component};