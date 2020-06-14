$(document).ready(function(){
    $('.project-thumbnail').hover(function(){
        $(this).find('.project-thumbnail-overlay').slideToggle();
        $(this).find('.project-category').slideToggle();
    });

    //حركة التأثير عتد أرتفاع الصفحة
    $(".go-slowly").on('click', function(event) {
        event.preventDefault();
        var el = this.hash;
        $('html, body').animate({
          scrollTop: $(el).offset().top
        }, 1500);
    });

    
});

//copy link
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the link: " + copyText.value);
  }

  //*like

        function clickCounter() {
              if(typeof(Storage) !== "undefined") {
              if (localStorage.clickcount) {
                  localStorage.clickcount = Number(localStorage.clickcount)+1;
              } else {
                  localStorage.clickcount = 1;
              }
              document.getElementById("result").innerHTML = localStorage.clickcount + " ";
              } else {
                  document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
              }
        }

        //*dislike

        function clickdisCounter() {
            if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            document.getElementById("result2").innerHTML = localStorage.clickcount + " ";
            } else {
                document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
            }
      }


