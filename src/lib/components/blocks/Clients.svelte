<script lang="ts">
	import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";

  interface Content {
    heading: string;
    blurb: string;
    images: { src: string; alt: string; }[];
  }

  export let content: Content;
</script>

<ConstrainedWidth class="py-12 md:py-24">
  <div class="flex flex-col items-center space-y-12">
    {#if content?.heading}
      <h2 class="text-4xl">{content.heading}</h2>
    {/if}
    {#if content?.blurb}
      <p>{content.blurb}</p>
    {/if}
  
    {#if content?.images?.length}
      <ul class="flex items-center justify-center flex-wrap gap-14">
        {#each content.images as image}
          <li>
            <img src={image.src} alt={image.alt}>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</ConstrainedWidth>