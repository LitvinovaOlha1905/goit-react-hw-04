import React from "react";
import styles from "./ErrorMessage.module.css";

function ErrorMessage({ errorMessage }) {
	return (
		<div className={styles.error}>
			<p>{errorMessage}. Please try again...</p>
		</div>
	);
}

export default ErrorMessage;
