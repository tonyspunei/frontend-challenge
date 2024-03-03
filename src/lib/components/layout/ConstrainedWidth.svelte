<script lang="ts">
  export let as: string = 'section';
  export let backgroundColor: string = 'bg-white';
</script>

<svelte:element
  this={as}
  class={`relative w-full ${$$props.class} ${backgroundColor}`}
>
  <div class="max-w-screen-xl mx-auto px-6 md:px-8">
    <slot />
  </div>
</svelte:element>