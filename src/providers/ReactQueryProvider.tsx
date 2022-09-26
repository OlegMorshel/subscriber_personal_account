import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: 0,
			cacheTime: 0,
		},
	},
})

interface Props {
	children: React.ReactNode
}

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
	const localStoragePersistor = createWebStoragePersistor({
		storage: window.localStorage,
	})
	useEffect(() => {
		persistQueryClient({
			queryClient,
			persistor: localStoragePersistor,
		})
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	)
}

export default ReactQueryProvider
