const table = document.querySelector(".table")

for ( let i = 1; i <= 100; i++ ) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.innerText = i;
    table.append(box)

    if ((i % 3) == 0 && (i % 5) == 0 ) {
        box.innerText = "FizzBuzz "
        box.classList.add("fizzbuzz")
    } else if ( ( i % 5 ) == 0) {
        box.innerText = "Buzz"
        box.classList.add("buzz")
    } else if ( (i % 3) == 0 ){
        box.innerText = "Fizz"
        box.classList.add("fizz")
    };
   
};

