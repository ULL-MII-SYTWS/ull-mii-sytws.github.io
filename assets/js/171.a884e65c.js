(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{816:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"how-do-i-define-as-an-alias-of-the-root-of-the-project-in-next-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-define-as-an-alias-of-the-root-of-the-project-in-next-js"}},[t._v("#")]),t._v(" How do I define "),e("code",[t._v("@")]),t._v(" as an alias of the root of the project in Next.js?")]),t._v(" "),e("p",[t._v("To define "),e("code",[t._v("@")]),t._v(" as an alias for the root directory in a Next.js project, you can configure it in your "),e("strong",[t._v("Next.js project's "),e("code",[t._v("jsconfig.json")])]),t._v(" or "),e("strong",[e("code",[t._v("tsconfig.json")])]),t._v(" file, depending on whether you are using JavaScript or TypeScript.\nSee section "),e("em",[e("a",{attrs:{href:"https://nextjs.org/docs/app/getting-started/installation#set-up-absolute-imports-and-module-path-aliases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set up Absolute Imports and Module Path Aliases"),e("OutboundLink")],1)]),t._v(" of the Next.js documentation for more information.\nHere’s how to set it up:")]),t._v(" "),e("h3",{attrs:{id:"_1-add-alias-in-jsconfig-json-or-tsconfig-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-alias-in-jsconfig-json-or-tsconfig-json"}},[t._v("#")]),t._v(" 1. Add "),e("code",[t._v("@")]),t._v(" Alias in "),e("code",[t._v("jsconfig.json")]),t._v(" or "),e("code",[t._v("tsconfig.json")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create or open your "),e("code",[t._v("jsconfig.json")]),t._v(" or "),e("code",[t._v("tsconfig.json")]),t._v(" file in the root of your Next.js project.")])]),t._v(" "),e("li",[e("p",[t._v("Add the "),e("code",[t._v("baseUrl")]),t._v(" and "),e("code",[t._v("paths")]),t._v(" properties to define the alias.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@/*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("Here’s what each part does:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"baseUrl": "."')]),t._v(" sets the base directory for absolute imports to the root.")]),t._v(" "),e("li",[e("code",[t._v('"@/*": ["./*"]')]),t._v(" maps "),e("code",[t._v("@/")]),t._v(" to the root directory ("),e("code",[t._v("./")]),t._v("), so you can use "),e("code",[t._v("@/path/to/file")]),t._v(" to access any file from the project root.")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-import-files-using-the-alias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-files-using-the-alias"}},[t._v("#")]),t._v(" 2. Import Files Using the "),e("code",[t._v("@")]),t._v(" Alias")]),t._v(" "),e("p",[t._v("Now, you can import files relative to the project root by using "),e("code",[t._v("@")]),t._v(" as the alias. For example:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Component "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Component'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" helperFunction "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/helper'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-restart-the-development-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-restart-the-development-server"}},[t._v("#")]),t._v(" 3. Restart the Development Server")]),t._v(" "),e("p",[t._v("After setting up the alias, restart your development server to apply the changes.")]),t._v(" "),e("h3",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("ul",[e("li",[t._v("This configuration will work for both JavaScript and TypeScript in Next.js.")]),t._v(" "),e("li",[t._v("Make sure to install the appropriate ESLint or VSCode settings if you want autocompletion or linting support for the "),e("code",[t._v("@")]),t._v(" alias.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);