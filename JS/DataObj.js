     //#region 1
        
            //dayOfWeek('2023-06-02');
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date().toISOString().slice(0, 10);  
            console.log(currentDate);
            dayOfWeek(currentDate);

            function dayOfWeek(date){                
                const d=new Date(date);// initialize Date object             
                let day=d.getDay(d);
                console.log(daysOfWeek[day]);

            }