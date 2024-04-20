import { Col } from '../../components/Col';
import { SensorCard } from '../../components/SensorCard';
import './style.css';

import { useEffect, useState } from 'preact/hooks';

export function Home() {
	const [living, setLiving] = useState(null);
	const [parental, setParental] = useState(null);

	useEffect(() => {
		var livingReq = fetch('http://localhost:3000/device/20');
		livingReq.then((t) => t.json()).then((t) => setLiving(t));

		var parentalReq = fetch('http://localhost:3000/device/40');
		parentalReq.then((t) => t.json()).then((t) => setParental(t));
	}, []);

	return (
		<div class='page-main'>
			<div class='dimmer'>
				<div class='dimmer-content'>
					<div class='my-3 my-md-5'>
						<div class='container'>
							<div class='d-flex flex-row flex-wrap justify-content-center'>
								<Col>
									<SensorCard props={{ type: 'room-temp' }} />
									<SensorCard props={{ type: 'house-temp' }} />
									<SensorCard props={{ type: 'cctv' }} />
									<SensorCard props={{ type: 'exterior' }} />
								</Col>
								<Col>
									{living != null ? (
										<SensorCard props={{ type: 'aggregate', json: living }} />
									) : (
										<></>
									)}
								</Col>
								<Col>
									<SensorCard props={{ type: 'picture' }} />
									<SensorCard props={{ type: 'user' }} />
									{parental != null ? (
										<SensorCard props={{ type: 'aggregate', json: parental }} />
									) : (
										<></>
									)}
								</Col>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target='_blank' class='resource'>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
