import { FancyNumericSwitch } from './aggregate/FancyNumericSwitch';
import { IconNoSwitch } from './aggregate/IconNoSwitch';
import { NoSwitch } from './aggregate/NoSwitch';
import { NumericSwitch } from './aggregate/NumericSwitch';
import { OptionSwitch } from './aggregate/OptionSwitch';
import { RangeSwitch } from './aggregate/RangeSwitch';
import { ToggleSwitch } from './aggregate/ToggleSwitch';

interface Sensor {
	id: number;
	type: string;
	label: string;
	value?: string | number;
	text?: string;
	icon?: string;
}

interface AggregateProps {
	title: string;
	subSensors: Array<Sensor>;
	id: number;
	value?: number;
	type: string;
}

function getSensor(e: Sensor) {
	console.log(e);
	switch (e.type) {
		case 'check':
			return <ToggleSwitch label={e.label} icon={e.icon} />;
		case 'range':
			return <RangeSwitch label={e.label} icon={e.icon} />;
		case 'numeric':
			return <NumericSwitch label={e.label} icon={e.icon} />;
		case 'text':
			return (
				<NoSwitch label={e.label} icon={e.icon} text={e.value.toString()} />
			);
		case 'click':
			return <IconNoSwitch label={e.label} text={e.value.toString()} />;
		case 'danger':
			return (
				<IconNoSwitch
					label={e.label}
					text={e.value.toString()}
					isButton={false}
					type='danger'
					icon={e.icon}
				/>
			);
		case 'option':
			return <OptionSwitch label={e.label} icon={e.icon} />;
		case 'fancy':
			return <FancyNumericSwitch label={e.label} icon={e.icon} />;
	}
}

export function AggregateSensor({
	title,
	subSensors,
	id,
	value,
	type,
}: AggregateProps) {
	var eleArr = subSensors.map((t) => getSensor(t));
	return (
		<>
			<div class='card-header'>
				<h3 class='card-title'>{title}</h3>
				{type == 'check' ? (
					<div class='card-options'>
						<label class='custom-switch m-0'>
							<input
								type='checkbox'
								name='Living Room'
								class='custom-switch-input'
							/>
							<span class='custom-switch-indicator'></span>
						</label>
					</div>
				) : (
					<></>
				)}
			</div>
			<div class='dimmer'>
				<div class='dimmer-content'>
					<div class='table-responsive'>
						<table class='table card-table table-vcenter'>
							<tbody>
								{eleArr}
								{/* <ToggleSwitch label='TV' />
								<RangeSwitch label='TV' icon='volume-down' />
								<NumericSwitch label='TV' icon='hash' />
								<NoSwitch label='TV' icon='people' text='8 minutes ago' />
								<IconNoSwitch label='TV' text='Simple Click' />
								<ToggleSwitch label='Second lamp' />
								<NoSwitch label='AC' icon='thermometer' text='27 °C' />
								<ToggleSwitch label='AC' />
								<OptionSwitch label='AC' icon='gear' />
								<FancyNumericSwitch label='AC' icon='thermometer' />
								<ToggleSwitch label='First Lamp' />
								<ToggleSwitch label='TV Lamp' />
								<RangeSwitch label='Main Lamp' icon='brightness-high' />
								<NoSwitch label='Temperature' icon='thermometer' text='27 °C' />
								<IconNoSwitch
									label='Main sensors'
									text='CO detected'
									type='danger'
									isButton={false}
								/> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
