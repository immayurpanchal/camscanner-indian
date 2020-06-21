import React from 'react';

const ImagePreview = (props) => {
	const { dataUri } = props;
	return <img src={dataUri} alt='test' />;
};

export default ImagePreview;
