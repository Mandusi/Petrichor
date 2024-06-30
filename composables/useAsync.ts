import useFire from './useFire'

interface UseAsyncOpts {
	cb?: () => void
	setLoader: (b: boolean) => void
}

export default function (fn: () => Promise<void>, opts?: UseAsyncOpts) {
	const { setLoader = (v: boolean) => v, cb = (v: any) => v } = opts || {}

	setLoader(true)

	fn()
		.then(() => {
			setLoader(false)
			cb(null)
		})
		.catch(err => {
			setLoader(false)
			useFire().error(err?.message)
		})
}
