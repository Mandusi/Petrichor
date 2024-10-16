export default {
	resolve: (o: any, k?: string) => {
		const lang = useNuxtApp().$i18n.locale.value

		// if key is provided
		if (k) {
			const k1 = lang === 'en' ? k : k + '_tr'
			const k2 = lang === 'en' ? k + '_tr' : k
			return o?.[k1] || o?.[k2]
		}

		// if key is not provided
		const v1 = lang === 'prm' ? o?.prm : o?.scn
		const v2 = lang === 'prm' ? o?.scn : o?.prm
		return v1 || v2 || o
	},
	postfix: (k: string) => {
		const lang = useNuxtApp().$i18n.locale.value
		return lang === 'en' ? k : k + '_tr'
	},
}
