import { IMG_DATA } from '../../utils';

export function CCTVSensor() {
	return (
		<>
			<img className='card-img-top' src={IMG_DATA}></img>
			<div className='card-header'>
				<h3 className='card-title'>Garden</h3>
				<div className='card-options'>
					<button className='btn btn-secondary btn-sm'>
						<i className='bi bi-cast'></i>
					</button>
				</div>
			</div>
		</>
	);
}
