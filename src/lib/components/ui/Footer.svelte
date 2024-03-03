<script lang="ts">
  import ConstrainedWidth from '$lib/components/layout/ConstrainedWidth.svelte';
  import Icon from '@iconify/svelte'
</script>

<ConstrainedWidth as="footer" class="py-12">
  <div class="flex items-center justify-between">
    <span class="text-gray-500">© 2021 Flowbite, LLC. All rights reserved.</span>
  
    <ul class="flex space-x-6">
      <li>
        <a href="https://www.facebook.com">
          <Icon icon="fa:facebook" class="w-6 h-6 text-[#9CA3AF]" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/home">
          <Icon icon="fa:twitter" class="w-6 h-6 text-[#9CA3AF]" />
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <Icon icon="fa:github" class="w-6 h-6 text-[#9CA3AF]" />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/">
          <Icon icon="fa:dribbble" class="w-6 h-6 text-[#9CA3AF]" />
        </a>
      </li>
    </ul>
  </div>
</ConstrainedWidth>