 //set target date
        const targetdate = new Date("september 27, 2025 00:00:00").getTime();

        function updatecountdown(){
            const now = new Date().getTime();
            const distance = targetdate - now;

            if (distance<= 0){
                document.getElementById("countdown").innerHTML="panchami aagomoni";
                clearInterval(timer);
                return;
            }
            const days = Math.floor(distance/(1000*60*60*24));
            const hours= Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds = Math.floor((distance % (1000 * 60))/1000);

            document.getElementById("countdown").innerHTML=
            days +"d"+hours+"h"+minutes+"m"+seconds+"s";
        }
        const timer= setInterval(updatecountdown,1000)
        updatecountdown();//initial call