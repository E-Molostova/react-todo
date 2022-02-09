import React from 'react';
import { FilterBtn } from './FilterBtnsStyled';

const FilterBtns = () => {
    return (
        <div>
            <FilterBtn type='button' id='All'>All</FilterBtn>
            <FilterBtn type='button' id='Active'>Active</FilterBtn>
            <FilterBtn type='button' id='Completed'>Completed</FilterBtn>
        </div>
    );
}

export default FilterBtns;