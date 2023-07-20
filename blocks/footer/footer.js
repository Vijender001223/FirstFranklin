import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    alert(html);
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }
  const navbrand = document.querySelector('.footer-wrapper');
      alert("nav123........."+navbrand);
  	navbrand.setAttribute('itemid','urn:fnkconnection:/nav');
		navbrand.setAttribute('itemtype','urn:fnk:type/document');

	const titleedit = navbrand.querySelector('p');

		titleedit.setAttribute('itemprop','title');
		titleedit.setAttribute('itemtype','text');

}
