import type { UseFetchOptions } from 'nuxt/app'
import { useAuthStore } from '~/store/auth'

export default async function <T>(endpoint: string, opts: UseFetchOptions<T> = {}) {
	const lang = useNuxtApp().$i18n.locale.value
	const res = await useFetch<T>(endpoint, {
		watch: false,
		...(opts as any),
		baseURL: useRuntimeConfig().public.API,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'Cache-Control': 'no-cache',
			Authorization: `Bearer ${useAuthStore().token}`,
			lang: lang,
			...opts.headers,
		},
	})
	return resolve(res)
}

function resolve(res: any) {
	const body = (res.data?.value || res.error?.value?.data) as ResBody
	return {
		data: body?.data,
		success: body?.success,
		error: body?.error,
		total: body?.total,
		isEmpty: body?.isEmpty,
		url: body?.url,
	}
}
