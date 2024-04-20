import classNames from 'classnames';
import { TempSensor } from './cards/TempSensor';
import { getAdditionalClass } from '../utils';
import { HouseTempSensor } from './cards/HouseTempSensor';
import { CCTVSensor } from './cards/CCTVSensor';
import { ExteriorSensor } from './cards/ExteriorSensor';
import { AggregateSensor } from './cards/AggregateSensor';
import { PictureSensor } from './cards/PictureSensor';
import { UserSensor } from './cards/UserSensor';

import lJson from './cards/aggregate/aggregate.json';

export function SensorCard({ props }) {
	var a;
	switch (props.type) {
		case 'room-temp':
			a = <TempSensor />;
			break;
		case 'house-temp':
			a = <HouseTempSensor />;
			break;
		case 'cctv':
			a = <CCTVSensor />;
			break;
		case 'exterior':
			a = <ExteriorSensor />;
			break;
		case 'aggregate':
			a = (
				<AggregateSensor
					id={lJson.id}
					subSensors={lJson.subSensors}
					title={lJson.label}
					type={lJson.type}
					value={lJson.value}
				/>
			);
			break;
		case 'picture':
			a = <PictureSensor />;
			break;
		case 'user':
			a = <UserSensor />;
	}
	return (
		<div className={classNames('card', getAdditionalClass(props.type))}>
			{a}
		</div>
	);
}
