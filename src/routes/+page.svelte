<script lang="ts">
	import Clients from "$lib/components/blocks/Clients.svelte";
	import Featured from "$lib/components/blocks/Featured.svelte";
	import Gallery from "$lib/components/blocks/Gallery.svelte";
	import PricingTable from "$lib/components/blocks/PricingTable.svelte";
	import Hero from "$lib/components/ui/Hero.svelte";
	import Subscribe from "$lib/components/ui/Subscribe.svelte";

	export let data;
	export let content = {
		Hero_Content: {
			heading: "We invest in the world's potential.",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		},
		Clients_Content: {
			heading: "Trusted by the world's best companies",
			blurb: "We help businesses of all sizes to reach their goals."
		},
		Gallery_Content: {
			heading: "Our latest projects",
			blurb: "We help businesses of all sizes to reach their goals."
		},
		Featured_Content: {
			heading: "Designed for business teams like yours",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		},
		PricingTable_Content: {
			heading: "Designed for business teams like yours",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
			pricingPanels: data.pricing
		}
	};

	$: ({ Hero_Content, Clients_Content, Gallery_Content, Featured_Content, PricingTable_Content } = content);
</script>

<Hero content={Hero_Content} />

<Clients content={Clients_Content} />

<Gallery content={Gallery_Content} />

<Featured content={Featured_Content} />

<PricingTable content={PricingTable_Content} />

<Subscribe />