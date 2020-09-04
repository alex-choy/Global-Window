import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';
import { fetchPhotoFavorites } from '../../actions/favorite_actions';
const mapStateToProps = state => ({
    photos: Object.values(state.photos),
    currentUserId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    deletePhoto: id => dispatch(deletePhoto(id)),
    fetchPhotoFavorites: id => dispatch(fetchPhotoFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);