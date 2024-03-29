const d = document,
      n = navigator;



export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximunAge: 0
    };

    const success = position =>{
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `
        <p>Tuposición actual es:</p>
        <ul>
        <li>latitud:<b>${coords.latitude}</b></li>
        <li>latitud:<b>${coords.longitude}</b></li>
        <li>latitud:<b>${coords.accuracy}</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z"target="_blank"rel="noopener">Ver en google maps</a>`

        
    }

    const error = (err) =>{
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</p></mark>`
        console.log(`Error ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success, error, options);
};