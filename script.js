// Logo visability and CSS container top value //
$(window).resize(function() {
 if ($(window).width() > 600 && $(window).width() < 1100) {
    document.getElementById("CSS-container").style.top = -1* ($(window).width()*0.55 - 600) + "px";
    document.getElementById("JS-container").style.top = -1* ($(window).width()*0.55 - 600) + "px";
    document.getElementById("line").style.marginTop = -1* ($(window).width()*0.55 - 600) + "px";

    var otherSkillsWidth = $("#other-skills").width();
    document.getElementById("me").style.width = otherSkillsWidth + "px";
    document.getElementById("soft-skills").style.width = otherSkillsWidth + "px";
    document.getElementById("experience").style.width = otherSkillsWidth + "px";

 }
 else if ($(window).width() <= 700 && ($(window).width() > 550)) {
  document.getElementById("CSS-container").style.height = ($(window).width()*1.6) + "px";
 }

});

$(window).resize(function() {
 if ($(window).width() < 680) {
    document.getElementById("motto").style.filter = "opacity(0%)";
 }
else {
   document.getElementById("motto").style.filter = "opacity(100%)";
}
});

function Start() {
  if ($(window).width() < 680) {
     document.getElementById("motto").style.filter = "opacity(0%)";
  }
  else if ($(window).width() > 600 && $(window).width() < 1100) {
    document.getElementById("CSS-container").style.top = -1* ($(window).width()*0.55 - 600) + "px";
    document.getElementById("JS-container").style.top = -1* ($(window).width()*0.55 - 600) + "px";
    document.getElementById("line").style.marginTop = -1* ($(window).width()*0.55 - 600) + "px";
  }
  else if ($(window).width() <= 700 && ($(window).width() > 550)) {
   document.getElementById("CSS-container").style.height = ($(window).width()*1.6) + "px";
  }
 else {
    document.getElementById("motto").style.filter = "opacity(100%)";
 }

// Logo visability and CSS container top value - end //

// Introduction disappear animation */

 function Disappear(){

 let mainMenu = document.getElementById('bg');
 let mainNav = document.getElementById('main-nav')
 mainNav.style.opacity = 0;

 window.addEventListener('scroll', function(){
   let value = 1 + window.scrollY/ -600;
   mainMenu.style.opacity = value;
   let positiveValue = -1*(window.scrollY / -200);
   mainNav.style.opacity = positiveValue;

 })
 var otherSkillsWidth = $("#other-skills").width();
 document.getElementById("me").style.width = otherSkillsWidth + "px";
 document.getElementById("soft-skills").style.width = otherSkillsWidth + "px";
 document.getElementById("experience").style.width = otherSkillsWidth + "px";
 }
 Disappear()
 // Introduction disappear animation - end //
};

window.onload = Start;

// Loading screen //

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

// Loading screen - end //

 // Click to scroll to top //
$(document).ready(function(){

 $(window).scroll(function(){
  var showAfter = 150;
  if ($(this).scrollTop() > showAfter ) {
   $('#scrollup').slideDown();
  } else {
   $('#scrollup').slideUp();
  }
 });



 $('#scrollup').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
 });
 $('#first-skill').click(function(){
  $('html, body').animate({scrollTop: "+=650px"},800);
  return false;
 });
 $('#second-skill').click(function(){
  if ($(window).width() <= 755) {
    $('html, body').animate({scrollTop: "+=3400px"},800);
  } else if ($(window).width() > 755 && $(window).width() <= 950) {
    $('html, body').animate({scrollTop: "+=2900px"},800);
  } else {
    $('html, body').animate({scrollTop: "+=2850px"},800);
  };
  console.log($(window).width());
  return false;
 });
 $('#third-skill').click(function(){
  $('html, body').animate({scrollTop: "+=4000px"},800);
  return false;
 });
 $('#third-skill-2').click(function(){
  $('html, body').animate({scrollTop: "+=4000px"},800);
  return false;
 });

});


function AboutMeContentP1 (){
  document.getElementById("About-me-content-p1").style.marginBottom = "50px";
  document.getElementById("About-me-content-p1").innerHTML = "<ul><li>Znajomość podstaw SQL,</li> <li>Podstawy PHP,</li> <li>Podstawy GIT,</li> <li>Znajomość stosowania technik RWD,</li> <li>Znajomość jQuery,</li></ul>";
  document.getElementById("About-me-content-p2").style.marginBottom = "50px";
  document.getElementById("About-me-content-p2").innerHTML = "<ul><li>Dobra znajomość Wordpress, Prestashop,</li> <li>Wiedza z zakresu SEO,</li> <li>Znajomość Photoshop, Lightroom,</li></ul>";
  document.getElementById("About-me-content-p3").innerHTML = "<ul><li>Dobra znajomość Excel&nbsp;i&nbsp;arkuszy Google,</li> <li>Dobra znajomość Trello i&nbsp;podobnych platform organizacyjnych,</li> <li>Język angielski – certyfikat b.2</li></ul>"
  document.getElementById("other-skills").style.background = "#566F96";
  document.getElementById("about-me-content").style.lineHeight = "23px";
  document.getElementById("soft-skills").style.background = "#3A4B66";
  document.getElementById("me").style.background = "#3A4B66";
  document.getElementById("experience").style.background = "#3A4B66";
  if ($(window).width() <= 585) {
    document.getElementById("other-skills").style.display = "none";
    document.getElementById("soft-skills").style.display = "none";
    document.getElementById("me").style.display = "none";
    document.getElementById("experience").style.display = "none";
    closeNav()
  }
};
function AboutMeContentP2 (){
  document.getElementById("About-me-content-p1").innerHTML = "<ul><li>Umiejętność pracy pod presją czasu,</li><li>Umiejętności analityczne,</li></ul>";
  document.getElementById("About-me-content-p2").innerHTML = "<ul><li>Łatwość adaptacji w nowym środowisku pracy,</li><li>Szybko się uczę przez praktykę,</li></ul>";
  document.getElementById("About-me-content-p3").innerHTML = "<ul><li>Umiejętność pracy w zespole ale i samodzielność i&nbsp;inicjatywy,</li></ul>";
  document.getElementById("About-me-content-p1").style.marginBottom = "20px";
  document.getElementById("About-me-content-p2").style.marginBottom = "20px";
  document.getElementById("other-skills").style.background = "#3A4B66";
  document.getElementById("soft-skills").style.background = "#566F96";
  document.getElementById("me").style.background = "#3A4B66";
  document.getElementById("experience").style.background = "#3A4B66";
  document.getElementById("about-me-content").style.lineHeight = "50px";
  if ($(window).width() <= 585) {
    document.getElementById("other-skills").style.display = "none";
    document.getElementById("soft-skills").style.display = "none";
    document.getElementById("me").style.display = "none";
    document.getElementById("experience").style.display = "none";
    closeNav()
  }
};
function AboutMeContentP3 (){
  document.getElementById("About-me-content-p1").innerHTML = "Jeśli rok temu ktoś powiedziałby mi, że będę w stanie stworzyć całą stronę wyłącznie za pomocą kodu to bym mu raczej nie uwierzył.";
  document.getElementById("About-me-content-p2").innerHTML = "Jak się okazało – jest to bardzo satysfakcjonujące (oczywiście po za momentami, w których wszystko się sypie z niewiadomych przyczyn).";
  document.getElementById("About-me-content-p3").innerHTML = "W momencie tworzenia tej strony swoją uwagę skupiam na dalszej, równoległej nauce SQL i PHP.";
  document.getElementById("About-me-content-p1").style.marginBottom = "auto";
  document.getElementById("About-me-content-p2").style.marginBottom = "auto";
  document.getElementById("other-skills").style.background = "#3A4B66";
  document.getElementById("soft-skills").style.background = "#3A4B66";
  document.getElementById("me").style.background = "#566F96";
  document.getElementById("experience").style.background = "#3A4B66";
  document.getElementById("about-me-content").style.lineHeight = "23px";
  if ($(window).width() <= 585) {
    document.getElementById("other-skills").style.display = "none";
    document.getElementById("soft-skills").style.display = "none";
    document.getElementById("me").style.display = "none";
    document.getElementById("experience").style.display = "none";
    closeNav()
  }
};
function AboutMeContentP4 (){
  document.getElementById("About-me-content-p1").innerHTML = "Swobodnie potrafię poruszać się (dodawać, edytować zawartość strony w dowolny sposób) po platormach takich jak Wordpress, Prestashop czy Shoplo. Doświadczenie te ma swoje przełożenie w ponad dwuletniej praktyce zawodowej.";
  document.getElementById("About-me-content-p2").innerHTML = "Ponadto posiadam 1,5 roczne doświadczenie w kwestii pozycjonowania treści w sieci. Wiedzę na temat SEO pozyskałem pracując w agencji copywritingu i marketingu.";
  document.getElementById("About-me-content-p3").innerHTML = "Jeśli miałbym coś powiedzieć o&nbsp;samodzielnym tworzeniu stron internetowych, to jest to moje trzecie dzieło, w tym pierwsze tak rozbudowane pod kątem użycia semantycznego HTML i&nbsp;skryptów JS.";
  document.getElementById("About-me-content-p1").style.marginBottom = "20px";
  document.getElementById("About-me-content-p2").style.marginBottom = "20px";
  document.getElementById("other-skills").style.background = "#3A4B66";
  document.getElementById("soft-skills").style.background = "#3A4B66";
  document.getElementById("me").style.background = "#3A4B66";
  document.getElementById("experience").style.background = "#566F96";
  document.getElementById("about-me-content").style.lineHeight = "23px";
  if ($(window).width() <= 585) {
    document.getElementById("other-skills").style.display = "none";
    document.getElementById("soft-skills").style.display = "none";
    document.getElementById("me").style.display = "none";
    document.getElementById("experience").style.display = "none";
    closeNav()
  }
};
function openNav() {
  document.getElementById("aboutMeNav").style.width = "100%";
  document.getElementById("aboutMeNav").style.position = "absolute";
  document.getElementById("closeButton").style.display = "block";
  document.getElementById("aboutMeNav").style.borderRadius = "0 0 25px 25px";
  document.getElementById("other-skills").style.display = "list-item";
  document.getElementById("soft-skills").style.display = "list-item";
  document.getElementById("me").style.display = "list-item";
  document.getElementById("experience").style.display = "list-item";
};
function closeNav() {
  document.getElementById("aboutMeNav").style.width = "0";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("aboutMeNav").style.position = "fixed";
};
