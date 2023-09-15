import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({ keyword: event.target.value });
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
                                <input type="text" placeholder="Masukkan Judul Catatan" id="search" name="search" onKeyUp={(() => this.props.onSearch(this.state.keyword))} onChange={this.onSearchChange} />
                                <button type="submit" name="submit" className="template-btn secondary-bg">
                                    Cari Catatan
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="seo-images d-none"></div>
                </div>
            </div>
        )
    }
}

export default Search;
