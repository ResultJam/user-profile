<script>
  import formatOrdinalNum from '../lib/formatOrdinalNum'
  import Avatar from './Avatar.svelte'
  import Button from './Button.svelte'

  export let user
  export let lockedBehaviors

  let location = user.location || 'Boca Raton, FL, USA'
  let about =
    user.about ||
    'Empower and educate people everywhere so that they can improve their lives and achieve their goals.'
  let online = Math.random() > 0.5
</script>

<style>
  .online {
    background: #66ef84;
  }
</style>

{#if user}
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center w-full max-w-sm text-center">
      <div class="relative w-40 h-40">
        <Avatar size={10} photo={user.photo} />
        {#if user.place}
          <div
            class="absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-8 p-1 text-white rounded-full md:top-2 md:right-2 text-xxs md:w-10 md:h-10 bg-black-500 md:bg-white md:text-bluegray-800 font-display">
            {formatOrdinalNum(user.place)}
          </div>
        {/if}
        {#if online}
          <div
            class="box-content absolute z-10 w-4 h-4 border-2 border-white rounded-full online right-4 bottom-4" />
        {/if}
      </div>
      <h1 class="mt-4 text-4xl font-semibold text-center font-display">
        {user.firstName} {user.lastName}
      </h1>
      <h4 class="mt-4 text-bluegray-800">{location}</h4>
      <p class="my-4 text-black-500">{about}</p>
      <Button>Message</Button>
      {#if lockedBehaviors['message']}
        <p class="mt-2 text-sm text-bluegray-800">
          Complete the
          <span class="text-green-600 font-semi-bold">
            Step {lockedBehaviors['message'].ord}: {lockedBehaviors['message'].title}
          </span>
          to be able to message {user.firstName}.
        </p>
      {/if}
    </div>
  </div>
{/if}
