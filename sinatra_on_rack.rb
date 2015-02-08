require 'sinatra'
before do
  content_type :txt
end
get '/' do
  "is this a get request?" + request.get?.inspect + "\n"
end
get '/new' do
  request = Rack::Request.new(env)
  request.env.inspect
end
get '/env' do
  request.env.map { |e| e.to_s + "\n" }
end
=begin
This application will iterate over all the values in the @env variable and display them as
output.
$ curl http://localhost:4567/
["GATEWAY_INTERFACE", "CGI/1.1"]
["PATH_INFO", "/"]
["QUERY_STRING", ""]
["REMOTE_ADDR", "127.0.0.1"]
["REMOTE_HOST", "localhost"]
["REQUEST_METHOD", "GET"]
["REQUEST_URI", "http://localhost:9393/"]
["SCRIPT_NAME", ""]
["SERVER_NAME", "localhost"]
["SERVER_PORT", "9393"]
["SERVER_PROTOCOL", "HTTP/1.1"]
["SERVER_SOFTWARE", "WEBrick/1.3.1 (Ruby/1.9.2/2011-07-09)"]
["HTTP_USER_AGENT", "curl/7.19.7 (universal-apple-darwin10.0)"]
["HTTP_HOST", "localhost:9393"]
["HTTP_ACCEPT", "*/*"]
["rack.version", [1, 1]]
["rack.input", #<Rack::Lint::InputWrapper:0x0000010327f368 @input=#<StringIO:0x000001009c8500>>]
["rack.errors", #<Rack::Lint::ErrorWrapper:0x0000010327f2f0 @error=#<IO:<STDERR>>>]
["rack.multithread", true]
["rack.multiprocess", false]
["rack.run_once", false]
["rack.url_scheme", "http"]
["HTTP_VERSION", "HTTP/1.1"]
["REQUEST_PATH", "/"]
["rack.request.query_string", ""]
["rack.request.query_hash", {}]
=end
