function MainContent(){ {
    return (
      <div className='mid-content'>
        <form method="GET" autoComplete='off' autoCorrect='on'>
                <input type="search" className='searchbar' placeholder="Place to go" name="searchbar" id="searchdetail" autoComplete='off' autoCorrect='on'></input>
                <button type='submit' className='searchbtn' name='Search' >Search</button>
            </form>
      </div>
    );
  }
}


export default MainContent;

