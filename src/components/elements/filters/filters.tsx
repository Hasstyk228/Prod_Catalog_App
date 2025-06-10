import {Filter} from '../../../types'

function Filters ({ setSelect , setSort }: Filter) {

    return(
        <>
            <section className="section_filter">
                <div className='filters_one'>
                    <div className='filter_name_1'>Filter</div>
                    <button onClick={() => setSelect("all")} >All</button>
                    <button onClick={() => setSelect("men's clothing")}>Men's clothing</button>
                    <button onClick={() => setSelect("women's clothing")}>Women's clothing</button>
                    <button onClick={() => setSelect("jewelery")}>Jewelery</button>
                    <button onClick={() => setSelect("electronics")}>Electronics</button>
                </div>

                <div className='filters_two'>
                    <button onClick={() => setSort("desc")} >Max - Min</button>
                    <button onClick={() => setSort("asc")}>Min - Max</button>
                    <div className='filter_name_2'>Sorting</div>

                </div>
            </section>
        </>
    )
}

export default Filters