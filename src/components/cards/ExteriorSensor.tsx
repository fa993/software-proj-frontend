export function ExteriorSensor() {
	return (
		<>
			<div className='card-header'>
				<h3 className='card-title'>Exterior</h3>
			</div>
			<div className='table-responsive'>
				<table className='table card-table table-vcenter'>
					<tbody>
						<tr>
							<td>
								<i className='mr-2 bi bi-bar-chart'></i>
							</td>
							<td>Air Quality Index</td>
							<td className='text-right'>
								<span className='badge bg-orange'>
									<span>101 AQI</span>
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
