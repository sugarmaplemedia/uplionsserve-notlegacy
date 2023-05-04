<script>
import Button from "./Button.svelte";
import Icon from "./Icon.svelte";

</script>

<footer class="relative z-0">
    <div class="text-white bg-navy flex flex-col items-center pt-16 pb-8">
        <div class="
                w-full max-w-md md:max-w-3xl xl:max-w-5xl px-8
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            <!-- Donate and Get Help buttons -->
            <div class="
                    flex md:flex-col gap-4">
                <Button
                    href="{import.meta.env.BASE_URL}/donate"
                    width={"fill"}>
                    <Icon id="love" color={"navy-dark"} styling="w-4 h-4"/>
                    <span>Donate</span>
                </Button>
                <Button
                    href="{import.meta.env.BASE_URL}/get-help"
                    width={"fill"}>
                    <Icon id="hand" color={"navy-dark"} styling="w-4 h-4"/>
                    <span>Get Help</span>
                </Button>
            </div>

            <!-- Page Links -->
            <div class="flex justify-around">
                <div>
                    <h3 class="mb-4 md:mb-2 text-white font-sans font-bold uppercase text-xl">Partners</h3>
                    <menu class="flex flex-col gap-4 md:gap-1">
                        <li><a href="{import.meta.env.BASE_URL}/partners/tour-da-yoop-eh">Tour Da Yoop, Eh</a></li>
                        <li><a href="{import.meta.env.BASE_URL}/partners/superior-health-foundation">SHF Annual Gala</a></li>
                        <li><a href="{import.meta.env.BASE_URL}/partners">All Partners</a></li>
                    </menu>
                </div>
                <div>
                    <h3 class="mb-4 md:mb-2 text-white font-sans font-bold uppercase text-xl">Pages</h3>
                    <menu class="flex flex-col gap-4 md:gap-1">
                        <li><a href="{import.meta.env.BASE_URL}/about">About Us</a></li>
                        <li><a href="{import.meta.env.BASE_URL}/get-help">Get Help</a></li>
                        <li><a href="{import.meta.env.BASE_URL}/donate">Donate</a></li>
                    </menu>
                </div>
            </div>

            <!-- Contact info -->
            <div class="flex flex-col items-center gap-4">
                <div class="space-y-4">
                    <a href="mailto:cc@uplionsserve.org" class="flex items-center gap-4">
                        <Icon id="mail" color="white" styling="w-5 h-5 translate-y-0.5" />
                        <p class="text-white">cc@uplionsserve.org</p>
                    </a>
                    <div class="flex items-center gap-4">
                        <Icon id="location" color="white" styling="w-5 h-5" />
                        <p class="text-white">
                            U.P. Lions Serve<br/>
                            Childhood Cancer<br/>
                            PO BOX 107<br/>
                            Engadine, Michigan 49827
                        </p>
                    </div>
                </div>
            </div>

            <!-- Logo and social media -->
            <div class="
                    xl:col-span-3
                    flex flex-col items-center gap-4">
                <a href="{import.meta.env.BASE_URL}" class="w-3/4 max-w-[240px]">
                    <img
                        src="{import.meta.env.BASE_URL}/graphics/logos/cc-logo-gold.svg"
                        alt="Childhood Cancer Logo" />
                </a>
                <div class="w-full max-w-xs md:max-w-sm px-0 md:px-4 lg:px-8 flex items-center gap-2">
                    <a href="https://www.lionsclubs.org/en">
                        <img
                            src="{import.meta.env.BASE_URL}/graphics/logos/lions-international.svg"
                            alt="Lions Clubs International Logo"
                            class="h-16 lg:h-14 brightness-0 invert" />
                    </a>
                    <a href="https://uplionsserve.org" class="w-full">
                        <img
                            src="{import.meta.env.BASE_URL}/graphics/logos/up-lions-serve.svg"
                            alt="Lions Clubs International Logo" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8">
                    <div class="flex items-center gap-2">
                        <Icon id="facebook" color="white" styling="w-5 h-5 translate-y-0.5" />
                        <a 
                            href="https://facebook.com/uplionsserve"
                            target="_blank noreferrer"
                            class="text-white">/uplionsserve</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <Icon id="instagram" color="white" styling="w-5 h-5 " />
                        <a 
                            href="https://instagram.com/uplionsserve"
                            target="_blank noreferrer"
                            class="text-white">@uplionsserve</a>
                    </div>
                </div>
            </div>

            <!-- Disclaimer -->
            <p class="md:col-span-2 xl:col-span-3 xl:px-32 text-white text-xs">
                The content and views shared on uplionsserve.org is provided for information purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or 911.
            </p>
        </div>

        <!-- Watermark -->
        <a href="https://sugarmaple.media" class="group
                w-full pt-8
                flex items-center justify-center gap-2
                no-underline">
            <span>Built by </span>
            <img 
                src="{import.meta.env.BASE_URL}/graphics/logos/smm-wordmark.svg"
                alt="Sugar Maple Media Logo"
                class="w-48 group-hover:scale-105 group-hover:-rotate-2 transition-all">
        </a>
    </div>
</footer>