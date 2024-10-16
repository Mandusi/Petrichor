<template>
	<div class="hs-accordion-group">
		<div id="hs-basic-no-arrow-heading-one" class="hs-accordion active">
			<button
				class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-gray-800 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50"
				aria-controls="hs-basic-no-arrow-collapse-one"
			>
				Accordion #1
			</button>
			<div
				id="hs-basic-no-arrow-collapse-one"
				class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-no-arrow-heading-one"
			>
				<p class="text-gray-800">
					<em>This is the third item's accordion body.</em> It is hidden by default, until
					the collapse plugin adds the appropriate classes that we use to style each
					element. These classes control the overall appearance, as well as the showing
					and hiding via CSS transitions.
				</p>
			</div>
		</div>

		<div id="hs-basic-no-arrow-heading-two" class="hs-accordion">
			<button
				class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-gray-800 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50"
				aria-controls="hs-basic-no-arrow-collapse-two"
			>
				Accordion #2
			</button>
			<div
				id="hs-basic-no-arrow-collapse-two"
				class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-no-arrow-heading-two"
			>
				<p class="text-gray-800">
					<em>This is the third item's accordion body.</em> It is hidden by default, until
					the collapse plugin adds the appropriate classes that we use to style each
					element. These classes control the overall appearance, as well as the showing
					and hiding via CSS transitions.
				</p>
			</div>
		</div>

		<div id="hs-basic-no-arrow-heading-three" class="hs-accordion">
			<button
				class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-gray-800 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50"
				aria-controls="hs-basic-no-arrow-collapse-three"
			>
				Accordion #3
			</button>
			<div
				id="hs-basic-no-arrow-collapse-three"
				class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-no-arrow-heading-three"
			>
				<p class="text-gray-800">
					<em>This is the third item's accordion body.</em> It is hidden by default, until
					the collapse plugin adds the appropriate classes that we use to style each
					element. These classes control the overall appearance, as well as the showing
					and hiding via CSS transitions.
				</p>
			</div>
		</div>
	</div>
</template>
