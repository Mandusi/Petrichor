export interface FormDef {
	[key: string]: ((value: any) => { isValid: boolean; m: string })[]
}

class FormContext {
	old: { [key: string]: any } = {}
	data: { [key: string]: any }
	form: FormDef
	errors: { [key: string]: string[] } = {}
	dirties: { [key: string]: boolean } = {}

	_hiddens: { [key: string]: string[] } = {}

	check() {
		const errors: { [key: string]: string[] } = {}
		for (const key in this.form) {
			if (this.old[key] !== this.data[key]) this.dirties[key] = true
			if (!this.dirties[key]) continue
			const prop = this.form[key]
			errors[key] = []
			for (const v of prop) {
				const { isValid, m } = v(this.data[key])
				if (!isValid) errors[key]?.push(m)
			}
		}
		this.errors = errors
		this.old = { ...this.data }

		const hiddens: { [key: string]: string[] } = {}
		for (const key in this.form) {
			const prop = this.form[key]
			hiddens[key] = []
			for (const v of prop) {
				const { isValid, m } = v(this.data[key])
				if (!isValid) hiddens[key]?.push(m)
			}
		}
		this._hiddens = hiddens
	}

	getError() {
		this.check()
		return (
			[
				...(Object?.values(this.errors)?.flat() || []),
				...(Object?.values(this._hiddens)?.flat() || []),
			]?.[0] || null
		)
	}

	constructor(data: { [key: string]: any }, form: FormDef) {
		this.data = data
		this.old = { ...data }
		this.form = form
		this.dirties = {}
	}
}

export default function useForm() {
	return {
		context: function (data: { [key: string]: any }, form: FormDef): FormContext {
			return new FormContext(data, form)
		},
		notEmpty: function () {
			return (value: any[]) => {
				return {
					isValid: value?.length > 0,
					m: 'This field cannot be empty',
				}
			}
		},
		nospace: function () {
			return (value: string) => {
				return {
					isValid: !value.includes(' '),
					m: 'This field cannot contain spaces',
				}
			}
		},
		trimmed: function () {
			return (value: string) => {
				return {
					isValid: value?.trim() === value,
					m: 'This field cannot start or end with a space',
				}
			}
		},
		required: function () {
			return (value: any) => {
				return {
					isValid: value !== null && value !== undefined && value !== '',
					m: 'This field is required',
				}
			}
		},
		email: function () {
			return (value: string) => {
				if (!value) return { isValid: true, m: '' }
				return {
					isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
					m: 'Invalid email',
				}
			}
		},
		length: function (opts: { min: number; max: number }) {
			const min = opts?.min || 0
			const max = opts?.max || 999999999
			return (value: string) => {
				return {
					isValid: value?.length >= min && value?.length <= max,
					m: `Length must be between ${min} and ${max}`,
				}
			}
		},
		identityNo: function () {
			return (value: string) => {
				if (!value) return { isValid: true, m: '' }
				return {
					isValid: /^[0-9]{11}$/.test(value),
					m: 'Invalid identity number',
				}
			}
		},
		year: function (opts: { min: number; max: number }) {
			opts = opts || {
				min: 1900,
				max: 2040,
			}
			return (value: number) => {
				return {
					isValid: value >= opts.min && value <= opts.max,
					m: `Year must be between ${opts.min} and ${opts.max}`,
				}
			}
		},
		int: function () {
			return (value: number) => {
				return {
					isValid: Number.isInteger(value),
					m: 'Value must be an integer',
				}
			}
		},
		min: function (n: number) {
			return (value: number) => {
				return {
					isValid: value >= n,
					m: `Value must be greater than or equal to ${n}`,
				}
			}
		},
		max: function (n: number) {
			return (value: number) => {
				return {
					isValid: value <= n,
					m: `Value must be less than or equal to ${n}`,
				}
			}
		},
		time: function () {
			return (value: number) => {
				const max = 24 * 60 * 60 * 1000
				const min = 0
				return {
					isValid: value >= min && value <= max,
					m: `Value must be a valid time`,
				}
			}
		},
		custom: function (fn: (v: any) => true) {
			return (value: any) => {
				return {
					isValid: fn(value),
					m: 'Invalid value',
				}
			}
		},
	}
}
