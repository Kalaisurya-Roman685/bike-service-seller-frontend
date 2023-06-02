import React, { useEffect, useState } from 'react'



export const Checkbox = ({ isChecked, label, checkHandler, index }) => {

    return (
        <div>
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
            />
            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    )
}

function Dashboard() {


    const [datass,setD]=useState([]);
    const [datass1,setD1]=useState([]);





    const allToppings = [
        { name: "Golden Corn", checked: false },
        { name: "Paneer", checked: false },
        { name: "Tomato", checked: false },
        { name: "Mushroom", checked: false },
        { name: "Onion", checked: false },
        { name: "Black Olives", checked: false },
    ]
    const [toppings, setToppings] = useState(allToppings)
    const [toppings1, setToppings1] = useState([])
    const [toppings2, setToppings2] = useState([])
    


    const updateCheckStatus = index => {
        valuesf();
  

setToppings(
    toppings.map((topping, currentIndex) =>
        currentIndex === index
            ? { ...topping, checked: !topping.checked }
            : topping
    )


)
    }


    useEffect(()=>{
       const backendname=["Tomato"];

        const sampledata=[];
        allToppings?.map((item,index)=>{
         backendname?.map((items,index)=>{
             if(items==item?.name)
             {
                 console.log(item,"kalai");
             }
             else
             {
                 sampledata.push(items);   
             }
         })
        })
 
        console.log(sampledata,"sampledata")
    },[datass])



    const EditData = () => {

       const backendname=["Tomato"];
       const sampledata=[];
       allToppings?.map((item,index)=>{
        backendname?.map((items,index)=>{
            if(items==item?.name)
            {
                console.log(item,"kalai");
            }
            else
            {
                console.log(item,"kalai1");  
            }
        })
       })

       console.log(sampledata,"sampledata")
        
       
  

    }

    console.log(datass1,"datass1")


    const valuesf=()=>{
        const f=[];
        const f1=[];


        const h=[...new Set(f1)];

        console.log(h,"h")


        console.log(f,"f");


        toppings1?.map((item,index)=>{
            toppings?.map((items,index)=>{

              
                if(items?.name===item)
                {
                    console.log("item",items)

                    const ht={
                        name:items?.name,
                        checked:true
                    }

                    f.push(ht);
                   
                    
                }
                else
                {
                   f1.push(items);
                }
               

                
            })
        })
        // setToppings2([...toppings2,items]);

        // toppings.map((item,index)=>{
        
        //     if(item?.checked===true)
        //     {
        //         f.push(item?.name)
        //     }
        // })
        setD(f);
        console.log("kalai",f1) 



    }

    console.log(toppings2,"toppings1")


 

    return (
        <div className="App">
            {toppings.map((topping, index) => (
                <Checkbox
                    key={topping.name}
                    isChecked={topping.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={topping.name}
                    index={index}
                />
            ))}

            <button onClick={EditData}>edit</button>
<button onClick={valuesf}>valuesf</button>

<pre>{JSON.stringify(toppings, null, 2)}</pre>
        </div>
    )
}

export default Dashboard



// import React, { useState } from 'react'




// export const KalaiCheck = ({ index, label, checkvalue, isChecked }) => {
//     return (
//         <div>

//             <input type="checkbox"
//                 isChecked={isChecked}
//                 index={index}
//                 id={`checkbox-${index}`}
//                 label={label}
//                 onChange={checkvalue}
//             />

//             <label htmlFor={`checkbox-${index}`}>{label}</label>


//         </div>
//     )
// }

// function Dashboard() {

//     const forms = [
//         { name: "Golden Corn", checked: false },
//         { name: "Paneer", checked: false },
//         { name: "Tomato", checked: false },
//         { name: "Mushroom", checked: false },
//         { name: "Onion", checked: false },
//         { name: "Black Olives", checked: true },
//     ]

//     const [Data, setDatas] = useState(forms)


//     const UpdateDataCheck = (indexs) => {
//         // setDatas(Data?.map((items, index) =>
//         //     index === indexs ? { ...Data, checked: !items?.checked } : items
//         // ))

//         setDatas(
//             Data.map((topping, currentIndex) =>
//                 currentIndex === indexs
//                     ? { ...topping, checked: !topping.checked }
//                     : topping
//             )
//         )
//     }

//     console.log(Data, "Data")


    
//     return (
//         <div>
//             {Data?.map((item, index) => {
//                 return (

//                     <KalaiCheck
//                         label={item?.name}
//                         checkvalue={() => UpdateDataCheck(index)}
//                         index={index}
//                         isChecked={item?.checked}
//                     />

//                 )
//             })}

//             <button onClick={EditData}>Edit Button</button>
//         </div>
//     )
// }

// export default Dashboard
