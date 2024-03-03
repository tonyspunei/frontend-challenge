<script>
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";
	import Icon from "@iconify/svelte";
</script>

<ConstrainedWidth class="py-24">
  <div class="flex flex-col items-center text-center space-y-8">
    <div class="space-y-4 max-w-2xl">
      <h2 class="text-4xl text-gray-800">Sign up for our newsletter</h2>
      <p class="text-xl text-gray-500">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    </div>
  
    <form class="max-w-md w-full space-y-2">
      <div class="flex items-center rounded-lg overflow-hidden w-full text-gray-800">
        <div class="flex items-center border-2 border-gray-300 bg-gray-200 pl-3 w-full">
          <Icon icon="material-symbols:mail-outline" class="h-5 w-5 " />
          <input class="py-3 px-4 outline-none bg-transparent placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email">
        </div>
        <button class="h-full py-3 px-4 bg-blue-600 text-white border-2 border-blue-600">Subscribe</button>
      </div>
      <p class="text-sm text-gray-500">We care about the protection of your data. Read our Privacy Policy. </p>
    </form>  
  </div>
</ConstrainedWidth>