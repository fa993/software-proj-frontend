import { AggregateSwitchProps } from './utils';

interface IconNoSwitchProps extends AggregateSwitchProps {
	isButton?: boolean;
	text: string;
	type?: string;
}

export function IconNoSwitch({
	label,
	icon = 'circle',
	isButton = true,
	text,
	type = 'primary',
}: IconNoSwitchProps) {
	return (
		<tr>
			<td>
				<i class={`mr-2 bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='text-right'>
				{isButton ? (
					<button class={`badge bg-${type}`}>{text}</button>
				) : (
					<span class={`badge bg-${type}`}>{text}</span>
				)}
			</td>
		</tr>
	);
}
