const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    }
    else {
        myImage.setAttribute("src", "images/firefox.png");
    }
} 