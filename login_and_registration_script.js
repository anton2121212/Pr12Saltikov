
document.addEventListener('DOMContentLoaded', function () {
    function hiddenOpen_CloseClick() {
        let x = document.querySelector(".container-login-registration");
        if (x.style.display == "none") {
            x.style.display == "grid";
        } else {
            x.style.display == "none";
        }
    }

    document.getElementById("click-to-hide").addEventListener("click", hiddenOpen_ClosecLick);
    document.querySelector(".overlay").addEventListener("click", hiddenOpen_ClosecLick);


})



const signInBth = document.querySelector('.signin-btn');
const signUpBth = document.querySelector('.signup-btn');
const formbox = document.querySelector('.form-box');
const block = document.querySelector('.block');

if (signInBth && signUpBth) {
    signUpBth.addEventListener('click', function (){
        formBox.classList.add('active');
        block.classList.add('active');
    });

    signInBth.addEventListener('click', function (){
        formBox.classList.remove('active');
        block.classList.remove('active');
    });
}
