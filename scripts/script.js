let Total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');


const allCardSection=document.getElementById('allCards');

const allFilterBtn=document.getElementById('All-filter-btn');
const interviewFilterBtn=document.getElementById('Interview-filter-btn');
const rejectedFilterBtn=document.getElementById('Rejected-filter-btn');


function calculateCount(){
    Total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
calculateCount();

function toggoleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400','text-white');
    interviewFilterBtn.classList.remove('bg-blue-400','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-400','text-white');

    allFilterBtn.classList.add('bg-amber-50','text-gray-500');
    interviewFilterBtn.classList.add('bg-amber-50','text-gray-500');
    rejectedFilterBtn.classList.add('bg-amber-50','text-gray-500');

    const selectedBtn=document.getElementById(id);
    currentStatus=id;

    selectedBtn.classList.add('bg-blue-400','text-white');

}