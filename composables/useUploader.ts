import { useAuthStore } from '~/store/auth'

export function useUploader(
	url: string,
	body: FormData,
	method = 'POST',
	feedback?: (p: number) => void,
) {
	const authStore = useAuthStore()
	const config = useRuntimeConfig()

	const xhr = new XMLHttpRequest()
	xhr.open(method, `${config.public.API}${url}`, true)
	xhr.setRequestHeader('Authorization', `Bearer ${authStore.token}`)

	xhr.upload.onprogress = e => {
		const percent = Math.round((e.loaded / e.total) * 100)
		try {
			if (feedback) feedback(percent)
		} catch (error) {
			console.log(error)
		}
	}

	return new Promise((resolve, reject) => {
		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) resolve(JSON.parse(xhr.response))
			else reject(xhr.statusText)
		}
		xhr.onerror = () => reject(xhr.statusText)
		xhr.send(body)
	})
}
