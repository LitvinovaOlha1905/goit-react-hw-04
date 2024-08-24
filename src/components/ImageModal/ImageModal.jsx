import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ImageModal({ isOpenModal, isClose, onImages }) {
	return (
		<div>
			<Modal
				isOpen={isOpenModal}
				onRequestClose={isClose}
				style={{
					overlay: {
						backgroundColor: 'rgba(112, 211, 221, 0.3)',
					},
					content: {
						borderRadius: '8px',
						maxWidth: '100%',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						background: 'transparent',
						transform: 'translate(-50%, -50%)',
						border: 'none',
					},
				}}
				closeTimeoutMS={200}
			>
				<img src={onImages.url} alt={onImages.alt} />
			</Modal>
		</div>
	);
}

export default ImageModal;
