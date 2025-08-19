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
    text1: `Medical imaging software is typically very complex and expensive. We wanted to create an application that
                could be used to measure and monitor tumour lesions that was
                simple to use and gave accurate results.`,
    text2: `             In conjunction with a neurosurgeon, I built an application that
                took a collection of 2D medical images and created a 3D volume.
                This could then be used to visualise and identify anatomic structures.`,
    text3: undefined,
  },
  {
    id: "music",
    source: "./videos/Drums.mp4",
    left: true,
    category: "Music",
    title: "Interactive Tuition",
    url: "https://www.drt-software.com/DrumViz/",
    text1: `Learning to play the drums can be difficult, but what if you coud see exactly what 
		to play? This app puts a 3D drumkit in front of you, showing which drum to hit and when. You
		can slow down or speed the piece up, making practice easier.`,
    text2: `This is a fresh, innovative use of 3D showing how powerful visualisation can be in
		a learning environment.`,
    text3: undefined,
  },
  {
    id: "sleep",
    source: "./videos/Sleep.mp4",
    left: false,
    category: "Multi Dimensional",
    title: "Sleep Analysis",
    url: "https://www.drt-software.com/SleepViz/",
    text1: `This visualisation explores a subject's sleep patterns over several months,
		showing multiple attributes and trends. The interactive design allows you to select specific
		metrics, adjust scaling and highlight trends.`,
    text2: `By utilising the 3D space, the app creates a clearer, more effective view of the complex
		data.`,
    text3: undefined,
  },
  {
    id: "points",
    source: "./videos/Points.mp4",
    left: true,
    category: "Sport",
    title: "Results Analysis",
    url: "https://www.drt-software.com/PointsViz/",
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
    id: "cloud",
    source: "./videos/PointCloud.mp4",
    left: true,
    category: "Point cloud",
    title: "City Landmarks",
    url: "https://drt-software.com/PointCloud/",
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
    id: "space",
    source: "./videos/Solar.mp4",
    left: true,
    category: "Space",
    title: "Solar System",
    url: "https://www.drt-software.com/Solar/",
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
    id: "covid",
    source: "./videos/Pandemic.mp4",
    left: true,
    category: "Multi Dimensional",
    title: "Pandemic",
    url: "https://www.drt-software.com/Covid/",
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
    id: "horror",
    source: "./videos/Horror.mp4",
    left: true,
    category: "Real-Time",
    title: "Brain Activity",
    url: "https://www.drt-software.com/Horror/",
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
    id: "ftse",
    source: "./videos/FTSE.mp4",
    left: true,
    category: "Finance",
    title: "FTSE Tracking",
    url: "https://www.drt-software.com/FTSEViz/",
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
];

const VIDEO_IDS = {
  medical: 0,
};

export { VIDEOS, VIDEO_IDS };
