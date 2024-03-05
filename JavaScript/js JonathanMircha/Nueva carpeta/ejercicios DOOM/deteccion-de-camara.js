const d = document,
n = navigator;

export default function webcamDetection(id){
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true,audio:false})
        .then((stream)=>{
            console.log(stream);
            $video.SrcObject = stream;
            $video.play();
        })
        .catch((err)=> {
            $video.insertAdjacentHTML("beforebegin",`<p>Sucedió el siguiente error!:<mark>${err}</mark></p>`)
            console.log(`Sucedió el siguiente error!:${err}`)});
   
    };
};