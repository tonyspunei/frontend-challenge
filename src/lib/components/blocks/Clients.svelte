<script lang="ts">
	import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";


</script>

<ConstrainedWidth class="py-24">
  <div class="flex flex-col items-center space-y-12">
    <h2 class="text-4xl">You’ll be in good company</h2>
  
    <ul class="flex items-center justify-center flex-wrap gap-14">
      <li>
        <img src="/images/Google.png" alt="google logo">
      </li>
      <li>
        <img src="/images/Microsoft.png" alt="microsoft logo">
      </li>
      <li>
        <img src="/images/Spotify.png" alt="spotify logo">
      </li>
      <li>
        <img src="/images/Mailchimp.png" alt="mailchimp logo">
      </li>
    </ul>
  </div>
</ConstrainedWidth>