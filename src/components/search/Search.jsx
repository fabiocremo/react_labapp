import React from 'react';
import './search.css';



const Search = () => {
  return <div className='search'>
      {/* <form onSubmit={this.handleSubmit}> */}
      <form className='search-form'>
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        <input type="text" className='search-form-text'/>
        <input type="submit" value="Search" className='search-form-submit'/>
      </form>
  </div>;
};

export default Search;
