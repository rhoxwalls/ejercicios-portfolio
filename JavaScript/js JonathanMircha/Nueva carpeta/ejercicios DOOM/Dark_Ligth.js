const d = document;
const ls = localStorage;

 let moon = "🌙",
    sun = "☀️";


export default function darkTheme(btn , classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    const ligthMode = ()=>{
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","ligth");
    };
    
    const darkMode = ()=>{
        $selectors.forEach((el) => el.classList.add(classDark));
         $themeBtn.textContent = sun;
         ls.setItem("theme","dark");
        };

    //console.log($selectors);

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
           //console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
               darkMode();
            }else{
               ligthMode();
            };
        };
    });

d.addEventListener("DOMContentLoaded",(e)=>{
    if(ls.getItem("theme") === null){ls.setItem("theme","ligth")};
    
    if(ls.getItem("theme")=== "ligth"){
        ligthMode();
    };

    if(ls.getItem("theme")=== "dark"){
        darkMode();
    };
});
}; 