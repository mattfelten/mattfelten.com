import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
} from 'recharts';

export default function UsageChart({
	data,
	dataKey = 'value',
	height = 160,
}) {
	return (
		<div
			className="not-prose w-full"
			style={{ height, minHeight: height }}
		>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
				>
					<CartesianGrid
						vertical={false}
						stroke="var(--color-weak)"
						strokeOpacity={0.2}
					/>
					<Line
						type="monotone"
						dataKey={dataKey}
						stroke="var(--color-accent)"
						strokeWidth={1.5}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
