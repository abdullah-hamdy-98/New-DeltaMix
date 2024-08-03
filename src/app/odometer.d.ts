declare module 'odometer' {
    interface OdometerOptions {
        el: HTMLElement;
        value?: number;
        format?: string;
        theme?: string;
        duration?: number;
        animation?: string;
    }

    class Odometer {
        constructor(options: OdometerOptions);
        update(value: number): void;
    }

    export = Odometer;
}
