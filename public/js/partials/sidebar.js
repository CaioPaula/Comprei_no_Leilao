let sideBar = document.querySelector("aside.side_bar_nav");
var vision = false

function toggleSideBar(){
    

    if(vision == false){
        sideBar.style.width = "100%";
        vision = true
    }else if(vision == true){
        sideBar.style.width = "0%"
        vision = false
        
    }
}
