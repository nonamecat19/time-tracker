import { createLocalStorage, persist } from '@macfja/svelte-persistent-store';
import { derived, writable } from 'svelte/store';
import type { Session } from '../types';
import { differenceInMinutes } from 'date-fns';

export const session = persist(writable<Session[]>([]), createLocalStorage(), 'saves');

export const startSession = (category: string, comment: string) => {
	const newElement: Session = {
		category,
		comment,
		start: new Date()
	};

	session.update((value) => [...value, newElement]);
};

export const endSession = () => {
	session.update((value) => {
		if (!value.length) {
			return value;
		}
		const newValue = structuredClone(value);
		const lastElement = newValue.at(-1);
		if (!lastElement) {
			return value;
		}
		lastElement.end = new Date();
		lastElement.totalMinutes = differenceInMinutes(lastElement.end, lastElement.start);
		return newValue;
	});
};

export const isLastSessionEnded = derived(session, ($session) => {
	if ($session.length === 0) {
		return true;
	}

	const lastSession = $session[$session.length - 1];
	return !!lastSession.end;
});
