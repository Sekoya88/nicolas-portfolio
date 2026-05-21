declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value: number): void;
    scrollTo(
      target: string | Element,
      smooth?: boolean,
      position?: string
    ): void;
    paused(value: boolean): boolean;
  }

  export default ScrollSmoother;
}

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: Element | string | Element[] | string[],
      vars?: Record<string, unknown>
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  export default SplitText;
}
