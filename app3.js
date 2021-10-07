let exploreCaladan = prompt('Would you like to explore Caladan?');
console.log(exploreCaladan);

if(exploreCaladan == 'yes'){
    let url = "images/caladan_shoreline.jpg";
    document.write('<img id="caladan_shoreline" src="' + url + '">');
}