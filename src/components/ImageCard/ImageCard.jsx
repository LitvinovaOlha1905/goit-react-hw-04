import React from 'react'

function ImageCard({ src, alt, setOnImages, isOpen }) {
	const handleClick = () => {
		setOnImages({ url: src.regular, alt: alt });
    isOpen();
	};

	return (
		<div onClick={handleClick}>
			<img src={src.small} alt={alt} width={320} height={220} />
		</div>
	);
}

export default ImageCard