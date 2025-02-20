<template>
	<Hero
		ref="HomeEl"
		@to-news="navBtnHandler(NewsEl)"
		@to-about-us="navBtnHandler(AboutUsEl)"
		@to-faq="navBtnHandler(FaqEl)"
		@to-contact="navBtnHandler(ContactEl)"
	/>
	<News ref="NewsEl" />
	<V2AboutUs ref="AboutUsEl" />
	<FAQ ref="FaqEl" />
	<V2Contact ref="ContactEl" />

	<Footer
		@to-home="navBtnHandler(HomeEl)"
		@to-news="navBtnHandler(NewsEl)"
		@to-about-us="navBtnHandler(AboutUsEl)"
		@to-faq="navBtnHandler(FaqEl)"
		@to-contact="navBtnHandler(ContactEl)"
	/>
</template>

<script setup>
const HomeEl = ref()
const NewsEl = ref()
const AboutUsEl = ref()
const FaqEl = ref()
const ContactEl = ref()

function navBtnHandler(element) {
	element.ScrollPosition?.scrollIntoView({ behavior: 'smooth' })
	console.log('Works!')
}
</script>
