import {useEffect, useState} from "react";
import dayjs from "dayjs";
import "./TaxCalculate.css"

export const TaxCalculate = () => {
	const data = [
		{ano: 2021, mes: 1, reajusteArt53: 0.193450978, interesArt53: 0.705, multaArt97: 0.351131, utm: 50978},
		{ano: 2021, mes: 2, reajusteArt53: 0.312, interesArt53: 0.69, multaArt97: 0.351489, utm: 51489},
		{ano: 2021, mes: 3, reajusteArt53: 0.303, interesArt53: 0.675, multaArt97: 0.351592, utm: 51592},
		{ano: 2021, mes: 4, reajusteArt53: 0.301, interesArt53: 0.66, multaArt97: 0.351798, utm: 51798},
		{ano: 2021, mes: 5, reajusteArt53: 0.296, interesArt53: 0.645, multaArt97: 0.352005, utm: 52005},
		{ano: 2021, mes: 6, reajusteArt53: 0.291, interesArt53: 0.63, multaArt97: 0.352161, utm: 52161},
		{ano: 2021, mes: 7, reajusteArt53: 0.288, interesArt53: 0.615, multaArt97: 0.352213, utm: 52213},
		{ano: 2021, mes: 8, reajusteArt53: 0.287, interesArt53: 0.60, multaArt97: 0.352631, utm: 52631},
		{ano: 2021, mes: 9, reajusteArt53: 0.276, interesArt53: 0.585, multaArt97: 0.352842, utm: 52842},
		{ano: 2021, mes: 10, reajusteArt53: 0.272, interesArt53: 0.57, multaArt97: 0.353476, utm: 53476},
		{ano: 2021, mes: 11, reajusteArt53: 0.257, interesArt53: 0.555, multaArt97: 0.354171, utm: 54171},
		{ano: 2021, mes: 12, reajusteArt53: 0.24, interesArt53: 0.54, multaArt97: 0.354442, utm: 54442},
		{ano: 2022, mes: 1, reajusteArt53: 0.234, interesArt53: 0.525, multaArt97: 0.354878, utm: 54878},
		{ano: 2022, mes: 2, reajusteArt53: 0.225, interesArt53: 0.51, multaArt97: 0.355537, utm: 55537},
		{ano: 2022, mes: 3, reajusteArt53: 0.21, interesArt53: 0.495, multaArt97: 0.355704, utm: 55704},
		{ano: 2022, mes: 4, reajusteArt53: 0.207, interesArt53: 0.48, multaArt97: 0.356762, utm: 56762},
		{ano: 2022, mes: 5, reajusteArt53: 0.185, interesArt53: 0.465, multaArt97: 0.357557, utm: 57557},
		{ano: 2022, mes: 6, reajusteArt53: 0.168, interesArt53: 0.45, multaArt97: 0.358248, utm: 58248},
		{ano: 2022, mes: 7, reajusteArt53: 0.155, interesArt53: 0.435, multaArt97: 0.358772, utm: 58772},
		{ano: 2022, mes: 8, reajusteArt53: 0.144, interesArt53: 0.42, multaArt97: 0.359595, utm: 59595},
		{ano: 2022, mes: 9, reajusteArt53: 0.128, interesArt53: 0.405, multaArt97: 0.360310, utm: 60310},
		{ano: 2022, mes: 10, reajusteArt53: 0.115, interesArt53: 0.39, multaArt97: 0.360853, utm: 60853},
		{ano: 2022, mes: 11, reajusteArt53: 0.105, interesArt53: 0.375, multaArt97: 0.361157, utm: 61157},
		{ano: 2022, mes: 12, reajusteArt53: 0.1, interesArt53: 0.36, multaArt97: 0.361769, utm: 61769},
		{ano: 2023, mes: 1, reajusteArt53: 0.089, interesArt53: 0.345, multaArt97: 0.361954, utm: 61954},
		{ano: 2023, mes: 2, reajusteArt53: 0.086, interesArt53: 0.33, multaArt97: 0.362450, utm: 62450},
		{ano: 2023, mes: 3, reajusteArt53: 0.077, interesArt53: 0.315, multaArt97: 0.362388, utm: 62388},
		{ano: 2023, mes: 4, reajusteArt53: 0.078, interesArt53: 0.30, multaArt97: 0.363074, utm: 63074},
		{ano: 2023, mes: 5, reajusteArt53: 0.066, interesArt53: 0.285, multaArt97: 0.363263, utm: 63263},
		{ano: 2023, mes: 6, reajusteArt53: 0.063, interesArt53: 0.27, multaArt97: 0.363326, utm: 63326},
		{ano: 2023, mes: 7, reajusteArt53: 0.062, interesArt53: 0.255, multaArt97: 0.363199, utm: 63199},
		{ano: 2023, mes: 8, reajusteArt53: 0.063, interesArt53: 0.24, multaArt97: 0.363452, utm: 63452},
		{ano: 2023, mes: 9, reajusteArt53: 0.06, interesArt53: 0.225, multaArt97: 0.363515, utm: 63515},
		{ano: 2023, mes: 10, reajusteArt53: 0.059, interesArt53: 0.21, multaArt97: 0.286396, utm: 63640},
		{ano: 2023, mes: 11, reajusteArt53: 0.051, interesArt53: 0.195, multaArt97: 0.266422, utm: 63422},
		{ano: 2023, mes: 12, reajusteArt53: 0.047, interesArt53: 0.18, multaArt97: 0.246467, utm: 64467},
		{ano: 2024, mes: 1, reajusteArt53: 0.039, interesArt53: 0.165, multaArt97: 0.226434, utm: 64434},
		{ano: 2024, mes: 2, reajusteArt53: 0.045, interesArt53: 0.15, multaArt97: 0.264793, utm: 64793},
		{ano: 2024, mes: 3, reajusteArt53: 0.038, interesArt53: 0.135, multaArt97: 0.186518, utm: 65518},
		{ano: 2024, mes: 4, reajusteArt53: 0.032, interesArt53: 0.12, multaArt97: 0.166544, utm: 65544},
		{ano: 2024, mes: 5, reajusteArt53: 0.028, interesArt53: 0.105, multaArt97: 0.146577, utm: 65577},
		{ano: 2024, mes: 6, reajusteArt53: 0.022, interesArt53: 0.09, multaArt97: 0.126597, utm: 65967},
		{ano: 2024, mes: 7, reajusteArt53: 0.02, interesArt53: 0.075, multaArt97: 0.165901, utm: 65901},
		{ano: 2024, mes: 8, reajusteArt53: 0.021, interesArt53: 0.06, multaArt97: 0.166362, utm: 66362},
		{ano: 2024, mes: 9, reajusteArt53: 0.013, interesArt53: 0.045, multaArt97: 0.166561, utm: 66561},
		{ano: 2024, mes: 10, reajusteArt53: 0.011, interesArt53: 0.03, multaArt97: 0.166628, utm: 66628},
		{ano: 2024, mes: 11, reajusteArt53: 0.01, interesArt53: 0.015, multaArt97: 0.167294, utm: 67294},
		{ano: 2024, mes: 12, reajusteArt53: 0, interesArt53: 0, multaArt97: 0, utm: 67294}
	];


	const [dueDate, setDueDate] = useState(null);
	const [initialDate, setInitialDate] = useState(null);
	const [days, setDays] = useState('');
	const [months, setMonths] = useState('');
	const [years, setYears] = useState('');
	const [filteredData, setFilteredData] = useState(data);
	const [tax, setTax] = useState(0);
	const [readjustedInterest, setReadjustedInterest] = useState(0);
	const [calculateInterest, setCalculateInterest] = useState(0);
	const [calculatedFine, setCalculatedFine] = useState(0)
	const [totalAmount, setTotalAmount] = useState(0)
	const [error, setError] = useState('');

	useEffect(() => {
		setTotalAmount((parseFloat(tax) +
			parseFloat(readjustedInterest) +
			parseFloat(calculateInterest) +
			parseFloat(calculatedFine)).toFixed(2));
	}, [tax, readjustedInterest, calculateInterest, calculatedFine]);


	const handleInitialDateChange = (event) => {
		setInitialDate(dayjs(event.target.value, "DD-MM-YYYY"));
	};

	const handleDueDateChange = (event) => {
		setDueDate(dayjs(event.target.value, "DD-MM-YYYY"));
		const filtered = data.filter(item => item.ano === dueDate.year() && item.mes === dueDate.month() + 1);
		setFilteredData(filtered);
	};

	const getDate = (initialDate, dueDate) => {
		const year = dueDate.year();
		const month = dueDate.month() + 1;
		const day = initialDate.diff(dueDate, 'day')

		setYears(year);
		setMonths(month);
		setDays(day);
	}

	const handleTax = (e) => {
		e.preventDefault();
		setTax(e.target.value);
		if (!tax) {
			setError("Campo requerido");
			setReadjustedInterest(0);
			setCalculateInterest(0);
			setCalculatedFine(0);
			setTotalAmount(0);
		} else {
			setError('');
			setReadjustedInterest((parseFloat(e.target.value) * filteredData[0].reajusteArt53).toFixed(2));
			setCalculateInterest((parseFloat(e.target.value) * filteredData[0].interesArt53).toFixed(2));
			setCalculatedFine((parseFloat(e.target.value) * filteredData[0].multaArt97).toFixed(2));

		}

	}

	return (
		<>
			<div className="row m-1 justify-content-center mt-3">
				<div className="col-md-5 border border-2 border-secondary rounded-3 me-md-4 mt-2 pb-3">
					<h4 className="text-center mb-4 mt-4"> Cálculo de Fechas </h4>
					<form className="row g-2">
						<div className="col-md-10 m-auto mt-4">
							<label htmlFor="inputDateLimitEnd" className="form-label fw-bold">Vencimiento
								Impuesto</label>
							<input type={"date"} className="form-control" id="inputDateLimitEnd"
							       onChange={handleDueDateChange}/>
							<label htmlFor="inputDateInit" className="form-label fw-bold">Fecha de Inicio</label>
							<input type={"date"} className="form-control" id="inputDateInit"
							       onChange={handleInitialDateChange}/>
						</div>
						<div className={"col-12 text-center mt-3"}>
							<button type={"button"} className="btn btn-warning btn-sm fw-bold custom-btn rounded-3 p-2"
							        onClick={(e) => {
								        handleTax(e);
								        getDate(initialDate, dueDate)
							        }}>Calculo
								Vencimiento
							</button>
						</div>
						<div className="col-3 m-auto mt-4">
							<label htmlFor="inputDays" className="form-label fw-bold">Días</label>
							<input type={"text"} className="form-control" id="inputDays" value={days} disabled/>
						</div>
						<div className="col-3 m-auto mt-4">
							<label htmlFor="inputDays" className="form-label fw-bold">Mes</label>
							<input type={"text"} className="form-control" id="inputDays" value={months} disabled/>
						</div>
						<div className="col-3 m-auto mt-4">
							<label htmlFor="inputDays" className="form-label fw-bold">Año</label>
							<input type={"text"} className="form-control" id="inputDays" value={years} disabled/>
						</div>
					</form>
				</div>
				<div className="col-md-5 border border-2 border-secondary rounded-3 mt-2">
					<h4 className="text-center mb-4 mt-4"> Cálculo Determinado </h4>
					<form className="row g-2">
						<div className="col-md-10 m-auto mt-2">
							<label htmlFor="inputTax" className="form-label fw-bold">Monto del Impuesto</label>
							<input type={"number"} className="form-control" id="inputTax" onChange={(e) => handleTax(e)}
							       placeholder={0} required/>
							{error && <div style={{color: 'red'}}>{error}</div>}
						</div>
						<div className="col-md-10 m-auto mt-2">
							<label htmlFor="inputTaxReadjusted" className="form-label fw-bold">Interes
								Reajustado</label>
							<input type={"number"} className="form-control" id="inputTaxReadjusted"
							       value={readjustedInterest} disabled/>
						</div>
						<div className="col-md-10 m-auto mt-2">
							<label htmlFor="inputCalculatedInterest" className="form-label fw-bold">Interes
								Calculado</label>
							<input type={"number"} className="form-control" id="inputCalculatedInterest"
							       value={calculateInterest} disabled/>
						</div>
						<div className="col-md-10 m-auto mt-2">
							<label htmlFor="inputCalculatedFine" className="form-label fw-bold">Multa Calculada</label>
							<input type={"number"} className="form-control" id="inputCalculatedFine"
							       value={calculatedFine} disabled/>
						</div>
						<div className="col-md-10 m-auto mt-2 mb-3">
							<label htmlFor="inputTotalAmount" className="form-label fw-bold">Total a Pagar</label>
							<input type={"number"} className="form-control" id="inputTotalAmount"
							       value={totalAmount}
							       disabled/>
						</div>
					</form>
				</div>
				<div className="col-md-10 mt-4 border border-2 border-secondary rounded-3">
					<h4 className={"m-4 text-center"}>Tabla de Impuestos</h4>
					<table className="table table-striped">
						<thead>
						<tr>
							<th>Año</th>
							<th>Mes</th>
							<th>Reajuste Art. 53</th>
							<th>Interes Art. 53</th>
							<th>Multa Art. 97</th>
							<th>UTM</th>
						</tr>
						</thead>
						<tbody>
						{filteredData.map((item, index) => (
							<tr key={index}>
								<td>{item.ano}</td>
								<td>{item.mes}</td>
								<td>{item.reajusteArt53}</td>
								<td>{item.interesArt53}</td>
								<td>{item.multaArt97}</td>
								<td>{item.utm}</td>
							</tr>
						))}
						</tbody>
					</table>

				</div>
			</div>
		</>
	)
}