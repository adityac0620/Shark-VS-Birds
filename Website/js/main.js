const video_div = document.querySelector("#video-stream");
const clickphoto = document.querySelector("#bbutton");
const canvas = document.querySelector("#canvas");
const imageresult = document.querySelector(".result");
const blahajCapacity = 250;

window.addEventListener("load", VideoStream);

async function VideoStream() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video_div.srcObject = stream;
}

clickphoto.addEventListener("click", clickapicture);

function clickapicture() {
  canvas
    .getContext("2d")
    .drawImage(video_div, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");
  console.log(image_data_url);
  predict();
}

function predict() {
  const contestantCapacity = Math.floor(Math.random() * 200);

  if (contestantCapacity > blahajCapacity) {
    imageresult.srcObject = "loaded image here";
  } else {
    imageresult.srcObject = "loaded image here blahaj lose";
  }
}
