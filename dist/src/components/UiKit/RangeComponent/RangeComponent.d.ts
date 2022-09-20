import * as React from 'react';
export declare type RangeValue = Array<number>;
interface IRangeComponent {
    minValue: number;
    maxValue: number;
    currentValue: {
        values: RangeValue;
    };
    onChangeCurrentValue: (value: RangeValue) => RangeValue;
}
declare const RangeComponent: React.FC<IRangeComponent>;
export default RangeComponent;
