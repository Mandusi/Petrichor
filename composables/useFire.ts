import { useToastStore } from '~/store/toast'
let toast: any = null

export default function () {
	if (toast === null) toast = useToastStore()

	return {
		success: (code: number) => {
			let message = ''

			// 101
			if (code === 101) {
				message = useLang.resolve(
					{
						m: 'Your changes have been successfully saved.',
						m_scn: 'Değişiklikleriniz başarılı bir şekilde kaydedilmiştir.',
					},
					'm',
				)
			}
			// 102
			else if (code === 102) {
				message = useLang.resolve(
					{
						m: 'Your changes have been successfully saved.',
						m_scn: 'Değişiklikleriniz başarılı bir şekilde kaydedilmiştir.',
					},
					'm',
				)
			}

			toast.types.success(message)
		},
		error: (m: any) => {
			toast.types.error(m)
			return new Error(m)
		},
		info: (m: any) => {
			toast.types.info(m)
		},
	}
}
