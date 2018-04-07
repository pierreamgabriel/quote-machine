function getQuotes()
{
    var myarray= new Array(
      "Love yourself. It is important to stay positive because beauty comes from the inside out.",
      "Stay positive and happy. Work hard and don't give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.",
      "Your positive action combined with positive thinking results in success.",
      "Once you replace negative thoughts with positive ones, you'll start having positive results.",
      "I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors.",
      "Your smile will give you a positive countenance that will make people feel comfortable around you.",
      "Your smile will give you a positive countenance that will make people feel comfortable around you.",
      "Positive thinking will let you do everything better than negative thinking will.",
      "Believe that life is worth living and your belief will help create the fact.",
      "Be true to yourself and surround yourself with positive, supportive people."
    );
 //Add html elements to the beggining and end of the quotes. 
  for (var i=0; i < myarray.length; i++){
    myarray[i] = '<i class="fa fa-quote-left" aria-hidden="true"></i> ' + myarray[i] + ' <i class="fa fa-quote-right" aria-hidden="true"></i>' ;
  }
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

//Randomly change the color of the page and text
function myFun(){
            var randcol= "";
            var allchar="0123456789ABCDEF";
            for(var i=0; i<6; i++){
               randcol += allchar[Math.floor(Math.random()*16)];

            }
             document.body.style.backgroundColor= "#"+randcol;
  document.getElementById("message").style.color="#"+randcol;  

            }
           
//Tweet button
function tweetIt () {
  var phrase = document.getElementById('message').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '&url=' +
    '';
    
  window.open(tweetUrl);
}

//Change title color according to backround-color
function changetitlecolor() {
  if (document.body.style.backgroundColor== "#ffffff"){
document.getElementById("title").style.color="#000000";
document.getElementById("message").style.color="#000000";
document.getElementById("copyright").style.color="#000000";
} 
}