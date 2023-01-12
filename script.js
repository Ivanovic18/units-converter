// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const lengthEl = $("#length-span");
const volumeEl = $("#volume-span");
const massEl = $("#mass-span");

$("button").click(function () {
    const input = $("#input").val();
    console.log(input);
    let inputNumber = Number(input);
    if (inputNumber) {
        let feet = (inputNumber * 3.281).toFixed(3);
        let meters = (inputNumber * 0.305).toFixed(3);
        let gallons = (inputNumber * 0.264).toFixed(3);
        let liters = (inputNumber * 3.785).toFixed(3);
        let pounds = (inputNumber * 2.204).toFixed(3);
        let kilograms = (inputNumber * 0.454).toFixed(3);

        let viewport_width = window.innerWidth;
        lengthEl.hide();
        volumeEl.hide();
        massEl.hide();
        if (viewport_width > 800) {
            lengthEl
                .text(
                    `${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meters} meters`
                )
                .fadeIn(500);
            volumeEl
                .text(
                    `${inputNumber} liters = ${gallons} gallons | ${inputNumber} gallons = ${liters} liters`
                )
                .fadeIn(500);
            massEl
                .text(
                    `${inputNumber} kilos = ${pounds} pounds | ${inputNumber} pounds = ${kilograms} kilos`
                )
                .fadeIn(500);
        } else {
            lengthEl
                .html(
                    inputNumber +
                        " meters = " +
                        feet +
                        " feet<br>" +
                        inputNumber +
                        " feet = " +
                        meters +
                        " meters"
                )
                .fadeIn(500);
            volumeEl
                .html(
                    inputNumber +
                        " liters = " +
                        feet +
                        " gallons<br>" +
                        inputNumber +
                        " gallons = " +
                        meters +
                        " liters"
                )
                .fadeIn(500);
            massEl
                .html(
                    inputNumber +
                        " kilos = " +
                        feet +
                        " pounds<br>" +
                        inputNumber +
                        " pounds = " +
                        meters +
                        " kilos"
                )
                .fadeIn(500);
        }
    }
});

let currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    setDarkTheme();
} else {
    setLightTheme();
}

$("img").click(function () {
    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        setLightThemeWithAnimation();
    } else {
        localStorage.setItem("theme", "dark");
        setDarkThemeWithAnimation();
    }
    console.log(localStorage.getItem("theme"));
});

function setLightThemeWithAnimation() {
    $(".bottom").addClass("bottom-light", 300).removeClass("bottom-dark", 300);
    $(".unit").addClass("unit-light", 300).removeClass("unit-dark", 300);
    $("h2").addClass("heading-light", 300).removeClass("heading-dark", 300);
    $(".span").addClass("span-light", 300).removeClass("span-dark", 300);
    $("body").addClass("body-light", 300).removeClass("body-dark", 300);
    $("img").fadeOut("fast", function () {
        $("img").attr("src", "images/dark.png");
        $("img").fadeIn("fast");
    });
}

function setDarkThemeWithAnimation() {
    $(".bottom").addClass("bottom-dark", 300).removeClass("bottom-light", 300);
    $(".unit").addClass("unit-dark", 300).removeClass("unit-light", 300);
    $("h2").addClass("heading-dark", 300).removeClass("heading-light", 300);
    $(".span").addClass("span-dark", 300).removeClass("span-light", 300);
    $("body").addClass("body-dark", 300).removeClass("body-light", 300);
    $("img").fadeOut("fast", function () {
        $("img").attr("src", "images/light.png");
        $("img").fadeIn("fast");
    });
}

function setLightTheme() {
    $(".bottom").addClass("bottom-light").removeClass("bottom-dark");
    $(".unit").addClass("unit-light").removeClass("unit-dark");
    $("h2").addClass("heading-light").removeClass("heading-dark");
    $(".span").addClass("span-light").removeClass("span-dark");
    $("img").attr("src", "images/dark.png");
    $("body").addClass("body-light").removeClass("body-dark");
}

function setDarkTheme() {
    $(".bottom").addClass("bottom-dark").removeClass("bottom-light");
    $(".unit").addClass("unit-dark").removeClass("unit-light");
    $("h2").addClass("heading-dark").removeClass("heading-light");
    $(".span").addClass("span-dark").removeClass("span-light");
    $("img").attr("src", "images/light.png");
    $("body").addClass("body-dark").removeClass("body-light");
}
