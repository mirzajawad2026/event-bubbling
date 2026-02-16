const ul = document.querySelector("ul");


ul.addEventListener("click", function (dets) {
    // dets.target.style.textDecoration = "Line-through"; // siraf line lagye ga


    // one more way make a element in css with .IT;


    dets.target.classList.toggle("IT"); // ighar lagi ho ti hata de gaa ughar hati hoto laga de gaa
});