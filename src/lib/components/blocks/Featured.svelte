<script lang="ts">
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";
  import Icon from '@iconify/svelte'

  export let content;
</script>

<ConstrainedWidth class="py-16">
  <div class="flex flex-col space-y-12">
    <div class="flex flex-col space-y-4">
      {#if content?.heading}
        <h2 class="text-4xl text-gray-800">{content.heading}</h2>
      {/if}
      {#if content?.blurb}
        <p class="text-lg text-gray-500">{content.blurb}</p>
      {/if}
    </div>

    <div class="flex space-x-12">
      <div class="space-y-4 flex-1">
        <Icon icon="mingcute:presentation-2-fill" class="text-blue-600 h-12 w-12 p-2 rounded-full bg-gray-300" />
        <div class="space-y-2">
          <span class="text-gray-800 shrink-0">Marketing</span>
          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
        </div>
      </div>
      <div class="space-y-4 flex-1">
        <Icon icon="fa6-solid:graduation-cap" class="text-blue-600 h-12 w-12 p-2 rounded-full bg-gray-300" />
        <div class="space-y-2">
          <span class="text-gray-800 shrink-0">Marketing</span>
          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
        </div>
      </div>
      <div class="space-y-4 flex-1">
        <Icon icon="tabler:briefcase-filled" class="text-blue-600 h-12 w-12 p-2 rounded-full bg-gray-300" />
        <div class="space-y-2">
          <span class="text-gray-800 shrink-0">Marketing</span>
          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
        </div>
      </div>
    </div>

  </div>
</ConstrainedWidth>