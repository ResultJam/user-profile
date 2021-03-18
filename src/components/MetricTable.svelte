<script>
  export let type
  export let metrics
</script>

<div class="w-full p-4 md:rounded-md md:bg-white md:shadow">
  <h2 class="pl-8 text-2xl font-display">{type}</h2>
  <div class="flex items-center w-full mt-10">
    {#each metrics as { name, value, delta }, i}
      <div class="flex flex-col items-center w-full text-center border-bluegray-800 {i > 0 ? 'border-l-1' : 'border-l-0'}">
        <div class="flex flex-col items-center justify-center w-full h-20 p-2 border-b">
          <h3 class="text-4xl font-display">{value}</h3>
          <h4 class="mt-2 font-semibold uppercase text-xxs text-bluegray-800">{name}</h4>
        </div>
        <div class="flex items-center justify-center w-full p-2 font-semibold text-xxs">
          {#if delta.value}
            <span class="text-green-600">+{delta.value} {delta.period}</span>
          {:else}
            <span class="text-bluegray-800">-</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
