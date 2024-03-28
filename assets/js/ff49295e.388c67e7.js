"use strict";(self.webpackChunkdocsapp=self.webpackChunkdocsapp||[]).push([[371],{1465:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=o(4848),i=o(8453);const l={title:"Local Deployment",sidebar_label:"Local",sidebar_position:3.1},s="Local Deployment",c={id:"deployment/local",title:"Local Deployment",description:"Deploy LinguFlow on your local machine using Docker Compose. This setup is perfect for developing, testing LinguFlow applications, and diagnosing integration issues.",source:"@site/../docs/deployment/local.md",sourceDirName:"deployment",slug:"/deployment/local",permalink:"/docs/deployment/local",draft:!1,unlisted:!1,editUrl:"https://github.com/pingcap/LinguFlow/edit/main/docs/../docs/deployment/local.md",tags:[],version:"current",sidebarPosition:3.1,frontMatter:{title:"Local Deployment",sidebar_label:"Local",sidebar_position:3.1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/category/deployment"},next:{title:"Self-Host",permalink:"/docs/deployment/self_host"}},r={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Updating LinguFlow",id:"updating-linguflow",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"local-deployment",children:"Local Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Deploy LinguFlow on your local machine using Docker Compose. This setup is perfect for developing, testing LinguFlow applications, and diagnosing integration issues."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Requirements"}),": Docker and Docker Compose, both of which are part of ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker Desktop"})," for Mac or Windows users."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to get LinguFlow up and running on your local environment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Clone the LinguFlow repository\ngit clone git@github.com:pingcap/LinguFlow.git\n# Navigate into the LinguFlow directory\ncd LinguFlow\n\n# Start the UI and API server\ndocker-compose -f docker-compose.dev.yaml up\n"})}),"\n",(0,t.jsxs)(n.p,{children:["-> You can now access LinguFlow at ",(0,t.jsx)(n.a,{href:"http://localhost:5173",children:"http://localhost:5173"})]}),"\n",(0,t.jsx)(n.h2,{id:"updating-linguflow",children:"Updating LinguFlow"}),"\n",(0,t.jsxs)(n.p,{children:["To update LinguFlow to the latest version locally, a simple ",(0,t.jsx)(n.code,{children:"git pull"})," is usually sufficient. However, there are two exceptions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the dependencies of ",(0,t.jsx)(n.code,{children:"LinguFlow"})," have been updated (as listed in requirements.txt)."]}),"\n",(0,t.jsxs)(n.li,{children:["When the model of ",(0,t.jsx)(n.code,{children:"LinguFlow"})," has been updated (as defined in model.py)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In these scenarios, you'll need to rebuild the LinguFlow Docker image by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker-compose -f docker-compose.dev.yaml build\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(6540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);