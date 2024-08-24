<script lang="ts">
  import BasicPlaylistCard from "./BasicPlaylistCard.svelte";

  import PlaylistCard from "./PlaylistCard.svelte";

  import { AppState, CartierFile, Socket, TabKind } from "../../store";
  import type { BasicPlaylist, Playlist } from "../../store";

  import { scale } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { circIn } from "svelte/easing";
  import { onMount } from "svelte";

  let tabSwitchDiv: HTMLDivElement;
  let tabSwitchDivConfig = {
    left: tweened(0, { duration: 50, easing: circIn }),
    width: tweened(0, { duration: 50, easing: circIn }),
  };

  let searchContent: string = "";
  let searchResults: BasicPlaylist[];

  let undownloadedPlaylists: Playlist[] = [];

  const getUndownloadedPlaylists = () => {
    if (!$CartierFile.playlists) {
      undownloadedPlaylists = $AppState.playlists.all;
      return;
    }
    undownloadedPlaylists = $AppState.playlists.all.filter((playlist) => {
      let isStored = false;

      for (let storedPlaylist of $CartierFile.playlists) {
        if (storedPlaylist.id == playlist.id) {
          isStored = true;
          break;
        }
      }

      return !isStored;
    });
  };

  const handleSearch = () => {
    searchContent = searchContent.toLowerCase();

    let resultTracks = $CartierFile.tracks.filter((track) => {
      return track.name.toLowerCase().includes(searchContent);
    });

    let resultTrackIds = resultTracks.map((resTrack) => {
      return resTrack.id;
    });

    searchResults = $CartierFile.playlists.filter((playlist) => {
      if (playlist.name.toLowerCase().includes(searchContent)) return true;
      return playlist.tracks.some((id) => resultTrackIds.includes(id));
    });
  };

  onMount(getUndownloadedPlaylists);

  $: {
    if (tabSwitchDiv) {
      switch ($AppState.view.tab) {
        case TabKind.PLAYLISTS:
          tabSwitchDivConfig.left.set(0);
          tabSwitchDivConfig.width.set(
            (document.getElementById("playlistbtn") as HTMLDivElement)
              .clientWidth
          );
          break;
        case TabKind.DOWNLOADED:
          tabSwitchDivConfig.left.set(
            (document.getElementById("playlistbtn") as HTMLDivElement)
              .clientWidth
          );
          tabSwitchDivConfig.width.set(
            (document.getElementById("downloadedbtn") as HTMLDivElement)
              .clientWidth
          );
          break;
      }
    }
  }

  tabSwitchDivConfig.left.subscribe((left) => {
    if (tabSwitchDiv) tabSwitchDiv.style.left = `${left}px`;
  });

  tabSwitchDivConfig.width.subscribe((width) => {
    if (tabSwitchDiv) tabSwitchDiv.style.width = `${width}px`;
  });
</script>

<div
  class="h-[82vh] overflow-y-scroll w-[100vw]"
  style={$AppState.view.tab in [TabKind.PLAYLISTS, TabKind.DOWNLOADED]
    ? ""
    : "display: none"}
>
  <div
    class="stickytoggle z-10 sticky top-2 w-min flex flex-row items-center justify-between rounded-xl bg-foreground ring-1 ring-border mx-auto"
  >
    <div
      class="bg-border h-full absolute rounded-xl z-10"
      bind:this={tabSwitchDiv}
    />
    <button
      id="playlistbtn"
      on:click={() => ($AppState.view.tab = TabKind.PLAYLISTS)}
      >playlists</button
    ><button
      id="downloadedbtn"
      on:click={() => ($AppState.view.tab = TabKind.DOWNLOADED)}
      >downloaded</button
    >
  </div>
  <div
    class="flex flex-col justify-center items-center w-full space-y-2 pb-[11vh] relative"
    transition:scale={{ duration: 500 }}
  >
    {#if $AppState.view.tab == TabKind.DOWNLOADED}
      <div
        class="grid grid-cols-10 w-[95%] gap-1 focus-within:mt-[2vh] duration-500 transition-all"
      >
        <input
          type="text"
          autocomplete="off"
          autocapitalize="none"
          bind:value={searchContent}
          on:input={handleSearch}
          placeholder="search downloaded tracks"
          class="col-span-9"
        />
        <button class="col-span-1 bg-red-500 text-white">x</button>
      </div>
    {/if}

    {#if $AppState.view.tab == TabKind.DOWNLOADED}
      {#if !$CartierFile.playlists || $CartierFile.playlists.length == 0}
        <p class="pt-10">Nothing downloaded! 😕</p>
      {:else if searchContent == ""}
        {#each $CartierFile.playlists || [] as playlist}
          <BasicPlaylistCard {playlist} />
        {/each}
      {:else}
        {#each searchResults || [] as playlist}
          <BasicPlaylistCard {playlist} />
        {/each}
      {/if}
    {:else}
      {#each undownloadedPlaylists || [] as playlist}
        <PlaylistCard {playlist} disabled={$AppState.offline} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .stickytoggle > button {
    @apply text-white z-20 bg-transparent;
  }
</style>
