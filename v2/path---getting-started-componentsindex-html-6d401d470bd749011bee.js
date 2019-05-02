webpackJsonp([0xd25c9a408a35],{471:function(e,t){e.exports={data:{markdownRemark:{html:'<p><strong>ReactiveSearch</strong> provides React UI components for Elasticsearch. This document explains the different kinds of components offered by the library and walks throughs scenarios of when to use which component.</p>\n<p>Components are divided into four broad categories:  </p>\n<ol>\n<li><code>List components</code> represent all kinds of list related UI components which typically create a term query.</li>\n<li><code>Range components</code> represent all kinds of numbers and dates related UI components which typically create a range based query.</li>\n<li><code>Search components</code> represent searchbar UIs, which typically apply search on full-text data.</li>\n<li><code>Result components</code> are components for displaying results (aka hits) from queries created by other components.</li>\n</ol>\n<p>Besides these four specific categories, we also have <code>Base components</code> that are useful primitives and components that don’t belong to any of the above categories.</p>\n<h2 id="1-list-components"><a href="#1-list-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. List Components</h2>\n<p>List is one of the most used data-driven UI displays and hence naturally, we offer a variety of ways to use this UI style.</p>\n<h4 id="string-or-text-datatype"><a href="#string-or-text-datatype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String or Text Datatype</h4>\n<p>The following are all the possible UI components for a <code>Text</code> or <code>String</code> datatype field in your appbase.io app. These apply a <strong>term</strong> or <strong>terms</strong> database query on the selected item(s).</p>\n<p>The components can also be used with <code>Numeric</code> datatype fields.</p>\n<p>\n<img src="https://imgur.com/a1be47e.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/singledropdownlist.html">SingleDropdownList</a></strong> displays a dropdown list UI where only one item can be selected at a time. It is similar to SingleList but is presented in a dropdown format to save space.</p>\n</p>\n<br>\n<p>\n<img src="https://imgur.com/UVymwfo.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/multidropdownlist.html">MultiDropdownList</a></strong> displays a dropdown list UI where multiple items can be selected at a time. It is similar to MultiList.</p>\n</p>\n<br>\n<blockquote>\n<p>When to use dropdown lists</p>\n<p>Dropdown lists take up less space. If you have many filters to display or a smaller display area (like on phones), it is better to use dropdown lists.</p>\n</blockquote>\n<h2 id="2-range-components"><a href="#2-range-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Range Components</h2>\n<p>The following are all the possible UI components for a numeric datatype field in your appbase.io app. These apply a <strong>range</strong> database query on the selected item(s).</p>\n<p>\n<img src="https://imgur.com/2xxBIUg.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/singledropdownrange.html">SingleDropdownRange</a></strong> displays a dropdown list UI where only one item can be selected at a time. Each item in this dropdown list represents a range, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<p>\n<img src="https://imgur.com/MrTth88.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/multidropdownrange.html">MultiDropdownRange</a></strong> displays a dropdown list UI where only multiple items can be selected at a time. Each item in this dropdown list represents a range, specified in the <strong>data</strong> prop of the component.</p>\n</p>\n<h3 id="datepicker-and-daterange"><a href="#datepicker-and-daterange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DatePicker and DateRange</h3>\n<p>\n<img src="https://imgur.com/rJsL0mK.png" style="float:left"><img src="https://imgur.com/7dKLsNO.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/datepicker.html">DatePicker</a></strong> and <strong><a href="/reactive-manual/native/components/daterange.html">DateRange</a></strong> components are useful for showing selectable date fields. They apply to Date datatype field, and internally apply a date range query on the database.</p>\n</p>\n<h2 id="3-search-components"><a href="#3-search-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Search Components</h2>\n<p>The following are UI components that represent searchbar UIs. The datatype for the <code>dataField</code> in these components should be a <code>Text</code> (or <code>String</code>) or <code>Keyword</code>, along with custom analyzer (like ngrams) based mappings defined in sub-fields.</p>\n<h3 id="datasearch"><a href="#datasearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DataSearch</h3>\n<p>\n<img src="https://imgur.com/kbnVVkZ.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/datasearch.html">DataSearch</a></strong> displays a search input box. It supports autosuggestions, highlighting of results and querying against more than one fields via props.</p>\n</p>\n<blockquote>\n<p><i class="fa fa-info-circle"></i> Note</p>\n<p>If you are looking to apply a query on a user input, <strong>DataSearch</strong> is preferable over <strong>TextField</strong>.</p>\n</blockquote>\n<h2 id="4-result-components"><a href="#4-result-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Result Components</h2>\n<p>Result components are used for displaying the results (aka hits).</p>\n<blockquote>\n<p>How do result components fetch results by combining queries from multiple components?</p>\n<p>They do this via <a href="/reactive-manual/native/advanced/react.html"><strong>react</strong></a> prop, which allows each component to specify their dependent components using a DSL that mirrors Elasticsearch’s compound query DSL for bool clause.</p>\n</blockquote>\n<h3 id="reactivelist"><a href="#reactivelist" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveList</h3>\n<p>\n<img src="https://imgur.com/PCBwK7t.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/reactivelist.html">ReactiveList</a></strong> displays the results in a configurable list layout.</p>\n</p>\n<h2 id="5-base-components"><a href="#5-base-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Base Components</h2>\n<h3 id="textfield"><a href="#textfield" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TextField</h3>\n<p>\n<img src="https://imgur.com/PgOi2QY.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/components/textfield.html">TextField</a></strong> displays a text input field. It applies a <strong>match</strong> database query on the entered text.</p>\n</p>\n<h3 id="reactivecomponent"><a href="#reactivecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveComponent</h3>\n<p>\n<img src="https://imgur.com/QgjzJv5.png" style="float:left"></p>\n<p><strong><a href="/reactive-manual/native/advanced/reactivecomponent.html">ReactiveComponent</a></strong> is a wrapper component that allows you to connect custom component(s) (passed as children) with the Reactivesearch ecosystem, e.g. if we are building an e-commerce store where we have a react component called <code>ColorPicker</code> which renders the <code>colors</code> passed to it as tiles, allowing us to filter the products by their colors.</p>\n</p>',frontmatter:{title:"Components Overview",next:"components/textfield.html",prev:"getting-started/reactivebase.html",nextTitle:"TextField",prevTitle:"Base Component"},fields:{path:"getting-started/ComponentsIndex.md",slug:"getting-started/componentsindex.html"}}},pathContext:{slug:"getting-started/componentsindex.html"}}}});
//# sourceMappingURL=path---getting-started-componentsindex-html-6d401d470bd749011bee.js.map