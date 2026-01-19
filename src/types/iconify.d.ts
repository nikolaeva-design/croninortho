import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon: string;
          width?: string | number;
          height?: string | number;
          inline?: boolean;
          rotate?: string | number;
          flip?: 'horizontal' | 'vertical' | 'horizontal,vertical';
          mode?: 'svg' | 'bg' | 'mask' | 'style';
          'aria-hidden'?: boolean | 'true' | 'false';
        },
        HTMLElement
      >;
    }
  }
}
