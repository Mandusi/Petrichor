<template>
	<div class="flex w-full justify-center overflow-hidden">
		<img
			src="/public/landscape1.png"
			alt="bacground-image"
			class="z-10 mb-0 w-full overflow-hidden"
		/>

		<img
			src="/public/sun.png"
			alt="sun"
			class="sunrise-animation absolute mx-auto w-[850px] lg:w-[1000px]"
		/>

		<img
			src="/public/rain.png"
			alt="rain"
			class="rain-animation absolute z-20 opacity-0"
		/>

		<div class="absolute flex w-full justify-center">
			<div>
				<img
					src="/public/cloud1.png"
					alt="cloud"
					class="clouds-animation1 w-96 opacity-0"
				/>
			</div>
			<div>
				<img
					src="/public/cloud2.png"
					alt="cloud"
					class="clouds-animation1 w-96 opacity-0"
				/>
			</div>
			<div>
				<img
					src="/public/cloud3.png"
					alt="cloud"
					class="clouds-animation w-96 opacity-0"
				/>
			</div>
			<div>
				<img
					src="/public/cloud4.png"
					alt="cloud"
					class="clouds-animation w-96 opacity-0"
				/>
			</div>
		</div>
	</div>
</template>
<style scoped>
.rain-animation {
	animation-name: rain;
	animation-duration: 4s;
}

.sunrise-animation {
	animation-name: sunrise;
	animation-duration: 4s;
	animation-timing-function: ease-out;
	z-index: 1;
	filter: drop-shadow(0 0 4rem rgb(255, 217, 0));
}

.clouds-animation {
	animation-name: clouds;
	animation-duration: 6s;
	animation-timing-function: ease;
}

.delay {
	animation-delay: 500ms;
}

.clouds-animation1 {
	animation-name: clouds1;
	animation-duration: 6s;
	animation-timing-function: ease;
}
@keyframes rain {
	0% {
		transform: translateY(-100%);
		opacity: 1;
	}
	100% {
		transform: translateY(100%);
		opacity: 1;
	}
}

@keyframes sunrise {
	0% {
		transform: translateY(100%);
	}

	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes clouds {
	0% {
		opacity: 1;
	}
	10% {
		transform: translateX(-15px);
	}

	100% {
		transform: translateX(500px);
		opacity: 0;
	}
}

@keyframes clouds1 {
	0% {
		opacity: 1;
	}
	10% {
		transform: translateX(15px);
	}

	100% {
		transform: translateX(-500px);
		opacity: 0;
	}
}
</style>
