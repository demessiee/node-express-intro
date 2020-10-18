import React,{useState} from 'react'

function Carousel(){
    function createProduct(model,msrp,cityMpg,hwyMpg,description,image){
        return {
            model:model,
            msrp:msrp,
            cityMpg:cityMpg,
            hwyMpg:hwyMpg,
            description:description,
            image:image,
        }
    }
    const productDetails = {
        cars:[
            createProduct("Civic",21050,30,38,"Small compact car","car-1.jpeg"),
            createProduct("Accord",24770,30,38,"The family car","car-2.jpeg"),
            createProduct("Civic Coupe",21050,30,38,"The ultimate 2 door experience","car-3.jpeg"),
        ],
        suvs:[
            createProduct("Passport",32590,20,25,"Built to go where you go","suv-1.jpeg"),
            createProduct("HR-V",21020,28,34,"All wheel drive","suv-2.jpeg"),
            createProduct("CR-V",25150,28,34,"The perfect crossover","suv-3.jpeg"),
        ],
        trucks:[
            createProduct("Odyssey",31790,19,28,"Family friendly minivan","truck-1.jpeg"),
            createProduct("Ridgeline",33900,19,26,"The truck you need","truck-2.jpeg"),
        ],
        electric:[
            createProduct("Clarity",33400,47,340,"Makes life more clear","electric-1.jpeg"),
            createProduct("Insight",22930,55,49,"The hybrid experience","electric-2.jpeg"),
            createProduct("CR-V Hybrid",27850,40,35,"Makes your CR-V a Hybrid","electric-3.jpeg")
        ]
    }
    const [category,setCategory] = useState("cars")
    const [index,setIndex] = useState(0)

    const handleNext = () => {
        if(index + 1 > productDetails[category].length - 1)
            return 
        setIndex(index + 1)
    }

    const handlePrev = () => {
        if(index - 1 < 0 )
            return 
        setIndex(index - 1)
    }
    return (
        <div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button style={{margin:"20px"}} onClick={()=>{
                    setCategory("cars")
                    setIndex(0)
                }}>
                    Cars
                </button>
                <button style={{margin:"20px"}} onClick={()=>{
                    setCategory("suvs")
                    setIndex(0)
                }}>
                    Suvs
                </button>
                <button style={{margin:"20px"}} onClick={()=>{
                    setCategory("trucks")
                    setIndex(0)
                }}>
                    Trucks
                </button>
                <button style={{margin:"20px"}} onClick={()=>{
                    setCategory("electric")
                    setIndex(0)
                }}>
                    Electric
                </button>
                
            </div>
            <div style={{border:"1px solid black", margin:"0 auto", width:"800px",height:"400px"}}>
                <button onClick={handlePrev} style={{position:"relative",top:"200px"}}>Back</button>
                <button onClick={handleNext}  style={{position:"relative",top:"200px", left:"708px"}}>Next</button>
                <div style={{display:"flex"}}>
                    <div style={{width:"80%"}}>
                        <img style={{position:"relative",top:"-22px", zIndex:-99 ,objectFit:"cover", height:"400px", width:"100%"}}
                         src = {productDetails[category][index].image}
                         alt = {productDetails[category][index].model}
                         />
                    </div>
                    <div style={{position:"relative", top:"-22px", zIndex:-99, width:"20%",backgroundColor:"#81c784"}}>
                        <div style={{float:"right"}}>
                        {category} {index + 1}/{productDetails[category].length}
                        </div>
                        <h1>{productDetails[category][index].model}</h1>
                        <p>
                            {productDetails[category][index].description}
                        </p>
                        <p>
                        MSRP: {productDetails[category][index].msrp}
                        </p>
                        <p>
                        MPG(city/hwy): {productDetails[category][index].cityMpg}/{productDetails[category][index].hwyMpg}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel