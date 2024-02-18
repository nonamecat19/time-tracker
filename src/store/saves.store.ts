import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import { derived, writable } from 'svelte/store';
import type { Session } from '../types';

export const session = persist(writable<Session[]>([]), createLocalStorage(), 'saves');

export const addSession = (category: string, comment: string) => {
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
		newValue.at(-1)!.end = new Date();
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
