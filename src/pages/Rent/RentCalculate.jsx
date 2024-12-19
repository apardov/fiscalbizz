import {useState} from "react";

export const RentCalculate = () => {

	const [rent, setRent] = useState(0);
	const [fiscalValue, setFiscalValue] = useState(0);
	const [elevenPercent, setElevenPercent] = useState(0);
	const [taxBase, setTaxBase] = useState(0);
	const [ivaCertain, setIvaCertain] = useState(0);
	const [grossTotal, setGrossTotal] = useState(0);


	const handleCalculateValues = (e) => {
		e.preventDefault();
		if (rent !== 0 || fiscalValue !== 0) {
			const fiscalEleven = ((fiscalValue * 0.11) / 12);
			setElevenPercent(fiscalEleven.toFixed(2));
			const base = (rent - fiscalEleven);
			setTaxBase(base.toFixed(2));
			const iva = (base * 0.19);
			setIvaCertain(iva.toFixed(2));
			const total = (base + iva);
			setGrossTotal(total.toFixed(2));
		}
	}

	return (
		<>
			<div className={"row mt-4 d-flex justify-content-center"}>
				<div className={"col-6 border border-2 border-black rounded-4"}>
					<div className="row g-3 mt-2 mb-5 fw-bold">
						<h4 className={"text-center"}>Arrendamiento</h4>
						<div className="col-5 mx-auto">
							<label htmlFor="inputRent" className="form-label">Valor Arriendo Mensual</label>
							<input type="text" className="form-control" id="inputRent" onChange={(e) => {
								setRent(Number(e.target.value.replace(/[,.]/g, ''))) || 0
							}}
							       placeholder={0}/>
						</div>
						<div className="w-100"></div>
						<div className="col-5 mx-auto">
							<label htmlFor="inputFiscalValue" className="form-label">Valor Avaluo Fiscal</label>
							<input type="text" className="form-control" id="inputFiscalValue" onChange={(e) => {
								setFiscalValue(Number(e.target.value.replace(/[,.]/g, ''))) || 0
							}}
							       placeholder={0}/>
						</div>
						<div className="w-100"></div>
						<div className={"col-2 mx-auto"}>
							<button className={"btn btn-sm btn-warning fw-bold btn-custom p-2 rounded-3"}
							        onClick={(e) => {
								        handleCalculateValues(e)
							        }}>Calcular
							</button>
						</div>
						<div className="w-100"></div>
						<div className="col-5 mx-auto">
							<label htmlFor="inputFiscalEleven" className="form-label">11% Avaluo Fiscal</label>
							<input type="text" className="form-control" id="inputFiscalEleven"
							       value={elevenPercent} placeholder={0} disabled/>
						</div>
						<div className="w-100"></div>
						<div className="col-5 mx-auto">
							<label htmlFor="inputTaxBase" className="form-label">Base Imponible</label>
							<input type="text" className="form-control" id="inputTaxBase"
							       value={taxBase} placeholder={0} disabled/>
						</div>
						<div className="w-100"></div>
						<div className="col-5 mx-auto">
							<label htmlFor="inputIVACertain" className="form-label">IVA Determirnado</label>
							<input type="text" className="form-control" id="inputIVACertain"
							       value={ivaCertain} placeholder={0} disabled/>
						</div>
					</div>
				</div>
			</div>

			<div className={"row mt-4 d-flex justify-content-center"}>
				<div className={"col-7 border border-2 border-black rounded-4"}>
					<div className={"row g-3 mt-2 mb-3 fw-bold"}>
						<h4 className={"text-center"}>Factura Pro Forma</h4>
						<div className={"col-5 gx-5"}>
							<label htmlFor="inputCompanyName" className={"form-label"}>Razon Social</label>
							<input type="text" className="form-control" id="inputCompanyName"
							       placeholder={"..."}/>
						</div>
						<div className={"col-5 gx-5"}>
							<label htmlFor="inputCompanyName" className={"form-label"}>N°
								Folio</label>
							<input type="text" className="form-control" id="inputCompanyName"
							       placeholder={0}/>
						</div>
						<hr className="border border-black border-1 opacity-100 mt-4"/>
						<div className="col-7 gx-5">
							<label htmlFor="inputRut" className="form-label">Rut</label>
							<input type="text" className="form-control" id="inputRut"
							       placeholder={"..."}/>
						</div>
						<div className="col-7 gx-5">
							<label htmlFor="inputTurn" className="form-label">Giro</label>
							<input type="text" className="form-control" id="inputTurn"
							       placeholder={"..."}/>
						</div>
						<div className="col-7 gx-5">
							<label htmlFor="inputAddress" className="form-label">Direccion</label>
							<input type="text" className="form-control" id="inputAddress"
							       placeholder={"..."}/>
						</div>
						<div className="col-7 gx-5">
							<label htmlFor="inputDistrict" className="form-label">Comuna</label>
							<input type="text" className="form-control" id="inputDistrict"
							       placeholder={"..."}/>
						</div>
						<div className="col-7 gx-5">
							<label htmlFor="inputContact" className="form-label">Contacto</label>
							<input type="text" className="form-control" id="inputContact"
							       placeholder={"..."}/>
						</div>
						<hr className="border border-black border-1 opacity-100 mt-4"/>
						<h5 className={"text-center"}>Detalle Factura</h5>
						<div className={"col-7 gx-5"}>
							<label htmlFor="inputGloss" className={"form-label"}>Glosa</label>
							<input type="text" className="form-control" id="inputGloss"
							       placeholder={"..."}/>
						</div>
						<div className={"col-5 gx-5"}>
							<label htmlFor="inputNetAmount" className={"form-label"}>Monto Neto</label>
							<input type="text" className="form-control" id="inputNetAmount"
							       placeholder={0}/>
						</div>
						<hr className="border border-black border-1 opacity-100 mt-4"/>
						<div className="col-5 gx-5 ms-auto">
							<label htmlFor="inputNetTotalAmount" className="form-label">Monto Neto</label>
							<input type="text" className="form-control" id="inputNetTotalAmount"
							       value={taxBase} placeholder={0} disabled/>
						</div>
						<div className={"w-100"}></div>
						<div className="col-5 gx-5 ms-auto">
							<label htmlFor="inputTotalIVA" className="form-label">IVA</label>
							<input type="text" className="form-control" id="inputTotalIVA"
							       value={ivaCertain} placeholder={0} disabled/>
						</div>
						<div className={"w-100"}></div>
						<div className="col-5 gx-5 ms-auto">
							<label htmlFor="inputGrossTotalAmount" className="form-label">Monto Total Bruto</label>
							<input type="text" className="form-control" id="inputGrossTotalAmount"
							       value={grossTotal} placeholder={0} disabled/>
						</div>

					</div>
				</div>
			</div>

		</>
	)
}