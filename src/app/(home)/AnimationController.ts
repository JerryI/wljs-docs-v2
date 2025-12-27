// Animation Controller for sequential editor animations
export type AnimationConfig = {
  delay: number;
  frames: string[];
};

export type AnimationStep = {
  animationName: string;
  pauseAfter?: number; // Delay in ms after this animation completes
  clearBefore?: boolean; // Clear editor content before running
};

export class AnimationController {
  private timerId: number | null = null;
  private isRunning = false;
  private currentStep = 0;
  private queue: AnimationStep[] = [];
  
  constructor(
    private animations: Record<string, AnimationConfig>,
    private editorDetail: any
  ) {}

  /**
   * Run a sequence of animations procedurally
   * @param steps Array of animation steps to run in order
   * 
   * @example
   * controller.runSequence([
   *   { animationName: 'plot', pauseAfter: 2000, clearBefore: false },
   *   { animationName: 'table', pauseAfter: 1500, clearBefore: true },
   *   { animationName: 'manipulate', clearBefore: true }
   * ]);
   */
  runSequence(steps: AnimationStep[]): void {
    if (this.isRunning) {
      console.warn('Animation already running');
      return;
    }

    this.queue = [...steps];
    this.currentStep = 0;
    this.processNext();
  }

  /**
   * Run a single animation by name
   */
  runSingle(animationName: string, clearBefore = false): void {
    this.runSequence([{ animationName, clearBefore }]);
  }

  /**
   * Stop all animations and clear queue
   */
  stop(): void {
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
    this.currentStep = 0;
    this.queue = [];
  }

  /**
   * Check if animation is currently running
   */
  get running(): boolean {
    return this.isRunning;
  }

  private processNext(): void {
    if (this.currentStep >= this.queue.length) {
      this.isRunning = false;
      return;
    }

    const step = this.queue[this.currentStep];
    const config = this.animations[step.animationName];

    if (!config) {
      console.warn(`Animation "${step.animationName}" not found`);
      this.currentStep++;
      this.processNext();
      return;
    }

    this.isRunning = true;

    // Clear editor if requested
    if (step.clearBefore) {
      this.clearEditor();
    }

    // Run the animation
    this.animateFrames(config, () => {
      // Animation complete - pause if needed, then continue
      if (step.pauseAfter && step.pauseAfter > 0) {
        this.timerId = window.setTimeout(() => {
          this.currentStep++;
          this.processNext();
        }, step.pauseAfter);
      } else {
        this.currentStep++;
        this.processNext();
      }
    });
  }

  private animateFrames(config: AnimationConfig, onComplete: () => void): void {
    const frames = [...config.frames];
    let frameIndex = 0;

    const animate = () => {
      if (frameIndex >= frames.length) {
        // Reset cursor to beginning
        this.editorDetail.dispatch({
          selection: { anchor: 0 }
        });
        onComplete();
        return;
      }

      this.editorDetail.dispatch({
        changes: {
          from: this.editorDetail.state.doc.length,
          insert: frames[frameIndex]
        }
      });

      frameIndex++;
      this.timerId = window.setTimeout(animate, config.delay);
    };

    animate();
  }

  private clearEditor(): void {
    const docLength = this.editorDetail.state.doc.length;
    if (docLength > 0) {
      this.editorDetail.dispatch({
        changes: { from: 0, to: docLength, insert: '' }
      });
    }
  }
}
