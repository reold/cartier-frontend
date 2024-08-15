<script lang="ts">
  import Settings from "./Settings.svelte";
  import Playlist from "./Playlist/Playlist.svelte";
  import Player from "./Player.svelte";
  import NavBar from "./NavBar.svelte";

  import { AppState, TabKind } from "../store";
</script>

<div class="flex flex-col items-center justify-center relative">
  <Playlist />
  {#if $AppState.view.tab == TabKind.SETTINGS}
    <Settings />
  {/if}
  <Player />
  <NavBar />
</div>
