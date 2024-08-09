function Search() {
    return (
        <>
            <div className="search-box">
                <div className="inner">
                    <form>
                        <input type="search" placeholder="إكتب كلمة للبحث..." />
                        <input type="submit" value="إبحث" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search;