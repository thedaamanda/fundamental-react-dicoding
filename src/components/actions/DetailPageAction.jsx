import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';

function DetailPageAction({ id, archived, onArchive, onDelete }) {
    return (
        <IconContext.Provider
            value={{ style: { height: '2em', width: '2em' } }}
        >
            <div className='detailpage_action'>
                <button
                    type='button'
                    title={archived ? 'Buka Arsip' : 'Arsipkan'}
                    onClick={() => onArchive(id)}
                >
                    {archived ? <BiArchiveOut /> : <BiArchiveIn />}
                </button>
                <button
                    type='button'
                    title='Hapus'
                    onClick={() => onDelete(id)}
                >
                    <BiTrash />
                </button>
            </div>
        </IconContext.Provider>
    );
}

DetailPageAction.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DetailPageAction;
