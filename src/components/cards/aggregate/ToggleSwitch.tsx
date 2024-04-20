import { NumericAggregateSwitchProps } from './utils';

export function ToggleSwitch({
	label,
	icon = 'toggle-off',
	value,
}: NumericAggregateSwitchProps) {
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='text-right'>
				<label class='custom-switch'>
					<input
						type='checkbox'
						name='box-1-0-undefined'
						class='custom-switch-input'
						defaultChecked={value == 1 ? true : false}
					/>
					<span class='custom-switch-indicator'></span>
				</label>
			</td>
		</tr>
	);
}
