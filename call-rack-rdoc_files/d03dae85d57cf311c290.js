document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist/embed-926c753a79847cfe2c18ef7826ac3dc4b2c160e1e8bdc5d2b14384d8cc9eedaa.css">')
document.write('<div id=\"gist25117855\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-call_rack_rdoc-rb\" class=\"file\">\n    \n\n  <div class=\"blob-wrapper data type-ruby\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC1\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"># File lib/rack/sendfile.rb, line 112<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">call<\/span>(<span class=\"pl-smi\">env<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC5\" class=\"blob-code blob-code-inner js-file-line\">  status, headers, body <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">@app<\/span>.call(env)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC6\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> body.respond_to?(<span class=\"pl-c1\">:to_path<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">case<\/span> type <span class=\"pl-k\">=<\/span> variation(env)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">when<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>X-Accel-Redirect<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC9\" class=\"blob-code blob-code-inner js-file-line\">      path <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">F<\/span>.expand_path(body.to_path)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC10\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">if<\/span> url <span class=\"pl-k\">=<\/span> map_accel_path(env, path)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC11\" class=\"blob-code blob-code-inner js-file-line\">        headers[<span class=\"pl-c1\">CONTENT_LENGTH<\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>0<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC12\" class=\"blob-code blob-code-inner js-file-line\">        headers[type] <span class=\"pl-k\">=<\/span> url<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC13\" class=\"blob-code blob-code-inner js-file-line\">        obody <span class=\"pl-k\">=<\/span> body<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC14\" class=\"blob-code blob-code-inner js-file-line\">        body <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">Rack<\/span>::<span class=\"pl-c1\">BodyProxy<\/span>.<span class=\"pl-k\">new<\/span>([]) <span class=\"pl-k\">do<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC15\" class=\"blob-code blob-code-inner js-file-line\">          obody.close <span class=\"pl-k\">if<\/span> obody.respond_to?(<span class=\"pl-c1\">:close<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC16\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC17\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">else<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC18\" class=\"blob-code blob-code-inner js-file-line\">        env[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>rack.errors<span class=\"pl-pds\">&#39;<\/span><\/span>].puts <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>X-Accel-Mapping header missing<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC19\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">when<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>X-Sendfile<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>X-Lighttpd-Send-File<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC21\" class=\"blob-code blob-code-inner js-file-line\">      path <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">F<\/span>.expand_path(body.to_path)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC22\" class=\"blob-code blob-code-inner js-file-line\">      headers[<span class=\"pl-c1\">CONTENT_LENGTH<\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>0<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC23\" class=\"blob-code blob-code-inner js-file-line\">      headers[type] <span class=\"pl-k\">=<\/span> path<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC24\" class=\"blob-code blob-code-inner js-file-line\">      obody <span class=\"pl-k\">=<\/span> body<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC25\" class=\"blob-code blob-code-inner js-file-line\">      body <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">Rack<\/span>::<span class=\"pl-c1\">BodyProxy<\/span>.<span class=\"pl-k\">new<\/span>([]) <span class=\"pl-k\">do<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC26\" class=\"blob-code blob-code-inner js-file-line\">        obody.close <span class=\"pl-k\">if<\/span> obody.respond_to?(<span class=\"pl-c1\">:close<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC27\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">when<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-c1\">nil<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">else<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC30\" class=\"blob-code blob-code-inner js-file-line\">      env[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>rack.errors<span class=\"pl-pds\">&#39;<\/span><\/span>].puts <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Unknown x-sendfile variation: &#39;<span class=\"pl-pse\">#{<\/span><span class=\"pl-s1\">type<\/span><span class=\"pl-pse\"><span class=\"pl-s1\">}<\/span><\/span>&#39;.<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC32\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC33\" class=\"blob-code blob-code-inner js-file-line\">  [status, headers, body]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">end<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-call_rack_rdoc-rb-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-call_rack_rdoc-rb-LC35\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DouglasAllen/d03dae85d57cf311c290/raw/f70e7b51909c8ffb1eaa124b49ff8223ccc7971e/call_rack_rdoc.rb\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DouglasAllen/d03dae85d57cf311c290#file-call_rack_rdoc-rb\">call_rack_rdoc.rb<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
