<template>
	<Hero
		ref="HomeEl"
		@to-news="navBtnHandler(NewsEl)"
		@to-about-us="navBtnHandler(AboutUsEl)"
		@to-faq="navBtnHandler(FaqEl)"
		@to-contact="navBtnHandler(ContactEl)"
	/>
	<News ref="NewsEl" />
	<AboutUs ref="AboutUsEl" />
	<FAQ ref="FaqEl" />
	<Contact ref="ContactEl" />

	<Footer
		@to-home="navBtnHandler(HomeEl)"
		@to-news="navBtnHandler(NewsEl)"
		@to-about-us="navBtnHandler(AboutUsEl)"
		@to-faq="navBtnHandler(FaqEl)"
		@to-contact="navBtnHandler(ContactEl)"
	/>
</template>

<script setup lang="ts">
const HomeEl = ref()
const NewsEl = ref()
const AboutUsEl = ref()
const FaqEl = ref()
const ContactEl = ref()

function navBtnHandler(element: any) {
	element.ScrollPosition?.scrollIntoView({ behavior: 'smooth' })
	console.log('Works!')
}
</script>
