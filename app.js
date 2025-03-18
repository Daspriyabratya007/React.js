console.log("Hi, I am in the console");

document.getElementsByTagName("span");

console.log(document.getElementsByTagName("h1")[0].innerHTML);

document.getElementsByTagName("span")[0].innerHTML = "I am in span using JS";
console.log(document.getElementsByTagName("span")[0].innerHTML);

document.getElementById("Primary_btn_01").addEventListener('click', function () {
    alert("Hello, I am clicked");
});
function dontClickbutton()
{
    alert("Ohh! Don't click me");
}
//function for bulb image
function ChangeImage() {
    let BulbVal = document.getElementById("Bulb");
    if(BulbVal.src.match("Bulb_on"))
    {
        BulbVal.src= "./assets/Bulb_off.png";   
    }
    else
    {
        BulbVal.src= "./assets/Bulb_on.png";
    }
}
//password js
function ShowPassword() {
    let ShowPass = document.getElementById("inputValue");
    let ShowButton = document.getElementById("show_btn")
    {
        if (ShowPass.type==='password')
        {
            ShowPass.type ='text';
            ShowButton.innerHTML ='Hide';
        }
        else{
            ShowPass.type='password';
            ShowButton.innerHTML='Show';
        }
    }
    
}
    

