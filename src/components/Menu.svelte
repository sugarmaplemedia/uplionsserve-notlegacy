<script lang="ts">
	import { debounce } from "lodash-es"

	// Functionality for opening/closing hamburger menu
	let menuOpen = false
	const handleMenu = () => {
		menuOpen = !menuOpen
	}
	const handleMenuKey = (event: KeyboardEvent) => {
		if (event.key === "Space" || event.key === "Enter") {
			handleMenu()
		}
	}

	let donationOpen = false
	const handleDonation = () => {
		donationOpen = !donationOpen
	}
	const handleDonationKey = (event: KeyboardEvent) => {
		if (event.key === "Space" || event.key === "Enter") {
			handleDonation()
		}
	}

	// Functionality for bg color switch on scroll
	let atTop: boolean = true
	const initializeAtTop = () => {
		if (window.scrollY > 50) {
			atTop = false
		}
	}
	const handleScroll = () => {
		const scrollPos: number = window.scrollY
		if (scrollPos <= 50 && atTop) {
			atTop = false
		} else if (scrollPos <= 50 && !atTop) {
			atTop = true
		}
	}
</script>

<svelte:window
	on:load={initializeAtTop}
	on:scroll={debounce(handleScroll, 100, { leading: true })}
/>
<header
	class="
    w-full
    fixed z-20
    flex justify-between items-center
    transition-all
    
    before:w-full
    before:absolute before:left-0 before:bottom-0 before:-z-20
    before:bg-white before:drop-shadow-menu
    {atTop ? 'before:h-0' : 'before:h-full'}
    {donationOpen
		? 'md:before:translate-y-0'
		: 'md:before:-translate-y-[240px]'}
    before:transition-all before:duration-300"
>
	<div
		class="
            w-full px-4 sm:px-8 md:px-16
            flex justify-between items-center md:items-start gap-8
            transition-all duration-500 ease-[cubic-bezier(.61, .16, .07, 1.46)]
            {atTop ? 'pt-10 md:pt-16' : 'py-4'}"
	>
		<div class="flex items-center gap-8">
			<div class="flex items-center gap-2 h-16 relative z-10">
				<a href="https://lionsclubs.org/en">
					<img
						src="/graphics/brands/logo-lions-uplscolor.svg"
						alt="Lions Clubs International logo"
						class="w-16 {atTop
							? 'brightness-0 invert'
							: 'brightness-100 invert-0'}"
					/>
				</a>
				<a href="/">
					<img
						src="/graphics/brands/logo-upls-short-uplscolor.svg"
						alt="U.P. Lions Serve abbreviated logo"
						class="w-28 {atTop
							? 'brightness-0 invert'
							: 'brightness-100 invert-0'}"
					/>
				</a>
			</div>
			<button
				on:click={handleMenu}
				class="
                    relative z-50
                    hidden md:flex gap-2
                    uppercase
                    cursor-pointer
                    {atTop ? 'text-white' : 'text-upls-orange'}"
			>
				Service programs
				<span
					class="
                        block
                        transition-all duration-200 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                        {menuOpen
						? 'rotate-[135deg] translate-y-[3.5px]'
						: '-rotate-45 -translate-y-[2.5px]'}">&#x221F;</span
				>
			</button>
		</div>
		<div
			on:click={handleMenu}
			on:keypress={handleMenuKey}
			class="
                w-10 md:hidden
                relative z-10
                flex flex-col items-end
                cursor-pointer
                transition-all duration-300 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                {!menuOpen ? 'gap-1.5' : 'gap-2'}"
		>
			<hr
				class="
                    h-1.5
                    rounded-full border-none
                    transition-all duration-300 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                    {!menuOpen ? 'w-full' : 'w-1/2'}
                    {atTop ? 'bg-white' : 'bg-upls-orange'}"
			/>
			<hr
				class="
                    h-1.5
                    rounded-full border-none
                    transition-all duration-300 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                    {!menuOpen ? 'w-full' : 'w-3/4'}
                    {atTop ? 'bg-white' : 'bg-upls-orange'}"
			/>
			<hr
				class="
                    w-full h-1.5
                    rounded-full border-none
                    {atTop ? 'bg-white' : 'bg-upls-orange'}"
			/>
		</div>
		<div class="md:pt-2 hidden md:flex items-start gap-4">
			<a
				href="https://facebook.com/uplionsserve"
				class="w-8 fill-upls-orange pt-[0.8rem] {atTop
					? 'brightness-0 invert'
					: 'brightness-100 invert-0'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
					/></svg
				>
			</a>
			<a
				href="https://instagram.com/uplionsserve"
				class="w-8 fill-upls-orange pt-3 {atTop
					? 'brightness-0 invert'
					: 'brightness-100 invert-0'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/></svg
				>
			</a>
			<div
				class="
                    hidden md:flex w-full
                    flex-col justify-end items-end
                    grow"
			>
				<div
					class="
                        w-full max-w-xs md:w-44 overflow-hidden
                        relative
                        rounded-t-md
                        text-center
                        cursor-pointer
                        transition-all"
				>
					<div
						on:keypress={handleDonation}
						on:click={handleDonation}
						class="
                            pt-3 pb-2.5
                            relative z-10
                            transition-all duration-300
                            {atTop
							? 'bg-white text-upls-orange'
							: 'bg-upls-orange text-white'}"
					>
						<span class="select-none">Donate</span>
						<span
							class="
                            inline-block
                            transition-all duration-200 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                            {donationOpen
								? 'rotate-[135deg] translate-y-[3.5px]'
								: '-rotate-45 -translate-y-[2.5px]'}
                            select-none">&#x221F;</span
						>
					</div>
					<div
						class="
                            z-0
                            transition-all duration-300
                            {donationOpen
							? 'translate-y-0'
							: '-translate-y-[248px]'}"
					>
						<div
							class="
                                p-2
                                flex flex-col gap-2
                                {atTop
								? 'bg-white'
								: 'bg-upls-orange'} rounded-b-md
                                font-bold
                                transition-all duration-300"
						>
							<!-- TODO: Fix CC link on website launch -->
							<a
								href="{import.meta.env
									.PUBLIC_CHILDHOODCANCER_URL}/#donation"
								class="py-2 hover:bg-[#f4f4f4] rounded-md transition-all {atTop
									? 'text-[#000]'
									: 'text-white hover:text-upls-orange'}"
							>
								Childhood Cancer
							</a>
							<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
							<a
								href="{import.meta.env
									.PUBLIC_DEFENSEAGAINSTDIABETES_URL}/#donation"
								class="py-2 hover:bg-[#f4f4f4] rounded-md transition-all {atTop
									? 'text-[#000]'
									: 'text-white hover:text-upls-orange'}"
							>
								Defense Against Diabetes
							</a>
							<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
							<a
								href="https://donorbox.org/project-kidsight"
								class="py-2 hover:bg-[#f4f4f4] rounded-md transition-all {atTop
									? 'text-[#000]'
									: 'text-white hover:text-upls-orange'}"
							>
								Project Kidsight
							</a>
							<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
							<!-- TODO: Fix Hunger link on site launch -->
							<a
								href="https://donorbox.org/lions-hunger"
								class="py-2 hover:bg-[#f4f4f4] rounded-md transition-all {atTop
									? 'text-[#000]'
									: 'text-white hover:text-upls-orange'}"
							>
								Lions Hunger
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<menu
		class="
        w-full h-screen md:h-auto pt-32 pr-4 md:w-auto md:pt-0
        fixed top-0 z-30 md:static md:top-auto md:z-0
        flex justify-end md:block
        {!menuOpen ? 'invisible md:visible' : 'visible'}"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={handleMenu}
			class="
                w-screen h-[100dvh]
                fixed top-0 left-0 -z-30
                transition-all duration-300 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                {!menuOpen ? 'md:invisible' : ''}"
		/>
		<ul
			class="
                w-full md:w-auto h-full md:h-auto pl-4 md:pl-[17.25rem] pb-4 md:pb-0
                relative z-100 md:absolute md:top-0 left-0
                flex flex-col gap-6 items-end md:gap-2 md:items-start
                text-2xl font-bold md:text-lg
                transition-all duration-300 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                {!menuOpen ? 'opacity-0 invisible' : 'opacity-100 visited:'}
                {atTop ? 'md:pt-32' : 'md:pt-28'}"
		>
			<a
				on:click={handleMenu}
				href={import.meta.env.PUBLIC_CHILDHOODCANCER_URL}
				>Childhood Cancer</a
			>
			<a
				on:click={handleMenu}
				href={import.meta.env.PUBLIC_DEFENSEAGAINSTDIABETES_URL}
				>Defense Against Diabetes</a
			>
			<a
				on:click={handleMenu}
				href={import.meta.env.PUBLIC_PROJECTKIDSIGHT_URL}
				>Project Kidsight</a
			>
			<a on:click={handleMenu} href={import.meta.env.PUBLIC_HUNGER_URL}
				>D10 Hunger</a
			>
			<div
				class="
                    md:hidden w-full md:w-44 overflow-hidden
                    relative
                    rounded-t-md
                    text-center
                    cursor-pointer
                    transition-all"
			>
				<div
					on:keypress={handleDonation}
					on:click={handleDonation}
					class="
                        pt-6 pb-5
                        relative z-10
                        bg-white text-upls-orange"
				>
					<span class="select-none">Donate</span>
					<span
						class="
                        inline-block
                        transition-all duration-200 ease-[cubic-bezier(.61, .16, .07, 1.46)]
                        {donationOpen
							? 'rotate-[135deg] translate-y-[3.5px]'
							: '-rotate-45 -translate-y-[2.5px]'}
                        select-none">&#x221F;</span
					>
				</div>
				<div
					class="
                        z-0
                        transition-all duration-300
                        {donationOpen
						? 'translate-y-0'
						: '-translate-y-[300px]'}"
				>
					<div
						class="
                            p-2
                            flex flex-col gap-2
                            bg-white rounded-b-md
                            text-[#000] font-bold"
					>
						<!-- TODO: Fix CC link on website launch -->
						<a
							href="{import.meta.env
								.PUBLIC_CHILDHOODCANCER_URL}/#donation"
							class="py-4 hover:bg-[#f4f4f4] rounded-md transition-all"
						>
							Childhood Cancer
						</a>
						<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
						<a
							href="{import.meta.env
								.PUBLIC_DEFENSEAGAINSTDIABETES_URL}/#donation"
							class="py-4 hover:bg-[#f4f4f4] rounded-md transition-all"
						>
							Defense Against Diabetes
						</a>
						<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
						<a
							href="https://donorbox.org/project-kidsight"
							class="py-2 hover:bg-[#f4f4f4] rounded-md transition-all"
						>
							Project Kidsight
						</a>
						<hr class="mx-8 border-[rgba(0,0,0,0.075)]" />
						<!-- Change on site launch -->
						<a
							href="https://donorbox.org/lions-hunger"
							class="py-4 hover:bg-[#f4f4f4] rounded-md transition-all"
						>
							Lions Hunger
						</a>
					</div>
				</div>
			</div>
		</ul>
	</menu>
</header>
