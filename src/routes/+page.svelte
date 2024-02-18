<script lang="ts">
	import { startSession, endSession, isLastSessionEnded, session } from '../store';
	import { onDestroy, onMount } from 'svelte';
	import { differenceInSeconds} from 'date-fns';
	import type { Session } from '../types';
	import { convertTimeToString } from '../utils';

	let isPendingValue: boolean = false
	const unsubscribeIsPending = isLastSessionEnded.subscribe((value) => isPendingValue = value)

	let sessionValue: Session[] = []
	const unsubscribeSession = session.subscribe((value) => sessionValue = value)

	let category: string = '';
	let comment: string = '';

	let timeInSeconds: number = 0
	let timeOnDisplay: string = "00:00"
	let timer: unknown

	function clearTimer() {
		if (timer && typeof timer === 'number') {
			clearInterval(timer)
		}
		timer = null
	}

	function startTimer() {
		timer = setInterval(() => {
			timeInSeconds++
			timeOnDisplay = convertTimeToString(timeInSeconds)
		}, 1_000)
	}

	function start() {
		startSession(category, comment);
		startTimer()
	}

	function stop() {
		clearTimer();
		timeInSeconds = 0;
		timeOnDisplay = '00:00'
		endSession();
	}

	onMount(() => {
		if (isPendingValue) {
			return
		}
		startTimer()
		const lastSession = sessionValue.at(-1)
		if (!lastSession) {
			return;
		}
		const time = differenceInSeconds(new Date(), lastSession.start)
		timeInSeconds = time
		timeOnDisplay = convertTimeToString(time)
	})

	onDestroy(() => {
		clearTimer()
		unsubscribeIsPending()
		unsubscribeSession()
	})
</script>

<div class="h-16 text-5xl flex justify-center items-center">
	{timeOnDisplay}
</div>
<div class="flex flex-col gap-1 w-full">
	<label for="category">Category</label>
	<input id="category" class="input w-full" type="search" bind:value={category}>
	<label for="comment">Comment</label>
	<input id="comment" class="input w-full" type="search" bind:value={comment}>
</div>
<div class="w-full mt-5">
		<button
			type="button"
			class={`btn ${$isLastSessionEnded ? 'variant-filled' : 'variant-filled-primary'} w-full`}
			on:click={$isLastSessionEnded ? start : stop}
		>
			{$isLastSessionEnded ? 'Start': 'Stop'}
		</button>
</div>
