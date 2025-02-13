"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./page.module.css";

const images = [
    "/IMG_1.png","/IMG_2.png","/IMG_3.png",
    "/IMG_4.png","/IMG_5.png","/IMG_6.png",
    "/IMG_7.JPG","/IMG_8.JPG","/IMG_9.JPG",
    "/IMG_10.JPG","/IMG_11.JPG","/IMG_12.JPG",
    "/IMG_13.JPG","/IMG_14.JPG","/IMG_15.JPG",
];

const convertToUTC = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"; // Convierte a UTC y ajusta el formato
};

const addEventToGoogleCalendar = (title, details, location, startDate, endDate) => {
    const startUTC = convertToUTC(startDate);
    const endUTC = convertToUTC(endDate);

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
    )}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
        location
    )}&dates=${startUTC}/${endUTC}&ctz=America/Montevideo`;

    window.open(googleCalendarUrl, "_blank");
};
export default function SanValentin() {
    const [selectedDish, setSelectedDish] = useState(null);

    const handleDishSelection = (dish) => {
        setSelectedDish(dish);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¿Quieres ser mi San Valentín? 💖</h1>
            <Swiper spaceBetween={10}
                    slidesPerView={1}
                    className={styles.carousel}
                    autoplay={{delay: 4500, disableOnInteraction: false}}
                    loop={true}
                    modules={[Autoplay]}>
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`photo-${index}`} className={styles.carouselImage}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <p>! Por otro año de aventuras más!</p>
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Elige la comida que te va a preparar tu amorchito!:</h2>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.button} ${selectedDish === "Pasta" ? styles.selected : ""}`}
                        onClick={() => handleDishSelection("Pasta")}
                    >
                        <img src="https://www.justspices.es/media/recipe/pollo-alfredo.jpg" alt="Pasta" className={styles.dishImage}
                             style={{width: "80px", height: "80px", objectFit: "cover"}}/>
                    </button>
                    <button
                        className={`${styles.button} ${selectedDish === "Sushi" ? styles.selected : ""}`}
                        onClick={() => handleDishSelection("Sushi")}
                    >
                        <img src="https://i.ytimg.com/vi/8QT3cKEMDKk/maxresdefault.jpg" alt="Sushi" className={styles.dishImage}
                             style={{width: "80px", height: "80px", objectFit: "cover"}}/>
                    </button>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Agrega las citas al calendario:</h2>
                <button
                    className={styles.button}
                    onClick={() =>
                        addEventToGoogleCalendar(
                            "Cena Romántica",
                            "Cena en Oriundo con mi persona especial.",
                            "Oriundo, Montevideo, Uruguay",
                            "2025-02-14T20:30:00-03:00", // Hora local de Montevideo
                            "2025-02-14T22:30:00-03:00"
                        )
                    }
                >
                    Cena en Oriundo 🍷
                </button>

                <button
                    className={styles.button}
                    onClick={() =>
                        addEventToGoogleCalendar(
                            "Paseo Juntos, cocinar y almorzar",
                            "Un día especial cocinando y almorzando juntos.",
                            "Montevideo, Uruguay",
                            "2025-02-14T09:30:00-03:00", // Hora local de Montevideo
                            "2025-02-14T14:30:00-03:00"
                        )
                    }
                >
                    Paseo Juntos, cocinar y almorzar 🌹
                </button>
            </div>
        </div>
    );
}