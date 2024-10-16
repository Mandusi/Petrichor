<template>
	<div class="flip-card h-[320px] w-[260px]">
		<div class="flip-card-inner border border-black/10 pt-5 bg-blend-saturation">
			<div class="flip-card-front flex flex-col gap-3">
				<div class="flex flex-col items-center justify-center"
					><div
						class="h-28 w-28 overflow-hidden rounded-full border-[1px] border-black border-opacity-20 outline-none"
					>
						<img class="" :src="`/mentor-pps/${profilePhoto}`" />
					</div>

					<h1 class="font-bold">{{ name }}</h1>
					<span class="text-sm text-slate-500">{{ title }}</span>
				</div>
				<div class="">
					<p class="text px-4 text-center text-sm font-medium text-slate-800/90">{{
						promotion
					}}</p>
				</div>
			</div>
			<div class="flip-card-back">
				<h1>John Doe</h1>
				<p>Architect & Engineer</p>
				<p
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum debitis,
					nisi perspiciatis fugit repellendus? Atque praesentium enim natus libero!</p
				>

				<div
					class="font m-5 flex items-center justify-center bg-amber-400 p-2 font-bold text-slate-900"
				>
					<span>Hemen Başvur</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	name: { type: String, required: true },
	title: { type: String, required: true },
	promotion: { type: String, required: true },
	profilePhoto: { type: String, required: true },
})
</script>

<style scoped>
.flip-card {
	perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
	transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
}

/* Style the back side */
.flip-card-back {
	transform: rotateY(180deg);
}
</style>
