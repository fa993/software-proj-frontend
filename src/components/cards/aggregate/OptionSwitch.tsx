import { useState } from 'preact/hooks';
import { AggregateSwitchProps } from './utils';
import classNames from 'classnames';

interface OptionSwitchProps extends AggregateSwitchProps {
	options?: Array<string>;
}

export function OptionSwitch({ label, icon, options = [] }: OptionSwitchProps) {
	const [value, setValue] = useState(0);
	var eArr = options.map((e, i) => {
		return (
			<button
				className={classNames(
					'btn btn-sm btn-secondary',
					value == i ? 'active' : ''
				)}
				onClick={(v) => setValue(i)}
			>
				{e}
			</button>
		);
	});
	return (
		<tr>
			<td>
				<i class={`bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='py-0'>
				<div class='d-flex justify-content-end'>
					<div class='btn-group' role='group'>
						{eArr}
					</div>
				</div>
			</td>
		</tr>
	);
}
