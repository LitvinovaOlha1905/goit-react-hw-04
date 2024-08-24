import React from 'react'
import styles from './LoadMoreBtn.module.css'

function LoadMoreBtn({ onLoadBtn }) {
	return (
		<div className={`container ${styles.btn_container}`}>
			<button className={styles.btn} type='button' onClick={onLoadBtn}>Load more</button>
		</div>
	);
}

export default LoadMoreBtn