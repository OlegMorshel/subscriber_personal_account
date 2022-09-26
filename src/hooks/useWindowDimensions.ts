import { useState, useEffect } from "react"

type DimensionsType = {
	width: number
	height: number
}

const getWindowDimensions = (): DimensionsType => {
	if (typeof window == "undefined") {
		const width = Infinity
		const height = Infinity
		return {
			width,
			height,
		}
	}
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}

const useWindowDimensions = (): DimensionsType => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])
	return windowDimensions
}

export default useWindowDimensions
