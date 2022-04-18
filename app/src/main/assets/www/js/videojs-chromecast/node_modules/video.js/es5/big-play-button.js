'use strict';

exports.__esModule = true;

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file big-play-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * The initial play button that shows before the video has played. The hiding of the
 * `BigPlayButton` get done via CSS and `Player` states.
 *
 * @extends Button
 */
var BigPlayButton = function (_Button) {
  _inherits(BigPlayButton, _Button);

  function BigPlayButton(player, options) {
    _classCallCheck(this, BigPlayButton);

    var _this = _possibleConstructorReturn(this, _Button.call(this, player, options));

    _this.mouseused_ = false;

    _this.on('mousedown', _this.handleMouseDown);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object. Always returns 'vjs-big-play-button'.
   */


  BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-big-play-button';
  };

  /**
   * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
   * for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  BigPlayButton.prototype.handleClick = function handleClick(event) {
    var playPromise = this.player_.play();

    // exit early if clicked via the mouse
    if (this.mouseused_ && event.clientX && event.clientY) {
      return;
    }

    var cb = this.player_.getChild('controlBar');
    var playToggle = cb && cb.getChild('playToggle');

    if (!playToggle) {
      this.player_.focus();
      return;
    }

    var playFocus = function playFocus() {
      return playToggle.focus();
    };

    if (playPromise && playPromise.then) {
      var ignoreRejectedPlayPromise = function ignoreRejectedPlayPromise() {};

      playPromise.then(playFocus, ignoreRejectedPlayPromise);
    } else {
      this.setTimeout(playFocus, 1);
    }
  };

  BigPlayButton.prototype.handleKeyPress = function handleKeyPress(event) {
    this.mouseused_ = false;

    _Button.prototype.handleKeyPress.call(this, event);
  };

  BigPlayButton.prototype.handleMouseDown = function handleMouseDown(event) {
    this.mouseused_ = true;
  };

  return BigPlayButton;
}(_button2['default']);

/**
 * The text that should display over the `BigPlayButton`s controls. Added to for localization.
 *
 * @type {string}
 * @private
 */


BigPlayButton.prototype.controlText_ = 'Play Video';

_component2['default'].registerComponent('BigPlayButton', BigPlayButton);
exports['default'] = BigPlayButton;
