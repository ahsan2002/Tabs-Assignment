var tab0=document.getElementById("tab-0");
var con0=document.getElementById("tabc-0");
con0.style.display="block";
tab0.style.borderBottom="3px solid white";
var tab1=document.getElementById("tab-1");
var con1=document.getElementById("tabc-1");
var tab2=document.getElementById("tab-2");
var con2=document.getElementById("tabc-2");
var m=document.getElementById("modal");

function tabchange(val){
    // console.log(val);
    if (val==0) {
        con0.style.display="block";
        tab0.style.borderBottom="3px solid white";
        con0.style.animation="ani 2s";
        con1.style.display="none";
        con2.style.display="none";
        tab1.style.borderBottom="none";
        tab2.style.borderBottom="none";
    }

    if (val==1) {
        con0.style.display="none";
        con1.style.display="block";
        tab1.style.borderBottom="3px solid white";
        con1.style.animation="ani 2s";
        tab0.style.borderBottom="none";
        tab2.style.borderBottom="none";
        con2.style.display="none";
    }
    if (val==2) {
        con0.style.display="none";
        con1.style.display="none";
        tab0.style.borderBottom="none";
        tab1.style.borderBottom="none";
        con2.style.display="block";
        tab2.style.borderBottom="3px solid white";
        con2.style.animation="ani 2s";
    }

}

function modalchange() {
    m.style.display="block";
}

function close() {
    m.style.display="none";
}