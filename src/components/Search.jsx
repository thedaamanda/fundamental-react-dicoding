import React from 'react';

function NoteSearch({ onSearch }) {
    const onSearchChange = (e) => {
        const query = e.target.value;
        onSearch(query);
    }

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
                            <input type="text" placeholder="Masukkan Judul Catatan" id="search" name="search" onChange={onSearchChange} />
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

export default NoteSearch;
