import { format, formatISO, startOfMinute } from 'date-fns'

export default function () {
	const formats = {
		date: 'dd/MM/yyyy',
		time: 'HH:mm',
		datetime: `dd/MM/yyyy HH:mm`,
	}

	return {
		formats: () => formats,
		local(date: Date, time: boolean): string | null {
			if (!date) return null
			return format(date, time ? formats.datetime : formats.date)
		},
		iso(date: Date, time: boolean): string | null {
			if (!date) return null
			return formatISO(startOfMinute(date), {
				representation: time ? 'complete' : 'date',
			})
		},
		parse(s: string): Date {
			return new Date(s)
		},
	}
}
