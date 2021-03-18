<script>
  import UserOverview from './UserOverview.svelte'
  import UserSteps from './UserSteps.svelte'
  import UserMetrics from './UserMetrics.svelte'
  import SubmissionTimeline from './SubmissionTimeline.svelte'

  export let user
  export let lockedBehaviors
  export let steps

  const submissions = Object.entries(user.submissionsByStep).map(
    ([stepId, submission]) => {
      const step = steps[stepId]
      return {
        title: step.title,
        date: new Date(submission[0].createdAt),
      }
    },
  ).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime() // Sort in reverse chronological order
  })
</script>

<style>
  .user-profile-outer-container {
    background: linear-gradient(#fbfcfd 0%, #ffffff 100%);
  }

  .user-profile-content-container {
    margin: 0 auto;
    max-width: 910px;
  }
</style>

<div class="py-4 user-profile-outer-container">
  {#if user}
    <div
      class="flex flex-col items-center w-full px-6 user-profile-content-container">
      <UserOverview {user} {lockedBehaviors} />
      <UserSteps {user} {steps} />
      <UserMetrics />
      <SubmissionTimeline {submissions} />
    </div>
  {/if}
</div>
