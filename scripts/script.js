let Total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');


const allCardSection=document.getElementById('allCards');
const mainContainer=document.getElementById('mainContainer');
const filteredSection=document.getElementById('filteredSection');

const allFilterBtn=document.getElementById('All-filter-btn');
const interviewFilterBtn=document.getElementById('Interview-filter-btn');
const rejectedFilterBtn=document.getElementById('Rejected-filter-btn');

let interviewList=[];
let rejectedList=[];
let currentStatus='all';

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

    if(id == 'Interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();

    }
    else if(id == 'All-filter-btn' ){
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }else if(id == 'Rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interviewBtn')){
        const parentNode=event.target.parentNode.parentNode;
        const jobName=parentNode.querySelector('.jobName').innerText;
        const position=parentNode.querySelector('.position').innerText;
        const salary=parentNode.querySelector('.salary').innerText;
        const status=parentNode.querySelector('.status').innerText;
        const description=parentNode.querySelector('.description').innerText;

    parentNode.querySelector('.status').innerText="Interview";
    const cardInfo={
        jobName,
        position,
        salary,
        status:'Interview',
        description
    }
    const jobExist=interviewList.find(item => item.jobName == cardInfo.jobName);
    

    if(!jobExist){
        interviewList.push(cardInfo);
    }
    rejectedList=rejectedList.filter(item => item.jobName != cardInfo.jobName);

    if(currentStatus == 'Rejected-filter-btn'){
        renderRejected();
    }


    calculateCount();
    renderInterview();
    
    }
    else if(event.target.classList.contains('rejectedBtn')){
        const parentNode=event.target.parentNode.parentNode;
        const jobName=parentNode.querySelector('.jobName').innerText;
        const position=parentNode.querySelector('.position').innerText;
        const salary=parentNode.querySelector('.salary').innerText;
        const status=parentNode.querySelector('.status').innerText;
        const description=parentNode.querySelector('.description').innerText;

    parentNode.querySelector('.status').innerText="Rejected";
    const cardInfo={
        jobName,
        position,
        salary,
        status:'Rejected',
        description
    }
    const jobExist=rejectedList.find(item => item.jobName == cardInfo.jobName);
    

    if(!jobExist){
        rejectedList.push(cardInfo);
    }

    interviewList=interviewList.filter(item => item.jobName != cardInfo.jobName);
    if(currentStatus == 'Interview-filter-btn'){
        renderInterview();
    }

    calculateCount();
    
    }
    else if(event.target.classList.contains('Interview-filter-btn')){
        if(interviewList.length==0){
            let div=document.createElement('div');
        div.className='class="w-[80%] mx-auto"'
        div.innerHTML=`
         
                <div class="flex flex-col justify-center items-center space-y-3 p-[60px] bg-amber-50">
            <div>
            <img src="./assignment_7959593 1.png" alt="">
            </div>
            <p class="font-bold text-blue-950">No jobs available</p>
            <p class="text-[14px] text-gray-500">Check back soon for new job opportunities</p>
        </div>
            `
            filteredSection.appendChild(div);
            filteredSection.classList.remove('hidden');
        }
    }
});


function renderInterview(){
    filteredSection.innerHTML='';

    for(let interview of interviewList){
        
        let div=document.createElement('div');
        div.className='flex justify-between bg-amber-50 p-5 mb-5'
        div.innerHTML=`
         
                <div class="space-y-2">
                    <h1 class="jobName font-bold text-blue-950">${interview.jobName}</h1>
                    <p class="position text-[15px] text-gray-500">${interview.position}</p>
                    <p class="salary text-[14px] text-gray-500">${interview.salary}</p>
                    <p class="status bg-[#EEF4FF] max-w-[113px] p-1 rounded-[10%]">${interview.status}</p>
                    <p class="description text-[14px] text-gray-500">${interview.description}</p>

                    <div class="flex gap-2">
                        <button class=" border border-green-500 text-green-500 p-1">INTERVIEW</button>
                        <button class="border border-red-500 text-red-500 p-1">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button><i class="fa-regular fa-trash-can"></i></button>
                </div>
            `
            filteredSection.appendChild(div);
    }
}


function renderRejected(){
    filteredSection.innerHTML='';

    for(let reject of rejectedList){
        
        let div=document.createElement('div');
        div.className='flex justify-between bg-amber-50 p-5 mb-5'
        div.innerHTML=`
         
                <div class="space-y-2">
                    <h1 class="jobName font-bold text-blue-950">${reject.jobName}</h1>
                    <p class="position text-[15px] text-gray-500">${reject.position}</p>
                    <p class="salary text-[14px] text-gray-500">${reject.salary}</p>
                    <p class="status bg-[#EEF4FF] max-w-[113px] p-1 rounded-[10%]">${reject.status}</p>
                    <p class="description text-[14px] text-gray-500">${reject.description}</p>

                    <div class="flex gap-2">
                        <button class=" border border-green-500 text-green-500 p-1">INTERVIEW</button>
                        <button class="border border-red-500 text-red-500 p-1">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button><i class="fa-regular fa-trash-can"></i></button>
                </div>
            `
            filteredSection.appendChild(div);
    }
}
