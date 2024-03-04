<script lang="ts">
	import Clients from "$lib/components/blocks/Clients.svelte";
	import Featured from "$lib/components/blocks/Featured.svelte";
	import Gallery from "$lib/components/blocks/Gallery.svelte";
	import PricingTable from "$lib/components/blocks/PricingTable.svelte";
	import Hero from "$lib/components/ui/Hero.svelte";
	import Subscribe from "$lib/components/ui/Subscribe.svelte";

	interface PricingPlan {
    amount: string;
    unit: string;
  }
	interface PricingData {
    monthlyPricing: Record<string, PricingPlan>; // Use Record for a map of string to PricingPlan
    yearlyPricing: Record<string, PricingPlan>;
  }

	export let data: PricingData;
	export let content = {
		Hero_Content: {
			heading: "We invest in the world's potential.",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		},
		Clients_Content: {
			heading: "You’ll be in good company",
			blurb: "",
			images: [
				{ src: "/images/Google.png", alt: "Google Client 1" },
				{ src: "/images/Microsoft.png", alt: "Microsoft Client 2" },
				{ src: "/images/Spotify.png", alt: "Spotify Client 3" },
				{ src: "/images/Mailchimp.png", alt: "Mailchimp Client 4" }
			]
		},
		Gallery_Content: {
			heading: "We didn't reinvent the wheel",
			blurb: "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
			images: [
				{ src: "/images/image-1.jpg", alt: "team", colSpan: 2 },
				{ src: "/images/image-2.jpg", alt: "team", colSpan: 1 },
				{ src: "/images/image-3.jpg", alt: "team", colSpan: 1 },
				{ src: "/images/image-4.jpg", alt: "team", colSpan: 1 },
				{ src: "/images/image-5.jpg", alt: "team", colSpan: 2 },
				{ src: "/images/image-6.jpg", alt: "team", colSpan: 1 }
			]
		},
		Featured_Content: {
			heading: "Designed for business teams like yours",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		},
		PricingTable_Content: {
			heading: "Designed for business teams like yours",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
			monthlyPricing: data.monthlyPricing,
			yearlyPricing: data.yearlyPricing
		},
		Subscribe_Content: {
			heading: "Sign up for our newsletter",
			blurb: "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
			ctaLabel: "Subscribe"
		}
	};

	$: ({ Hero_Content, Clients_Content, Gallery_Content, Featured_Content, PricingTable_Content, Subscribe_Content } = content);
</script>

<Hero content={Hero_Content} />

<Clients content={Clients_Content} />

<Gallery content={Gallery_Content} />

<Featured content={Featured_Content} />

<PricingTable content={PricingTable_Content} />

<Subscribe content={Subscribe_Content} />

<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>
<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>
<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>
<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>
<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>
<picture class=" h-60 w-full rounded-lg overflow-hidden">
	<img class="w-full h-full object-cover" >
</picture>