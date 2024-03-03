<script lang="ts">
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";
  import Icon from '@iconify/svelte';

  export let content;
</script>

<ConstrainedWidth class="py-16">
  <div class="flex flex-col space-y-12">
    <div class="flex flex-col items-center text-center space-y-4">
      <h2 class="text-4xl text-gray-800">{content.heading}</h2>
      <p class="text-lg text-gray-500">{content.blurb}</p>
      <div class="flex items-center space-x-4">
        <span>Monthly</span>
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-200 peer-checked:bg-blue-600"></div>
        </label>
        <span>Yearly</span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-10">
      {#each Object.entries(content.pricingPanels) as panel, index}
        <div 
          class:border-border-gray-200={index % 2 === 0}
          class:border-blue-600={index === 1}
          class="flex flex-col flex-1 space-y-8 border drop-shadow-sm p-8 rounded-lg md:odd:mt-10" 
        >
          <div class="flex flex-col items-center space-y-4">
            {#if index === 1}
              <span class="text-sm py-0.5 px-3 bg-gray-200 text-blue-800 rounded-md">Most popular</span>
            {/if}
            <h3 class="capitalize text-2xl text-gray-800">{panel[0]}</h3>
            <h4 class="text-5xl text-gray-800">${panel[1].amount}</h4>
            <a href="#annual-plan" class="text-blue-600 flex items-center space-x-2.5">
              <span>Go to annual plan</span>
              <Icon icon="mingcute:arrow-right-line" />
            </a>
          </div>
          <button class:bg-blue-600={index === 1} class:bg-gray-800={index !== 1} class="py-2.5 text-white rounded-lg w-full text-gray-800">Get started</button>
          <ul class="space-y-4">
            <li class="flex items-center space-x-2.5 text-gray-800">
              <Icon icon="heroicons:credit-card-16-solid" />
              <p>All tools you need to manage payments</p>
            </li>
            <!-- Mobile Only -->
            <li class="flex md:hidden items-center space-x-2.5">
              <Icon icon="heroicons-solid:emoji-happy" />
              <p >No setup, monthly, or hidden fees</p>
            </li>
            <li class="flex md:hidden items-center space-x-2.5">
              <Icon icon="mdi:shield-check" />
              <p >Comprehensive security</p>
            </li>
            <!-- Mobile Only Start -->
            <li class="flex items-center space-x-2.5" class:text-gray-500={index < 1}>
              <Icon icon="heroicons-solid:paper-airplane" />
              <p class:line-through={index < 1}>Get hundreds of feature updates</p>
            </li>
            <li class="flex md:hidden items-center space-x-2.5" class:text-gray-500={index < 1}>
              <Icon icon="mdi:fire" />
              <p class:line-through={index < 1}>Payouts to your bank account</p>
            </li>
            <li class="flex items-center space-x-2.5" class:text-gray-500={index < 2}>
              <Icon icon="heroicons-solid:presentation-chart-bar" />
              <p class:line-through={index < 2}>Financial reconciliation and reporting</p>
            </li>
            <li class="flex items-center space-x-2.5" class:text-gray-500={index < 2}>
              <Icon icon="heroicons:chat-bubble-oval-left-ellipsis-16-solid" />
              <p class:line-through={index < 2}>24x7 phone, chat, and email support</p>
            </li>
            <!-- Mobile Only -->
            <li class="flex md:hidden items-center space-x-2.5" class:text-gray-500={index < 2}>
              <Icon icon="ion:cube-sharp" />
              <p class:line-through={index < 2}>Robust developer platform</p>
            </li>
            
          </ul>
        </div>
      {/each}
    </div>

  </div>
</ConstrainedWidth>