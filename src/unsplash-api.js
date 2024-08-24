import axios from "axios";

// Функция для получения изображений по теме
export const fetchImagesWithTopic = async (searchValue, pageNumber = 1) => {
	const params = {
		query: searchValue,
		page: pageNumber,
		orientation: "landscape",
		per_page: 20,
	};
	const { data } = await axios.get(
		"https://api.unsplash.com/search/photos?client_id=v5BII_CIv37Mk7RdTKPqv-Qv6sTWluiLQlreVbWy2pc",
		{
			params,
			headers: {
				"Accept-Version": "v1",
			},
		}
	);
	return data;
};
