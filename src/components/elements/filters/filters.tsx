import {Filter} from '../../../types'

function Filters ({ setSelect , setSort , search , setSearch }: Filter) {

    return(
        <>
            <section className="section_filter">
            <details>
                <summary>Filter</summary>
                <button onClick={() => setSelect("men's clothing")}>Men's clothing</button>
                <button onClick={() => setSelect("women's clothing")}>Women's clothing</button>
                <button onClick={() => setSelect("jewelery")}>Jewelery</button>
                <button onClick={() => setSelect("electronics")}>Electronics</button>
                <button onClick={() => setSelect("all")} >All</button>
            </details>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}  />
            <details>
                <summary>Sorting</summary>
                <button onClick={() => setSort("desc")} >Max - Min</button>
                <button onClick={() => setSort("asc")}>Min - Max</button>
                </details>
            </section>
        </>
    )
}

export default Filters