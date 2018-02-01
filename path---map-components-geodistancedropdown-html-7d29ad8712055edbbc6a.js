webpackJsonp([0xaa93a75d3ff3],{468:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/SidQoYY.png" alt="Image to be displayed"></p>\n<p><code>GeoDistanceDropdown</code> creates a location search based dropdown UI component that is connected to a database field. It is used for distance based filtering.</p>\n<p>Example uses:</p>\n<ul>\n<li>finding restaurants in walking distance from your location.</li>\n<li>discovering things to do near a landmark.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceDropdown\n  componentId<span class="token operator">=</span><span class="token string">"LocationUI"</span>\n  dataField<span class="token operator">=</span><span class="token string">"location"</span>\n  data<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 20 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 50 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 100 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceDropdown\n  componentId<span class="token operator">=</span><span class="token string">"locationUI"</span>\n  dataField<span class="token operator">=</span><span class="token string">"location"</span>\n  title<span class="token operator">=</span><span class="token string">"Location Dropdown Selector"</span>\n  data<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 20 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 50 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"&lt; 100 miles"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n  defaultSelected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    location<span class="token punctuation">:</span> <span class="token string">"SOMA, San Francisco"</span>\n    label<span class="token punctuation">:</span> <span class="token string">"&lt; 20 miles"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  placeholder<span class="token operator">=</span><span class="token string">"Select a distance range.."</span>\n  unit<span class="token operator">=</span><span class="token string">"mi"</span>\n  autoLocation<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  showFilter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"Location"</span>\n  URLParams<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view.</li>\n<li><strong>data</strong> <code>Object Array</code><br>\ncollection of UI <code>labels</code> with associated <code>start</code> and <code>end</code> range values.</li>\n<li><strong>title</strong> <code>String or HTML</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>defaultSelected</strong> <code>Object</code> [optional]<br>\npre-select values of the search query with <code>label</code> and <code>location</code> keys.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nset the placeholder to show in the location search box, useful when no option is <code>defaultSelected</code>.</li>\n<li><strong>unit</strong> <code>String</code> [optional]<br>\nunit for distance measurement, uses <code>mi</code> (for miles) by default. Distance units can be specified from the following:<br>\n<img src="https://i.imgur.com/STbeagk.png" alt="screenshot"></li>\n<li><strong>autoLocation</strong> <code>Boolean</code> [optional]<br>\nwhen enabled, preset the user’s current location in the location search box. Defaults to <code>true</code>.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value from the dropdown. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n</ul>\n<h2 id="syntax"><a href="#syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax</h2>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'GeoDistanceDropdown docs example\' src=\'//codepen.io/sids-aquarius/embed/OjqLjY/?height=500&theme-id=light&default-tab=js&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/OjqLjY/\'>GeoDistanceDropdown docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h3 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h3>\n<p>All reactivebase and reactivemaps components are <code>rbc</code> namespaced.</p>\n<p><img src="https://i.imgur.com/St1dgTz.png" alt="Annotated image"></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>GeoDistanceDropdown</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code> and <code>onQueryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>GeoDistanceDropdown\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token comment">// query in the format of Elasticsearch Query DSL</span>\n        geo_distance<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          distance<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>end <span class="token operator">-</span> value<span class="token punctuation">.</span>start<span class="token punctuation">)</span>\n                    <span class="token operator">+</span> value<span class="token punctuation">.</span>unit<span class="token punctuation">,</span>\n          location_dataField<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            lat<span class="token punctuation">:</span> value<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n            lon<span class="token punctuation">:</span> value<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS styles to be applied to the <strong>GeoDistanceDropdown</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code><br>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>GeoDistanceDropdown</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called every time before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called every time the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example:  You want to show a pop-up modal with the valid discount coupon code when a user searches within a specific location area.</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'GeoDistanceDropdown docs example\' src=\'//codepen.io/sids-aquarius/embed/OjqLjY/?height=500&theme-id=light&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/OjqLjY/\'>GeoDistanceDropdown docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<ol>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Geo%20Distance%20Slider&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22location%22%3A%22London%22%2C%22distance%22%3A5%7D&#x26;knob-rangeLabels=%7B%22start%22%3A%22Start%22%2C%22end%22%3A%22End%22%7D&#x26;knob-range=%7B%22start%22%3A0%2C%22end%22%3A50%7D&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=true&#x26;knob-showFilter=true&#x26;knob-stepValue=1&#x26;knob-autoLocation=true&#x26;knob-unit=mi&#x26;knob-placeholder=Search%20Location&#x26;selectedKind=map%2FGeoDistanceDropdown&#x26;selectedStory=Basic&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">GeoDistance dropdown with all the default props</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Geo%20Distance%20Slider&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22location%22%3A%22London%22%2C%22distance%22%3A5%7D&#x26;knob-rangeLabels=%7B%22start%22%3A%22Start%22%2C%22end%22%3A%22End%22%7D&#x26;knob-range=%7B%22start%22%3A0%2C%22end%22%3A50%7D&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=true&#x26;knob-showFilter=true&#x26;knob-stepValue=1&#x26;knob-autoLocation=true&#x26;knob-unit=mi&#x26;knob-placeholder=Search%20Location&#x26;selectedKind=map%2FGeoDistanceDropdown&#x26;selectedStory=With%20Title&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">GeoDistance dropdown with a title</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Geo%20Distance%20Slider&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22label%22%3A%22Less%20than%20100%20miles%22%2C%22location%22%3A%22London%22%7D&#x26;knob-rangeLabels=%7B%22start%22%3A%22Start%22%2C%22end%22%3A%22End%22%7D&#x26;knob-range=%7B%22start%22%3A0%2C%22end%22%3A50%7D&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=true&#x26;knob-showFilter=true&#x26;knob-stepValue=1&#x26;knob-autoLocation=true&#x26;knob-unit=mi&#x26;knob-placeholder=Search%20Location&#x26;selectedKind=map%2FGeoDistanceDropdown&#x26;selectedStory=With%20Default%20Selected&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">GeoDistance dropdown with a defaultSelected value</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Geo%20Distance%20Slider&#x26;knob-URLParams%20%28not%20visible%20in%20storybook%29=true&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22label%22%3A%22Less%20than%20100%20miles%22%2C%22location%22%3A%22London%22%7D&#x26;knob-rangeLabels=%7B%22start%22%3A%22Start%22%2C%22end%22%3A%22End%22%7D&#x26;knob-range=%7B%22start%22%3A0%2C%22end%22%3A50%7D&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=true&#x26;knob-showFilter=true&#x26;knob-placeholderDropdown=Select%20radius&#x26;knob-stepValue=1&#x26;knob-autoLocation=true&#x26;knob-unit=mi&#x26;knob-placeholder=Search%20Location&#x26;selectedKind=map%2FGeoDistanceDropdown&#x26;selectedStory=Playground&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">Playground (with all knob actions)</a></p>\n</li>\n</ol>',frontmatter:{title:"GeoDistanceDropdown",next:"map-components/placessearch.html",prev:"map-components/geodistanceslider.html",nextTitle:"PlacesSearch",prevTitle:"GeoDistanceSlider"},fields:{path:"docs/map-components/GeoDistanceDropdown.md",slug:"map-components/geodistancedropdown.html"}}},pathContext:{slug:"map-components/geodistancedropdown.html"}}}});
//# sourceMappingURL=path---map-components-geodistancedropdown-html-7d29ad8712055edbbc6a.js.map