// Animation Controller for sequential editor animations
export type AnimationConfig = {
  delay: number;
  frames: any[];
};

export class AnimationController {
  private timerId: number | null = null;
  private isRunning = false;
  private outputEditorDetail: any = null;
  
  constructor(
    private animations: Record<string, AnimationConfig>,
    private editorDetail: any
  ) {}

  /**
   * Set the output editor detail for controlling output animations
   * @param detail The editor detail from codemirrorReady event
   */
  setOutputEditor(detail: any): void {
    this.outputEditorDetail = detail;
  }

  /**
   * Run a single animation by name (async) on the input editor
   * @param animationName The name of the animation to run
   * @param clearBefore Whether to clear editor content before running
   * @returns Promise that resolves when animation completes
   * 
   * @example
   * await controller.animate('plot', true);
   * await controller.pause(2000);
   * await controller.animate('table', true);
   */
  async animate(animationName: string, clearBefore = false): Promise<void> {
    if (this.isRunning) {
      console.warn('Animation already running, waiting...');
      await this.waitForCompletion();
    }

    const config = this.animations[animationName];
    if (!config) {
      console.warn(`Animation "${animationName}" not found`);
      return;
    }

    this.isRunning = true;

    // Clear editor if requested
    if (clearBefore) {
      this.clearEditor(this.editorDetail);
    }

    // Run the animation and wait for completion
    await this.animateFrames(config, this.editorDetail);
    
    this.isRunning = false;
  }

  /**
   * Animate output editor with frames or simple text
   * @param content String content or animation name to display in output
   * @param options Animation options
   * @returns Promise that resolves when animation completes
   * 
   * @example
   * await controller.animateOutput('Result: A plot!', { clearBefore: true });
   * await controller.animateOutput('plot'); // Use animation frames
   */
  async animateOutput(content: string, options?: { 
    clearBefore?: boolean; 
    useAnimation?: boolean;
    delay?: number;
  }): Promise<void> {
    if (!this.outputEditorDetail) {
      console.warn('Output editor not initialized');
      return;
    }

    if (this.isRunning) {
      await this.waitForCompletion();
    }

    this.isRunning = true;

    if (options?.clearBefore) {
      this.clearEditor(this.outputEditorDetail);
    }

    // Check if it's an animation name
    const config = this.animations[content];
    if (config && options?.useAnimation) {
      await this.animateFrames(config, this.outputEditorDetail);
    } else {
      // Insert as simple text with optional character-by-character animation
      if (options?.delay) {
        const frames = content.split('');
        await this.animateFrames({ delay: options.delay, frames }, this.outputEditorDetail);
      } else {
        // Insert all at once
        this.outputEditorDetail.dispatch({
          changes: {
            from: this.outputEditorDetail.state.doc.length,
            insert: content
          }
        });
      }
    }

    this.isRunning = false;
  }

  /**
   * Set content in input editor instantly (no animation)
   * @param content String content to set
   * @param clearBefore Whether to clear editor before setting
   * 
   * @example
   * controller.set('Plot[Sin[x], {x, 0, 2Pi}]', true);
   */
  set(content: string, clearBefore = false): void {
    if (clearBefore) {
      this.clearEditor(this.editorDetail);
    }

    this.editorDetail.dispatch({
      changes: {
        from: this.editorDetail.state.doc.length,
        insert: content
      }
    });

    // Reset cursor to beginning
    this.editorDetail.dispatch({
      selection: { anchor: this.editorDetail.state.doc.length }
    });
  }

  /**
   * Set content in output editor instantly (no animation)
   * @param content String content to set
   * @param clearBefore Whether to clear editor before setting
   * 
   * @example
   * controller.setOutput('Result: 42', true);
   */
  setOutput(content: string, clearBefore = false): void {
    if (!this.outputEditorDetail) {
      console.warn('Output editor not initialized');
      return;
    }

    if (clearBefore) {
      this.clearEditor(this.outputEditorDetail);
    }

    this.outputEditorDetail.dispatch({
      changes: {
        from: 0,
        to: this.outputEditorDetail.state.doc.length,
        insert: content
      }
    });

    // Reset cursor to beginning
    this.outputEditorDetail.dispatch({
      selection: { anchor: this.outputEditorDetail.state.doc.length }
    });
  }

  /**
   * Clear the output editor
   */
  clearOutput(): void {
    if (this.outputEditorDetail) {
      this.clearEditor(this.outputEditorDetail);
    }
  }

  /**
   * Pause execution for a specified duration
   * @param ms Milliseconds to pause
   * 
   * @example
   * await controller.pause(2000); // Wait 2 seconds
   */
  async pause(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clear the input editor content
   */
  clear(): void {
    this.clearEditor(this.editorDetail);
  }

  /**
   * Stop any running animation
   */
  stop(): void {
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
  }

  /**
   * Check if animation is currently running
   */
  get running(): boolean {
    return this.isRunning;
  }

  /**
   * Wait for current animation to complete
   */
  private async waitForCompletion(): Promise<void> {
    while (this.isRunning) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  private async animateFrames(config: AnimationConfig, editorDetail: any): Promise<void> {
    const frames = [...config.frames];
    
    for (const frame of frames) {
      if (frame === 0) {
        editorDetail.dispatch({
          selection: { anchor: editorDetail.state.doc.length }
        });
      } else {
        editorDetail.dispatch({
          changes: {
            from: editorDetail.state.doc.length,
            insert: frame
          }
        });
      }
      
      // Wait for the delay between frames
      await new Promise<void>(resolve => {
        this.timerId = window.setTimeout(() => resolve(), config.delay);
      });
    }

    // Reset cursor to beginning
    editorDetail.dispatch({
      selection: { anchor: editorDetail.state.doc.length }
    });
  }

  private clearEditor(editorDetail: any): void {
    const docLength = editorDetail.state.doc.length;
    if (docLength > 0) {
      editorDetail.dispatch({
        changes: { from: 0, to: docLength, insert: '' }
      });
    }
  }
}
