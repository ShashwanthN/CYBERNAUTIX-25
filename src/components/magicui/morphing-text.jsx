"use client";;
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const morphTime = 0.2;
const cooldownTime = 0.05;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());
  const completedRef = useRef(false);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback((fraction) => {
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (!current1 || !current2) return;

    current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const invertedFraction = 1 - fraction;
    current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
    current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

    current1.textContent = texts[textIndexRef.current % texts.length];
    current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
  }, [texts]);

  const doMorph = useCallback(() => {
    if (completedRef.current) return;
    
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
      if (textIndexRef.current >= texts.length - 1) {
        completedRef.current = true;
        // Set final text state
        const [current1, current2] = [text1Ref.current, text2Ref.current];
        if (current1 && current2) {
          current2.style.filter = "blur(0px)";
          current2.style.opacity = "100%";
          current1.style.filter = "blur(0px)";
          current1.style.opacity = "0%";
        }
      }
    }
  }, [setStyles, texts.length]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "blur(0px)";
      current2.style.opacity = "100%";
      current1.style.filter = "blur(0px)";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (<>
    <span
      className="absolute left-1/2 top-0 -translate-x-1/2 inline-block w-auto"
      ref={text1Ref} />
    <span
      className="absolute left-1/2 top-0 -translate-x-1/2 inline-block w-auto"
      ref={text2Ref} />
  </>);
};

const SvgFilters = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
      </filter>
    </defs>
  </svg>
);

export const MorphingText = ({
  texts,
  className,
}) => (
  <div
    className={cn(
      "relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)] md:h-24 lg:text-[6rem] overflow-visible",
      className
    )}>
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);
