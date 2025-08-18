export type VideoRecord = {
  id: string;
  source: string;
  left: boolean;
  category: string;
  title: string;
  url: string;
  text1: string;
  text2: string | undefined;
  text3: string | undefined;
};

const VIDEOS: VideoRecord[] = [
  {
    id: "medical",
    source: "./videos/Medical.mp4",
    left: false,
    category: "Medical",
    title: "Tumour Detection",
    url: "https://www.drt-software.com/MedicalViz/",
    text1: `Medical imaging software can be very complex and expensive, with 
		a steep learning curve. We wanted to create an application that
                could be used to measure and monitor tumour lesions that was
                simple to use and gave accura`,
    text2: `             In conjunction with a neurosurgeon, I built an application that
                took a collection of 2D medical images and created a 3D volume.
                This could then be used to visualise anatomic structures and
                identify areas.`,
    text3: undefined,
  },
  {
    id: "drums",
    src: "./videos/Drums.mp4",
    category: "Music",
    title: "Interactive Tuition",
  },
  {
    id: "sleep",
    src: "./videos/Sleep.mp4",
    category: "Multi Dimensional",
    title: "Sleep Analysis",
  },
  {
    id: "points",
    src: "./videos/Points.mp4",
    category: "Sports",
    title: "Results Analysis",
  },
  {
    id: "cloud",
    src: "./videos/PointCloud.mp4",
    category: "Point cloud",
    title: "City Landmarks",
  },
  {
    id: "solar",
    src: "./videos/Solar.mp4",
    category: "Space",
    title: "Solar System",
  },
  {
    id: "covid",
    src: "./videos/Pandemic.mp4",
    category: "Multi Dimensional",
    title: "Pandemic",
  },
  {
    id: "horror",
    src: "./videos/Horror.mp4",
    category: "Real-Time",
    title: "Brain Activity",
  },
  {
    id: "finance",
    src: "./videos/FTSE.mp4",
    category: "Finance",
    title: "FTSE Tracking",
  },
];

const VIDEO_IDS = {
  medical: 0,
};

export { VIDEOS, VIDEO_IDS };
