<template>
	<Navbar
		@to-faq="navBtnHandler(FaqEl)"
		@to-home="navBtnHandler(HomeEl)"
		@to-mentors="navBtnHandler(MentorsEl)"
	/>
	<Home ref="HomeEl" />
	<Mentors ref="MentorsEl" />
	<FAQ ref="FaqEl" />
	<Contact />
</template>

<script setup>
const HomeEl = ref()
const MentorsEl = ref()
const FaqEl = ref()

function navBtnHandler(element) {
	element.ScrollPosition?.scrollIntoView({ behavior: 'smooth' })
}
</script>
