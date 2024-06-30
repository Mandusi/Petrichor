import { useLoadingStore } from '~/store/loading'

export default {
	lock() {
		useLoadingStore().setLoading(true)
	},
	unlock() {
		useLoadingStore().setLoading(false)
	},
	set: (v: boolean) => useLoadingStore().setLoading(v),
	isLoading() {
		return useLoadingStore().isLoading
	},
}
