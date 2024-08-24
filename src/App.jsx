import { useRef, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImagesWithTopic } from "./unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

// Modal.setAppElement("#root");

function App() {
	const [images, setImages] = useState([]);
	const [onImages, setOnImages] = useState({url: '', alt: ''})
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const [error, setError] = useState(null);
	const [isOpenModal, setIsOpenModal] = useState(false)

	useEffect(() => {
		if (searchValue.trim() === "") {
			return;
		}
		const fetchImagesBySearchValues = async () => {
			try {
				setLoading(true)

				const data = await fetchImagesWithTopic(searchValue, pageNumber);

				setImages(prev => [...prev, ...data.results]);
				setTotalPage(data.total_pages);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false)
			}
		};
		fetchImagesBySearchValues()
	}, [searchValue, pageNumber]);

	const handleSubmit = (searchImages) => {
		setImages([])
		setSearchValue(searchImages)
		setPageNumber(1)
	}

	const onLoadBtn = () =>{
		setPageNumber((pageNumber) => 
			pageNumber + 1
		)
	}

	const isOpen = () =>{
		setIsOpenModal(true)
	}

	const isClose = () => {
		setIsOpenModal(false)
	}

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageModal
				isOpenModal={isOpenModal}
				isClose={isClose}
				onImages={onImages}
			/>
			{loading && <Loader />}
			{error !== null && <ErrorMessage errorMessage={error} />}
			{images.length > 0 && (
				<ImageGallery
					images={images}
					isOpen={isOpen}
					setOnImages={setOnImages}
				/>
			)}
			{pageNumber < totalPage && <LoadMoreBtn onLoadBtn={onLoadBtn} />}
		</div>
	);
}

export default App;
