let Total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');


const allCardSection=document.getElementById('allCards');

function calculateCount(){
    Total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
calculateCount();