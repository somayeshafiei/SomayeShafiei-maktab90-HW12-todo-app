import { debounce } from 'lodash/function.js';
import El from '@/library/El';
import { Form } from '../Form';
import { searchHandler } from './search';
import { renderRow } from '../Form/renderTable';
import { filter } from 'lodash';
import { filtering } from './filter';
// import debounce from 'lodash/debounce';
export const Navbar = () => {
  return El({
    element: 'div',
    className: 'p-3 px-5 flex justify-between z-0',
    child: [
      El({
        element: 'div',
        className: 'flex gap-5 items-center text-white',
        child: [
          El({
            element: 'div',
            child: El({
              element: 'svg',
              innerHTML:
                '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 12.75H8C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z" fill="#ffffff"></path> <path d="M19 8.25H8C7.80109 8.25 7.61032 8.17098 7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5C7.25 7.30109 7.32902 7.11032 7.46967 6.96967C7.61032 6.82902 7.80109 6.75 8 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z" fill="#ffffff"></path> <path d="M19 17.25H8C7.80109 17.25 7.61032 17.171 7.46967 17.0303C7.32902 16.8897 7.25 16.6989 7.25 16.5C7.25 16.3011 7.32902 16.1103 7.46967 15.9697C7.61032 15.829 7.80109 15.75 8 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z" fill="#ffffff"></path> <path d="M5.00002 8.50002C4.87 8.50161 4.74093 8.47783 4.62002 8.43002C4.50052 8.37204 4.3895 8.29802 4.29002 8.21002C4.19734 8.11658 4.12401 8.00576 4.07425 7.88392C4.02448 7.76209 3.99926 7.63163 4.00002 7.50002C4.0037 7.23525 4.10728 6.98165 4.29002 6.79002C4.38389 6.69742 4.49637 6.62583 4.62002 6.58002C4.86348 6.48 5.13656 6.48 5.38002 6.58002C5.50277 6.62761 5.61491 6.69898 5.71002 6.79002C5.89275 6.98165 5.99633 7.23525 6.00002 7.50002C6.00078 7.63163 5.97555 7.76209 5.92579 7.88392C5.87602 8.00576 5.8027 8.11658 5.71002 8.21002C5.61054 8.29802 5.49951 8.37204 5.38002 8.43002C5.25911 8.47783 5.13003 8.50161 5.00002 8.50002Z" fill="#ffffff"></path> <path d="M5.00002 13C4.86934 12.9984 4.74024 12.9712 4.62002 12.92C4.49883 12.8693 4.38722 12.7983 4.29002 12.71C4.19734 12.6165 4.12401 12.5057 4.07425 12.3839C4.02448 12.262 3.99926 12.1316 4.00002 12C4.0037 11.7352 4.10728 11.4816 4.29002 11.29C4.38722 11.2016 4.49883 11.1306 4.62002 11.08C4.80104 10.996 5.00303 10.9682 5.20002 11L5.38002 11.06L5.56002 11.15C5.6124 11.1869 5.6625 11.227 5.71002 11.27C5.89749 11.4666 6.00144 11.7283 6.00002 12C6.00002 12.2652 5.89466 12.5195 5.70712 12.7071C5.51959 12.8946 5.26523 13 5.00002 13Z" fill="#ffffff"></path> <path d="M4.99999 17.5C4.86998 17.5016 4.7409 17.4778 4.61999 17.43C4.50049 17.372 4.38947 17.298 4.28999 17.21C4.20166 17.1128 4.13063 17.0012 4.07999 16.88C4.02708 16.7603 3.99976 16.6309 3.99976 16.5C3.99976 16.3691 4.02708 16.2397 4.07999 16.12C4.13063 15.9988 4.20166 15.8872 4.28999 15.79C4.43061 15.6513 4.60919 15.5573 4.80317 15.5199C4.99716 15.4825 5.19788 15.5034 5.37999 15.58C5.50274 15.6276 5.61488 15.699 5.70999 15.79C5.79832 15.8872 5.86935 15.9988 5.91999 16.12C5.97289 16.2397 6.00022 16.3691 6.00022 16.5C6.00022 16.6309 5.97289 16.7603 5.91999 16.88C5.86935 17.0012 5.79832 17.1128 5.70999 17.21C5.61655 17.3027 5.50573 17.376 5.38389 17.4258C5.26206 17.4756 5.1316 17.5008 4.99999 17.5Z" fill="#ffffff"></path> </g></svg>',
            }),

            className: 'w-8 h-8 ',
          }),
          El({
            element: 'p',
            child: 'My To-Do Tasks',
            className: 'font-semibold text-2xl ',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-5',
        child: [
          El({
            element: 'div',
            className: 'flex bg-[#7926ed] rounded gap-3 pl-2 items-center',
            child: [
              El({
                element: 'div',
                className: 'w-5 ',
                child: El({
                  element: 'svg',
                  innerHTML:
                    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#ffffff"></path> </g></svg>',
                }),
              }),
              El({
                element: 'input',
                type: 'text',
                placeholder: 'search',
                className: 'bg-transparent h-[100%] p-2 text-white outline-0',
                id: 'searchInput',
                onkeyup: debounce(searchHandler, 1000),
              }),
            ],
          }),
          El({
            element: 'button',
            className: '',
            onclick: () => {
              filtering();
              document
                .getElementById('sideBar-overlay')
                .classList.remove('hidden');
            },
            child: El({
              element: 'div',
              child: El({
                element: 'svg',
                innerHTML:
                  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z" fill="#ffffff"></path> </g></svg>',
              }),

              className: 'w-10',
            }),
          }),
          El({
            element: 'button',
            className: 'w-10',
            onclick: () => {
              Form();

              document
                .querySelector('#modal-overlay')
                .classList.remove('hidden');
            },
            child: El({
              element: 'div',
              className: 'w-full',
              child: El({
                element: 'svg',
                innerHTML:
                  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM12.5 5.5C13.0523 5.5 13.5 5.94772 13.5 6.5V10.5H17.5C18.0523 10.5 18.5 10.9477 18.5 11.5V12.5C18.5 13.0523 18.0523 13.5 17.5 13.5H13.5V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5H11.5C10.9477 18.5 10.5 18.0523 10.5 17.5V13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5V11.5C5.5 10.9477 5.94772 10.5 6.5 10.5H10.5V6.5C10.5 5.94772 10.9477 5.5 11.5 5.5H12.5Z" fill="#ffffff"></path> </g></svg>',
              }),
            }),
          }),
        ],
      }),
    ],
  });
};
