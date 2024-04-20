import { NumericAggregateSwitchProps } from './utils';

export function RangeSwitch({
	label,
	icon,
	value,
}: NumericAggregateSwitchProps) {
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='text-right py-0'>
				<div class='col'>
					<input
						type='range'
						class='custom-range'
						step='1'
						min='0'
						max='20'
						defaultValue={value?.toString() ?? '0'}
					/>
				</div>
			</td>
		</tr>
	);
}
