document.addEventListener("DOMContentLoaded", function(event) {
    // var selectOne = document.querySelector(".nav");
    // var selectTwo = document.querySelector(".nav1");
    // var selectThree = document.querySelector(".nav2");
    // console.log(selectThree);
    // var selectFour = document.querySelector(".nav3");
    //
    // selectOne.addEventListener("click", function(event){
    //   selectOne.classList.add("active");
    // });
    // selectTwo.addEventListener("click", function(event){
    //   console.log(event);
    // });
    // selectThree.addEventListener("click", function(event){
    //   console.log(event);
    // });
    // selectFour.addEventListener("click", function(event){
    //   console.log(event);
    // });

    // Can be replaced with this simple code
    var navBar = document.querySelectorAll('.nav')
    navBar.forEach(function(list) {
      list.addEventListener('click', function(event) {
        for (var i = 0; i < navBar.length; i++) {
          navBar[i].classList.remove('active');
        }
        this.classList.add('active');
      })
    })
    // console.log(document.getElementsByClassName("nav"));


    // document.addEventListener(".nav", function(event) {
    //   console.log("HELP");
    //   console.log(event);
    // });
});


// public static void foo(arg1) {
//   system.out.println(arg1);
// }
