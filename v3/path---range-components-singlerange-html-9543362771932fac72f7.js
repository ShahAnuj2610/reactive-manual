webpackJsonp([27034966348728],{493:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/d6u5asg.png" alt="Image to be displayed"></p>\n<p><code class="gatsby-code-text">SingleRange</code> creates a numeric range selector UI component that is connected to a database field.</p>\n<blockquote>\n<p>Note</p>\n<p>It is similar to a <a href="/reactive-manual/v3/basic-components/singlelist.html">SingleList</a>, except it is suited for numeric data.</p>\n</blockquote>\n<p>Example uses:</p>\n<ul>\n<li>filtering search results by prices in an e-commerce or food delivery experience.</li>\n<li>browsing a movies listing site using a ratings filter.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleRange</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PriceSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span>\n  <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Prices<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleRange</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PriceSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span>\n  <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Prices<span class="token punctuation">"</span></span>\n  <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cheap<span class="token punctuation">"</span></span>\n  <span class="token attr-name">showRadio</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showFilter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">filterLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Price<span class="token punctuation">"</span></span>\n  <span class="token attr-name">URLParams</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code class="gatsby-code-text">String</code><br>\nunique identifier of the component, can be referenced in other components’ <code class="gatsby-code-text">react</code> prop.</li>\n<li><strong>dataField</strong> <code class="gatsby-code-text">String</code><br>\ndata field to be connected to the component’s UI view. The range items are filtered by a database query on this field.</li>\n<li><strong>data</strong> <code class="gatsby-code-text">Object Array</code><br>\ncollection of UI <code class="gatsby-code-text">labels</code> with associated <code class="gatsby-code-text">start</code> and <code class="gatsby-code-text">end</code> range values.</li>\n<li><strong>title</strong> <code class="gatsby-code-text">String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>defaultValue</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nselect initial item from the data array on mount. </li>\n<li><strong>value</strong> <code class="gatsby-code-text">String</code> [optional]<br>\ncontrols the current value of the component. It selects the item from the data (on mount and on update). Use this prop in conjunction with <code class="gatsby-code-text">onChange</code> function.</li>\n<li><strong>onChange</strong> <code class="gatsby-code-text">function</code> [optional]<br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called when you are using the <code class="gatsby-code-text">value</code> props and the component’s value changes. This prop is used to implement the <a href="https://reactjs.org/docs/forms.html#controlled-components">controlled component</a> behavior.</li>\n<li><strong>showRadio</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow radio button icon for each range item. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>showFilter</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow the selected item as a filter in the selected filters view. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>filterLabel</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code class="gatsby-code-text">showFilter</code> is enabled. Default value used here is <code class="gatsby-code-text">componentId</code>.</li>\n<li><strong>URLParams</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the range. This is useful for sharing URLs with the component state. Defaults to <code class="gatsby-code-text">false</code>.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/SingleRange" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code class="gatsby-code-text">SingleRange</code> component supports <code class="gatsby-code-text">innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code class="gatsby-code-text">title</code></li>\n<li><code class="gatsby-code-text">list</code></li>\n<li><code class="gatsby-code-text">radio</code></li>\n<li><code class="gatsby-code-text">label</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/v3/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code class="gatsby-code-text">SingleRange</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code class="gatsby-code-text">className</code>, <code class="gatsby-code-text">style</code>,</li>\n<li>update the underlying DB query with <code class="gatsby-code-text">customQuery</code>,</li>\n<li>connect with external interfaces using <code class="gatsby-code-text">beforeValueChange</code>, <code class="gatsby-code-text">onValueChange</code> and <code class="gatsby-code-text">onQueryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>SingleRange\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code class="gatsby-code-text">String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code class="gatsby-code-text">Object</code>\nCSS styles to be applied to the <strong>SingleRange</strong> component.</li>\n<li><strong>customQuery</strong> <code class="gatsby-code-text">Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code class="gatsby-code-text">Note:</code> customQuery is called on value changes in the <strong>SingleRange</strong> component as long as the component is a part of <code class="gatsby-code-text">react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a range item is selected in a “Prices” SingleRange.</li>\n<li><strong>onQueryChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Range%20components%2FSingleRange" target="_blank">SingleRange with default props</a></p>',frontmatter:{title:"SingleRange",next:"range-components/multirange.html",prev:"list-components/multidatalist.html",nextTitle:"MultiRange",prevTitle:"List Components: MultiDataList"},fields:{path:"docs/range-components/SingleRange",slug:"range-components/singlerange.html"}}},pathContext:{slug:"range-components/singlerange.html"}}}});
//# sourceMappingURL=path---range-components-singlerange-html-9543362771932fac72f7.js.map