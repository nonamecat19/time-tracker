import { intervalToDuration } from 'date-fns';

export function convertTimeToString(time: number) {
	const { minutes, seconds } = intervalToDuration({ start: 0, end: time * 1000 });

	return [minutes, seconds].map((num?: number) => String(num ?? 0).padStart(2, '0')).join(':');
}
