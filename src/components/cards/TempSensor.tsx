export function TempSensor() {
	return (
		<div className='d-flex align-items-center'>
			<span className='stamp stamp-md bg-red mr-3'>
				<i className='bi bi-thermometer'></i>
			</span>
			<div>
				<h4 className='m-0'>26.5°C</h4>
				<small className='text-muted'>Living Room</small>
			</div>
		</div>
	);
}
