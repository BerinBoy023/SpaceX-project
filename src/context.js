import React,{createContext,useContext,useState,useEffect} from 'react'

const AppContext = createContext();

const url = 'https://api.spacexdata.com/v3/launches'
const AppProvider=({children})=>{
    // Fetch data
    const fetchData = async()=>{
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(false);
        setCapsules(data);
        setFilteredArray(data);
        
    }
    const [capsules,setCapsules] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [sortLaunchDirection, setSortLaunchDirection] = useState(true);
    const [filteredYears,setFilteredYears] = useState('All');
    const [filteredArray,setFilteredArray]=useState([]);
    
    const sortArrayByDate=()=>{
        //Check Direction needed
        if(sortLaunchDirection){
            let newArray = capsules.sort((a,b)=>{
                return b.launch_year - a.launch_year
            })

            setCapsules(newArray)
        } else if(!sortLaunchDirection){
             let newArray = capsules.sort((a,b)=>{
                return  a.launch_year - b.launch_year 
            })

            setCapsules(newArray)
        }
    }
    //fetch data useEffect
    
    useEffect(()=>{
        fetchData();
    },[])
    //reload button
    const reloadData=()=>{
        fetchData();
    }
    
//Filter button

   
    useEffect(()=>{
        if(filteredYears === 'All'){
            setFilteredArray(capsules)
           
        } else{

            setFilteredArray(capsules.filter(item=> item.launch_year === filteredYears))
        }

    },[filteredYears])
        
    
              
    return <AppContext.Provider value={{
        reloadData,
        capsules,
        isLoading,
        sortLaunchDirection,
        setSortLaunchDirection,
        sortArrayByDate,
        setFilteredYears,
        filteredArray

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}