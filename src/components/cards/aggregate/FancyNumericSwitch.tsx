import { useState } from 'preact/hooks';
import { AggregateSwitchProps } from './utils';

export function FancyNumericSwitch({ label, icon }: AggregateSwitchProps) {
	const [value, setValue] = useState(0);
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='py-0'>
				<div class='d-flex justify-content-end'>
					<div class='d-flex'>
						<div class='input-group thermostatHorizontalControls__vn+0s'>
							<div class='input-group-prepend'>
								<button
									class='btn btn-outline-secondary'
									type='button'
									onClick={() => setValue((v) => v - 1)}
								>
									-
								</button>
							</div>
							<span class='form-control text-center'>{value}</span>

							<div class='input-group-append'>
								<button
									class='btn btn-outline-secondary'
									type='button'
									onClick={() => setValue((v) => v + 1)}
								>
									+
								</button>
							</div>
						</div>
					</div>
				</div>
			</td>
		</tr>
	);
}
