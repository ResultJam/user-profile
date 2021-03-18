<script>
  import UserOverview from "./UserOverview.svelte";

  export let user
  export let lockedBehaviors
</script>

{#if user}
  <div class="flex flex-col items-center w-full">
    <UserOverview {user} {lockedBehaviors} />
  </div>
{/if}
