import React, { useState, useEffect, useRef } from 'react'
import "../pages/calculator.css"

function Calculator() {

    // which button is active
    const [actBtn, setActBtn] = useState(0)

    // input price and person and custom Tip
    const [price, setPrice] = useState(0);
    const [person, setPerson] = useState(0);
    const [custom, setCustom] = useState(0);

    // Output Variable
    const [tipPerPerson, setTip] = useState(0)
    const [totalPerPerson, setTotal] = useState(0)

    // Measure width and height of button tip
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    // const targetRef = useRef();
    // useEffect(() => {
    //     if (targetRef.current) {
    //         setDimensions({
    //             width: targetRef.current.offsetWidth,
    //             height: targetRef.current.offsetHeight
    //         });
    //     }
    //     console.log(`height : ${dimensions.height} & width : ${dimensions.width}`)
    // }, [actBtn]);


    useEffect(() => {
        console.log(actBtn)
        calculate()

    }, [actBtn, price, person])


    // replace string input
    function txtNum(e, dest) {
        const angka = e.target.value.replace(/\D/g,"");
        if (dest==="price"){
            setPrice(angka)
            console.log(`price updated ${angka}`)
        } else if(dest==="person"){
            setPerson(angka)
            console.log(`person updated ${angka}`)
        } else{
            setCustom(angka)
            console.log(`custom updated ${angka}`)

        }

    }
    
    // calculate the value of tip
    function calculate(){
        console.log("im here")
        
        if (person!==0){
            let tip=0;
            
            switch(actBtn){
                case 1 : {tip=0.05; break}
                case 2 : {tip=0.1; break}
                case 3 : {tip=0.15; break}
                case 4 : {tip=0.25; break}
                case 5 : {tip=0.5; break}
                case 6 : {
                    tip=custom/100;
                    break;
                }
                default : {tip=0; break}
            }

            const totalPrice = (1+tip)*price

            const tipPerson = Number(((tip*price)/person).toFixed(2))
            const totalPerson = Number((totalPrice/person).toFixed(2))

            console.log(`${1+tip} ${totalPrice}`)

            setTip(tipPerson)
            setTotal(totalPerson)

            console.log(`tip ${tipPerPerson} total ${totalPerPerson} total price ${totalPrice}`)
            
        }
    }



    return (
        <section className="flex min-h-screen bg-green-100 ">
            {/* nm-auto yg bikin ke tengah */}
            <div id="main"
                className="grid grid-cols-1 gap-8 p-8 m-auto mt-32 bg-white md:grid-cols-2 rounded-t-2xl md:rounded-b-2xl">

                {/* start of kiri */}
                <div id="kiri"
                    className="flex-initial h-5 h-full text-left">


                    {/* start of bill input */}
                    <div id="bill" className={styling.title}>
                        <h4>Bill</h4>
                        <div id="inputbar" className="flex justify-between px-4 py-2 mt-1 text-2xl bg-gray-100 rounded">
                            <p className="text-gray-200">$</p>

                            {/* start of bill form */}
                            <form>
                                <input 
                                    type="tel" pattern="^-?[0-9]\d*\.?\d*$"
                                    className="w-full font-bold text-right text-green-700 bg-gray-100 border-none"
                                    onChange={(e) => txtNum(e,"price")}
                                    value={price}

                                    />
                                {/* <p className="font-bold text-green-700"></p> */}
                            </form>
                            {/* end of bill form */}

                        </div>
                    </div>
                    {/* end of bill input */}

                    {/* start of select tip */}
                    <div className="mt-8 " id="Select Tip %">
                        <h4 className={styling.title}>Select Tip %</h4>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                            <button
                                type="button"
                                onClick={() => ((actBtn === 1) ? setActBtn(0) : setActBtn(1))}
                                className={`${styling.tipButton}` + ((actBtn === 1) ? " active" : "")}>5%</button>
                            <button
                                type="button"
                                onClick={() => ((actBtn === 2) ? setActBtn(0) : setActBtn(2))}
                                className={`${styling.tipButton}` + ((actBtn === 2) ? " active" : "")}>10%</button>
                            <button
                                type="button"
                                onClick={() => ((actBtn === 3) ? setActBtn(0) : setActBtn(3))}
                                className={`${styling.tipButton}` + ((actBtn === 3) ? " active" : "")}>15%</button>
                            <button
                                type="button"
                                onClick={() => ((actBtn === 4) ? setActBtn(0) : setActBtn(4))}
                                className={`${styling.tipButton}` + ((actBtn === 4) ? " active" : "")}>25%</button>
                            <button
                                // ref={targetRef}
                                type="button"
                                onClick={() => ((actBtn === 5) ? setActBtn(0) : setActBtn(5))}
                                className={`${styling.tipButton}` + ((actBtn === 5) ? " active" : "") }>50%</button>
                                
                           
                           {/* start custom input */}
                            <button type="button" className={`${styling.tipCustom} px-3` + ((actBtn === 6) ? " active" : "")} 
                            onClick={() => ((actBtn === 6) ? setActBtn(0) : setActBtn(6))}>
                                
                                <form>
                                <input 
                                    type="tel" pattern="^-?[0-9]\d*\.?\d*$"
                                    className={`
                                    font-bold text-right text-green-700  border-none text-center bg-transparent
                                    `   }
                                    onChange={(e) => txtNum(e,"custom")}
                                    value={custom + "%"}
                                    style={{width:100}}
                                    
                                />
                            </form>
                            </button>
                            {/* end of custom input */}

                        </div>
                    </div>
                    {/* end of select input */}

                    {/* start of person input */}
                    <div id="person" className="mt-8">
                        <h4 className={styling.title}>Person</h4>
                        <div id="inputbar" className="flex justify-between px-4 py-2 mt-1 text-2xl bg-gray-100 rounded">
                            <p className="text-gray-200">$</p>

                            {/* start of form */}
                            <form>
                                <input 
                                    type="tel" pattern="^-?[0-9]\d*\.?\d*$"
                                    className="w-full font-bold text-right text-green-700 bg-gray-100 border-none"
                                    onChange={(e) => txtNum(e,"person")}
                                    value={person}

                                    />
                                {/* <p className="font-bold text-green-700"></p> */}
                            </form>
                            {/* end of form */}

                        </div>
                    </div>
                    {/* end of person input */}

                </div>
                {/* end of kiri */}

                {/* start of kanan */}
                <div id="kanan" className="">
                    <div className="flex flex-col h-full min-w-full bg-white bg-green-700 w-80 p-9 rounded-2xl" id="bg-kanan">
                        <div id="teks1">
                            <div className="flex justify-between ">
                                <div className="min-w-100px">
                                    <h4 className="font-bold text-left text-white ">Tip Ammount</h4>
                                    <p className="text-left text-gray-400 ">/ peson</p>
                                </div>
                                <p className={styling.output}>${tipPerPerson}</p>
                            </div>
                        </div>

                        <div id="teks2" className="mt-10">
                            <div className="flex justify-between ">
                                <div className="min-w-100px min-h">
                                    <h4 className="font-bold text-left text-white">Total</h4>
                                    <p className="text-left text-gray-400">/ peson</p>
                                </div>
                                <p className={styling.output}>${totalPerPerson}</p>
                            </div>
                        </div>
                        <div className="mt-10 bg-green-500 rounded-lg md:mt-auto justify-self-end">
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
    output: `text-green-500 text-4xl font-bold overflow-auto`,
    tipButton: `font-bold text-white bg-green-700 py-2 text-2xl text-center rounded`,
    tipCustom: `font-bold text-gray-300 bg-gray-100 py-2 text-2xl text-center rounded`,
    title: "text-gray-300"
}


