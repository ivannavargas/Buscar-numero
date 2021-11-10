let miarray1 = Array.from({length: 7},() => (""));
 
 miarray1.forEach(function(a){
 
   document.write(a);

let miarray = Array.from({length:5},
    () => Math.floor(Math.random() * 10));
 
 miarray.forEach(function(b){
 
   document.write(b+'&nbsp;');
});

document.write("<br>");

var results = miarray.filter(numero => numero == 1);
console.log(results);

});












