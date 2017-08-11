var button=document.getElementById('counter');

button.onclick=function(){
    
  var request= new XMLHttpRequest();
  
  
  request.onreadystatechange=function(){
      if(onreadystatechange === XMLHttpRequest.Done){ 
          
          if(request.status === 200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
  }
  
};


request.open('GET','http://avineeshcse.imad.hasura-app.io/counter');
request.send(null);
};