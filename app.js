console.log("Hi, I am in the console");

document.getElementsByTagName("span");

console.log(document.getElementsByTagName("h1")[0].innerHTML);

document.getElementsByTagName("span")[0].innerHTML = "I am in span using JS";
console.log(document.getElementsByTagName("span")[0].innerHTML);

document.getElementById("Primary_btn_01").addEventListener('click', function () {
    alert("Hello, I am clicked");
});

document.getElementById("Secondary_btn_02").addEventListener('click', function () {
    alert("Ohh! Don't click me");
});
