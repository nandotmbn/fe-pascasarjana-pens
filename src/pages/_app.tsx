import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from 'src/utils/redux/store'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
			<Component {...pageProps} />
		</Provider>
  )
}
