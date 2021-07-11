let result = [];
fetch("../data.json")
.then(response => response.json())
.then(jobAds => {
    for(const jobAd of jobAds) {
        result.push(jobAd)
    }
})
.catch(error => error);

            
console.log(result.toString())
for(const job of result) {
    console.log(job);   
}