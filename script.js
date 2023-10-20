const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";
menuList.innerHTML = ``; 

function togglemenu(){
    if(menuList.style.maxHeight == "0px") 
    {
        menuList.style.maxHeight = "130px";
        menuList.innerHTML = `<li><a href="">Listen</a></li>
        <li><a href="">Follow</a></li>
        <li><a href="">About</a></li>`
    } else {
        menuList.style.maxHeight = "0px";
        menuList.innerHTML = ``;
    }

}
