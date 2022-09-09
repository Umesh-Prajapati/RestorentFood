import React, { useEffect, useState } from "react";


export default () => {

    const [arr, setArr] = useState([]);
    const [searchArr, setsearchArr] = useState([]);

    //--------------------------------------

    useEffect(()=>{
        callApi();
    },[])

    //--------------------------------------

    async function callApi(){
        try{
        const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/restaurant/`)
        // const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/search?q=Suya`)
        const data = await res.json();
        // console.log(JSON.stringify(data));
        const filterr = await data.Result;
        // console.log(filterr);
        setArr(filterr);
        }catch(e){
            alert("Something it's Wrong..with restorent");
        }
    }

    function emptyArr(){
        setsearchArr([]);
        console.log("emptyarr---"+searchArr.length)
    }

    async function searchAPI(search){
        console.log("---"+"data[0].images[0]")
        try{
        const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/search?q=${search}`)
        const data = await res.json();
        console.log("---"+data[0].images[0])
        setsearchArr(data)
        }catch(e){
            alert("Something it's Wrong..with menu");
        }
    }

    async function imageShow(search){
        try{
        const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/menu?_id=${search}`)
        const data = await res.json();
        setImageArr(data.Result[0])
        console.log("calling image--"+data.Result[0]._id)
        }catch(e){
            alert("Something it's Wrong..with Image Search");
        }
    }
    return[ arr, searchArr, searchAPI, emptyArr ];
};











// async function callApi(){
//     try{
//     const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/search?q=${term}`)
//     // const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/search?q=Suya`)
//     const data = await res.json();
//     // console.log(JSON.stringify(data));
//     const filterr = await data.Result;
//     setArr(data);
//     }catch(e){
//         alert("Something it's Wrong..");
//     }
// }