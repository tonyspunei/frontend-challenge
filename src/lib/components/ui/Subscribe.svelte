<script lang="ts">
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";
	import Icon from "@iconify/svelte";

  interface Content {
    heading: string;
    blurb: string;
    ctaLabel: string;
  }

  export let content: Content;
  let emailAddress: string = '';
  let message: string = ''

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (): void => {
    const isValid = emailRegex.test(emailAddress.toLocaleLowerCase());
    message = isValid ? 'Thank you for subscribing!' : 'Whoops! Please enter a valid email address';
  }
</script>

<ConstrainedWidth class="py-12 md:py-24">
  <div class="flex flex-col items-center text-center space-y-8">
    <div class="space-y-4 max-w-2xl">
      <h2 class="text-4xl text-gray-800">{content.heading}</h2>
      <p class="text-xl text-gray-500">{content.blurb}</p>
    </div>
  
    <form class="max-w-md w-full space-y-2" on:submit|preventDefault={handleSubmit}>
      <div class="flex items-center rounded-lg overflow-hidden w-full text-gray-800">
        <div class="flex items-center border-2 border-gray-300 bg-gray-200 pl-3 w-full">
          <Icon icon="material-symbols:mail-outline" class="h-5 w-5 " />
          <input class="py-3 px-4 outline-none bg-gray-200 placeholder-gray-500" type="text" bind:value={emailAddress} name="email" placeholder="Enter your email">
        </div>
        <button class="h-full py-3 px-4 bg-blue-600 text-white border-2 border-blue-600">{content.ctaLabel}</button>
      </div>
      <p class="text-sm text-gray-500">We care about the protection of your data. Read our <a class="text-gray-800 underline underline-offset-3" href="/privacy-policy">Privacy Policy.</a></p>
    </form>  
    {#if message}
      <p>{message}</p>
    {/if}
  </div>
</ConstrainedWidth>