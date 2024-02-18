<script lang="ts">
	import { deleteByStartDate, session } from '../../store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { differenceInMinutes, format } from 'date-fns';
	import type { DataByDay, Session } from '../../types';
	import { groupBy, map, reduce } from 'lodash';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let dataByDay: DataByDay[] = []

	function getDataBydDay(data: Session[]) {
		const groupedByDay = groupBy(data, (item: Session) => {
			const date = item.start;

			return format(date, 'dd/MM/yyyy');
		});

		return map(groupedByDay, (value, key) => {
			const total = reduce(value, (acc, curr) => {
				const end = curr.end ?? new Date();
				return acc + differenceInMinutes(end, curr.start);
			}, 0);
			return {
				date: key,
				records: value,
				totalTime: total
			};
		}).toReversed();
	}

	onMount(() => {
		return session.subscribe((data) => {
			dataByDay = getDataBydDay(data);
		});
	});

</script>

<div>
	<Accordion autocollapse>
		{#each dataByDay as { date, records, totalTime }, i }
			<AccordionItem open={i === 0}>
				<svelte:fragment slot="lead">
					{date}
				</svelte:fragment>
				<svelte:fragment slot="summary">
					{totalTime} min
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="flex flex-col gap-2 w-full">
						{#each records.toReversed() as { start, totalMinutes, category, comment }}
							<div class={`p-2 rounded-lg flex justify-between gap-2 ${typeof totalMinutes === 'number' ? 'variant-filled-surface' : 'variant-filled-success'}`}>
								<div>
									{#if category}
									<span class="chip variant-filled">
										{category}
									</span>
									{/if}
									{totalMinutes ?? differenceInMinutes(new Date(), start)} min
									{#if comment}
									<span class="chip">
										{comment}
									</span>
									{/if}
								</div>
								<button
									class="btn btn-sm variant-filled-primary"
									on:click={() => deleteByStartDate(start)}
								>
									<Icon icon="octicon:x-12" color="white"/>
								</button>
							</div>
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
