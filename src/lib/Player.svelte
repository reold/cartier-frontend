<script lang="ts">
  import { notify } from "../App.svelte";

  import { PlayerState, usePlayer } from "../player";

  import { tweened } from "svelte/motion";

  let progress = tweened(0, { duration: 1000 });
  const handleUpdateProgress = (newProgress: number) => {
    $PlayerState.playback.handle.currentTime =
      (newProgress / 100) * $PlayerState.playback.dur;
  };

  window["updateTime"] = (percent: number) => {
    handleUpdateProgress(percent);
  };

  $: {
    $PlayerState.playback.time;
    progress.set(
      ($PlayerState.playback.time / $PlayerState.playback.dur) * 100
    );
  }
</script>

<div
  style={$PlayerState.loaded ? "" : "visibility: hidden"}
  class="ring-1 ring-border rounded-t-md w-[95%] h-[10vh] absolute bottom-[11vh]"
>
  <div
    class="bg-foreground rounded-t-md w-full h-full grid grid-cols-10 items-center justify-center gap-1"
  >
    <button
      on:click={() => {
        usePlayer.previous() == false
          ? notify("queue is empty")
          : usePlayer.play();
      }}
      class="col-span-1 svg-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[2em]"
      >
        <path
          fill-rule="evenodd"
          d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <p class="truncate col-span-7">{$PlayerState.playback.name}</p>
    {#if $PlayerState.playback.playing}
      <button on:click={usePlayer.pause} class="col-span-1 svg-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-[2em]"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    {:else}
      <button on:click={usePlayer.resume} class="col-span-1 svg-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-[2em]"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    {/if}
    <button
      on:click={() => {
        usePlayer.next() == false ? notify("queue is empty") : usePlayer.play();
      }}
      class="col-span-1 svg-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[2em]"
      >
        <path
          fill-rule="evenodd"
          d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
  <div
    class="bottom-0 h-[2px] bg-primary absolute"
    style="width: {($PlayerState.playback.time / $PlayerState.playback.dur) *
      100}%"
  />

  <button
    class="bottom-[-0.25em] rounded-full bg-primary absolute p-0 h-[0.5em] w-[0.5em]"
    style="left: calc({($PlayerState.playback.time /
      $PlayerState.playback.dur) *
      100}% - 0.25em)"
  />
</div>

<style>
  .svg-icon {
    @apply bg-transparent text-white p-1.5;
  }
</style>
