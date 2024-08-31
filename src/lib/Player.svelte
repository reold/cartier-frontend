<script lang="ts">
  import { notify } from "../App.svelte";

  import { PlayerState, usePlayer } from "../player";

  import { tweened } from "svelte/motion";

  let playerDiv: HTMLDivElement;

  let progress = tweened(0, { duration: 100 });
  let timeStr = "";

  const updateProgress = (newProgress: number) => {
    $PlayerState.playback.handle.currentTime =
      (newProgress / 100) * $PlayerState.playback.dur;
  };

  let seekInfo = {
    is: false,
    startX: 0,
    startProgress: 0,
  };

  $: {
    $PlayerState.playback.time;
    let time = $PlayerState.playback.time;
    let minute = (time / 60) | 0;
    let second = time % 60 | 0;

    timeStr = `${minute == 0 ? "" : `${minute}:`}${minute == 0 ? `${second}s` : second < 10 ? `0${second}` : second}`;
    if (!seekInfo.is) {
      progress.set((time / $PlayerState.playback.dur) * 100);
    }
  }
</script>

<div
  style={$PlayerState.loaded ? "" : "visibility: hidden"}
  class="ring-1 ring-border rounded-md shadow-md shadow-black w-[95%] h-[10vh] absolute bottom-[13vh]"
  bind:this={playerDiv}
>
  <div
    class="bg-foreground/50 backdrop-blur-3xl rounded-t-md w-full h-full grid grid-cols-10 items-center justify-center gap-1"
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
    <div class="col-span-7 flex flex-col">
      <p class="truncate font-black">
        {$PlayerState.playback.name}
      </p>
      <p class="text-xs truncate">
        {timeStr} - <i>{$PlayerState.playback.source || "unknown source"}</i>
      </p>
    </div>
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
    class="top-0 h-[5px] w-[100%] absolute bg-white/5"
    on:touchstart={(e) => {
      seekInfo.is = true;
      seekInfo.startX = e.touches[0].clientX;
      seekInfo.startProgress = $progress;
    }}
    on:touchmove={(e) => {
      if (!seekInfo.is) {
        return;
      }
      let touchInfo = e.touches[0];
      const deltaX = touchInfo.clientX - seekInfo.startX;

      let seekProgress =
        seekInfo.startProgress + (deltaX / playerDiv.clientWidth) * 100;

      $progress = Math.min(100, Math.max(0, seekProgress));
    }}
    on:touchend={() => {
      updateProgress($progress);
      seekInfo.is = false;
    }}
  >
    <div
      class="h-[100%] bg-primary rounded-t-md {seekInfo.is
        ? 'animate-pulse'
        : ''}"
      style="width: {$progress}%"
    />
  </div>
</div>

<style>
  .svg-icon {
    @apply bg-transparent text-white p-1.5;
  }
</style>
