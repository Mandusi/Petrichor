export interface announcement {
	id: number
	title: string
	date: string
	imagePath: string
	readTime: string
	content: string[]
	filePath?: string
}

export interface faq {
	category: string
	questions: { question: string; answer: string }[]
}

export interface mentor {
	name: string
	title: string
	profilePhoto: string
	promotion: string
}
