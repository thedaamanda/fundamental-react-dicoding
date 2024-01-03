import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../hooks/useLanguage';

function Search({ searchKeyword, onSearch }) {
    const textSearch = useLanguage('app');

    return (
        <div className='search-container'>
            <div className='seo-search-box particle'>
                <div className='row-center-result'>
                    <div className='col-xl-8 col-md-10 col-11'>
                        <div className='search-box-content'>
                            <h2 className='search-box-title'>
                                {textSearch.search.title}
                            </h2>
                            <p>{textSearch.search.description}</p>
                        </div>
                        <form className='search-box-form' id='search-note-form'>
                            <input
                                type='text'
                                placeholder={textSearch.search.placeholder}
                                id='search'
                                name='keyword'
                                value={searchKeyword}
                                onChange={(event) =>
                                    onSearch(event.target.value)
                                }
                            />
                        </form>
                    </div>
                </div>
                <div className='seo-images d-none'></div>
            </div>
        </div>
    );
}

Search.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default Search;
