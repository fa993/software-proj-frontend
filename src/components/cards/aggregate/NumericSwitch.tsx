import { AggregateSwitchProps } from './utils';

export function NumericSwitch({ label, icon }: AggregateSwitchProps) {
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='py-0'>
				<div class='d-flex justify-content-end'>
					<input
						type='number'
						className='form-control col-5 text-center px-1'
						step='1'
						min='0'
						max='99'
						defaultValue='22'
					/>
				</div>
			</td>
		</tr>
	);
}