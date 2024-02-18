<script lang="ts">
	import { session } from '../../store';
	import { Accordion } from '@skeletonlabs/skeleton';
	import { format } from 'date-fns';
	import type { Session } from '../../types'
	import { groupBy } from 'lodash';

	const groupedByDay = groupBy($session, (item: Session) => {
		const date = item.start

		return format(date, 'dd/MM/yyyy')
	});

	console.log(groupedByDay)

</script>

<div>
	{JSON.stringify($session)}

	{JSON.stringify(groupedByDay)}
	<Accordion autocollapse>

	</Accordion>
</div>
