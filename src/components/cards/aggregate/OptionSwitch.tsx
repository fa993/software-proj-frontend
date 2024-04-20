import { useState } from 'preact/hooks';
import { NumericAggregateSwitchProps } from './utils';
import classNames from 'classnames';

interface OptionSwitchProps extends NumericAggregateSwitchProps {
	options?: Array<string>;
}

export function OptionSwitch({
	label,
	icon,
	value,
	options = [],
}: OptionSwitchProps) {
	const [selectedOption, setSelectedOption] = useState(value);
	var eArr = options.map((e, i) => {
		return (
			<button
				className={classNames(
					'btn btn-sm btn-secondary',
					selectedOption == i ? 'active' : ''
				)}
				onClick={(v) => setSelectedOption(i)}
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
