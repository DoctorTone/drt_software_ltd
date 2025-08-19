import { useState, useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import { VIDEOS } from "../state/VideoData";
import VideoDemo from "./VideoDemo";

const minVisible = 0.5;

const centerDistance = (el: Element) => {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dx = cx - vw / 2;
  const dy = cy - vh / 2;
  return dx * dx + dy * dy; // squared distance
};

const Projects = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef(new Map<string, HTMLVideoElement>());
  const ratios = useRef(new Map<string, number>());
  const ioRef = useRef<IntersectionObserver | null>(null);

  const pickMostVisible = () => {
    let bestId: string | null = null;
    let bestRatio = minVisible;
    let bestDist = Number.POSITIVE_INFINITY;

    videoRefs.current.forEach((el, id) => {
      const ratio = ratios.current.get(id) ?? 0;
      if (ratio >= bestRatio) {
        const dist = centerDistance(el);
        if (ratio > bestRatio || dist < bestDist) {
          bestRatio = ratio;
          bestDist = dist;
          bestId = id;
        }
      }
    });

    // DEBUG
    console.log("Best = ", bestId);

    setPlayingId(bestId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).dataset.id!;
          ratios.current.set(id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        pickMostVisible();
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) } // 0,0.1,...1
    );

    ioRef.current = observer;
    videoRefs.current.forEach((video) => observer.observe(video));
    window.addEventListener("scroll", pickMostVisible, { passive: true });
    window.addEventListener("resize", pickMostVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pickMostVisible);
      window.removeEventListener("resize", pickMostVisible);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, id) => {
      if (id === playingId) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [playingId]);

  const bindRef = (id: string) => (el: HTMLVideoElement | null) => {
    const io = ioRef.current;
    const prev = videoRefs.current.get(id);
    if (prev && io) io.unobserve(prev);

    if (el) {
      videoRefs.current.set(id, el);
      ratios.current.set(id, 0);
      if (io) io.observe(el);
    } else {
      videoRefs.current.delete(id);
      ratios.current.delete(id);
    }
    // Re-evaluate when mount/unmount occurs
    // pickMostVisible();
  };

  return (
    <Container id="section1">
      {VIDEOS.map((video) => (
        <VideoDemo key={video.id} ref={bindRef(video.id)} vidRecord={video} />
      ))}
    </Container>
  );
};

export default Projects;
