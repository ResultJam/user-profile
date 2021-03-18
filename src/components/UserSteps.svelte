<script>
  import Avatar from './Avatar.svelte'
  export let user
</script>

<div class="flex items-end w-full my-4 flex-column">
  <div class="relative w-full h-10 bg-bluegray-600">
    <div
      class="absolute top-0 left-0 z-10 h-full bg-green-500"
      style="width: {user.percentComplete}%" />
    <div class="absolute z-10 flex items-center top-1" style="right: {100 - user.percentComplete}%">
      <Avatar size={2} {user} />
      <span class="px-2 font-bold text-white">{user.percentComplete}%</span>
    </div>
  </div>
</div>
