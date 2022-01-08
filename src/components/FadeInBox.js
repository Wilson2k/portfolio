import React, { useRef } from 'react';
import './styles.css';

// Resource used: https://codesandbox.io/s/beautiful-wiles-k23w5?from-embed=&file=/src/styles.css:59-378

export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = useRef(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => entry.isIntersecting && setVisible(true));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}