import React from 'react'
import styles from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

function ImageGallery({ images, setOnImages, isOpen }) {
	if (!images.length) {
		return null;
	}

	return (
		<ul className={`container ${styles.list}`}>
			{images.map(img => (
				<li key={img.id}>
					<ImageCard
						src={img.urls}
						alt={img.alt_description}
						setOnImages={setOnImages}
						isOpen={isOpen}
					/>
				</li>
			))}
		</ul>
	);
}

export default ImageGallery