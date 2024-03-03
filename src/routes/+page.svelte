<script lang="ts">
	import Clients from "$lib/components/blocks/Clients.svelte";
import Hero from "$lib/components/ui/Hero.svelte";

	export let content = {
		Hero: {
			heading: "We invest in the world's potential.",
			blurb: "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		}
	};
</script>

<Hero content={content.Hero} />

<Clients />