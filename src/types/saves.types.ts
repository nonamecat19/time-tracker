export type Session = {
	category: string;
	comment?: string;
	start: Date;
	end?: Date;
	totalMinutes?: number;
};

export type DataByDay = {
	date: string;
	records: Session[];
	totalTime: number;
};
