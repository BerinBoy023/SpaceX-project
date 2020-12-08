import React from 'react'
import SortIcon from '../assets/icon/sort.png'
import ListItem from './listItem'
import Loading from './loading'
import {useGlobalContext} from '../context'
function LaunchList() {
    
    const {capsules,isLoading,sortLaunchDirection, setSortLaunchDirection,sortArrayByDate,setFilteredYears,filteredArray} = useGlobalContext();

    //Get launch Years
    const newArray = capsules.map((capsule)=>{
        return capsule.launch_year
    })
    const unique = [...new Set(newArray)];




    return (
            <div className='sort-container'>

            <div className="sort-btn-container">
                <select className='select-btn' defaultValue='Filter by Year' onChange={(e)=>setFilteredYears(e.target.value)}>
                    <option disabled value="Filter by Year">Filter by Year</option>
                    <option  value='All'>All</option>
                 {
                     unique.map((item,index)=>{
                        return <option key={index} value={item} >{item}</option>
                     })
                 }
                    
                    
                    
                </select>
                <button className='sort-btn' onClick={()=>{
                    setSortLaunchDirection(!sortLaunchDirection);
                    sortArrayByDate();
                }
                }
                >{`Sort ${sortLaunchDirection?'Descending':'Ascending'}`} <img src={SortIcon} alt="sort-icon" className='sort-icon'/></button>
            </div>
            
            
            {
                isLoading?<Loading/>:
            filteredArray.map((capsule,index)=>{
                
            
                return  <ListItem key={index} {...capsule}/>
            })}
            

            </div>
       
    )
}

export default LaunchList
