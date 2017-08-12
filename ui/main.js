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
                  for(var i=0;i<cmts.length;i++){
                      list+='<li>'+ cmts[i] +'</li>';
                  }
                  
                  var ul=document.getElementById('cmtlist1');
                  ul.innerHTML=list;
                          }
                  }
  
};


request.open('GET','http://avineeshcse.imad.hasura-app.io',true);
request.send(null);

};