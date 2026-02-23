// a)
let alter = 32;

// b)
if (alter >= 18) {
    console.log("Person ist volljährig");
} else {
    console.log("Person ist minderjährig");
}

// c)
for (let i = 1; i <= alter; i++) {
    console.log(i);
}

// d)
let countdown = 10;
while (countdown >= 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// e)
console.log(alter > 50 ? "Person ist älter als 50" : "Person ist 50 oder jünger");

// f)
var name = "Stefan";
greeting(name);

function greeting(name) {
    console.log(`Hallo, ${name}!`);
}

// g)
function localScopeExample() {
    let lokaleVariable = "Ich bin lokal";
    console.log(lokaleVariable);
}

localScopeExample();

