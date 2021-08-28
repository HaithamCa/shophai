import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...collectionPreviewProps }) => (
                <CollectionPreview key={id} {...collectionPreviewProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview);