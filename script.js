const input = document.querySelector("#guess");
const button = document.querySelector(".btn");
const answer = Math.floor(Math.random()*50)+1;
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        play();
    }
})
button.addEventListener("click", play);
function play() {
    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 50){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 50, please!',
          })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number, please!',
          })
    }
    else {
        if (userNumber < answer) {
            Swal.fire('Try a higher number',
            'The computer is winnig so far!')
        }
        else if (userNumber>answer) {
            Swal.fire('Try a lower number',
            'The computer is winnig so far!')
        }
        else {
            Swal.fire({
                title: 'You win!',
                imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2537&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Win',
              })

        }
    }
}