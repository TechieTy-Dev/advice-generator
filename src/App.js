import "./App.css";
import { useState } from "react";
import { dice, mobile, desktop } from "./images";

function App() {
	const [advice, setAdvice] = useState("");
	const [adviceId, setAdviceId] = useState("117");

	async function displayAdvice() {
		let advice = await fetch("https://api.adviceslip.com/advice");

		if (!advice.ok) {
			throw new Error(`HTTP error! status: ${advice.status}`);
		}
		let response = await advice.json();
		setAdvice(`"${response.slip.advice}"`);
		setAdviceId(response.slip.id);
	}
	function handleClick() {
		displayAdvice();
	}
	return (
		<div className="App">
			<body className="bg-darkblue w-100 min-h-screen mx-auto pt-52">
				<div className="bg-dgblue py-12 lg:w-[40%]  w-[90%] h-[400px] md:h-[350px] rounded-3xl mx-auto relative">
					<p className="text-green lg:w-[100%] w-[80%] mx-auto tracking-[.4em] text-sm uppercase">
						Advice # <span>{adviceId}</span>
					</p>
					<h1 className="text-white w-[80%] mx-auto p-4 text-3xl lg:w-[100%]">
						{advice}
					</h1>
					<div className="flex w-[90%] mx-auto items-center justify-center py-6 my-2">
						<img
							src={mobile}
							className="z-10 w-[95%] sm:block md:hidden mx-auto"
							alt="mobile divider"
						/>
						<img
							src={desktop}
							className="z-10 w-[90%] mx-auto md:block hidden"
							alt="mobile divider"
						/>
					</div>
					<div className="flex items-center justify-center absolute left-0 right-0 bottom-[-40px] mx-auto">
						<button
							displayAdvice={displayAdvice}
							onClick={handleClick}
							className="bg-green w-20 h-20 flex items-center justify-center p-6 rounded-full  hover:drop-shadow-[0_0_15px_rgba(82,255,168,1)]"
						>
							<img src={dice} alt="dice" className="absolute" />
						</button>
					</div>
				</div>
			</body>
		</div>
	);
}

export default App;
