import localFont from '@next/font/local';

const cascadiaCode = localFont({
  src: [
    {
      style: 'normal',
      path: './woff2/CascadiaCode.woff2',
    },
    {
      style: 'bold',
      path: './woff2/CascadiaCode.woff2',
    },
    {
      style: 'italic',
      path: './woff2/CascadiaCodeItalic.woff2',
    },
  ],
});

export default cascadiaCode;
