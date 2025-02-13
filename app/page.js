"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./page.module.css";

const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
];

const handleAddToCalendar = (title, date) => {
    const appleCalendarUrl = `webcal://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
    )}&dates=${date}/${date}`;
    window.open(appleCalendarUrl, "_blank");
};

export default function SanValentin() {
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¿Quieres ser mi San Valentín? 💖</h1>
            <Swiper spaceBetween={10} slidesPerView={1} className={styles.carousel}>
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`photo-${index}`} className={styles.carouselImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Elige tu platillo para la cena:</h2>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.button} ${selectedDish === "Pasta" ? styles.selected : ""}`}
                        onClick={() => setSelectedDish("Pasta")}
                    >
                        Pasta 🍝
                    </button>
                    <button
                        className={`${styles.button} ${selectedDish === "Sushi" ? styles.selected : ""}`}
                        onClick={() => setSelectedDish("Sushi")}
                    >
                        Sushi 🍣
                    </button>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Agrega las citas al calendario:</h2>
                <button
                    className={styles.calendarButton}
                    onClick={() => handleAddToCalendar("Cena Romántica", "20240214T190000Z")}
                >
                    Añadir Cena 🍷
                </button>
                <button
                    className={styles.calendarButton}
                    onClick={() => handleAddToCalendar("Paseo Juntos", "20240215T120000Z")}
                >
                    Añadir Paseo 🌹
                </button>
            </div>
        </div>
    );
}
