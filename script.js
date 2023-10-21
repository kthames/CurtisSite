const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function togglemenu(){
    if(menuList.style.maxHeight == "0px") 
    {
        menuList.style.maxHeight = "130px";
        menuList.innerHTML = `<li><a href="">L I S T E N</a></li>
        <li><a href="">F O L L O W</a></li>
        <li><a href="">A B O U T</a></li>`
    } else {
        menuList.style.maxHeight = "0px";
        menuList.innerHTML = ``;
    }

}
