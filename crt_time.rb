# windows version

require 'ffi'
 
module CPUTime
  extend FFI::Library
  ffi_lib FFI::Library::LIBC
  attach_function :_strtime, [ :pointer ], :string
end
 
tbuffer = ""
puts CPUTime._strtime(tbuffer) 

# https://github.com/ffi/ffi
