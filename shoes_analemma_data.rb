# analemma_data.rb
Shoes.setup do
  gem 'eot'
end
require 'eoy'
eot = Equation_of_Time.new()
start = "2012-1-1"
start_date = Date.parse(start).jd
finish = "2012-12-31"
finish_date = Date.parse(finish).jd

window do
  stack do
    para "Today is " + Date.today.to_s
    para "Start Date = #{start}"
    para "Finish Date = #{finish}"
    para "Date\t\t Delta Time\t\t Declination Degrees"
    for jd in start_date..finish_date    
      date = Date.jd(jd).to_s
      timejc = eot.time_julian_centurey(jd)    
      equation_of_time = eot.equation_of_time(timejc)    
      degrees_declination = eot.declination(timejc)
      delta_t = eot.display_equation_of_time(equation_of_time)
      declination = eot.display_degrees(degrees_declination)
      para "#{date}\t  #{delta_t}\t  #{declination}"
    end
  end
end
