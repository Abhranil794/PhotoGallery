
var n = document.querySelectorAll("img").length;

for(i=0;i<n;i++){
    document.querySelectorAll("img")[i].addEventListener("click",function(){
        console.log(this.className);
        document.getElementById("demo").innerHTML=`<img src="photos/${this.className}.jpg" width="650" height="400">`;
    });
}
