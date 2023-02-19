const express = require ('express')
const app = express()


app.get('/', function(req, res){
    console.log("Running on ")
    res.json({"name":"Finch Station","uri":"finch_station","stops":[{"agency":"Toronto Transit Commission","uri":"finch_station_bishop_entrance","name":"Finch Station Bishop Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_bus_bay","name":"Finch Station Bus Bay","routes":[{"route_group_id":"32","uri":"36_finch_west","name":"36 Finch West","stop_times":[{"service_id":3,"departure_time":"8:37a","departure_timestamp":1676795829,"shape":"36B Finch West To Humberwood"},{"service_id":3,"departure_time":"8:45a","departure_timestamp":1676796309,"shape":"36B Finch West To Humberwood"},{"service_id":3,"departure_time":"8:53a","departure_timestamp":1676796789,"shape":"36B Finch West To Humberwood"},{"service_id":1,"departure_time":"6:01a","departure_timestamp":1676872869,"shape":"36D Finch West To Weston Road And Milvan"},{"service_id":1,"departure_time":"6:17a","departure_timestamp":1676873829,"shape":"36D Finch West To Weston Road And Milvan"},{"service_id":1,"departure_time":"6:19a","departure_timestamp":1676873949,"shape":"36A Finch West To Kipling"},{"service_id":1,"departure_time":"6:25a","departure_timestamp":1676874309,"shape":"36C Finch West To Jane"},{"service_id":1,"departure_time":"6:27a","departure_timestamp":1676874429,"shape":"36A Finch West To Kipling"},{"service_id":1,"departure_time":"6:33a","departure_timestamp":1676874789,"shape":"36D Finch West To Weston Road And Milvan"},{"service_id":1,"departure_time":"6:35a","departure_timestamp":1676874909,"shape":"36A Finch West To Kipling"},{"service_id":1,"departure_time":"6:41a","departure_timestamp":1676875269,"shape":"36C Finch West To Jane"},{"service_id":1,"departure_time":"6:57a","departure_timestamp":1676876229,"shape":"36C Finch West To Jane"}]},{"route_group_id":"35","uri":"39_finch_east","name":"39 Finch East","stop_times":[{"service_id":3,"departure_time":"8:39a","departure_timestamp":1676795994,"shape":"39D Finch East To Neilson"},{"service_id":3,"departure_time":"8:45a","departure_timestamp":1676796339,"shape":"39D Finch East To Neilson"},{"service_id":3,"departure_time":"8:51a","departure_timestamp":1676796684,"shape":"39D Finch East To Neilson"},{"service_id":1,"departure_time":"5:36a","departure_timestamp":1676871369,"shape":"39E Finch East To Neilson Express"},{"service_id":1,"departure_time":"5:50a","departure_timestamp":1676872209,"shape":"39E Finch East To Neilson Express"},{"service_id":1,"departure_time":"6:04a","departure_timestamp":1676873049,"shape":"39E Finch East To Neilson Express"},{"service_id":1,"departure_time":"6:44a","departure_timestamp":1676875449,"shape":"39F Finch East To Seneca College"},{"service_id":1,"departure_time":"6:51a","departure_timestamp":1676875869,"shape":"39F Finch East To Seneca College"},{"service_id":1,"departure_time":"6:58a","departure_timestamp":1676876289,"shape":"39F Finch East To Seneca College"}]},{"route_group_id":"38","uri":"42_cummer","name":"42 Cummer","stop_times":[{"service_id":3,"departure_time":"8:40a","departure_timestamp":1676796009,"shape":"42A Cummer To Middlefield"},{"service_id":3,"departure_time":"9:00a","departure_timestamp":1676797209,"shape":"42A Cummer To Middlefield"},{"service_id":3,"departure_time":"9:20a","departure_timestamp":1676798409,"shape":"42A Cummer To Middlefield"},{"service_id":1,"departure_time":"6:07a","departure_timestamp":1676873229,"shape":"42B Cummer To Kennedy"},{"service_id":1,"departure_time":"6:25a","departure_timestamp":1676874309,"shape":"42B Cummer To Kennedy"},{"service_id":1,"departure_time":"6:43a","departure_timestamp":1676875389,"shape":"42B Cummer To Kennedy"},{"service_id":1,"departure_time":"6:51a","departure_timestamp":1676875869,"shape":"42 Cummer To Victoria Park"},{"service_id":1,"departure_time":"7:00a","departure_timestamp":1676876409,"shape":"42 Cummer To Victoria Park"},{"service_id":1,"departure_time":"7:09a","departure_timestamp":1676876949,"shape":"42 Cummer To Victoria Park"}]},{"route_group_id":"49","uri":"53_steeles_east","name":"53 Steeles East","stop_times":[{"service_id":3,"departure_time":"8:40a","departure_timestamp":1676796009,"shape":"53A Steeles East To Middlefield"},{"service_id":3,"departure_time":"8:51a","departure_timestamp":1676796669,"shape":"53B Steeles East To Markham Road"},{"service_id":3,"departure_time":"9:02a","departure_timestamp":1676797329,"shape":"53A Steeles East To Middlefield"},{"service_id":3,"departure_time":"9:13a","departure_timestamp":1676797989,"shape":"53B Steeles East To Markham Road"},{"service_id":3,"departure_time":"9:24a","departure_timestamp":1676798649,"shape":"53A Steeles East To Middlefield"},{"service_id":3,"departure_time":"9:35a","departure_timestamp":1676799309,"shape":"53B Steeles East To Markham Road"},{"service_id":1,"departure_time":"5:15a","departure_timestamp":1676870109,"shape":"53 Steeles East To Pharmacy (Morning Peak)"},{"service_id":1,"departure_time":"5:27a","departure_timestamp":1676870829,"shape":"53 Steeles East To Pharmacy (Morning Peak)"},{"service_id":1,"departure_time":"5:39a","departure_timestamp":1676871549,"shape":"53 Steeles East To Pharmacy (Morning Peak)"},{"service_id":1,"departure_time":"6:38a","departure_timestamp":1676875089,"shape":"53F Steeles East To Staines"},{"service_id":1,"departure_time":"7:00a","departure_timestamp":1676876409,"shape":"53E Steeles East To Markham Road Express"},{"service_id":1,"departure_time":"7:04a","departure_timestamp":1676876679,"shape":"53E Steeles East To Markham Road Express"},{"service_id":1,"departure_time":"7:05a","departure_timestamp":1676876709,"shape":"53F Steeles East To Staines"},{"service_id":1,"departure_time":"7:09a","departure_timestamp":1676876949,"shape":"53E Steeles East To Markham Road Express"},{"service_id":1,"departure_time":"7:32a","departure_timestamp":1676878329,"shape":"53F Steeles East To Staines"},{"service_id":1,"departure_time":"3:04p","departure_timestamp":1676905449,"shape":"53 Steeles East To Pharmacy (Afternoon Peak)"},{"service_id":1,"departure_time":"3:13p","departure_timestamp":1676906019,"shape":"53 Steeles East To Pharmacy (Afternoon Peak)"},{"service_id":1,"departure_time":"3:23p","departure_timestamp":1676906589,"shape":"53 Steeles East To Pharmacy (Afternoon Peak)"}]},{"route_group_id":"56","uri":"60_steeles_west","name":"60 Steeles West","stop_times":[{"service_id":3,"departure_time":"8:40a","departure_timestamp":1676796009,"shape":"60B Steeles West To Martin Grove"},{"service_id":3,"departure_time":"8:55a","departure_timestamp":1676796909,"shape":"60B Steeles West To Martin Grove"},{"service_id":3,"departure_time":"9:10a","departure_timestamp":1676797809,"shape":"60B Steeles West To Martin Grove"},{"service_id":3,"departure_time":"9:27a","departure_timestamp":1676798829,"shape":"60C Steeles West To York University"},{"service_id":3,"departure_time":"9:42a","departure_timestamp":1676799729,"shape":"60C Steeles West To York University"},{"service_id":3,"departure_time":"9:57a","departure_timestamp":1676800629,"shape":"60C Steeles West To York University"},{"service_id":1,"departure_time":"5:23a","departure_timestamp":1676870589,"shape":"60D Steeles West To Highway 27"},{"service_id":1,"departure_time":"5:30a","departure_timestamp":1676871039,"shape":"60D Steeles West To Highway 27"},{"service_id":1,"departure_time":"5:38a","departure_timestamp":1676871489,"shape":"60D Steeles West To Highway 27"},{"service_id":1,"departure_time":"6:00a","departure_timestamp":1676872809,"shape":"60E Steeles West To Highway 27"},{"service_id":1,"departure_time":"6:12a","departure_timestamp":1676873529,"shape":"60E Steeles West To Highway 27"},{"service_id":1,"departure_time":"6:24a","departure_timestamp":1676874249,"shape":"60E Steeles West To Highway 27"},{"service_id":1,"departure_time":"7:03a","departure_timestamp":1676876589,"shape":"60F Steeles West To York University"},{"service_id":1,"departure_time":"7:09a","departure_timestamp":1676876969,"shape":"60F Steeles West To York University"},{"service_id":1,"departure_time":"7:15a","departure_timestamp":1676877349,"shape":"60F Steeles West To York University"}]},{"route_group_id":"92","uri":"97_yonge","name":"97 Yonge","stop_times":[{"service_id":3,"departure_time":"9:31a","departure_timestamp":1676799084,"shape":"97 Yonge To Steeles"},{"service_id":3,"departure_time":"10:01a","departure_timestamp":1676800884,"shape":"97 Yonge To Steeles"},{"service_id":3,"departure_time":"10:31a","departure_timestamp":1676802684,"shape":"97 Yonge To Steeles"},{"service_id":1,"departure_time":"7:35a","departure_timestamp":1676878510,"shape":"97B Yonge To Steeles (morning)"},{"service_id":1,"departure_time":"8:05a","departure_timestamp":1676880310,"shape":"97B Yonge To Steeles (morning)"},{"service_id":1,"departure_time":"8:35a","departure_timestamp":1676882110,"shape":"97B Yonge To Steeles (morning)"},{"service_id":1,"departure_time":"10:30a","departure_timestamp":1676889012,"shape":"97C Yonge To Steeles"},{"service_id":1,"departure_time":"11:00a","departure_timestamp":1676890812,"shape":"97C Yonge To Steeles"},{"service_id":1,"departure_time":"11:30a","departure_timestamp":1676892612,"shape":"97C Yonge To Steeles"},{"service_id":1,"departure_time":"3:58p","departure_timestamp":1676908706,"shape":"97B Yonge To Steeles (afternoon)"},{"service_id":1,"departure_time":"4:28p","departure_timestamp":1676910506,"shape":"97B Yonge To Steeles (afternoon)"},{"service_id":1,"departure_time":"4:58p","departure_timestamp":1676912306,"shape":"97B Yonge To Steeles (afternoon)"}]},{"route_group_id":"116","uri":"125_drewry","name":"125 Drewry","stop_times":[{"service_id":3,"departure_time":"9:00a","departure_timestamp":1676797209,"shape":"125 Drewry To Bathurst Torresdale"},{"service_id":3,"departure_time":"9:30a","departure_timestamp":1676799009,"shape":"125 Drewry To Bathurst Torresdale"},{"service_id":3,"departure_time":"10:00a","departure_timestamp":1676800809,"shape":"125 Drewry To Bathurst Torresdale"}]},{"route_group_id":"152","uri":"308_finch_east","name":"308 Finch East","stop_times":[{"service_id":1,"departure_time":"2:00a","departure_timestamp":1676858409,"shape":"308 Finch East To Markham Road"},{"service_id":1,"departure_time":"2:30a","departure_timestamp":1676860209,"shape":"308 Finch East To Markham Road"},{"service_id":1,"departure_time":"3:00a","departure_timestamp":1676862009,"shape":"308 Finch East To Markham Road"}]},{"route_group_id":"153","uri":"309_finch_west","name":"309 Finch West","stop_times":[{"service_id":1,"departure_time":"2:00a","departure_timestamp":1676858409,"shape":"309 Finch West To Woodbine Racetrack"},{"service_id":1,"departure_time":"2:30a","departure_timestamp":1676860209,"shape":"309 Finch West To Woodbine Racetrack"},{"service_id":1,"departure_time":"3:00a","departure_timestamp":1676862009,"shape":"309 Finch West To Woodbine Racetrack"}]}]},{"agency":"Toronto Transit Commission","uri":"finch_station_concourse","name":"Finch Station Concourse","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_elevator_entrance","name":"Finch Station Elevator Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_go_hallway","name":"Finch Station GO Hallway","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_mezzanine","name":"Finch Station Mezzanine","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_northeast_entrance","name":"Finch Station Northeast Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_northwest_entrance","name":"Finch Station Northwest Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_passenger_pick_up","name":"Finch Station Passenger Pick Up","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_passenger_pick_up_mezzanine","name":"Finch Station Passenger Pick Up Mezzanine","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_pemberton_entrance","name":"Finch Station Pemberton Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_subway_platform","name":"Finch Station Subway Platform","routes":[{"route_group_id":"1","uri":"yonge-university-spadina_subway","name":"Yonge-University-Spadina Subway","stop_times":[{"service_id":3,"departure_time":"9:00a","departure_timestamp":1676797209,"shape":"Yonge-University-Spadina Subway To Downsview Station"},{"service_id":3,"departure_time":"9:05a","departure_timestamp":1676797501,"shape":"Yonge-University-Spadina Subway To Downsview Station"},{"service_id":3,"departure_time":"9:09a","departure_timestamp":1676797793,"shape":"Yonge-University-Spadina Subway To Downsview Station"}]}]},{"agency":"Toronto Transit Commission","uri":"finch_station_yonge_east_entrance","name":"Finch Station Yonge East Entrance","routes":[]},{"agency":"Toronto Transit Commission","uri":"finch_station_yonge_west_entrance","name":"Finch Station Yonge West Entrance","routes":[]}],"time":1676795715})
})

const server = app.listen(8000, function(){
    const host = server.address().address
    const port = server.address().port
})

console.log("Running on ...http://127.0.0.1:8000/")