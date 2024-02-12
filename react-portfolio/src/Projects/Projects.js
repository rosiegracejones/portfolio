import foot from "../Media/foot.jpg";
import swim from "../Media/swim.jpg";
import quartet from "../Media/quartet.jpg";
import match from "../Media/match.jpg";
import knee from "../Media/knee.png";
import trumpet from "../Media/trumpet.jpg";
import playingwithfire from "../Media/playingwithfire.mp4";
import hurt from "../Media/hurt.mp4";

const projects = [
	{
		title: "'small pleasures'",
		type: "Animation",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: foot,
		image: foot,
	},
	{
		title: "'swim'",
		type: "Series",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: swim,
		images: [
			{ src: swim, alt: "Description of image 1" },
			{ src: knee, alt: "Description of image 2" },
			{ src: foot, alt: "Description of image 3" },
		],
	},
	{
		title: "rosendal viola quartet concert",
		type: "Image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: quartet,
		image: quartet,
		alt: "String Quartet Charity Event Poster",
	},
	{
		title: "'playing with fire'",
		type: "Animation",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: match,
		video: playingwithfire,
	},
	{
		title: "'hurt'",
		type: "Animation",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: knee,
		video: hurt,
	},
	{
		title: "children's play cards",
		type: "Series",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
		thumb: trumpet,
		images: [
			{ src: swim, alt: "Description of image 1" },
			{ src: knee, alt: "Description of image 2" },
			{ src: foot, alt: "Description of image 3" },
		],
	},
];

export default projects;
