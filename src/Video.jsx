import {Composition} from 'remotion';
import {App} from './App';
import {durationInFrames} from './constants';

export const RemotionVideo = () => {
	return (
		<Composition
			id="App"
			component={App}
			durationInFrames={durationInFrames}
			fps={60}
			width={1920}
			height={1080}
		/>
	)
}
