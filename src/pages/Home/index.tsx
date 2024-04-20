import { Col } from '../../components/Col';
import { SensorCard } from '../../components/SensorCard';
import './style.css';

export function Home() {
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
									<SensorCard props={{ type: 'aggregate' }} />
								</Col>
								<Col>
									<SensorCard props={{ type: 'picture' }} />
									<SensorCard props={{ type: 'user' }} />
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