const d = document,
n = navigator,
ua = n.userAgent;

export default function userDiviceInfo(id){
    const $id = d.getElementById(id),
    isMobile = {
        android:()=>ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function(){
            return this.android()||this.ios()||this.windows();
        }
    },
    isDesktop = {
        linux:()=> ua.match(/linux/i),
        mac:()=> ua.match(/mac/i),
        windows:()=> ua.match(/windows nt/i),
        any: function(){
            return this.linux()||this.mac()||this.windows();
        }
    },
    isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera/i),
        ie: ()=> ua.match(/ie/i),
        edge: ()=> ua.match(/edge/i),
        any:function (){
            return(
            this.ie()||
            this.chrome()||
            this.edge()||
            this.safari()||
            this.opera()||
            this.firefox());
        }
    };
    /*
    console.log(ua);
    console.log(isMobile.any());
    console.log(isDesktop.any());
    console.log(isBrowser.any());
    */
   $id.innerHTML = `
   <ul>
   <li>User Agente: <b>${ua}</b></li>
   <li>plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
   <li> navegador: <b>${isBrowser.any()}</b></li>
   `

   /* Contenido Exclusivo */
   if(isBrowser.chrome()){
    $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</p></mark>`
   }

   if(isBrowser.chrome()){
    $id.innerHTML += `<p><mark>Descarga nuestro software para windows</p></mark>`
   }

   /* Redirecciones */

if(isMobile.android()){
    window.location.href = "https://jonmircha.com";
};



















};
