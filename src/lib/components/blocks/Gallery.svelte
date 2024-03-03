<script lang="ts">
  import ConstrainedWidth from "$lib/components/layout/ConstrainedWidth.svelte";
</script>

<ConstrainedWidth class="py-12 md:py-24">
  <div class="flex flex-col items-center text-center space-y-12">
    <div class="space-y-4">
      <h2 class="text-4xl text-gray-800">We didn't reinvent the wheel</h2>
      <p class="max-w-4xl text-gray-500">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    </div>

    <div class="grid grid-cols-4 items-center gap-4">
      <picture class="col-span-2 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-1.jpg" alt="team">
      </picture>
      <picture class="col-span-1 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-2.jpg" alt="team">
      </picture>
      <picture class="col-span-1 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-3.jpg" alt="team">
      </picture>
      <picture class="col-span-1 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-4.jpg" alt="team">
      </picture>
      <picture class="col-span-2 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-5.jpg" alt="team">
      </picture>
      <picture class="col-span-1 h-60 md:h-full w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="/images/image-6.jpg" alt="team">
      </picture>
    </div>
  </div>
</ConstrainedWidth>