$(window).on("load", function () {
    $(".preloader").fadeOut(1000);
    $(".non-preloader-body").fadeIn(1000);
    document.getElementById("open-video").addEventListener("click", (e)=>{
        document.getElementsByClassName("edify-outer")[0].classList.remove("d-none")
    })
    document.getElementById("video-toggle").addEventListener("click", (e)=>{
      if(document.getElementsByClassName("edify-outer")[0].classList.contains("d-none")){
        document.getElementsByClassName("edify-outer")[0].classList.remove("d-none")
      }else{
        document.getElementsByClassName("edify-outer")[0].classList.add("d-none")
      }
    })
});
$(document).ready(function () {    
    // Scrolling-buttons
    $(".about-scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: ($('#About-me').offset().top)
        }, 1000);
    });
    $(".home-scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: ($('#top').offset().top)
        }, 1000);
    });
    $(".portfolio-scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: ($('#portfolio').offset().top)
        }, 1000);
    });
    $(".contact-scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: ($('#contact').offset().top)
        }, 1000);
    });
    $(".photograph-scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: ($('#best-clicks').offset().top)
        }, 1000);
    });
});


//--------------------------------
// function([string1, string2],target id,[color1,color2])    
 consoleText(['Technophile.','Software Engineer.','Programmer.'], 'text',['tomato','#1a8bdb','tomato']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 60)
  window.setInterval(function() {
    if (visible === true) {
      con.style.visibility='hidden';
      visible = false;
    } else {
      con.style.visibility='visible';
      visible = true;
    }
  }, 400)
}

