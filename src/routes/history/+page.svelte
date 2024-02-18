<script lang="ts">
	import { session } from '../../store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { differenceInMinutes, format } from 'date-fns';
	import type { Session } from '../../types';
	import { groupBy, map, reduce } from 'lodash';

	const groupedByDay = groupBy($session, (item: Session) => {
		const date = item.start;

		return format(date, 'dd/MM/yyyy');
	});

	const dataByDay = map(groupedByDay, (value, key) => {
		const total = reduce(value, (acc, curr) => {
			const end = curr.end ?? new Date();
			return acc + differenceInMinutes(end, curr.start);
		}, 0);
		return {
			date: key,
			records: value,
			totalTime: total
		};
	});
</script>

<div>
	<Accordion autocollapse>
		{#each dataByDay.toReversed() as { date, records, totalTime }, i }
			<AccordionItem open={i === 0}>
				<svelte:fragment slot="lead">
					{date}
				</svelte:fragment>
				<svelte:fragment slot="summary">
					{totalTime} min
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="flex flex-col gap-2">
						{#each records.toReversed() as { start, totalMinutes, category, comment }}
							<div class={`p-2 rounded-lg ${totalMinutes ? 'bg-gray-800' : 'bg-green-800'}`}>
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
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
