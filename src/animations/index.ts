export const containerVariants = {
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    },
};

export const itemVariants = {
    hidden: { y: 260 },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
};


export const menu = {
    open: {
        height: "100%",
        display: 'block',
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    closed: {
        height: "0%",
        display: 'none',
        transition: {
            duration: 1,
            delay: 0.25,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const links = {
    closeLinks: {
        display: 'none',
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0
        }
    },
    openLinks: {
        display: 'grid',
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1,
        }
    }
}