"use client";

import { Player } from "@remotion/player";
import { AbsoluteFill, Sequence } from "remotion";

const MyVideo = () => {
	return (
		<>
			<AbsoluteFill className="bg-black">
				<Sequence durationInFrames={120}>AAAA</Sequence>
			</AbsoluteFill>
		</>
	);
};

export const EmbedRemotionPlayer = () => {
	return (
		<>
			<Player
				style={{ width: "100%" }}
				component={MyVideo}
				durationInFrames={120}
				compositionWidth={1920}
				compositionHeight={1080}
				fps={30}
				controls
			/>
		</>
	);
};
