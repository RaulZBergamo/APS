function myFunction(){
    if ( document.getElementById("sec-2").classList.contains('dark-theme')){

        document.getElementById("sec-2").classList.remove('dark-theme');

        document.getElementById("sec-2").classList.add('light-theme');

        document.getElementById("btn_light_dark").innerText = "Claro";

    } else {

        document.getElementById("sec-2").classList.remove('light-theme');

        document.getElementById("sec-2").classList.add('dark-theme');

        document.getElementById("btn_light_dark").innerText = "Escuro";
    } 
}