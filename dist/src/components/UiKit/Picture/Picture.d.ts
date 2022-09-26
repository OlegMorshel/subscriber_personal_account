import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props {
    alt: string;
    src?: string | null;
    className?: string;
    width?: number | string;
    height?: number | string;
}
declare const Picture: React.FC<Props>;
export default Picture;
