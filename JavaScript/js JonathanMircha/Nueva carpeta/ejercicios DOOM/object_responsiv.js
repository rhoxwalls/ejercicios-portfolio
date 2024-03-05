const d = document,
w = window;

export default function responsiveMedia(id,mq,mobileContent, desktopContent){
    let breakPonit = w.matchMedia(mq);

    const responsive = (e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;            
        };
        
    console.log(e.matches);
    };
    breakPonit.addListener(responsive);
} 