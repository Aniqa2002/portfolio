var tablinks =document.getElementByclassName("tab-links");
var tabcontents =document.getElementByclassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
       tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
       tabcontent.classList.remove("active-tab");
    }
}