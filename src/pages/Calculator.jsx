import React, { useState, useEffect } from 'react'

function Calculator() {

    const [actBtn, setActBtn] = useState(0)

    useEffect(() => {
        console.log(actBtn)
    }, [actBtn])

    return (
        <section className="flex min-h-screen bg-green-100 ">
            {/* nm-auto yg bikin ke tengah */}
            <div id="main"
                className="grid grid-cols-2 gap-8 p-8 m-auto bg-white rounded-2xl">

                {/* start of kiri */}
                <div id="kiri"
                    className="flex-initial h-5 h-full text-left">
                    {/* start of bill input */}
                    <div id="bill" className={styling.title}>
                        <h4>Bill</h4>
                        <div id="inputbar" className="flex justify-between px-4 py-2 mt-1 text-2xl bg-gray-100 rounded">
                            <p className="text-gray-200">$</p>
                            <p className="font-bold text-green-700">214</p>

                        </div>
                    </div>
                    {/* end of bill input */}

                    {/* start of select tip */}
                    <div className="mt-8 " id="Select Tip %">
                        <h4 className={styling.title}>Select Tip %</h4>
                        <div className="grid grid-cols-3 gap-3">
                            <button type="button" onClick={() => setActBtn(1)} className={`${styling.tipButton}` + ((actBtn === 1) ? " active" : "")}>5%</button>
                            <button type="button" onClick={() => setActBtn(2)} className={styling.tipButton}>10%</button>
                            <button type="button" onClick={() => setActBtn(3)} className={styling.tipButton}>15%</button>
                            <button type="button" onClick={() => setActBtn(4)} className={styling.tipButton}>25%</button>
                            <button type="button" onClick={() => setActBtn(5)} className={styling.tipButton}>50%</button>
                            <button type="button" onClick={() => setActBtn(6)} className={`${styling.tipCustom}`}>Custom</button>

                        </div>
                    </div>
                    {/* end of select input */}

                    {/* start of person input */}
                    <div id="person" className="mt-8">
                        <h4 className={styling.title}>Person</h4>
                        <div id="inputbar" className="flex justify-between px-4 py-2 mt-1 text-2xl bg-gray-100 rounded">
                            <p className="text-gray-200">$</p>
                            <p className="font-bold text-green-700">214</p>

                        </div>
                    </div>
                    {/* end of person input */}
                </div>
                {/* end of kiri */}

                {/* start of kanan */}
                <div id="kanan" className="">
                    <div className="flex flex-col h-full bg-white bg-green-700 p-9 w-80 rounded-2xl" id="bg-kanan">
                        <div id="teks1">
                            <div className="flex justify-between ">
                                <div>
                                    <h4 className="font-bold text-white">Tip Ammount</h4>
                                    <p className="text-left text-gray-400 ">/ peson</p>
                                </div>
                                <p className={styling.output}>$1.23</p>
                            </div>
                        </div>

                        <div id="teks2">
                            <div className="flex justify-between ">
                                <div>
                                    <h4 className="font-bold text-white">Tip Ammount</h4>
                                    <p className="text-left text-gray-400 ">/ peson</p>
                                </div>
                                <p className={styling.output}>$1.23</p>
                            </div>
                        </div>
                        <div className="mt-auto bg-green-500 rounded-lg justify-self-end">
                            <button className="py-3 text-green-700 ">RESET</button>
                        </div>

                    </div>
                </div>
                {/* end of kanan */}


            </div>
        </section >
    )
}

export default Calculator

const styling = {
    output: `text-green-500 text-4xl font-bold`,
    tipButton: `font-bold text-white bg-green-700 py-2 text-2xl text-center rounded active:bg-green-500 active:text-color-700`,
    tipCustom: `font-bold text-gray-300 bg-gray-100 py-2 text-2xl text-center rounded active:bg-green-500 active:text-color-700`,
    title: "text-gray-300"
}
