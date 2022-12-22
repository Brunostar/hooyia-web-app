export default function MainSection() {
    return (
        <main className="main">
            <h1 className="main__slogan">Your One Stop <br />E-Store</h1>
            <div className="main__search_wrapper">
                <div className="main__search_in-wrap">
                    <input type="text" name="search-query"
                           className="main__search_box"
                           placeholder="Search for anything"
                    />
                </div>
                <span className="main__search_current-selection"></span>
                <select className="main__search_dropdown">
                    <option value="all-categories">All categories</option>
                    <option value="books">eBooks</option>
                    <option value="courses">Courses</option>
                    <option value="skills">Skills</option>
                    <option value="Applications">Applications</option>
                </select>
            </div>
        </main>
    )
}