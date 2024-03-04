<script lang="ts">
  import ConstrainedWidth from '$lib/components/layout/ConstrainedWidth.svelte';
	import Icon from '@iconify/svelte';

  interface Content {
    heading: string;
    blurb: string;
  }

  export let content: Content;
</script>

<ConstrainedWidth class="pt-24 overflow-hidden">
  <div class="flex flex-col md:flex-row items-center">
    <div class="flex flex-col items-center md:w-8/12 text-center space-y-8 py-2 md:py-20">
      <div class="space-y-6">
        {#if content?.heading}
          <h1 class="text-6xl text-gray-900">{content.heading}</h1>
        {/if}
        {#if content?.blurb}
          <p class="text-gray-500 text-xl">{content.blurb}</p>
        {/if}
      </div>

      <div class="flex items-center space-x-4 md:space-x-6">
        <a class="bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center space-x-3" href="/learn-more">
          <span>Learn more</span>
          <Icon icon="fa:arrow-right" />
        </a>
        <a class="border border-gray-300 text-gray-800 py-3 px-6 rounded-lg flex items-center space-x-3" href="https://www.youtube.com">
          <Icon icon="fa:video-camera" />
          <span>Watch Video</span>
        </a>
      </div>
    </div>

    <div class="flex md:w-4/12 md:pb-[37.5vw] relative">
      <picture class="flex md:w-[50vw] md:absolute aspect-square md:aspect-[785/630]">
        <img class="relative h-full w-full object-cover object-top" src="/images/hero-img.png" alt="">
      </picture>
    </div>
  </div>
</ConstrainedWidth>