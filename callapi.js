
function getMyIpHttp(){
    var request = new XMLHttpRequest()

    request.open('GET','https://fortniteapi.io/v2/shop?lang=es-419',true)
    // Añade tu clave de API aquí
    request.setRequestHeader('Authorization', 'ddb90739-a16c7cd1-19eec5e0-06f683e5')
    request.onload=function(resp){
        var data=JSON.parse(resp.target.response)
        console.log(resp);
        console.log(resp.target.response);
/*
        //var NombreElement=document.getElementById("Nombre");
        var ImagenElement=document.getElementById("Imagen");
        //NombreElement.innerHTML=data.shop[2].displayName;
        
        ImagenElement.src=data.shop[0].displayAssets[0].full_background;
*/
ImagenesContainer.innerHTML = '';
        data.shop.forEach(function(producto) {
            var img = document.createElement('img');
            img.src = producto.displayAssets[0].full_background;
            ImagenesContainer.appendChild(img);
        });
        
    }

    request.send()
}



function getMyIpfetch(){
    var request = new Request('https://fortniteapi.io/v2/shop?lang=es-419',
    {
        method: 'GET',
        headers:new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'ddb90739-a16c7cd1-19eec5e0-06f683e5'})
    });

    fetch(request)
    .then(function(response){
        response.json().then(function(respjson){
            ImagenesContainer.innerHTML = '';
            respjson.shop.forEach(function(producto) {
                var img = document.createElement('img');
                img.src = producto.displayAssets[0].full_background;
                ImagenesContainer.appendChild(img);
            });
            //console.log(respjson.shop[2].displayAssets[0].full_background);
        });
    })
    .catch(err=>{
        console.log(err);
    });
    
}

function getMyIp(){
    $.ajax({
        url: "https://fortniteapi.io/v2/shop?lang=es-419",
        headers: {
            "Authorization": "ddb90739-a16c7cd1-19eec5e0-06f683e5"
        },
        success: function(json){
            console.log(json);
            $('#resultado').text(JSON.stringify(json));


            ImagenesContainer.innerHTML = '';
            json.shop.forEach(function(producto) {
                var img = document.createElement('img');
                img.src = producto.displayAssets[0].full_background;
                ImagenesContainer.appendChild(img);
            });  
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}


function getMyData(){
    $.ajax({
        url: "https://fortniteapi.io/v2/shop?lang=es-419",
        headers: {
            "Authorization": "ddb90739-a16c7cd1-19eec5e0-06f683e5"
        },
        success: function(json){
            console.log(json);
            $('#resultado').text(JSON.stringify(json));
            var aleatorio=Math.floor(Math.random() * 20);
            ImagenesContainer.innerHTML = '';
            json.shop.slice(0,aleatorio).forEach(function(producto) {
                var img = document.createElement('img');
                img.src = producto.displayAssets[0].full_background;
                ImagenesContainer.appendChild(img);
            });  
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function Limpiar(){
    ImagenesContainer.innerHTML = '';
}