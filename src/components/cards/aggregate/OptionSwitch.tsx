import { useState } from 'preact/hooks';
import { AggregateSwitchProps } from './utils';
import classNames from 'classnames';

export function OptionSwitch({ label, icon }: AggregateSwitchProps) {
	const [value, setValue] = useState(1);
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='py-0'>
				<div class='d-flex justify-content-end'>
					<div class='btn-group' role='group'>
						<button
							className={classNames(
								'btn btn-sm btn-secondary',
								value == 0 ? 'active' : ''
							)}
							onClick={(v) => setValue(0)}
						>
							Auto
						</button>
						<button
							className={classNames(
								'btn btn-sm btn-secondary',
								value == 1 ? 'active' : ''
							)}
							onClick={(v) => setValue(1)}
						>
							Cool
						</button>
						<button
							className={classNames(
								'btn btn-sm btn-secondary',
								value == 2 ? 'active' : ''
							)}
							onClick={(v) => setValue(2)}
						>
							Heat
						</button>
					</div>
				</div>
			</td>
		</tr>
	);
}
