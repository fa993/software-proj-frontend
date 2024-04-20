import { useEffect, useRef, useState } from 'preact/hooks';
import { NumericAggregateSwitchProps } from './utils';

export function NumericSwitch({
	id,
	label,
	icon,
	value,
}: NumericAggregateSwitchProps) {
	const [numericValue, setNumericValue] = useState(value);
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
			<td class='py-0'>
				<div class='d-flex justify-content-end'>
					<input
						type='number'
						className='form-control col-5 text-center px-1'
						step='1'
						min='0'
						max='99'
						value={numericValue}
						onInput={(e) =>
							setNumericValue(e.currentTarget.value as unknown as number)
						}
					/>
				</div>
			</td>
		</tr>
	);
}
