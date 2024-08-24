import React, { useRef, useState } from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoSearchOutline } from "react-icons/io5";

const SearchSchema = Yup.object().shape({
	searchImages: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!"),
});

const initialValues = {
	searchImages: "",
};

function SearchBar({ onSubmit }) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (values, actions) => {

   if (!values.searchImages.trim()) {
			toast.error("Please enter text to search for images"); // Уведомление, если строка пуста
			actions.setSubmitting(false); // Остановка процесса отправки
			return; // Прекращаем выполнение функции
		}
		onSubmit(values.searchImages);
		actions.resetForm();
	};

  const inputRef = useRef(null)
  const inputFocus = () => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  }

	return (
		<header className={`container ${styles.header}`}>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={SearchSchema}
			>
				<Form className={styles.form}>
					<div className={styles.inputContainer}>
						<label className={styles.formLabel}>
							<IoSearchOutline className={styles.icon} onClick={inputFocus} />
							<Field
								className={styles.searchInput}
								type='text'
								name='searchImages'
								placeholder='Search images and photos'
							/>
						</label>
					</div>
					<button className={styles.searchBtn} type='submit'>
						Search
					</button>
					<ErrorMessage
						className={styles.formErrorMessage}
						name='searchImages'
						component='span'
					/>
				</Form>
			</Formik>
			<Toaster position='top-center' />
		</header>
	);
}

export default SearchBar;
