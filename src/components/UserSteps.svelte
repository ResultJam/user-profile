<script>
  import Avatar from './Avatar.svelte'
  
  export let user
  export let steps

  let lastCompletedStep = steps[user.lastCompleted.id]
  let lastCompletedStepNum = user.stepsCompleted[user.lastCompleted.id]
</script>

<div class="flex flex-col items-end w-full my-4">
  <div class="flex flex-col px-10 py-6 bg-white rounded-sm shadow w-80 border-1 border-bluegray-700" style="left: calc({user.percentComplete}% - w-40)">
    <h5 class="font-bold text-xxs text-bluegray-800">Step {lastCompletedStep.ord}</h5>
    <h4 class="text-sm font-bold text-black-500">{lastCompletedStepNum} {lastCompletedStep.title}</h4>
  </div>
  <div class="relative w-full h-10 bg-bluegray-600 top-2">
    <div
      class="absolute top-0 left-0 z-10 h-full bg-green-500"
      style="width: {user.percentComplete}%" />
    <div class="absolute z-10 flex items-center top-1" style="right: {100 - user.percentComplete}%">
      <Avatar size={2} {user} />
      <span class="px-2 font-bold text-white">{user.percentComplete}%</span>
    </div>
  </div>
</div>
