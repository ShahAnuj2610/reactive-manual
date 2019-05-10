webpackJsonp([74841069873382],{426:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://imgur.com/i9GNHTD.png" alt="Image to be displayed"></p>\n<p><code class="gatsby-code-text">ReactiveList</code> creates a data-driven result list UI component. This list can reactively update itself based on changes in other components or changes in the database itself.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a feed of results based on the applied search criteria.</li>\n<li>streaming realtime feed updates based on applied criteria like in a newsfeed.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings<span class="token punctuation">"</span></span>\n  <span class="token attr-name">stream</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">paginationAt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">pages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onResultStats</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> took<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"found "</span> <span class="token operator">+</span> total <span class="token operator">+</span> <span class="token string">" results in "</span> <span class="token operator">+</span> took <span class="token operator">+</span> <span class="token string">"ms."</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code class="gatsby-code-text">String</code><br>\nunique identifier of the component, can be referenced in other components’ <code class="gatsby-code-text">react</code> prop.</li>\n<li><strong>dataField</strong> <code class="gatsby-code-text">String</code><br>\ndata field to be connected to the component’s UI view. It is useful for providing a sorting context.</li>\n<li><strong>stream</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code class="gatsby-code-text">false</code>. <code class="gatsby-code-text">stream: true</code> is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like <em>2 New Tweets</em>)</li>\n<li><strong>pagination</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code class="gatsby-code-text">false</code>, i.e. an infinite scroll based view. When set to <code class="gatsby-code-text">true</code>, a pagination based list view with page numbers will appear.</li>\n<li><strong>paginationAt</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code class="gatsby-code-text">true</code>. Accepts one of <code class="gatsby-code-text">top</code>, <code class="gatsby-code-text">bottom</code> or <code class="gatsby-code-text">both</code> as valid values. Defaults to <code class="gatsby-code-text">bottom</code>.</li>\n<li><strong>pages</strong> <code class="gatsby-code-text">Number</code> [optional]<br>\nnumber of user selectable pages to be displayed when pagination is enabled. Defaults to 5.</li>\n<li><strong>sortBy</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nsort the results by either <code class="gatsby-code-text">asc</code> or <code class="gatsby-code-text">desc</code> order. It is an alternative to <code class="gatsby-code-text">sortOptions</code>, both can’t be used together.</li>\n<li><strong>size</strong> <code class="gatsby-code-text">Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 10.</li>\n<li><strong>showResultStats</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>onResultStats</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\nshow custom result stats using a function that takes two parameters for <code class="gatsby-code-text">time_taken</code> and <code class="gatsby-code-text">total_results</code> and returns a string.</li>\n<li><strong>react</strong> <code class="gatsby-code-text">Object</code> [optional]<br>\na dependency object defining how this component should react based on the state changes in the sensor components.</li>\n<li>\n<p><strong>onData</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\nreturns a list element object to be rendered based on the <code class="gatsby-code-text">res</code> data object. This callback function prop is called for each data item rendered in the <strong>ReactiveList</strong> component’s view. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">onData<span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>tilte<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li><strong>onAllData</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\nworks like <strong>onData</strong> prop but all the data objects are passed to the callback function.</li>\n<li><strong>innerProps</strong> <code class="gatsby-code-text">Object</code> [optional]<br>\nspecifies additional props for the internal components. Accepts an object with the specified keys. Read more about the usage <a href="/reactive-manual/native/advanced/innerprops.html">here</a></li>\n</ul>\n<br />\n<table>\n<thead>\n<tr>\n<th align="right"><strong>Key</strong></th>\n<th align="center"><strong>Explanation</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="right"><code class="gatsby-code-text">icon</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#icon-def-headref">Icon</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code class="gatsby-code-text">button</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#button-def-headref">Button</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code class="gatsby-code-text">spinner</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#Spinner">Spinner</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code class="gatsby-code-text">text</code></td>\n<td align="center"><a href="http://facebook.github.io/react-native/docs/text.html">Text</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p><a href="https://expo.io/@dhruvdutt/reactivelist-demo">Try the demo</a> instantly.</p>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code class="gatsby-code-text">ReactiveList</code> component supports <code class="gatsby-code-text">style</code> prop. Read more about it <a href="/reactive-manual/native/advanced/style.html">here</a>.</p>\n<p>It also supports an <code class="gatsby-code-text">innerStyle</code> prop with the following keys:</p>\n<ul>\n<li><code class="gatsby-code-text">label</code></li>\n<li><code class="gatsby-code-text">button</code></li>\n<li><code class="gatsby-code-text">icon</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/native/advanced/style.html#innerstyle">here</a></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code class="gatsby-code-text">ReactiveList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code class="gatsby-code-text">style</code>,</li>\n<li>render individual result data items using <code class="gatsby-code-text">onData</code>,</li>\n<li>render the entire result data using <code class="gatsby-code-text">onAllData</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">...</span>\n  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<ul>\n<li><strong>style</strong> <code class="gatsby-code-text">Object</code><br>\nCSS styles to be applied to the <strong>ReactiveList</strong> component.</li>\n<li><strong>onData</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\na callback function where user can define how to render the view based on the data changes.</li>\n<li><strong>onAllData</strong> <code class="gatsby-code-text">Function</code> [optional]<br>\nan alternative callback function to <code class="gatsby-code-text">onData</code>, where user can define how to render the view based on all the data changes. It accepts three parameters, <code class="gatsby-code-text">results</code>, <code class="gatsby-code-text">streamResults</code> and a <strong>callback</strong> function which should be called when the results reach the end (on scroll).</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">onAllData</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> streamReasults<span class="token punctuation">,</span> loadMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// return the list to render</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"ReactiveList",next:"components/reactivemap.html",prev:"components/daterange.html",nextTitle:"ReactiveMap",prevTitle:"DateRange"},fields:{path:"docs/components/ReactiveList.md",slug:"components/reactivelist.html"}}},pathContext:{slug:"components/reactivelist.html"}}}});
//# sourceMappingURL=path---components-reactivelist-html-7eb0ed3535e97c772777.js.map