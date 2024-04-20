import { AggregateSwitchProps } from './utils';

export function ToggleSwitch({
	label,
	icon = 'toggle-off',
}: AggregateSwitchProps) {
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
					/>
					<span class='custom-switch-indicator'></span>
				</label>
			</td>
		</tr>
	);
}
