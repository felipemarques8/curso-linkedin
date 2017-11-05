import React from 'react'

const ContestsPreview = (contests) => {
    return(
        <div className='ContestsPreview'>
            <div>
                {contests.categoryName}
            </div>
            <div>
                {contests.contestsName}
            </div>
        </div>
    )
}

export default ContestsPreview
