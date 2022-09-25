import { useEffect, useState } from 'react'

export default function useDebounce<T>(value: T, delay = 1500): T | undefined {
	const [debouncedValue, setDebouncedValue] = useState<T | undefined>()

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}
