export default {
	title: (s: string) => [s, 'Novaya UMS'].join(' - '),
	query: (params: object) => btoa(encodeURIComponent(JSON.stringify(params))),
}
