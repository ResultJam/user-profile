<script>
  import UserOverview from "./UserOverview.svelte";
  import UserSteps from "./UserSteps.svelte";
  import UserMetrics from "./UserMetrics.svelte";

  export let user
  export let lockedBehaviors
  export let steps
</script>

<div class="user-profile-outer-container">
  {#if user}
    <div class="flex flex-col items-center w-full px-6 user-profile-content-container">
      <UserOverview {user} {lockedBehaviors} />
      <UserSteps {user} {steps} />
      <UserMetrics />
    </div>
  {/if}
</div>

<style>
  .user-profile-outer-container {
    background: linear-gradient(#F2F4F7 0%, #FFFFFF 100%);
  }
  
  .user-profile-content-container {
    margin: 0 auto;
    max-width: 910px;
  }
</style>