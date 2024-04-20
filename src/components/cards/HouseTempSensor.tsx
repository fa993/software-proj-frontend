export function HouseTempSensor() {
	return (
		<div className='card-block px-30 py-10' style='padding: 10px 40px;'>
			<div style='font-size: 14px; color: rgb(118, 131, 143);'>
				9 May - Main house
			</div>
			<div className='row'>
				<div className='col-9'>
					<div
						className='font-size-40 blue-grey-700'
						style='font-size: 40px; line-height: 1.2;'
					>
						28°<span style='font-size: 30px;'>C</span>
					</div>
				</div>
				<div
					className='col-3 text-right'
					style='padding-right: 10px; padding-left: 10px; margin-top: -0.75rem;'
				>
					<i className='bi bi-cloud-rain' style='font-size: 50px;'></i>
				</div>
			</div>
		</div>
	);
}
