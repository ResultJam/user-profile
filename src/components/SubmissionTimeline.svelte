<script>
  import { monthsOfTheYear } from '../lib/dateUtils'
  export let submissions
</script>

<div class="flex flex-col w-full my-12">
  {#each submissions as { title, date }, i}
    <div class="flex flex-row">
      <div
        class="w-full md:w-1/2 border-bluegray-600 {i % 2 ? 'md:order-first md:border-r-2 md:pr-9' : 'md:order-last md:border-l-2 md:pl-9'}
        md:relative pt-0 pb-12 flex flex-col items-center md:items-start">
        <div
          class="flex flex-col items-center justify-center p-1 font-semibold
          rounded-full {i % 2 ? 'md:-right-7' : 'md:-left-7'} md:-top-7
          md:absolute w-14 h-14 bg-bluegray-500 text-bluegray-800">
          <span>{date.getDate()}</span>
          <span class="text-sm">
            {monthsOfTheYear[date.getMonth()].slice(0, 3)}
          </span>
        </div>
        <div class="w-full pt-6 md:border-t-2 border-bluegray-600">
          <h4 class="mt-4 text-sm text-bluegray-800">Completed a step</h4>
          <h3 class="mb-4 font-bold">{title}</h3>
          <div class="w-full h-32 bg-bluegray-600" />
        </div>
      </div>
      <div class="hidden md:block md:w-1/2" />
    </div>
  {/each}
</div>
