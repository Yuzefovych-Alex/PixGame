import styles from "@/components/ImageSlider/ImageSlider.module.scss";
import Image from "next/image";
import { useState } from "react";

const images = [
	'https://img.gsc-game.net/q_85/stalker2/media/2212-x01.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbx743iC6n6Uyc7KKgJ3glxsnWHv0FYn4fzA&s',
	'https://games.24tv.ua/resources/photos/news/202501/2730450.jpg?v=1736955189000',
];

const ImageSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState('');

	const slideNext = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};

	const slidePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const openLightbox = (src) => {
		setLightboxImage(src);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		setLightboxImage('');
	};

	return (
		<div className={styles.imageSlider}>
			<div className={styles.imageSlider__container}>
				<div className={styles.imageSlider__slider}>
					<div 
						className={styles.imageSlider__track}
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{images.map((src, index) => (
							<div key={index} className={styles.imageSlider__slide}>
								<Image
									src={src}
									alt={`Slide ${index + 1}`}
									onClick={() => openLightbox(src)}
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									style={{ objectFit: 'cover', cursor: 'pointer' }}
								/>
							</div>
						))}
					</div>
				</div>

				<button
					className={styles.imageSlider__prev}
					onClick={slidePrev}
				>◀</button>
				<button
					className={styles.imageSlider__next}
					onClick={slideNext}
				>▶</button>
			</div>

		</div>
	);
};

export default ImageSlider;
