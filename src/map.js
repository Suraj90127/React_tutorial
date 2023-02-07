const arr = ["suraj", "singh", "gautam"];

const Sdata = arr.map(function(cvalue,i,arr){
    return i + ":" + cvalue;
    // return cvalue + "bhai";
});

console.log(Sdata);



<p id="root"></p>

document.getElementById("root").innerHTML=Sdata;