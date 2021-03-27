var apiKey = '45ca7cd4dcdb816c2160f720a0fd0c58';

        document.addEventListener('DOMContentLoaded', bindButtons);
        document.addEventListener('DOMContentLoaded', bindButtons2)

        function bindButtons(){
            function buttonMash(event){
                var req = new XMLHttpRequest();
                var country = document.getElementById("countryCode").value;
                var zip = document.getElementById("zipCode").value;
                var city = document.getElementById("city").value;
                if (event.target.id === "zipSubmit") {
                    var address = "zip=" + zip + "," + country;
                }
                else {
                    city.replace(/\s/g, '+')
                    var address = "q=" + city + "," + country;
                }
                req.open("GET", "http://api.openweathermap.org/data/2.5/weather?" + address + "&units=imperial&appid=" + apiKey, true);
                req.addEventListener('load', function(){
                    if (req.status >= 200 && req.status < 400){
                        console.log("Success")
                        var response = JSON.parse(req.responseText);
                        document.getElementById("location").textContent = response.name;
                        document.getElementById("temp").textContent = response.main.temp;
                        document.getElementById("humid").textContent = response.main.humidity;
                        document.getElementById("type").textContent = response.weather[0].description;
                    } else {
                        console.log("Error in network request: " + req.statusText);
                    }
                });
                req.send(null);
                console.log("request response not here yet...")
                event.preventDefault();
            }

            document.getElementById('zipSubmit').addEventListener('click', buttonMash);
            document.getElementById('citySubmit').addEventListener('click', buttonMash);
            
        }

        function bindButtons2 () {
            document.getElementById('msgSubmit').addEventListener('click', function (event) {
                var req = new XMLHttpRequest();
                var payload = document.getElementById('message').value;
                req.open('POST', 'http://httpbin.org/post', true);
                req.setRequestHeader('content-type', 'application/json');
                req.addEventListener('load', function(){
                    if (req.status >= 200 && req.status < 400){
                        var response = JSON.parse(req.responseText);
                        document.getElementById("returned").textContent = response.data
                    } else {
                        console.log("Error in network request: " + req.statusText);
                    }});
                req.send(JSON.stringify(payload));
                event.preventDefault();
            });
        }