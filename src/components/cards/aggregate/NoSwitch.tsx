import { AggregateSwitchProps } from './utils';

interface NoSwitchProps extends AggregateSwitchProps {
	text?: string;
}

export function NoSwitch({ label, icon, text = '' }: NoSwitchProps) {
	return (
		<tr>
			<td>
				<i class={`mr-2 bi bi-${icon}`}></i>
			</td>
			<td>{label}</td>
			<td class='text-right'>{text}</td>
		</tr>
	);
}
