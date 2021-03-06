/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-toast.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-a11y-announcer/iron-a11y-announcer.d.ts" />
/// <reference path="../iron-overlay-behavior/iron-overlay-behavior.d.ts" />

/**
 * Material design: [Snackbars & toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)
 *
 * `paper-toast` provides a subtle notification toast. Only one `paper-toast` will
 * be visible on screen.
 *
 * Use `opened` to show the toast:
 *
 * Example:
 *
 *     <paper-toast text="Hello world!" opened></paper-toast>
 *
 * Also `open()` or `show()` can be used to show the toast:
 *
 * Example:
 *
 *     <paper-button on-click="openToast">Open Toast</paper-button>
 *     <paper-toast id="toast" text="Hello world!"></paper-toast>
 *
 *     ...
 *
 *     openToast: function() {
 *       this.$.toast.open();
 *     }
 *
 * Set `duration` to 0, a negative number or Infinity to persist the toast on screen:
 *
 * Example:
 *
 *     <paper-toast text="Terms and conditions" opened duration="0">
 *       <a href="#">Show more</a>
 *     </paper-toast>
 *
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-toast-background-color` | The paper-toast background-color | `#323232`
 * `--paper-toast-color` | The paper-toast color | `#f1f1f1`
 *
 * This element applies the mixin `--paper-font-common-base` but does not import `paper-styles/typography.html`.
 * In order to apply the `Roboto` font to this element, make sure you've imported `paper-styles/typography.html`.
 */
interface PaperToastElement extends Polymer.Element, Polymer.IronOverlayBehavior {

  /**
   * The element to fit `this` into.
   * Overridden from `Polymer.IronFitBehavior`.
   */
  fitInto: object|null|undefined;

  /**
   * The orientation against which to align the dropdown content
   * horizontally relative to `positionTarget`.
   * Overridden from `Polymer.IronFitBehavior`.
   */
  horizontalAlign: string|null|undefined;

  /**
   * The orientation against which to align the dropdown content
   * vertically relative to `positionTarget`.
   * Overridden from `Polymer.IronFitBehavior`.
   */
  verticalAlign: string|null|undefined;

  /**
   * Overridden from `IronOverlayBehavior`.
   * Set to true to disable auto-focusing the toast or child nodes with
   * the `autofocus` attribute` when the overlay is opened.
   */
  noAutoFocus: boolean|null|undefined;

  /**
   * Overridden from `IronOverlayBehavior`.
   * Set to false to enable closing of the toast by clicking outside it.
   */
  noCancelOnOutsideClick: boolean|null|undefined;

  /**
   * The duration in milliseconds to show the toast.
   * Set to `0`, a negative number, or `Infinity`, to disable the
   * toast auto-closing.
   */
  duration: number|null|undefined;

  /**
   * The text to display in the toast.
   */
  text: string|null|undefined;

  /**
   * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
   */
  readonly visible: any;

  /**
   * Read-only. Can auto-close if duration is a positive finite number.
   */
  readonly _canAutoClose: any;
  created(): void;

  /**
   * Overridden from `IronOverlayBehavior`.
   * Called when the value of `opened` changes.
   */
  _openedChanged(): void;

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened(): void;

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed(): void;

  /**
   * Show the toast. Without arguments, this is the same as `open()` from `IronOverlayBehavior`.
   *
   * @param properties Properties to be set before opening the toast.
   * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
   */
  show(properties?: object|string|null): void;

  /**
   * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
   */
  hide(): void;
}

interface HTMLElementTagNameMap {
  "paper-toast": PaperToastElement;
}
