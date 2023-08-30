let asideNavBarInnerWidth = $(".asideNavBar").innerWidth();
let asideNavBarLeft = $(".asideNavBar").css("left");

$(".asideNavBar").css("left", `${-asideNavBarInnerWidth}px`);
$(".right").click(function () {
  if ($(".asideNavBar").css("left") == `${-asideNavBarInnerWidth}px`) {
    $(".asideNavBar").animate({ left: asideNavBarLeft }, 1000);
  }
});
$(".fa-xmark").click(function () {
  if ($(".asideNavBar").css("left") == asideNavBarLeft) {
    $(".asideNavBar").animate({ left: `${-asideNavBarInnerWidth}px` }, 1000);
  }
});

$(".singer h2").click(function () {
  $(this).next().slideToggle(1000);
  $(".singer div").not($(this).next()).slideUp(1000);
});

let countDownDate = new Date("september 14, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let currentDate = new Date().getTime();
  let dateDifference = countDownDate - currentDate;
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

$("textarea").keyup(function(){
    let textareaLength = $(this).val().length
    $("#changingNumber").text(100 - textareaLength)
    if($("#changingNumber").text() <=0){
        $(".secSpan").css("display","none")
        $("#changingNumber").text("Your characters exceeded the limit")
    }else{
        $(".secSpan").css("display","inline-block")
    }
})