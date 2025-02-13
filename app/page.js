"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./page.module.css";

const images = [
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/06621c39-ef48-4f7a-a17c-6f2cfc14eef5.JPG?alt=media&token=7bc115d6-1770-445b-a043-e6887d33fbe0",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/2366bd73-1f0c-4ebf-906e-9d50eb9d2a98.JPG?alt=media&token=e171c148-513a-43cd-bf1b-f0e7fd796f84",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/2902126c-5dd7-4fbe-807e-2ffa95911677.JPG?alt=media&token=59f77117-6432-4c9e-a71c-730226740eb3",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/2BE56ED9-CC6A-4DE1-9AB1-B23EA2B02D79.JPG?alt=media&token=304e47cc-fc30-45d6-bbbf-d7b223f9564d",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/8c642ef9-3950-4c9a-af90-7f099c95e9bf.JPG?alt=media&token=42463475-80ce-4a4b-97fb-1e61bf3322e5",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/bb67a084-c142-4e37-90ef-3dc0672c8668.JPG?alt=media&token=88f6e461-16e1-47d9-8171-038dfbc9309c",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/d42fc4b4-8173-49c8-bf53-1d4ea80dd942.JPG?alt=media&token=1753ceb3-71a2-4524-b0e1-f9ae04908298",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/e63d2b3e-f08f-475a-9eea-57cc4d68acea.JPG?alt=media&token=7e53e589-5020-4cfe-b978-0cd225706029",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_1851.png?alt=media&token=b6363add-dcab-4427-87bf-ad88f3798fe2",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_7057%20(1).png?alt=media&token=e07d7963-ea0f-43c3-9367-b7998a5fc587",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_7334.png?alt=media&token=0766ca15-61d8-4b10-a220-1345f91ec855",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_7636%20(1).png?alt=media&token=e1376c22-e842-4da6-9d17-ecb578daaf12",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_9931.png?alt=media&token=e3cc52c3-b5de-4e8d-a93f-7cafbba1dde7",
    "https://firebasestorage.googleapis.com/v0/b/mailobi.appspot.com/o/IMG_9952.png?alt=media&token=45d813df-84c4-4a51-ac72-56757d03015f"
];

const generateICSFile = (title, startDate, endDate) => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${title}\nDTSTART:${startDate}Z\nDTEND:${endDate}Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_")}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
            <p>Por otro año de aventuras más!</p>
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Elige tu platillo para la cena:</h2>
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
                    onClick={() => generateICSFile("Cena Romántica", "20250214T203000", "20250214T223000")}
                >
                    Cena en Oriundo 🍷
                </button>
                <button
                    className={styles.button}
                    onClick={() => generateICSFile("Paseo Juntos, cocinar y almorzar", "20250215T093000", "20250215T143000")}
                >
                    Paseo Juntos, cocinar y almorzar 🌹
                </button>
            </div>
        </div>
    );
}