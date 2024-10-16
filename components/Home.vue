<template>
	<div ref="ScrollPosition" class="flex w-full justify-center overflow-hidden">
		<div class="w-full max-w-[1200px]">
			<div class="flex flex-col items-center justify-center pt-20">
				<div class="absolute top-48 flex items-center justify-center">
					<img src="/file.png" alt="" class="z-10 w-[700px]" />
				</div>
				<div class="absolute top-48 flex items-center justify-center">
					<p class="z-[-1] font-bodoni text-[400px] text-[#f3d8c786]">MENTOR</p>
				</div>
				<h1 class="mt-5 max-w-[780px] text-center font-playfair text-6xl"
					>Mentorların Desteği ile Hukuk Dünyasında Zirveye Tırman</h1
				>
			</div>
			<div>
				<div class="ml-auto mr-0 w-96 pt-36 text-right">
					<p
						>Yağmur sonrası toprağın taze kokusu olan petrikor, doğanın yeniden doğuşunu
						ve yenilenmeyi simgeler.</p
					>
				</div>
				<div class="flex w-[350px] flex-col items-center gap-32 pt-32 text-justify">
					<p>
						Amacımız, genç hukukçuların bilgi ve deneyimle beslenip, tıpkı yağmurun
						toprağa can verdiği gibi, geleceğin adalet savunucularını yetiştirmektir.
					</p>
					<img src="/hammer.png" class="w-36" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()

defineExpose({ ScrollPosition })
</script>
