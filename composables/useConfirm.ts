export default function (opts: {
	q: string
	m: string
	btns: {
		confirm: {
			text: string
			color: string
		}
		cancel: {
			text: string
			color: string
		}
	}
	action: () => Promise<void>
}) {
	const { q, m, btns } = opts

	const container = document.createElement('div')
	container.classList.add('custom-confirm-container')

	const head = document.createElement('div')
	head.classList.add('custom-confirm-head')

	const icon = document.createElement('img')
	icon.classList.add('custom-confirm-icon')
	icon.src = '' // TODO: add icon

	head.appendChild(icon)

	const close = document.createElement('button')
	const closeIcon = document.createElement('img')
	close.classList.add('custom-confirm-close')
	closeIcon.classList.add('custom-confirm-close-icon')
	closeIcon.src = '' // TODO: add icon
	close.addEventListener('click', () => {
		container.remove()
	})
	close.appendChild(closeIcon)

	head.appendChild(close)

	const dialog = document.createElement('div')
	dialog.classList.add('custom-confirm-dialog')

	const title = document.createElement('h2')
	title.classList.add('custom-confirm-title')
	title.textContent = q

	const message = document.createElement('p')
	message.classList.add('custom-confirm-message')
	message.textContent = m

	const buttons = document.createElement('div')
	buttons.classList.add('custom-confirm-buttons')

	const confirmButton = document.createElement('button')
	confirmButton.classList.add('custom-confirm-button')
	confirmButton.classList.add(`custom-confirm-button-${btns?.confirm?.color || 'red'}`)
	confirmButton.textContent = btns?.confirm?.text || 'Continue'
	confirmButton.addEventListener('click', () => {
		useAsync(
			async function () {
				await opts.action()
				container.remove()
			},
			{ setLoader: useLoading.set as any },
		)
	})

	const cancelButton = document.createElement('button')
	cancelButton.classList.add('custom-confirm-button')
	cancelButton.classList.add(`custom-confirm-button-${btns?.cancel?.color || 'white'}`)
	cancelButton.textContent = btns?.cancel?.text || 'Close'
	cancelButton.addEventListener('click', () => {
		container.remove()
	})

	buttons.appendChild(cancelButton)
	buttons.appendChild(confirmButton)

	dialog.appendChild(head)
	dialog.appendChild(title)
	dialog.appendChild(message)
	dialog.appendChild(buttons)

	container.appendChild(dialog)

	document.body.appendChild(container)
}
