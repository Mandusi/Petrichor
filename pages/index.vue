<template>
	<Navbar
		@to-faq="navBtnHandler(FaqEl)"
		@to-home="navBtnHandler(HomeEl)"
		@to-mentors="navBtnHandler(MentorsEl)"
		@to-contact="navBtnHandler(ContactEl)"
	/>
	<Home ref="HomeEl" />
	<Mentors ref="MentorsEl" @to-contact="navBtnHandler(ContactEl)" />
	<AboutUs />
	<FAQ ref="FaqEl" />
	<Contact ref="ContactEl" />
</template>

<script setup>
import AboutUs from '../components/AboutUs.vue'

const HomeEl = ref()
const MentorsEl = ref()
const FaqEl = ref()
const ContactEl = ref()

function navBtnHandler(element) {
	element.ScrollPosition?.scrollIntoView({ behavior: 'smooth' })
}
</script>
