<script context="module">
  export async function load({fetch, page, session}) {
    const {id} = page.params
    return {props: {id}}
  }
</script>

<script>
  import UserProfile from '../../components/UserProfile.svelte'
  import {board} from '../../lib/board'

  export let id

  const lockedBehaviors = Object
    .entries(board.steps)
    .map(([stepId, step]) => {
      const complete = !!board.users[id].stepsCompleted[stepId];
      if (!complete) {
        return step.unlockBehaviors.reduce((obj, next) => ({ ...obj, [next]: {  ord: step.ord, title: step.title } }), {})
      } else return {};
    })
    .reduce((obj, next) => Object.assign(obj, next), {})
</script>

<div class="mt-20">
  <UserProfile user={board.users[id]} {lockedBehaviors} />
</div>
