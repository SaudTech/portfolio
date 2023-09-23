import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

interface ScrollFadeDivProps {
  threshold: number;
  children: React.ReactNode;
}
const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const ScrollFadeDiv: React.FC<ScrollFadeDivProps> = ({ threshold, children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInOut}
    >
      {children}
    </motion.div>
  );
}


export default ScrollFadeDiv;