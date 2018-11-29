// Linking <a href> to a div

$(ducument).ready(function() {
  $(".click-box").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
});




AOS.init();

   
