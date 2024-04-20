export interface AggregateSwitchProps {
	label: string;
	icon?: string;
	id: number;
}

export interface NumericAggregateSwitchProps extends AggregateSwitchProps {
	value?: number;
}

export interface StringAggregateSwitchProps extends AggregateSwitchProps {
	value?: string;
}
