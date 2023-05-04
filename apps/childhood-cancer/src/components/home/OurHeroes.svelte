<script lang="ts">
import { fade, fly } from "svelte/transition";
import Icon from "../Icon.svelte"
import Headline from "../_fragments/Headline.svelte"

let content = [
    {
        image: "Rylan.jpg",
        alt: "Young boy with angel wings on a swingset",
        name: "Rylan",
        heading: "Rylan is an Upper Peninsula 5-year-old who was being treated for high-risk neuroblastoma. He gained his Angel Wings on July 18, 2022.",
        story: "His father is very grateful for the assistance as Rylan received treatment at the University of Michigan hospitals in Ann Arbor, including surgery, chemotherapy, bone marrow transplants, and more. This treatment required lengthy hospitalizations, keeping Rylan and his mom away from his father and siblings for months."
    },
    {
        image: "Preslie.jpg",
        alt: "Baby girl in a super hero outfit and medical gear",
        name: "Preslie",
        heading: "On September 12th, 2022, Preslie got to ring the Milwaukee Children's Hospital bell, marking the end of 855 days of treatment!",
        story: "The Lions clubs of the UP can help those affected by childhood cancer to “Survive and Thrive”. The UP Lions childhood cancer program has helped many families thus far, including 4-year-old Preslie (in the photo), with funds for travel, food, and medical expenses. On their last day of treatment, children get to ring the Remission Bell at Milwaukee Children’s Hospital."
    },
    {
        image: "Abram.jpg",
        alt: "Toddler boy smiling",
        name: "Abram",
        heading: "Abram was diagnosed with a choriocarcinoma brain tumor shortly after his first birthday. Despite about nine months of excellent treatment and care, he died peacefully on July 2, 2019.",
        story: "As the Johnson family of Menominee mourned the death of their 22-month-old son Abram, they worked to save the money needed to create a very special gravestone. With the help of Menominee Granite Co., and Upper Peninsula Lions Clubs, they purchased a beautiful grave marker that will be engraved with the following poem written by Abram’s mother, Heidi:<br /><br />We thought we would watch over you.<br />There is now no need.<br />We thought we would make a straight arrow of you.<br />You fly true without us.<br />We thought to teach you all we knew.<br />You know more now than we ever dreamed.<br />We thought we would bring you to meet the Lord.<br />You see His very face.<br />We thought we would love you forever and ever.<br />That we will.<br />We will."
    },
    {
        image: "Eve.jpg",
        alt: "Toddler girl smiling at camera while holding a crayon",
        name: "Eve",
        heading: "Eve was diagnosed neuroblastoma shortly after her first birthday.",
        story: "A few weeks after our daughter's first birthday, we were sent to the ER in Marquette after several days of mild yet worrisome symptoms that wouldn't go away. That same night, we were completely shocked and devastated to learn that she had a form of pediatric cancer called neuroblastoma and had to be airlifted to a children's hospital immediately. She was admitted to Helen DeVos Children's Hospital in Grand Rapids, MI and my husband and I dropped everything to be with her.<br /><br /> That first hospital stay lasted for almost three weeks before getting discharged, and even then we weren't sure if we should spend too much time so far away from the hospital while she was getting treatment. We have spent more time in Grand Rapids in the last nine months than we have at our own home and traveled from Marquette to GR at least once every 1-2 weeks since last September. That's a seven hour drive one way with a toddler! We don't have access to certain things she needs for her treatment in Marquette, so sometimes even simple blood draws require us to be at the children's hospital and keep us away from home for a longer period of time.<br /><br />We also just had to spend over three weeks in NY for her surgery and we were so appreciative of the financial support that UP Lions Serve was able to provide for us during that time. UP Lions Serve has helped lighten the financial burden that we have experienced having to travel over 400+ miles each time just to get her the treatment she needs to fight this disease. Knowing we can count on them to help us if we are in need of gas money or help with groceries and other travel expenses is a huge relief, especially because our daughter's treatment requires so much travel. We are so grateful to have their support on this very difficult journey."
    }
]

let position = 0
$: current = content[position]

let clicked: "previous"|"next"|null = null
const handleClick_previous = () => {
    position == 0 ? position = content.length - 1 : position--
    clicked = "previous"
    setTimeout(() => clicked = null, 200)
}
const handleClick_next = () => {
    position == content.length - 1 ? position = 0 : position++
    clicked = "next"
    setTimeout(() => clicked = null, 200)
}

</script>

<section class="w-full pt-96 lg:pt-16 lg:mb-24">
    {#key current.image}
    <img 
        transition:fade={{duration: 400}}
        src="{import.meta.env.BASE_URL}/images/heroes/{current.image}"
        alt={current.alt}
        class="
            w-full xl:w-auto max-w-md
            absolute left-1/2 lg:left-auto lg:right-0 z-0
            -translate-x-1/2 -translate-y-96 lg:translate-x-0 lg:-translate-y-12
            rounded-3xl"/>
    {/key}
    <div class="
            w-screen lg:w-[calc(100vw-26rem)] py-16 lg:pl-16 2xl:pl-[25vw] lg:pr-16
            relative z-10
            flex justify-center
            bg-white rounded-t-3xl lg:rounded-tl-none lg:rounded-r-3xl
            drop-shadow-[0_-7px_5px_rgba(70,70,155,0.1)] lg:drop-shadow-blue">
        <div class="max-w-xl">
            <div class="
                    w-full lg:w-auto pb-8
                    flex items-center justify-center gap-4 xl:gap-8">
                <button
                    aria-label="View previous hero"
                    on:click={handleClick_previous}
                    class="
                        w-12 h-12
                        flex items-center justify-center
                        bg-orange-light hover:bg-orange rounded-full
                        transition-all
                        {clicked == "previous" ? 'scale-75 hover:scale-75' : 'scale-100 hover:scale-95'}">
                    <Icon id="arrow" styling="translate-y-0.5 scale-50 rotate-180" />
                </button>
                <Headline inline>Our <span class="text-orange">Heroes</span></Headline>
                <button
                    aria-label="View next hero"
                    on:click={handleClick_next}
                    class="
                        w-12 h-12
                        flex items-center justify-center
                        bg-orange-light hover:bg-orange rounded-full
                        transition-all
                        {clicked == "next" ? 'scale-75 hover:scale-75' : 'scale-100 hover:scale-95'}">
                    <Icon id="arrow" styling="-translate-y-0.5 scale-50" />
                </button>
            </div>
            {#key current.name}
            <div
                in:fly={{ y: 20, duration: 400 }}
                class="w-full px-8 space-y-4">
                <h3 class="text-xl">{current.name}</h3>
                <p class="font-bold">{current.heading}</p>
                <p>{@html current.story}</p>
            </div>
            {/key}
        </div>
    </div>
</section>
