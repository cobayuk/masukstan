$(document).ready(function(){
    $(".pembahasan").click(function(){
      var no = $(this).attr("nomor-soal");
      $("[nomor-jawab='"+no+"']").fadeToggle();
    });
    $(".page1").removeClass("btn-outline-dark");
    $(".page1").addClass("btn-primary");
    var bagian = 1;
    if (bagian==1) {
        $(".sebelum").hide();
    }
    if (bagian==203) {
        $(".berikut").hide();
    }
  });

 