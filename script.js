const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";


function togglemenu(){
    if(menuList.style.maxHeight == "0px") 
    {
        menuList.style.maxHeight = "130px";
        menuList.innerHTML = `<li id="listenLink"><a href="#">LISTEN</a></li>
        <li id="followLink"><a href="#">FOLLOW</a></li>
        <li id="aboutLink"><a href="#">ABOUT</a></li>`;

        const listenLink = document.querySelector("#listenLink");
        const followLink = document.querySelector("#followLink");
        const aboutLink = document.querySelector("#aboutLink");

        listenLink.onclick = function (e) {
            console.log("listen");
            e.preventDefault();
            showRow("listen");
        }

        followLink.onclick = function (e) {
            console.log("follow");
            e.preventDefault();
            showRow("follow");
        }

        aboutLink.onclick = function (e) {
            console.log("about");
            e.preventDefault();
            showRow("about");
        }

    } else {
        menuList.style.maxHeight = "0px";
        menuList.innerHTML = ``;
    }

}

const listenLink = document.querySelector("#listenLink");
const followLink = document.querySelector("#followLink");
const aboutLink = document.querySelector("#aboutLink");

const columnOne = document.querySelector(".col-1");
const footer = document.querySelector(".footer");
const imageShow = document.querySelector("#showImage");
footer.innerHTML = "";

listenLink.onclick = function (e) {
    console.log("listen");
    e.preventDefault();
    showRow("listen");
}

followLink.onclick = function (e) {
    console.log("follow");
    e.preventDefault();
    showRow("follow");
}

aboutLink.onclick = function (e) {
    console.log("about");
    e.preventDefault();
    showRow("about");
}

function showRow(part) {
    if(part === "about") {
        columnOne.innerHTML = `<div class="about">
        <h2>ABOUT ME</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo minima sapiente facilis, placeat odio repellendus dolorum illum in totam cumque rerum dicta corrupti dolore quam sint voluptatem, deserunt nemo nisi, deleniti accusantium eveniet. Inventore, culpa delectus? Nesciunt iste perspiciatis harum autem reprehenderit molestiae id neque doloribus, magnam reiciendis? Saepe perspiciatis modi, similique numquam obcaecati enim repudiandae temporibus sequi impedit ullam ea molestiae pariatur molestias recusandae incidunt dignissimos perferendis facilis eum illo quam quasi tempore dolore. Explicabo voluptates quae culpa fugit soluta nisi labore accusamus? Quasi, sit labore. Tempora animi architecto et, dolorem nesciunt officia maiores provident modi. Debitis, cupiditate?</p>
        <!-- <button type="button">Buy Now<img src="images/arrow.png">
        </button> -->
    </div>`;
        footer.innerHTML = `<div class="social-links">
        <a href="https://www.instagram.com/curtisiii/" target="_blank"><img src = "images/ig.png"></a>
        <a href="https://twitter.com/curtisiiix" target="_blank"><img src = "images/tw.png"></a>
    </div>`
    imageShow.src = "images/curtis1.JPG";

    } else if(part === "listen"){
        columnOne.innerHTML = `<div class="listen">
        <div class="followRow">
            <a href="https://music.apple.com/us/album/soulnoid/1708600099" target="_blank">
                <img src="images/applemusic.png">
                <h2>APPLE MUSIC</h2>
            </a>   
        </div>
        <div class="followRow">
            <a href="https://open.spotify.com/album/3e7eTlZDUoi6xxwt2NwAJq?go=1&sp_cid=13ffc5ff61d6ce5b480956eb9e50ca63&utm_source=embed_player_p&utm_medium=desktop&nd=1" target="_blank">
                <img src="images/spotify.png">
                <h2>SPOTIFY</h2>
            </a>        
        </div>
        </div>`;
    footer.innerHTML = "";
    imageShow.src = "images/S0ULN0ID.JPG";
    } else if(part === "follow"){
        columnOne.innerHTML = `<div class="follow">
        <div class="followRow">
            <a href="https://www.instagram.com/curtisiii/" target="_blank">
                <img src="images/ig.png">
                <h2>INSTAGRAM</h2>
            </a>
        </div>
        <div class="followRow">
            <a href="https://twitter.com/curtisiiix" target="_blank">
                <img src="images/tw.png">
                <h2>TWITTER</h2>
            </a>      
        </div>
    </div>`;
    footer.innerHTML = "";
    imageShow.src = "images/curtis3.JPG";
    } else {
        console.log("not working");
    }
}
