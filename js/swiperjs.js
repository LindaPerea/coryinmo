// Swiper

    var swiper = new Swiper(".mySwiper", {
        effect:"coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate:15,
            strech:0,
            depth:300,
            modifier:1,
            slideShadows:true,
        },
        loop:true,

        autoplay: {
            delay: 2000, // Tiempo en milisegundos entre cambios de diapositiva
            disableOnInteraction: false, // Mantener autoplay incluso después de la interacción del usuario
        },
      
    });
