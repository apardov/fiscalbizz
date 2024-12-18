import "./NewHouseSale.css";
import {useState} from "react";

export const NewHouseSale = () => {
	const [saleAmount, setSaleAmount] = useState(0);
	const [landAmount, setLandAmount] = useState(0);
	const [taxBase, setTaxBase] = useState(0)
	const [IVA, setIVA] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	const handleTotalAmount = (e) => {
		e.preventDefault();
		if (saleAmount !== 0) {
			const calculatedIVA = saleAmount * 0.19;
			setIVA(calculatedIVA);
			setTaxBase(saleAmount);
			const total = saleAmount + landAmount + calculatedIVA;
			setTotalAmount(total);
		}
	};

	return (
		<>
			<div className={"row m-1 d-flex justify-content-center mt-3"}>
				<div className="col-md-8 mt-4 border border-2 border-secondary rounded-3 text-center">
					<h5 className={"text-center mt-3 mb-5"}>Determinacion de IVA Viviendas Nuevas</h5>
					<form className="row g-3">
						<div className="col-12">
							<label htmlFor="inputSale" className="form-label">Monto Venta (Inmueble)</label>
							<input
								type="text"
								className="form-control mx-auto custom-input"
								id="inputSale"
								placeholder={0}
								onChange={(e) => setSaleAmount(Number(e.target.value.replace(/[,.]/g, '')) || 0)}
							/>
						</div>
						<div className="col-12">
							<label htmlFor="inputLand" className="form-label">Valor Terreno (Reajustado - Avaluo
								Fiscal)</label>
							<input
								type="text"
								className="form-control mx-auto custom-input"
								id="inputLand"
								placeholder={0}
								onChange={(e) => setLandAmount(Number(e.target.value.replace(/[,.]/g, '')) || 0)}
							/>
							<label className={"mt-2 mb-2"}>(Si no incluye terreno, dejar vacio)</label>
						</div>
						<div className="col-12 mb-3 mt-3">
							<button
								type="submit"
								className="btn btn-sm btn-warning btn-custom p-2 fw-bold rounded-3"
								onClick={(e) => handleTotalAmount(e)}
							>
								Calcular
							</button>
						</div>
					</form>
					<div className="col-12 mt-4">
						<label htmlFor="inputBase" className="form-label">Base Imponible</label>
						<input
							type="number"
							className="form-control mx-auto custom-input"
							id="inputBase"
							value={taxBase}
							disabled
						/>
					</div>
					<div className="col-12 mt-3">
						<label htmlFor="inputIVA" className="form-label">IVA</label>
						<input
							type="number"
							className="form-control mx-auto custom-input"
							id="inputIVA"
							value={IVA}
							disabled
						/>
					</div>
					<div className="col-12 mb-5">
						<label htmlFor="inputTotal" className="form-label">Total</label>
						<input
							type="number"
							className="form-control mx-auto custom-input"
							id="inputTotal"
							value={totalAmount}
							disabled
						/>
					</div>
				</div>
			</div>
		</>
	);
};
