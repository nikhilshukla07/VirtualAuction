teamList=[];
playerList=[];
var level=0;


const delay = ms => new Promise(res => setTimeout(res, ms));
var sec=document.querySelector(".time").innerHTML;
const timer=async()=>
{
    while(sec>="0")
    {
        await delay(950);
        document.querySelector(".time").innerHTML=sec;
        sec--;   
    }
    if(sec=="0")
    {
        updateLeaderboard();
        level++;
        if(level!=playerList.length)
        {
            startNextLevel(level);
        }
    }
}

function addEventBid(){
    var bid=document.querySelectorAll(".bidding");
    for(var i=0;i<bid.length;i++){
        bid[i].addEventListener("click",function bid(event)
        {
            if(sec!=0)
            {
                sec="10";
                console.log(event);
            }
        }
        ); 
    }
}

function player(name,price,path)
{
    this.name=name;
    this.price=price;
    this.sold="0";
    this.teamname="";
    this.imagepath=path;
}

function team(name,money="10000")
{
    this.name=name;
    this.money=money;
    this.players=[];
}

document.querySelector(".addTeam").addEventListener("click",addTeam);
function addTeam(){
    if(teamList.length==5)
    {
        alert("MAX 5 Teams allowed");
        return;
    }
    var name=document.querySelector(".teamName").value;
    document.querySelector(".teamName").value="";
    if(name=="")
    {
        alert("name Cannot be empty");
        return;
    }
    var obj=new team(name);
    teamList.push(obj);
  
    
    var tr=document.createElement("tr");
    var th=document.createElement("th");
    th.scope="row";
    th.innerHTML=teamList.length;
    var tdname=document.createElement("td");
    tdname.innerHTML=name;
    var tdmoney=document.createElement("td");
    tdmoney.innerHTML="$10000";
    tr.appendChild(th);
    tr.appendChild(tdname);
    tr.appendChild(tdmoney);
    document.querySelector(".teamlist").append(tr);
}

document.querySelector(".start").addEventListener("click",start);
function start(){
    if(teamList.length==0)
    {
        alert("Teams cannot be empty");
        return;
    }
    document.querySelector(".addTeams").style.display="none";
    document.querySelector(".mainDiv").style.display="flex";
    
// making players 
    var obj1=new player("dhoni",30000,"images\1.jpg");
    var obj2=new player("sachin",20000,"images\2.jpg");
    var obj3=new player("virat",35000,"images\3.jpg");
    var obj4=new player("yuvraj",20000,"images\4.jpg");
    var obj5=new player("rohit",40000,"images\5.jpg");
    playerList.push(obj1);
    playerList.push(obj2);
    playerList.push(obj3);
    playerList.push(obj4);
    playerList.push(obj5);
//         <button type="button" class="btn btn-success bidding" value="-1">Bid dummy</button>
               
    var bidButtons=document.querySelector(".bidButtons");
    for(var i=0;i<teamList.length;i++)
    {
      
     
        var btn= document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-success");
        btn.classList.add("bidding");
        
        btn.value=i;
        btn.innerText=teamList[i].name;
        bidButtons.appendChild(btn);
      
    }
    startNextLevel(0);
}

function startNextLevel(curLevel){
    timer();
    addEventBid();
    leaderboard=[];
  //  updateLeaderboard();
}