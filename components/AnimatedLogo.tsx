"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"

const externalPathVariants = {
  initial: {
    pathLength: 0,
    fill: "#646FC400",
  },
  animate: {
    pathLength: 1,
    fill: "#646FC4",
    transition: {
      default: { duration: 1, ease: "easeIn" },
      fill: { duration: 0.5, delay: 1 },
    },
  },
}

const buttonInitialVariant = {
  opacity: 0,
  scale: 0,
}

const popInAnimation = (delay: number) => ({
  opacity: 1,
  scale: 1,
  transition: { duration: 0.2, delay, ease: "easeInOut" },
})

const bounceAnimation = (delay: number) => ({
  opacity: 1,
  scale: [1, 0.9, 1.02, 1],
  transition: {
    duration: 0.2,
    delay,
    ease: "easeInOut",
  },
})

type AnimatedLogoProps = React.ComponentPropsWithoutRef<"button">

function AnimatedLogo({ className, ...rest }: AnimatedLogoProps) {
  const externalPathControls = useAnimationControls()
  const buttonControls = useAnimationControls()
  const VPathControls = useAnimationControls()
  const [isAnimating, setIsAnimating] = useState(false)

  const animationSequence = useCallback(async () => {
    setIsAnimating(true)
    externalPathControls.set("initial")
    buttonControls.set(buttonInitialVariant)
    VPathControls.set(buttonInitialVariant)

    try {
      await externalPathControls.start("animate")
      await VPathControls.start(popInAnimation(0))
      await buttonControls.start(i => popInAnimation(0.2 + i * 0.2))
      await buttonControls.start(i => bounceAnimation(0.2 + i * 0.2))
    } finally {
      setIsAnimating(false)
    }
  }, [VPathControls, buttonControls, externalPathControls])

  useEffect(() => {
    animationSequence()
  }, [animationSequence])

  return (
    <button
      aria-label="Animate logo"
      disabled={isAnimating}
      className={className}
      {...rest}
      onClick={animationSequence}
    >
      <motion.svg
        width="200"
        height="108"
        viewBox="0 0 498 262"
        initial="initial"
        animate="animate"
        className="h-full w-auto"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-53 -281)">
            <g transform="rotate(-90 298.446 242.428)">
              <motion.path
                fill="#F3C400"
                custom={0}
                initial={buttonInitialVariant}
                animate={buttonControls}
                d="M80.545 340.822c-9.84 0-17.816 7.976-17.816 17.815 0 9.84 7.977 17.815 17.816 17.815 9.839 0 17.815-7.975 17.815-17.815 0-9.839-7.976-17.815-17.815-17.815"
              ></motion.path>
              <motion.path
                fill="#EB4B36"
                custom={1}
                initial={buttonInitialVariant}
                animate={buttonControls}
                d="M110.84 406.748c0 9.839 7.976 17.815 17.815 17.815 9.839 0 17.816-7.976 17.816-17.815 0-9.84-7.977-17.816-17.816-17.816-9.84 0-17.816 7.977-17.816 17.816"
              ></motion.path>
              <motion.path
                fill="#04A384"
                custom={2}
                initial={buttonInitialVariant}
                animate={buttonControls}
                d="M146.47 310.527c0-9.84-7.976-17.816-17.815-17.816-9.84 0-17.816 7.977-17.816 17.816 0 9.839 7.977 17.815 17.816 17.815 9.839 0 17.816-7.976 17.816-17.815"
              ></motion.path>
              <motion.path
                fill="#646FC4"
                custom={3}
                initial={buttonInitialVariant}
                animate={buttonControls}
                d="M176.766 376.453c9.839 0 17.815-7.977 17.815-17.816 0-9.84-7.976-17.815-17.815-17.815-9.84 0-17.816 7.976-17.816 17.815 0 9.84 7.976 17.816 17.816 17.816"
              ></motion.path>
              <motion.path
                stroke="#646FC4"
                strokeWidth="5"
                d="M128.5 257.3C199.6 257.3 257.3 199.6 257.3 128.5 257.3 57.7 199.6 0 128.5 0S0 57.7 0 128.5C0 161.9 12.6 193.4 35.5 217.4L55.3 198.6C37.3 179.6 27.3 154.8 27.3 128.5 27.3 72.8 72.8 27.3 128.5 27.3 184.5 27.3 230 72.8 230 128.5S184.5 230 128.5 230"
                variants={externalPathVariants}
                initial="initial"
                animate={externalPathControls}
              />
              <motion.path
                stroke="#646FC4"
                strokeWidth="5"
                d="M129 230C57.7 230 0 287.7 0 358.6 0 429.6 57.7 487.3 129 487.3S257.3 429.6 257.3 358.6C257.3 325.4 244.7 293.9 221.8 269.9L202 288.7C220 307.6 230 332.5 230 358.6 230 414.5 184.5 460 129 460S27.3 414.5 27.3 358.6C27.3 302.8 72.8 257.3 129 257.3"
                variants={externalPathVariants}
                initial="initial"
                animate={externalPathControls}
              />
              <motion.path
                fill="#646FC4"
                d="M172.1866 80.7644L172.1866 103.581 106.0182 128.1435 172.1866 152.7049 172.1866 174.9838 77.5634 137.0007 77.5634 118.7474z"
                initial={buttonInitialVariant}
                animate={VPathControls}
              ></motion.path>
            </g>
          </g>
        </g>
      </motion.svg>
    </button>
  )
}

export default AnimatedLogo
