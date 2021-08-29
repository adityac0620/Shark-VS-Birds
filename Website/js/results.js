const imageresult = document.querySelector(".result");

export function predict() {
    const contestantCapacity = Math.floor(Math.random() * 200);
    var img = document.createElement("img");
    console.log("it works!");
    if (contestantCapacity > blahajCapacity) {
        img.src = "../Images/Blahaj_029.png";
    } else {
        img.src = "../Images/Blahaj_027.png";
    }
    imageresult.appendChild(img);
}

