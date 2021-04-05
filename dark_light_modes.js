document.getElementById("button").classList.add("button");

document.getElementById("button").classList.remove("button");

function myFunction(){
    if ( document.getElementById("sec-2").classList.contains('dark-theme')){

        document.getElementById("sec-2").classList.remove('dark-theme')

        document.getElementById("sec-2").classList.add('light-theme')

        if(document.getElementById("div-id").classList.contains('div-p-dark'))
        {
            document.getElementById("div-id").classList.remove('div-p-dark')
            document.getElementById("div-id").classList.add('div-p-light')
        }

    } else {

        document.getElementById("sec-2").classList.remove('light-theme')

        document.getElementById("sec-2").classList.add('dark-theme')

        if(document.getElementById("div-id").classList.contains('div-p-light')){
            document.getElementById("div-id").classList.remove('div-p-light')
            document.getElementById("div-id").classList.add('div-p-dark')
        }
    } 
    
}