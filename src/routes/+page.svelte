<script lang="ts">
	import { addSession, endSession, isLastSessionEnded } from '../store';

	const isPending = isLastSessionEnded;

	let category: string = '';
	let comment: string = '';

	function add() {
		addSession(category, comment);
	}

	function stop() {
		endSession();
	}

</script>

<input class="input w-96" type="search" bind:value={category}>
<input class="input w-96" type="search" bind:value={comment}>
{#if $isPending}
	<button type="button" class="btn variant-filled w-96 mx-2" on:click={add}>
		Add
	</button>
{:else}
	<button type="button" class="btn variant-filled-error w-96 mx-2" on:click={stop}>
		Stop
	</button>
{/if}
