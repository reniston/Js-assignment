console.log("It is Working");
const name=["Reni","bala","Sabari"];
const mathsMarks=[10,20,30];
const csMarks=[40,50,60];

const personObj={
    name:"Reni",
    mathsMark:10,
    csMark:40
}
console.table(personObj);
console.log(personObj.name);
console.log(personObj.csMark);

// student - name,regNo,list of courses
 const student={
     
     name:"reni",
     regNo:121015084,
     list:["bio","maths"]
 }
 console.log(student);
 console.table(student.list)
 console.log(student.list[0]);

 const stud=[
    { 
     name:"reni",
     regNo:40,
     list:["bio","maths","che"]
    },
    { 
        name:"rox",
        regNo:41,
        list:["bio","maths","che"]
       },
    
       { 
        name:"raju",
        regNo:33,
        list:["bio","maths","che"]
       }
 ]
console.log(stud);
console.table(stud);
console.log(stud[0]);

const studDiv=document.getElementById("students")



for(var i=0;i<stud.length;i++)
{   
   const mainDiv=document.createElement('div');
   mainDiv.classList.add('card');
   mainDiv.classList.add('mt-3');
   const naEle=document.createElement('h2');
   const rNo=document.createElement('h2');
   naEle.innerText=stud[i].name;
   rNo.innerText=stud[i].regNo;
   mainDiv.appendChild(naEle);
   mainDiv.appendChild(rNo);
   studDiv.appendChild(mainDiv);
   const cou=stud[i].list; 
   
   const ulEle=document.createElement('ul');
   for(var j=0;j<cou.length;j++)
   {
       const liEle=document.createElement('li');
       liEle.textContent=cou[j];
       ulEle.appendChild(liEle);
   }
   mainDiv.appendChild(ulEle);
     
    
}

//Counter
var count=0;
var addButton=document.getElementById('add');
var subButton=document.getElementById('sub');
var countEle=document.getElementById('counter')
var typeEle=document.getElementById('type');



addButton.addEventListener('click',function(){
    count++;
    countEle.innerText=count;
    update();

});
subButton.addEventListener('click',function(){
    if(count<=0){
        return;
    }
    count--;
    countEle.innerText=count;
    update();
    
});

function update(){
    if(count%2==0)
    {
        typeEle.innerText="It is even"

    }
    else{
        typeEle.innerText="It is odd"

    }
}

