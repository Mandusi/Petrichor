import emailjs from '@emailjs/browser'

const options = {
	publicKey: process.env.EMAIL_PUBLIC_KEY,
	blockHeadless: true,
	limitRate: { id: 'contact_form', throttle: 1000 },
}

emailjs.init(options)
