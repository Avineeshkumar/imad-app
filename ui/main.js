var button=document.getElementById('counter');

button.onclick=function(){
    
  var request= new XMLHttpRequest();
  
  
  request.onreadystatechange=function(){
      if(request.readyState === XMLHttpRequest.DONE){ 
          
          if(request.status === 200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
  }
  
};


request.open('GET','http://avineeshcse.imad.hasura-app.io/counter',true);
request.send(null);
};


var submit=document.getElementById('sbt_btn');
submit.onclick=function(){
      var request= new XMLHttpRequest();
  
  
  request.onreadystatechange=function(){
      if(request.readyState === XMLHttpRequest.DONE){ 
          
          if(request.status === 200){
                var names=request.responseText;
                names=JSON.parse(names);
                  var list='';
                  for(var i=0;i<names.length;i++){
                      list+='<li>'+ names[i] +'</li>';
                  }
                  
                  var ul=document.getElementById('namelist');
                  ul.innerHTML=list;
                          }
                  }
  
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
request.open('GET','http://avineeshcse.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);

};

var cmtInput=document.getElementById('comments1');
var cmt=cmtInput.value;
var sbt=document.getElementById('sbt1');
sbt.onclick=function(){
      var request= new XMLHttpRequest();
  
  
  request.onreadystatechange=function(){
      if(request.readyState === XMLHttpRequest.DONE){ 
          
          if(request.status === 200){
                var cmts=request.responseText;
                cmts=JSON.parse(cmts);
                  var list='';
                  for(var i=0;i<names.length;i++){
                      list+='<li>'+ names[i] +'</li>';
                  }
                  
                  var ul=document.getElementById('cmtlist1');
                  ul.innerHTML=list;
                          }
                  }
  
};


request.open('GET','http://avineeshcse.imad.hasura-app.io/article-one',true);
request.send(null);

};