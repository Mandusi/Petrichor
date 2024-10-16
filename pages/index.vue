<template>
	<Navbar
		@to-faq="navBtnHandler(FaqEl)"
		@to-home="navBtnHandler(HomeEl)"
		@to-mentors="navBtnHandler(MentorsEl)"
	/>
	<Home ref="HomeEl" />
	<Mentors ref="MentorsEl" />
	<FAQ ref="FaqEl" />
	<AccordionList />
</template>

<script setup>
import AccordionList from '../components/AccordionList.vue'
import Mentors from '../components/Mentors.vue'

const HomeEl = ref()
const MentorsEl = ref()
const FaqEl = ref()

function navBtnHandler(element) {
	element.ScrollPosition?.scrollIntoView({ behavior: 'smooth' })
}
</script>
