<script lang="ts">
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";

  interface Content {
    heading: string;
    blurb: string;
    images: { src: string; alt: string; colSpan: number }[];
  }

  export let content: Content;
</script>

<ConstrainedWidth class="py-12 md:py-24">
  <div class="flex flex-col items-center text-center space-y-12">
    <div class="space-y-4">
      {#if content?.heading}
        <h2 class="text-4xl text-gray-800">{content.heading}</h2>
      {/if}
      {#if content?.blurb}
        <p class="max-w-4xl text-gray-500">{content.blurb}</p>
      {/if}
    </div>

    <div class="grid grid-cols-4 items-center gap-4">
      {#each content.images as image}
        <picture 
          class:col-span-2={image?.colSpan === 2}
          class="h-60 w-full rounded-lg overflow-hidden col-span-1"
        >
          <img class="w-full h-full object-cover" src={image.src} alt={image.alt}>
        </picture>
      {/each}
    </div>
  </div>
</ConstrainedWidth>