import { useEffect, useRef, useState } from 'preact/hooks';
import { NumericAggregateSwitchProps } from './utils';

export function ToggleSwitch({
	id,
	label,
	icon = 'toggle-off',
	value,
}: NumericAggregateSwitchProps) {
	const [numericValue, setNumericValue] = useState(value ?? 0);
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			fetch(`http://localhost:3000/device/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ value: numericValue }),
			});
		} else {
			isMounted.current = true;
		}
	}, [numericValue]);

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
						checked={numericValue == 1 ? true : false}
						onClick={(e) =>
							setNumericValue(e.currentTarget.value == 'on' ? 1 : 0)
						}
					/>
					<span class='custom-switch-indicator'></span>
				</label>
			</td>
		</tr>
	);
}
