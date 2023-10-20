const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function togglemenu(){
    if(menuList.style.maxHeight == "0px") 
    {
        menuList.style.maxHeight = "130px";
        menuList.innerHTML = `<li><a href="">LISTEN</a></li>
        <li><a href="">FOLLOW</a></li>
        <li><a href="">ABOUT</a></li>`
    } else {
        menuList.style.maxHeight = "0px";
        menuList.innerHTML = ``;
    }

}
