import React from 'react'

function ListItem({flight_number,mission_name,launch_date_utc,rocket:{rocket_name}}) {

    // GET YEAR, MONTH, DAY
    let newDate = launch_date_utc;
    let myYear = new Date(newDate).getFullYear();
    let myMonth = new Date(newDate).getMonth();
    let myDay = new Date(newDate).getDate();
    const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}
    myDay += nth(myDay);


    let months = ['Jan', 'Feb', 'Mar', 'April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    let month = months[myMonth] || '';
      
   
    return (
        <div className='rocket-container'>
            <div className='flight-container'>

            <h2>#{flight_number}</h2>
         

            <h3>{mission_name}</h3>
            </div>
            <div className='date-container'>
                <div className='date-name-box'>

                <p>{myDay} {month} {myYear}</p>
                 <h4>{rocket_name}</h4>
                </div>
               
            </div>
        </div>
    )
}

export default ListItem
