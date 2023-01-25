import React, { useRef, useCallback } from "react";

export default function App() {
	const observer = useRef();
	const lastBookElementRef = useCallback(
		(node) => {
			if (loading) return; // loading je bio state
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					// hasMore je bio state
					setPageNumber((prevPageNumber) => prevPageNumber + 1); // setPageNumber je bio state
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore] // loading i hasMore su bili state
	);

	return (
		<div ref={lastBookElementRef} key={book}>
			{book}
		</div>
	);
}
