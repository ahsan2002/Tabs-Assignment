var tab0=document.getElementById("tab-0");
var con0=document.getElementById("tabc-0");
con0.style.display="block";
var tab1=document.getElementById("tab-1");
var con1=document.getElementById("tabc-1");
var tab2=document.getElementById("tab-2");
var con2=document.getElementById("tabc-2");
var m=document.getElementById("modal");

function tabchange(val){
    // console.log(val);
    if (val==0) {
        con0.style.display="block";
        con1.style.display="none";
        con2.style.display="none";
        con3.style.display="none";
        con4.style.display="none";
    }

    if (val==1) {
        con0.style.display="none";
        con1.style.display="block";
        con2.style.display="none";
        con3.style.display="none";
        con4.style.display="none";
    }
    if (val==2) {
        con0.style.display="none";
        con1.style.display="none";
        con2.style.display="block";
        con3.style.display="none";
        con4.style.display="none";
    }

}

function modalchange() {
    m.style.display="block";
}