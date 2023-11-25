// Smile image
let img1 = document.getElementById('img1');              // Unhappy smile
let img2 = document.getElementById('img2');              // Neutral smile
let img3 = document.getElementById('img3');              // Satisfied smile
let eyesSmile = document.getElementById('eyesSmile');    // Eyes smile   

// Smile Text
let st1 = document.getElementById('unhappyText');        // Unhappy Text
let st2 = document.getElementById('neutralText');        // Neutral Text
let st3 = document.getElementById('satisfiedText');      // Satisfied Text

// ...
let btn =document.getElementById('btn');
let imgsDiv = document.getElementById('imgsDiv');
let yourFeedback = document.getElementById('yourFeedback');


img1.addEventListener('click', () => {
    img2.remove();
    img3.remove();
    st2.remove();
    st3.remove();
    btn.innerHTML = "Thanks for feedback";
    imgsDiv.style.backgroundColor = "red";
    eyesSmile.remove();
    yourFeedback.classList.add("me-smile1");
});

img2.addEventListener('click', () => {
    img1.remove();
    img3.remove();
    st1.remove();
    st3.remove();
    btn.innerHTML = "Thanks for feedback";
    imgsDiv.style.backgroundColor = "blue";
    eyesSmile.remove();
    yourFeedback.classList.add("me-smile2");
});

img3.addEventListener('click', () => {
    img1.remove();
    img2.remove();
    st1.remove();
    st2.remove();
    btn.innerHTML = "Thanks for feedback";
    imgsDiv.style.backgroundColor = "green";
    eyesSmile.remove();
    yourFeedback.classList.add("me-smile3");
});