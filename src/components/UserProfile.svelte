<script>
  import UserOverview from "./UserOverview.svelte";
  import UserSteps from "./UserSteps.svelte";

  export let user
  export let lockedBehaviors
</script>

{#if user}
  <div class="flex flex-col items-center w-full px-6 user-profile-container">
    <UserOverview {user} {lockedBehaviors} />
    <UserSteps {user} />
  </div>
{/if}

<style>
  .user-profile-container {
    margin: 0 auto;
    max-width: 910px;
  }
</style>