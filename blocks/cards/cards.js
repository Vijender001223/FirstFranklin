import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
   const navbrand = document.querySelector('.cards-card-body');
		navbrand.setAttribute('itemid','urn:fnkconnection:/nav');
		navbrand.setAttribute('itemtype','urn:fnk:type/document');

	     const titleedit = navbrand.querySelector('strong');

		titleedit.setAttribute('itemprop','title');
		titleedit.setAttribute('itemtype','text');
}
