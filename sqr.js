$(function(){
    $("#wresult").hide();
    $("#lresult").hide();
    $("#dupli").hide();
})

function Duplicate(a,b,c,d,e,f,g,h,i){
  
}

$('#myform').submit(function (e) { 
  e.preventDefault();
  
  a = $("#sq1").val();
  b = $("#sq2").val();
  c = $("#sq3").val();
  d = $("#sq4").val();
  e = $("#sq5").val();
  f = $("#sq6").val();
  g = $("#sq7").val();
  h = $("#sq8").val();
  i = $("#sq9").val();
  var sum=false;
  var r1 = Number(a)+Number(b)+Number(c);
  var r2 = Number(d)+Number(e)+Number(f);
  var r3 = Number(g)+Number(h)+Number(i);
  var c1 = Number(a)+Number(d)+Number(g);
  var c2 = Number(b)+Number(e)+Number(h);
  var c3 = Number(c)+Number(f)+Number(i);
  var d1 = Number(a)+Number(e)+Number(i);
  var d2 = Number(c)+Number(e)+Number(g);
  if(
    r1==r2 &&
    r2==r3 &&
    r3==c1 &&
    c1==c2 &&
    c2==c3 &&
    c3==d1 &&
    d1==d2
  ){
    sum= true;
  }
  var dupli=false;
  if(a==b || a==c || a==d || a==e || a==f || a==g || a==h || a==i){
    $("#dupli").show();
  }
  else if(b==c || b==d || b==e || b==f || b==g || b==h || b==i){
    $("#dupli").show();
  }
  else if(c==d || c==e || c==f || c==g || c==h ||c==i){
    $("#dupli").show();
  }
  else if(d==e || d==f || d==g || d==h ||d==i){
    $("#dupli").show();
  }
  else if(e==f || e==g || e==h ||e==i){
    $("#dupli").show();
  }
  else if(f==g || f==h ||f==i){
    $("#dupli").show();
  }
  else if(g==h ||g==i){
    $("#dupli").show();
  }
  else if(h==i){
    $("#dupli").show();
  }
  else{
    $("#dupli").hide();
    dupli=true
  }

  console.log(sum)
  if(dupli==true){
    if(sum==true){
      $("#lresult").hide();
      $("#wresult").show();
    }else{
      $("#lresult").show();
      $("#wresult").hide();
    }
  }else{
    $("#dupli").show();
    $("#wresult").hide();
    $("#lresult").hide();
  }
  
})
