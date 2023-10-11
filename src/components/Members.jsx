import {feedback2 } from "../constants";
import styles from "../style";
import FeedbackCardHero from "./FeedbackHero";

const Members = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback2.map((card) => <FeedbackCardHero key={card.id} {...card} />)}
    </div>
  </section>
);

export default Members;
