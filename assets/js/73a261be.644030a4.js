"use strict";(self.webpackChunkdocsapp=self.webpackChunkdocsapp||[]).push([[748],{8634:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const l={title:"Blocks",sidebar_label:"Blocks",sidebar_position:4.3,toc_max_heading_level:4},r="Blocks",o={id:"develop/builder/blocks",title:"Blocks",description:"General",source:"@site/../docs/develop/builder/blocks.md",sourceDirName:"develop/builder",slug:"/develop/builder/blocks",permalink:"/docs/develop/builder/blocks",draft:!1,unlisted:!1,editUrl:"https://github.com/pingcap/LinguFlow/edit/main/docs/../docs/develop/builder/blocks.md",tags:[],version:"current",sidebarPosition:4.3,frontMatter:{title:"Blocks",sidebar_label:"Blocks",sidebar_position:4.3,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/docs/develop/builder/summary"},next:{title:"Debugging",permalink:"/docs/develop/builder/debugging"}},c={},d=[{value:"General",id:"general",level:2},{value:"Block Categories",id:"block-categories",level:2},{value:"Input &amp; Output Category",id:"input--output-category",level:3},{value:"Text_Input",id:"text_input",level:4},{value:"List_Input",id:"list_input",level:4},{value:"Dict_Input",id:"dict_input",level:4},{value:"Text_Output",id:"text_output",level:4},{value:"Data Processing Category",id:"data-processing-category",level:3},{value:"Dict_KeySelect_to_Text",id:"dict_keyselect_to_text",level:4},{value:"List_Join_to_Text",id:"list_join_to_text",level:4},{value:"List_Concat_to_List",id:"list_concat_to_list",level:4},{value:"Text_Join_to_Dict",id:"text_join_to_dict",level:4},{value:"Text_Split_to_List",id:"text_split_to_list",level:4},{value:"Condition Category",id:"condition-category",level:3},{value:"Text_Condition",id:"text_condition",level:4},{value:"List_Condition",id:"list_condition",level:4},{value:"LLM Category",id:"llm-category",level:3},{value:"LLM",id:"llm",level:4},{value:"Invoke Category",id:"invoke-category",level:3},{value:"Text_Invoke",id:"text_invoke",level:4},{value:"List_Invoke",id:"list_invoke",level:4},{value:"Dict_Invoke",id:"dict_invoke",level:4},{value:"Tools Category",id:"tools-category",level:3},{value:"Google_Search",id:"google_search",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.p,{children:["A Block represents a node within the ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"Directed Acyclic Graph (DAG)"}),", each embodying a specific processing logic. Typically, a Block comprises several components:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Block Info"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Block Name"}),": The name of the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Block ID"}),": The unique identifier of the block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Copy Block ID"}),": A feature to copy the block's ID."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conditional Port"}),": Accepts True or False outputs from upstream ",(0,s.jsx)(n.code,{children:"condition"})," type blocks, determining whether to execute this block based on the upstream result."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": The information inputted into this block. Some blocks support multiple inports. Inports can handle ",(0,s.jsx)(n.code,{children:"text"}),", ",(0,s.jsx)(n.code,{children:"list"}),", ",(0,s.jsx)(n.code,{children:"dict"})," data types.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add an Inport"}),": Adds an additional inport to the block. Manually added inports support connections of ",(0,s.jsx)(n.code,{children:"any"})," data type."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": The information outputted from this block. Outports typically support ",(0,s.jsx)(n.code,{children:"text"}),", ",(0,s.jsx)(n.code,{children:"list"}),", ",(0,s.jsx)(n.code,{children:"dict"}),", ",(0,s.jsx)(n.code,{children:"boolean"})," data types."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": Specific parameter details for the block, which vary from one block type to another."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"block-categories",children:"Block Categories"}),"\n",(0,s.jsx)(n.p,{children:"LinguFlow offers essential Block categories necessary for building LinguFlow applications, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input & Output Category"}),": For receiving inputs and sending outputs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Process Category"}),": For manipulating and processing data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Condition Category"}),": For making decisions based on certain conditions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LLM Category"}),": For integrating Large Language Model functionalities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Invoke Category"}),": For calling other blocks or applications within LinguFlow."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tools Category"}),": For utilizing third-party tools or services."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"input--output-category",children:"Input & Output Category"}),"\n",(0,s.jsx)(n.h4,{id:"text_input",children:"Text_Input"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Defines the input type for a LinguFlow App. It allows sending information of ",(0,s.jsx)(n.code,{children:"text"})," type to the LinguFlow application during an API call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Outport: "Who are you?"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"list_input",children:"List_Input"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Defines the input type for a LinguFlow App. It supports sending information of ",(0,s.jsx)(n.code,{children:"list"})," type to the LinguFlow application during an API call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Outport: ["hi", "Hello, can I help you?", "Who are you?"]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"dict_input",children:"Dict_Input"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Defines the input type for a LinguFlow App. It facilitates sending information of ",(0,s.jsx)(n.code,{children:"dict"})," type to the LinguFlow application during an API call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"dict"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Outport: {"key_1": "value_1", "key_2": "value_2"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"text_output",children:"Text_Output"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Specifies the output type for a LinguFlow App. After the LinguFlow application has finished running, it outputs a result of ",(0,s.jsx)(n.code,{children:"text"})," type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "I\'m LinguFlow."\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-processing-category",children:"Data Processing Category"}),"\n",(0,s.jsx)(n.h4,{id:"dict_keyselect_to_text",children:"Dict_KeySelect_to_Text"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Selects a specific ",(0,s.jsx)(n.code,{children:"key"}),"'s ",(0,s.jsx)(n.code,{children:"value"})," from a ",(0,s.jsx)(n.code,{children:"dict"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"dict"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Key"}),": Specifies a particular ",(0,s.jsx)(n.code,{children:"key"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: {"key_1": "value_1", "key_2": "value_2"}\n- Parameters: key="key_1"\n- Outport: "value_1"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"list_join_to_text",children:"List_Join_to_Text"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Merges a ",(0,s.jsx)(n.code,{children:"list"})," into a single ",(0,s.jsx)(n.code,{children:"text"})," string. The ",(0,s.jsx)(n.code,{children:"list"})," typically contains multiple ",(0,s.jsx)(n.code,{children:"text"})," elements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": Supports multiple inports, each corresponding to a ",(0,s.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": Merged ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Template"}),": Describes how to render each list element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Delimiter"}),": Describes how to concatenate the rendered elements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: ["text 1", "text 2", "text 3"]\n- Parameters:\n    - template="--{input}--"\n    - delimiter=\'\\n\'\n- Outport: "--text 1--\\n--text 2--\\n--text 3--\\n"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"list_concat_to_list",children:"List_Concat_to_List"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Concatenates two ",(0,s.jsx)(n.code,{children:"lists"})," in sequence into a single ",(0,s.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"seq1"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"seq2"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": Concatenated ",(0,s.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: ["a", "b"], ["1", "2"]\n- Outport: ["a", "b", "1", "2"]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"text_join_to_dict",children:"Text_Join_to_Dict"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Combines multiple ",(0,s.jsx)(n.code,{children:"texts"})," into a ",(0,s.jsx)(n.code,{children:"dict"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": Supports multiple inports, each corresponding to a ",(0,s.jsx)(n.code,{children:"text"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": Combined ",(0,s.jsx)(n.code,{children:"dict"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport:\n    - Inport name: "a", value: "b"\n    - Inport name: "1", value: "2"\n- Outport: {"a": "b", "1": "2"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"text_split_to_list",children:"Text_Split_to_List"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Parses ",(0,s.jsx)(n.code,{children:"text"})," into a ",(0,s.jsx)(n.code,{children:"list"})," based on specified rules."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Delim"}),": The delimiter character in the text."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prefix"}),": Trims a prefix from each element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suffix"}),": Trims a suffix from each element."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "|abc-\\n|def-\\n|ghi-\\n"\n- Parameters:\n    - delim=\'\\n\'\n    - prefix=\'|\'\n    - suffix=\'-\'\n- Outport: ["abc", "def", "ghi"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"condition-category",children:"Condition Category"}),"\n",(0,s.jsx)(n.h4,{id:"text_condition",children:"Text_Condition"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Evaluates a ",(0,s.jsx)(n.code,{children:"text"})," input and outputs a boolean result based on the evaluation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comparator"}),': Supports text evaluation logic, including "Text Equals", "Text Contains", "Text Has Prefix", "Text Has Suffix". Outputs "True" if the condition is met, "False" otherwise.']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "success"\n- Parameters:\n    - comparator: Text_Equal_With\n        - value: "success"\n- Outport: "True"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"list_condition",children:"List_Condition"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Evaluates a ",(0,s.jsx)(n.code,{children:"list"})," input and outputs a boolean result based on the evaluation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comparator"}),': Supports list evaluation logic, including "List Contains", "List Is Empty". Outputs "True" if the condition is met, "False" otherwise.']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: ["abc", "def", "ghi"]\n- Parameters:\n    - comparator: List_Is_Empty\n- Outport: "false"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"llm-category",children:"LLM Category"}),"\n",(0,s.jsx)(n.h4,{id:"llm",children:"LLM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Interacts with an LLM."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": Default inport is ",(0,s.jsx)(n.code,{children:"text"}),". Additional inports can be created for input, which can be referenced in the template by inserting the inport name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model"}),": Currently supports OpenAI's series of language models."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prompt Template Type"}),": Currently supports Zero_Shot_Prompt_Template and Few_Shot_Prompt_Template."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "who are you?"\n- Parameters:\n    - model: OpenAI_Chat_LLM\n        - openai_api_key: {key}\n        - temperature: 0\n        - max_tokens: 4096\n        - model_name: "gpt-3.5-turbo"\n    - prompt_template_type: Zero_Shot_Prompt_Template\n        - prompt_template: "you are a useful assistant.\\n question: {text}"\n- Outport: "I\'m LinguFlow."\n'})}),"\n",(0,s.jsx)(n.h3,{id:"invoke-category",children:"Invoke Category"}),"\n",(0,s.jsx)(n.h4,{id:"text_invoke",children:"Text_Invoke"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Invokes another LinguFlow application, transferring ",(0,s.jsx)(n.code,{children:"text"})," type content to it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app_id"}),": Enter the ID of the LinguFlow application you wish to invoke."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"timeout"}),": Invocation timeout in seconds."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "who are you?"\n- Parameters:\n    - app_id: {id}\n    - timeout: 300\n- Outport: "I\'m LinguFlow."\n'})}),"\n",(0,s.jsx)(n.h4,{id:"list_invoke",children:"List_Invoke"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Invokes another LinguFlow application, transferring ",(0,s.jsx)(n.code,{children:"list"})," type content to it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app_id"}),": Enter the ID of the LinguFlow application you wish to invoke."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"timeout"}),": Invocation timeout in seconds."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: ["hi", "Hello, can I help you?", "who are you?"]\n- Parameters:\n    - app_id: {id}\n    - timeout: 300\n- Outport: "I\'m LinguFlow."\n'})}),"\n",(0,s.jsx)(n.h4,{id:"dict_invoke",children:"Dict_Invoke"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Invokes another LinguFlow application, transferring ",(0,s.jsx)(n.code,{children:"dict"})," type content to it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"dict"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app_id"}),": Enter the ID of the LinguFlow application you wish to invoke."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"timeout"}),": Invocation timeout in seconds."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: {"key_1": "value_1", "key_2": "value_2"}\n- Parameters:\n    - app_id: {id}\n    - timeout: 300\n- Outport: "value_3"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"tools-category",children:"Tools Category"}),"\n",(0,s.jsx)(n.h4,{id:"google_search",children:"Google_Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Queries results using the Google search engine."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inport"}),": ",(0,s.jsx)(n.code,{children:"text"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outport"}),": ",(0,s.jsx)(n.code,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"search_engine_id"}),": Enter your ",(0,s.jsx)(n.a,{href:"https://developers.google.com/custom-search/v1/introduction",children:"Programmable Search Engine ID"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"key"}),": Enter your ",(0,s.jsx)(n.a,{href:"https://developers.google.com/custom-search/v1/introduction",children:"API Key"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"top_k"}),": Specify the number of results to retrieve."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'- Inport: "who are you?"\n- Parameters:\n    - search_engine_id: {id}\n    - key: {key}\n    - top_k: 2\n- Outport: ["I\'m LinguFlow.", "I\'m LinguFlow."]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);