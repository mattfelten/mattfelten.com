import { format, parse } from "date-fns";

export interface DateFormatterProps {
	dateString: string;
}

export function DateFormatter({ dateString }: DateFormatterProps) {
	const p = parse(dateString, 'yyyy-MM-dd', new Date())
	const f = format(p, "LLLL d, yyyy");

	return (
		<time dateTime={dateString}>
			{f}
		</time>
	);
}
