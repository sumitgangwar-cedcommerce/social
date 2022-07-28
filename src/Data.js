import React, { useState } from 'react'

export const data = React.createContext();

const Data = (props) => {
    const [login_user , setLoginUser] = useState(['Sumit' , '1' , '1' , '1']);

    const [friend1 , setFriend11] = useState([
                                                ['1JULY.png' , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', [] , 0] , 
                                                ['1JUNE.png' , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', [] , 0]
                                            ])
    const [friend2 , setFriend22] = useState([
                                                ['exer2.png' , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' , [] , 0] , 
                                                ['exer3.png' , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', [] , 0]
                                            ])
    const [myFeed , setMyfeed1] = useState([])
    
    const [muteFr , setMuteFr1] = useState([])
   
    const setFriend1 = (data)=>{
        setFriend11([...data])
    }
    const setFriend2 = (data)=>{
        setFriend22([...data])
    }
    const setMyfeed = (data)=>{
        let temp = myFeed
        temp.splice(0 , 0 , data)
        setMyfeed1([...temp])
    }
    const editMyfeed = (data)=>{
        setMyfeed1([...data])
    }
    const setMuteFr = (data) =>{
        console.table(data)
        if(data[0]===1){
            if(muteFr.indexOf(data[1])===-1)   setMuteFr1([...muteFr,data[1]])
        }
        else {
            if(muteFr.length===1)   setMuteFr1([])
            else    {
                let temp = muteFr.splice(muteFr.indexOf(data[1])-1, 1)
                setMuteFr1([...temp])
            }
        }
    }
    

    return (    
        <data.Provider value={{login_user , setLoginUser , friend1 , setFriend1 , friend2 , setFriend2 , myFeed , setMyfeed , editMyfeed , setMuteFr,muteFr}}>
            {props.children} 
        </data.Provider>
    )
}

export default Data