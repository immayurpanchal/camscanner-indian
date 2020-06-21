import React, { useState } from 'react';
import './App.css';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

function App() {
	const [dataUri, setDataUri] = useState('');

	const onCapture = (dataUri) => {
		setDataUri(dataUri);
	};

	return <div className='App'>{dataUri ? <ImagePreview dataUri={dataUri} /> : <Camera onTakePhoto={onCapture} />}</div>;
}

export default App;
