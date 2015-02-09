require 'sinatra'

get '/' do
  require 'equation_of_time'
  eot = Equation_of_Time.new()
  @start = "2012-1-1"
  @start_date = Date.parse(@start).jd
  @finish = "2012-12-31"
  @finish_date = Date.parse(@finish).jd
  data = []
  for jd in @start_date..@finish_date   
    date = Date.jd(jd).to_s
    timejc = eot.time_julian_centurey(jd)    
    equation_of_time = eot.equation_of_time(timejc)    
    degrees_declination = eot.declination(timejc)
    delta_t = eot.display_equation_of_time(equation_of_time)
    declination = eot.display_degrees(degrees_declination)
    ds = (date + " " + delta_t + " " + declination).split
    data << "<p>" + ds.join(' / ') + "</p>"
  end
  ds = data.join()
     
     "<html>
       <body>
         <p><b>Analemma Data for</b></p>
         <p>Start date = #@start = #@start_date</p>
         <p>Finish date = #@finish = #@finish_date</p>
         <p>Date / Delta / Declination</p>
         #{ds}

       </body>
     </html>"       
     

end
