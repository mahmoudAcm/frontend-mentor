import footerClasses from './footer.module.css';
import './footer.module.css';
import clsx from 'clsx';
import links from './data/links.json';

export default function Footer() {
  return (
    <footer
      className={clsx({
        'fixed opacity-0 left-[50%] flex gap-x-2 translate-x-[-50%] rounded-[99999px] bg-white/70 drop-shadow-xl': true,
        'min-h-[30px] backdrop-blur-[100px] p-2 transition-all ease-in-out hover:gap-3 hover:px-3 backdrop-saturate-[400%] backdrop-brightness-100 border-[#f8f8f8]':
          true
      })}
    >
      {links.map((link, idx) => (
        <div className='relative group/circle' key={idx}>
          <div
            className={clsx({
              'absolute min-h-1.5 bg-white rounded left-[50%] translate-x-[-50%]': true,
              'top-[-55px] text-xs py-1 px-2 hidden select-none': true,
              'group-hover/circle:flex capitalize': true
            })}
          >
            {link.title}
          </div>
          <div
            role='button'
            aria-label={link.title}
            className={clsx({
              'text-gray-500 rounded-[50%] relative cursor-pointer transition-all duration-200 grid place-items-center':
                true,
              'hover:shadow-sm hover:bottom-3 hover:scale-125': true,
              [footerClasses.circle]: true
            })}
            dangerouslySetInnerHTML={{
              __html: `<a href="${link.link}" target="_blank" class="p-[13px]" aria-description="my ${link.title} link">${link.svg}</a>`
            }}
          ></div>
        </div>
      ))}
    </footer>
  );
}
