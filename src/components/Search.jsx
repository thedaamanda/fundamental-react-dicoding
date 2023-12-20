import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: props.searchKeyword || '',
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        const keyword = event.target.value;
        this.setState({ keyword });

        this.props.onSearch(keyword);
    }

    render() {
        return (
            <div className="search-container">
                <div className="seo-search-box particle">
                    <div className="row-center-result">
                        <div className="col-xl-8 col-md-10 col-11">
                            <div className="search-box-content">
                                <h2 className="search-box-title">
                                    Cari Catatan
                                </h2>
                                <p>Masukkan judul catatan untuk melakukan pencarian catatan</p>
                            </div>
                            <form className="search-box-form" id="search-note-form">
                                <input type="text" placeholder="Masukkan Judul Catatan" id="search" name="keyword" value={this.state.keyword} onChange={this.onSearchChange} />
                            </form>
                        </div>
                    </div>
                    <div className="seo-images d-none"></div>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default Search;
