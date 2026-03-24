/* /blocks/alert/alert.js */

/**
 * Entry point to block's JavaScript.
 * Simple alert block with minimal decoration.
 *
 * @param {HTMLElement} block represents the block's DOM element/tree
 */
export default function decorate(block) {
  // Add semantic classes to make styling easier
  const heading = block.querySelector('h1,h2,h3,h4,h5,h6');
  if (heading) {
    heading.classList.add('alert-title');
  }

  const paragraph = block.querySelector('p');
  if (paragraph) {
    paragraph.classList.add('alert-message');
  }
}
