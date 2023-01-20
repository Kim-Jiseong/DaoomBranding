import { useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "styles/components/section/style";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef(null);
  const skills = useRef(null);
  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <S.MainContainer>
      <div style={{ overflow: "hidden" }}>
        <S.SectionContainer id="skills" ref={scroller}>
          <S.Section
            initial={{ opacity: 0.2 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.05 },
            }}
            ref={skills}
            className="skill-set"
          >
            <img
              src="https://images.unsplash.com/photo-1605648511528-fa48bdb09d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="1st image"
            />
          </S.Section>
          <S.Section
            initial={{ opacity: 0.2 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.05 },
            }}
            ref={skills}
            className="skill-set"
          >
            <img
              src="https://images.unsplash.com/photo-1509432987859-a93add19398d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="2ndimage"
            />
          </S.Section>
          <S.Section
            initial={{ opacity: 0.2 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.05 },
            }}
            ref={skills}
            className="skill-set"
          >
            <img
              src="https://images.unsplash.com/photo-1594035910663-369b72b7abe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="3ndimage"
            />
          </S.Section>
          <S.Section
            initial={{ opacity: 0.2 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.05 },
            }}
            ref={skills}
            className="skill-set"
          >
            <img
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
              alt="4ndimage"
            />
          </S.Section>
        </S.SectionContainer>
      </div>
    </S.MainContainer>
  );
}

export default App;
