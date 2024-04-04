import React from 'react'
import './Filter.css'
import { filterData } from '../data'
function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div className='filter'>
            {
                filterData.map((data) => {
                    return (<button key={data.id} className='filterBtn' onClick={() => filterHandler(data.title)}>
                        {data.title}
                    </button>)
                })
            }
        </div>
    )
}

export default Filter;