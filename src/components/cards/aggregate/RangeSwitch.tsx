import { useEffect, useRef, useState } from 'preact/hooks';
import { NumericAggregateSwitchProps } from './utils';

export function RangeSwitch({
	id,
	label,
	icon,
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
			<td class='text-right py-0'>
				<div class='col'>
					<input
						type='range'
						class='custom-range'
						step='1'
						min='0'
						max='20'
						value={value?.toString()}
						onInput={(e) =>
							setNumericValue(e.currentTarget.value as unknown as number)
						}
					/>
				</div>
			</td>
		</tr>
	);
}
