// variables


const resultado = document.querySelector('#resultado');


const type = document.querySelector('#type');
const city = document.querySelector('#city')
const operation = document.querySelector('#operation');
const images= document.querySelector('#images')


const datosBusqueda = {

    type: '',
    city: '',
    operation: '',
    images: ''
}



// eventos

document.addEventListener('DOMContentLoaded', ()=> {
    mostrarPropiedades(properties);
    llenarSelect();

//    document.getElementById('beneficio1').innerText = 'Venderemos, Rentaremos tu propiedad en menos tiempo';
//    document.getElementById('beneficio2').innerText = 'Contamos con cartera de clientes a quien ofrecer tu propiedad';
//    document.getElementById('beneficio3').innerText = 'Contamos con los canales adecuados para promover tu propiedad';
//    document.getElementById('beneficio4').innerText = 'Trabajamos en Alianza con cientos de agentes inmobiliarios a nivel nacional';


});

    
    type.addEventListener('change', e => {
        datosBusqueda.type = e.target.value;

        filtrarPropiedades();

    });
    

    city.addEventListener('change', e => {
        datosBusqueda.city = e.target.value;

        filtrarPropiedades();

    });


    operation.addEventListener('change', e => {
        datosBusqueda.operation = e.target.value;

        filtrarPropiedades();

    });



// funciones




function mostrarPropiedades(properties) {
  limpiarHTML();

  properties.forEach(property => {
    const { type, city, operation, images, imageArea, area, imageBedroom, bedroom, imageBathroom, bathroom, price, detalles } = property;

    // Crear un contenedor para cada propiedad
    const propertyContainer = document.createElement('div');
    propertyContainer.classList.add('property');

    // Contenedor interno para efecto flip
    const propertyInner = document.createElement('div');
    propertyInner.classList.add('property-inner');

    // Parte frontal de la tarjeta
    const propertyFront = document.createElement('div');
    propertyFront.classList.add('property-front');

    // Crear elemento para type (como título)
    const nameElement = document.createElement('h3');
    nameElement.textContent = type;
    nameElement.classList.add('property-name');
    propertyFront.appendChild(nameElement);

    //Crear elemento para city
    const cityElement = document.createElement('p')
    cityElement.textContent = city;
    cityElement.classList.add('property-city');
    propertyFront.appendChild(cityElement);

    // Crear un elemento <img> para mostrar la imagen
    const imgElement = document.createElement('img');
    imgElement.src = images;
    imgElement.alt = name;
    imgElement.classList.add('property-image');
    propertyFront.appendChild(imgElement);

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('property-details-container');
    propertyFront.appendChild(detailsContainer);

    const imageAreaElement = document.createElement('img');
    imageAreaElement.src = imageArea;
    imageAreaElement.alt = name;
    imageAreaElement.classList.add('property-image-area');
    detailsContainer.appendChild(imageAreaElement);

    const areaElement = document.createElement('p');
    areaElement.textContent = area;
    areaElement.classList.add('property-area-element');
    detailsContainer.appendChild(areaElement);

    const imageBedroomElement = document.createElement('img');
    imageBedroomElement.src = imageBedroom;
    imageBedroomElement.alt = name;
    imageBedroomElement.classList.add('property-imageBedroom');
    detailsContainer.appendChild(imageBedroomElement);

    const bedroomElement = document.createElement('p');
    bedroomElement.textContent = bedroom;
    bedroomElement.classList.add('property-bedroom');
    detailsContainer.appendChild(bedroomElement);

    const imageBathroomElement = document.createElement('img');
    imageBathroomElement.src = imageBathroom;
    imageBathroomElement.alt = name;
    imageBathroomElement.classList.add('property-imageBathroom');
    detailsContainer.appendChild(imageBathroomElement);

    const bathroomElement = document.createElement('p');
    bathroomElement.textContent = bathroom;
    bathroomElement.classList.add('property-bathroom');
    detailsContainer.appendChild(bathroomElement);

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('property-price-container');
    propertyFront.appendChild(priceContainer);

    const priceElement = document.createElement('p');
    priceElement.textContent = price;
    priceElement.classList.add('property-price');
    priceContainer.appendChild(priceElement);

    //Crear elemento para operation (que es tipo de operacion venta o alquiler)
    const operationElement = document.createElement('p');
    operationElement.textContent = operation;
    operationElement.classList.add('property-operation');
    propertyFront.appendChild(operationElement);

    // Parte trasera de la tarjeta
    const propertyBack = document.createElement('div');
    propertyBack.classList.add('property-back');

    // Crear el párrafo para la parte trasera
    const detallesBackElement = document.createElement('p');
    detallesBackElement.textContent = detalles; 
    detallesBackElement.classList.add('property-detalles-back')
    propertyBack.appendChild(detallesBackElement);

    // Añadir las partes frontal y trasera al contenedor interno
    propertyInner.appendChild(propertyFront);
    propertyInner.appendChild(propertyBack);

    // Agregar el contenedor interno al contenedor principal
    propertyContainer.appendChild(propertyInner);

    // Agregar el contenedor de la propiedad al resultado
    resultado.appendChild(propertyContainer);

    // Agregar evento click para el efecto flip
    propertyContainer.addEventListener('mouseenter', function() {
      propertyInner.style.transform = 'rotateY(180deg)';
    });

    propertyContainer.addEventListener('mouseleave', function() {
      propertyInner.style.transform = 'rotateY(0deg)';
    });
  });
}

// Llamar a la función para mostrar propiedades
mostrarPropiedades(properties);

function llenarSelect() {

        const opcion = document.createElement('option');

    }

    function limpiarHTML() {

        while(resultado.firstChild) {
            resultado.removeChild(resultado.firstChild)
        }
    }

    function filtrarPropiedades() {

        const resultado = properties.filter(filtrarType).filter(filtrarCity).filter(filtrarOperation);
        //console.log(resultado);

        mostrarPropiedades(resultado);

    }

    function filtrarType(property) {
        const {type} = datosBusqueda
        if(type) {
            return property.type === type;
        }

        return property;
    }

    function filtrarCity(property) {
        const {city} = datosBusqueda
        if(city) {
            return property.city === city;
        }

        return property;
    }

    function filtrarOperation(property) {
        const {operation} = datosBusqueda
        if(operation) {
            return property.operation === operation;
        }

        return property;
    }





    //Beneficios
    
    
    // Aquí puedes cambiar las palabras que quieres mostrar en cada caja
