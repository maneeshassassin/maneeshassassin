fetch("https://covid-19-statistics.p.rapidapi.com/regions", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "62398f5e88msh09244384177ce9dp1ebcafjsn71ded50ecddd"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});