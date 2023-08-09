import { FC } from 'react';
import { GenIcon, IconBaseProps } from '@react-icons/all-files/lib/esm';
import { Burger, BurgerProps, useMantineTheme } from '@mantine/core';

const BurgerIcon = (props: BurgerProps) => {
  const theme = useMantineTheme();
  return (
    <Burger
      {...props}
      color={
        theme.colors[theme.primaryColor][theme.colorScheme === 'light' ? 6 : 8]
      }
    />
  );
};

const FcHttp = ({size = 24, className=''}: {size?: number, className?: string}) => {

return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.77048 21L7.5655 20.1568L5.71456 18.1926L21 18.1926V17L3 17L6.77048 21Z" fill="black" stroke="black" stroke-width="0.05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2295 3L16.4345 3.84317L18.2854 5.80739H3V7H21L17.2295 3Z" fill="black" stroke="black" stroke-width="0.05"/>
<path d="M3.91797 15V9.27344H4.86328V11.5273H6.72266V9.27344H7.67188V15H6.72266V12.4961H4.86328V15H3.91797ZM9.70703 15V10.2422H8.3125V9.27344H12.043V10.2422H10.6523V15H9.70703ZM13.7148 15V10.2422H12.3203V9.27344H16.0508V10.2422H14.6602V15H13.7148ZM16.6641 15V9.27344H18.1875C18.7552 9.27344 19.1263 9.30078 19.3008 9.35547C19.5794 9.44401 19.8086 9.63281 19.9883 9.92188C20.1706 10.2109 20.2617 10.5833 20.2617 11.0391C20.2617 11.4531 20.1836 11.8008 20.0273 12.082C19.8711 12.3607 19.6758 12.5573 19.4414 12.6719C19.207 12.7839 18.8034 12.8398 18.2305 12.8398H17.6094V15H16.6641ZM17.6094 10.2422V11.8672H18.1328C18.4844 11.8672 18.7227 11.8424 18.8477 11.793C18.9753 11.7435 19.0794 11.6549 19.1602 11.5273C19.2409 11.3971 19.2812 11.2383 19.2812 11.0508C19.2812 10.8607 19.2396 10.7005 19.1562 10.5703C19.0729 10.4401 18.9701 10.3529 18.8477 10.3086C18.7253 10.2643 18.4661 10.2422 18.0703 10.2422H17.6094Z" fill="black"/>
<path d="M3.91797 15H3.89297V15.025H3.91797V15ZM3.91797 9.27344V9.24844H3.89297V9.27344H3.91797ZM4.86328 9.27344H4.88828V9.24844H4.86328V9.27344ZM4.86328 11.5273H4.83828V11.5523H4.86328V11.5273ZM6.72266 11.5273V11.5523H6.74766V11.5273H6.72266ZM6.72266 9.27344V9.24844H6.69766V9.27344H6.72266ZM7.67188 9.27344H7.69688V9.24844H7.67188V9.27344ZM7.67188 15V15.025H7.69688V15H7.67188ZM6.72266 15H6.69766V15.025H6.72266V15ZM6.72266 12.4961H6.74766V12.4711H6.72266V12.4961ZM4.86328 12.4961V12.4711H4.83828V12.4961H4.86328ZM4.86328 15V15.025H4.88828V15H4.86328ZM3.94297 15V9.27344H3.89297V15H3.94297ZM3.91797 9.29844H4.86328V9.24844H3.91797V9.29844ZM4.83828 9.27344V11.5273H4.88828V9.27344H4.83828ZM4.86328 11.5523H6.72266V11.5023H4.86328V11.5523ZM6.74766 11.5273V9.27344H6.69766V11.5273H6.74766ZM6.72266 9.29844H7.67188V9.24844H6.72266V9.29844ZM7.64687 9.27344V15H7.69688V9.27344H7.64687ZM7.67188 14.975H6.72266V15.025H7.67188V14.975ZM6.74766 15V12.4961H6.69766V15H6.74766ZM6.72266 12.4711H4.86328V12.5211H6.72266V12.4711ZM4.83828 12.4961V15H4.88828V12.4961H4.83828ZM4.86328 14.975H3.91797V15.025H4.86328V14.975ZM9.70703 15H9.68203V15.025H9.70703V15ZM9.70703 10.2422H9.73203V10.2172H9.70703V10.2422ZM8.3125 10.2422H8.2875V10.2672H8.3125V10.2422ZM8.3125 9.27344V9.24844H8.2875V9.27344H8.3125ZM12.043 9.27344H12.068V9.24844H12.043V9.27344ZM12.043 10.2422V10.2672H12.068V10.2422H12.043ZM10.6523 10.2422V10.2172H10.6273V10.2422H10.6523ZM10.6523 15V15.025H10.6773V15H10.6523ZM9.73203 15V10.2422H9.68203V15H9.73203ZM9.70703 10.2172H8.3125V10.2672H9.70703V10.2172ZM8.3375 10.2422V9.27344H8.2875V10.2422H8.3375ZM8.3125 9.29844H12.043V9.24844H8.3125V9.29844ZM12.018 9.27344V10.2422H12.068V9.27344H12.018ZM12.043 10.2172H10.6523V10.2672H12.043V10.2172ZM10.6273 10.2422V15H10.6773V10.2422H10.6273ZM10.6523 14.975H9.70703V15.025H10.6523V14.975ZM13.7148 15H13.6898V15.025H13.7148V15ZM13.7148 10.2422H13.7398V10.2172H13.7148V10.2422ZM12.3203 10.2422H12.2953V10.2672H12.3203V10.2422ZM12.3203 9.27344V9.24844H12.2953V9.27344H12.3203ZM16.0508 9.27344H16.0758V9.24844H16.0508V9.27344ZM16.0508 10.2422V10.2672H16.0758V10.2422H16.0508ZM14.6602 10.2422V10.2172H14.6352V10.2422H14.6602ZM14.6602 15V15.025H14.6852V15H14.6602ZM13.7398 15V10.2422H13.6898V15H13.7398ZM13.7148 10.2172H12.3203V10.2672H13.7148V10.2172ZM12.3453 10.2422V9.27344H12.2953V10.2422H12.3453ZM12.3203 9.29844H16.0508V9.24844H12.3203V9.29844ZM16.0258 9.27344V10.2422H16.0758V9.27344H16.0258ZM16.0508 10.2172H14.6602V10.2672H16.0508V10.2172ZM14.6352 10.2422V15H14.6852V10.2422H14.6352ZM14.6602 14.975H13.7148V15.025H14.6602V14.975ZM16.6641 15H16.6391V15.025H16.6641V15ZM16.6641 9.27344V9.24844H16.6391V9.27344H16.6641ZM19.3008 9.35547L19.3084 9.33164L19.3083 9.33161L19.3008 9.35547ZM19.9883 9.92188L19.967 9.93507L19.9671 9.93521L19.9883 9.92188ZM20.0273 12.082L20.0491 12.0943L20.0492 12.0942L20.0273 12.082ZM19.4414 12.6719L19.4522 12.6944L19.4524 12.6943L19.4414 12.6719ZM17.6094 12.8398V12.8148H17.5844V12.8398H17.6094ZM17.6094 15V15.025H17.6344V15H17.6094ZM17.6094 10.2422V10.2172H17.5844V10.2422H17.6094ZM17.6094 11.8672H17.5844V11.8922H17.6094V11.8672ZM18.8477 11.793L18.8386 11.7697L18.8385 11.7697L18.8477 11.793ZM19.1602 11.5273L19.1813 11.5407L19.1814 11.5405L19.1602 11.5273ZM16.6891 15V9.27344H16.6391V15H16.6891ZM16.6641 9.29844H18.1875V9.24844H16.6641V9.29844ZM18.1875 9.29844C18.471 9.29844 18.7051 9.30527 18.8898 9.31888C19.0749 9.33252 19.2089 9.35288 19.2933 9.37932L19.3083 9.33161C19.2181 9.30337 19.0794 9.28271 18.8934 9.26901C18.7071 9.25528 18.4717 9.24844 18.1875 9.24844V9.29844ZM19.2932 9.37929C19.5653 9.46574 19.79 9.65019 19.967 9.93507L20.0095 9.90868C19.8272 9.61543 19.5936 9.42228 19.3084 9.33164L19.2932 9.37929ZM19.9671 9.93521C20.1462 10.2192 20.2367 10.5865 20.2367 11.0391H20.2867C20.2867 10.5801 20.1949 10.2027 20.0094 9.90854L19.9671 9.93521ZM20.2367 11.0391C20.2367 11.4501 20.1592 11.7933 20.0055 12.0699L20.0492 12.0942C20.208 11.8083 20.2867 11.4562 20.2867 11.0391H20.2367ZM20.0055 12.0698C19.8512 12.345 19.6593 12.5375 19.4304 12.6494L19.4524 12.6943C19.6923 12.5771 19.891 12.3763 20.0491 12.0943L20.0055 12.0698ZM19.4306 12.6493C19.2017 12.7587 18.8031 12.8148 18.2305 12.8148V12.8648C18.8037 12.8648 19.2123 12.809 19.4522 12.6944L19.4306 12.6493ZM18.2305 12.8148H17.6094V12.8648H18.2305V12.8148ZM17.5844 12.8398V15H17.6344V12.8398H17.5844ZM17.6094 14.975H16.6641V15.025H17.6094V14.975ZM17.5844 10.2422V11.8672H17.6344V10.2422H17.5844ZM17.6094 11.8922H18.1328V11.8422H17.6094V11.8922ZM18.1328 11.8922C18.484 11.8922 18.7268 11.8677 18.8569 11.8162L18.8385 11.7697C18.7185 11.8172 18.4847 11.8422 18.1328 11.8422V11.8922ZM18.8567 11.8163C18.9898 11.7647 19.098 11.6723 19.1813 11.5407L19.139 11.514C19.0609 11.6376 18.9607 11.7223 18.8386 11.7697L18.8567 11.8163ZM19.1814 11.5405C19.2651 11.4056 19.3063 11.2419 19.3063 11.0508H19.2562C19.2562 11.2347 19.2167 11.3887 19.1389 11.5142L19.1814 11.5405ZM19.3063 11.0508C19.3063 10.857 19.2638 10.6919 19.1773 10.5568L19.1352 10.5838C19.2154 10.7091 19.2562 10.8644 19.2562 11.0508H19.3063ZM19.1773 10.5568C19.0916 10.4229 18.9847 10.3316 18.8562 10.2851L18.8392 10.3321C18.9555 10.3742 19.0542 10.4573 19.1352 10.5838L19.1773 10.5568ZM18.8562 10.2851C18.7918 10.2618 18.6937 10.245 18.5637 10.2339C18.4331 10.2227 18.2686 10.2172 18.0703 10.2172V10.2672C18.2678 10.2672 18.4308 10.2727 18.5594 10.2837C18.6885 10.2947 18.7812 10.3111 18.8392 10.3321L18.8562 10.2851ZM18.0703 10.2172H17.6094V10.2672H18.0703V10.2172Z" fill="black"/>
</svg>
}

const FcIconGraphQL: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.5567 17C20.0664 17.8529 18.9734 18.1441 18.1205 17.6538C17.9507 17.5562 17.8031 17.4345 17.6798 17.2959L13.592 19.6559C13.6506 19.8324 13.6822 20.0213 13.6822 20.2177C13.6822 21.1982 12.8855 22 11.8998 22C10.9142 22 10.1175 21.2033 10.1175 20.2177C10.1175 20.0424 10.1425 19.8734 10.1897 19.7133L6.07816 17.3396C5.9634 17.4598 5.83029 17.566 5.67922 17.6538C4.82123 18.1441 3.73332 17.8529 3.24304 17C2.75276 16.1471 3.04396 15.0592 3.89688 14.5638C4.04755 14.4772 4.20565 14.4151 4.36647 14.3761V9.62511C4.20369 9.58607 4.04404 9.52362 3.8918 9.43618C3.03889 8.9459 2.74769 7.85292 3.23797 7C3.72825 6.14708 4.82123 5.85588 5.67415 6.34616C5.82677 6.43477 5.96105 6.54251 6.0766 6.6643L10.1905 4.28941C10.1419 4.12478 10.1173 3.954 10.1175 3.78234C10.1175 2.79671 10.9142 2 11.8998 2C12.8855 2 13.6822 2.79671 13.6822 3.78234C13.6822 3.95956 13.6564 4.13053 13.6084 4.29175L17.7211 6.66664C17.8371 6.54368 17.9721 6.43555 18.1255 6.34616C18.9785 5.85588 20.0664 6.14708 20.5617 7C21.052 7.85292 20.7608 8.94082 19.9079 9.43618C19.7556 9.52362 19.596 9.58607 19.4332 9.62511V14.3761C19.594 14.4151 19.7521 14.4772 19.9028 14.5638C20.7608 15.0592 21.052 16.1471 20.5567 17ZM5.21431 14.378C5.23812 14.3839 5.26115 14.3901 5.28458 14.3971L10.6687 5.07206C10.6511 5.05527 10.6343 5.03888 10.6175 5.02131L6.49661 7.40089C6.62465 7.8494 6.5782 8.34632 6.32798 8.78234C6.07699 9.21914 5.6679 9.50839 5.21431 9.6212V14.378ZM6.01961 14.8195C6.13944 14.9339 6.24562 15.067 6.33306 15.2177C6.41972 15.3683 6.48178 15.5264 6.52082 15.6876H17.2789C17.3179 15.5264 17.38 15.3683 17.4666 15.2177C17.5515 15.0699 17.6572 14.9352 17.7805 14.8175L12.3979 5.49442C12.2398 5.54048 12.0728 5.56468 11.8998 5.56468C11.7273 5.56468 11.561 5.54048 11.4033 5.4952L6.01961 14.8195ZM18.5163 14.3964C18.5393 14.3897 18.562 14.3835 18.5854 14.3776V9.6212C18.1318 9.50839 17.7227 9.21914 17.4717 8.78234C17.2219 8.34749 17.175 7.85135 17.3027 7.40362L13.1802 5.02366C13.1646 5.03966 13.1486 5.05527 13.1322 5.07089L18.5163 14.3964ZM17.3136 16.6522C17.3011 16.6136 17.2902 16.5745 17.2808 16.5355H6.51847C6.51301 16.5585 6.50676 16.5815 6.50013 16.6042L10.6156 18.9806C10.94 18.6442 11.3951 18.4353 11.8998 18.4353C12.4225 18.4353 12.8921 18.6594 13.2181 19.0169L17.3136 16.6522Z',
        },
        child: [],
      },
    ],
  })(props);
};

const FcIconSocketIo: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M9.21415 1.34727C12.0606 0.616534 15.2065 1.04235 17.7169 2.59327C20.8785 4.48594 22.9426 8.06615 22.9951 11.7515C23.1107 15.4736 21.1727 19.1643 18.0583 21.1884C14.592 23.5226 9.79708 23.612 6.25725 21.3934C2.64923 19.2379 0.543172 14.8901 1.0842 10.7158C1.51998 6.30488 4.92334 2.41454 9.21415 1.34736V1.34727Z',
          fill: '#c5c5c5',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M8.73335 3.09859C14.163 0.926559 20.8227 4.93676 21.3847 10.7534C22.2596 15.9873 17.9117 21.306 12.604 21.4596C7.55621 21.9629 2.67808 17.6877 2.53495 12.6235C2.15849 8.52322 4.86269 4.45475 8.73335 3.09859Z',
          fill: 'white',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M9.7647 11.4842C12.0336 9.65941 14.2531 7.7713 16.5714 6C15.3554 7.83947 14.1048 9.6545 12.8888 11.4939C11.8457 11.4988 10.8028 11.4988 9.7647 11.4842V11.4842ZM11.6827 12.5012C12.7306 12.5012 13.7736 12.5012 14.8166 12.5158C12.5329 14.3309 10.3233 16.2335 8 18C9.21604 16.1605 10.4666 14.3407 11.6827 12.5012Z',
          fill: '#c5c5c5',
        },
        child: [],
      },
    ],
  })(props);
};

const FcIconSocketIoSquare: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'none' },
    child: [
      {
        tag: 'rect',
        attr: {
          x: '2.5',
          y: '2.5',
          width: '19',
          height: '19',
          stroke: 'currentColor',
          strokeWidth: '1',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M9.73722 11.4842C11.9708 9.65941 14.1557 7.7713 16.4379 6C15.2408 7.83947 14.0097 9.6545 12.8126 11.4939C11.7859 11.4988 10.7592 11.4988 9.73722 11.4842V11.4842ZM11.6253 12.5012C12.6569 12.5012 13.6837 12.5012 14.7104 12.5158C12.4623 14.3309 10.2871 16.2335 8 18C9.19711 16.1605 10.4282 14.3407 11.6253 12.5012Z',
          fill: 'currentColor',
        },
        child: [],
      },
    ],
  })(props);
};

const FcIconWebSocket: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M17.0328 15.5419H19.3516V9.98126L16.7375 7.3722L15.1005 9.00833L17.0328 10.9396V15.5419ZM19.3552 16.7007H15.9792H11.2724L9.3401 14.7694L10.1604 13.9495L11.7573 15.5455H15.0422L11.8083 12.3061L12.6323 11.4826L15.8661 14.7147V11.4315L14.2766 9.84279L15.0896 9.03019L11.0719 5H7.10885H3L5.31146 7.31026V7.31754H5.3224H10.1021L11.7974 9.01197L9.32188 11.4862L7.63021 9.79178V8.47631H5.31146V10.7501L9.32188 14.7585L7.68854 16.3909L10.299 19H14.262H21.6667L19.3552 16.7007Z',
        },
        child: [],
      },
    ],
  })(props);
};

const FcIconPostSquare: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'none' },
    child: [
      // {"tag": "rect", "attr": { "x": "2.5", "y": "62.5", "width":"19", "height": "19", "strokeWidth": "1"}, child: []},
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M5 13.7001V10.0499H6.56211C6.84525 10.0499 7.08959 10.1034 7.29516 10.2103C7.50198 10.3161 7.66139 10.464 7.77341 10.6541C7.88542 10.843 7.94143 11.0629 7.94143 11.3136C7.94143 11.5655 7.88419 11.7859 7.76972 11.9748C7.65646 12.1625 7.49459 12.3081 7.28409 12.4115C7.07359 12.5149 6.8237 12.5665 6.53442 12.5665H5.57056V11.8714H6.36455C6.50241 11.8714 6.61751 11.8483 6.70984 11.8019C6.80339 11.7556 6.87417 11.6908 6.92218 11.6076C6.97018 11.5233 6.9942 11.4253 6.9942 11.3136C6.9942 11.2007 6.97018 11.1033 6.92218 11.0213C6.87417 10.9381 6.80339 10.8739 6.70984 10.8288C6.61628 10.7836 6.50118 10.7611 6.36455 10.7611H5.91401V13.7001H5ZM11.9612 11.875C11.9612 12.2766 11.8812 12.617 11.7212 12.8963C11.5611 13.1755 11.3445 13.3876 11.0712 13.5326C10.7992 13.6775 10.4939 13.75 10.1554 13.75C9.8156 13.75 9.5097 13.6769 9.23766 13.5308C8.96561 13.3846 8.74957 13.1725 8.58955 12.8945C8.43075 12.6153 8.35135 12.2754 8.35135 11.875C8.35135 11.4734 8.43075 11.133 8.58955 10.8537C8.74957 10.5745 8.96561 10.3624 9.23766 10.2174C9.5097 10.0725 9.8156 10 10.1554 10C10.4939 10 10.7992 10.0725 11.0712 10.2174C11.3445 10.3624 11.5611 10.5745 11.7212 10.8537C11.8812 11.133 11.9612 11.4734 11.9612 11.875ZM11.0269 11.875C11.0269 11.6374 10.9918 11.4365 10.9216 11.2726C10.8527 11.1086 10.753 10.9844 10.6225 10.9001C10.4933 10.8157 10.3375 10.7735 10.1554 10.7735C9.9744 10.7735 9.81868 10.8157 9.6882 10.9001C9.55772 10.9844 9.45738 11.1086 9.38722 11.2726C9.31829 11.4365 9.28382 11.6374 9.28382 11.875C9.28382 12.1126 9.31829 12.3135 9.38722 12.4774C9.45738 12.6414 9.55772 12.7656 9.6882 12.8499C9.81868 12.9343 9.9744 12.9765 10.1554 12.9765C10.3375 12.9765 10.4933 12.9343 10.6225 12.8499C10.753 12.7656 10.8527 12.6414 10.9216 12.4774C10.9918 12.3135 11.0269 12.1126 11.0269 11.875ZM14.5389 11.1443C14.5266 11.0135 14.4718 10.912 14.3745 10.8395C14.2785 10.7658 14.1413 10.729 13.9628 10.729C13.8446 10.729 13.7461 10.7438 13.6674 10.7735C13.5886 10.8032 13.5295 10.8442 13.4901 10.8965C13.4507 10.9476 13.4304 11.0064 13.4292 11.073C13.4267 11.1276 13.4378 11.1757 13.4624 11.2173C13.4882 11.2589 13.5252 11.2957 13.5732 11.3278C13.6224 11.3587 13.6815 11.386 13.7504 11.4098C13.8194 11.4336 13.8969 11.4544 13.9831 11.4722L14.3081 11.5435C14.4952 11.5827 14.6601 11.635 14.8029 11.7003C14.947 11.7657 15.0676 11.8435 15.1648 11.9338C15.2633 12.0241 15.3378 12.1281 15.3883 12.2457C15.4387 12.3633 15.4645 12.4952 15.4658 12.6414C15.4645 12.8719 15.4042 13.0697 15.2848 13.2349C15.1654 13.4001 14.9937 13.5266 14.7697 13.6145C14.5469 13.7025 14.2779 13.7464 13.9628 13.7464C13.6464 13.7464 13.3707 13.7007 13.1356 13.6092C12.9005 13.5177 12.7177 13.3787 12.5872 13.1921C12.4567 13.0056 12.3896 12.7697 12.3859 12.4845H13.2611C13.2685 12.6022 13.3011 12.7002 13.359 12.7786C13.4168 12.8571 13.4962 12.9165 13.5972 12.9569C13.6994 12.9973 13.8175 13.0175 13.9517 13.0175C14.0748 13.0175 14.1794 13.0014 14.2656 12.9693C14.353 12.9373 14.4201 12.8927 14.4669 12.8357C14.5136 12.7786 14.5377 12.7133 14.5389 12.6396C14.5377 12.5707 14.5155 12.5119 14.4724 12.4632C14.4293 12.4133 14.3629 12.3705 14.273 12.3348C14.1844 12.298 14.0711 12.2641 13.9332 12.2332L13.5381 12.1441C13.2107 12.0716 12.9528 11.9546 12.7644 11.793C12.5761 11.6302 12.4825 11.4104 12.4838 11.1336C12.4825 10.9078 12.5453 10.71 12.6721 10.54C12.7989 10.3701 12.9743 10.2376 13.1984 10.1426C13.4224 10.0475 13.6778 10 13.9646 10C14.2576 10 14.5118 10.0481 14.7272 10.1444C14.9439 10.2394 15.1119 10.3731 15.2313 10.5454C15.3508 10.7177 15.4117 10.9173 15.4141 11.1443H14.5389ZM15.8038 10.7664V10.0499H19V10.7664H17.8533V13.7001H16.9523V10.7664H15.8038Z',
          fill: 'currentColor',
        },
        child: [],
      },
    ],
  })(props);
};

const FcVscWand: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 16 16',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeWidth: '0',
    },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M4.38 5h1V4h1V3h-1V2h-1v1h-1v1h1v1zm8 4h-1v1h-1v1h1v1h1v-1h1v-1h-1V9zM14 2V1h-1v1h-1v1h1v1h1V3h1V2h-1zm-2.947 2.442a1.49 1.49 0 0 0-2.12 0l-7.49 7.49a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7.49-7.49c.58-.58.58-1.53 0-2.12zm-8.2 8.9c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l6.46-6.46.71.71-6.46 6.46zm7.49-7.49l-.32.32-.71-.71.32-.32c.2-.2.51-.2.71 0 .19.2.19.52 0 .71z',
          fill: 'currentColor',
        },
        child: [],
      },
    ],
  })(props);
};

const FcLogo: FC<IconBaseProps> = (props) => {
  return GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeWidth: '0',
    },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M0.1,2.2C0.1,1,1,0,2.2,0h19.6C23,0,24,1,24,2.2v19.6c0,1.2-1,2.2-2.2,2.2H2.2c-1.2,0-2.2-1-2.2-2.2V2.2z',
          fill: '#000',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M19,19h-4.3l-0.9-2.2l-0.6,1.5l-1.3-3.5l-1.3,3.5l-0.6-1.5L9.3,19H4.8L12,6.7L19,19z',
          fill: '#FFE5BF',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M16.8,7.9c0.9,0,1.6-0.7,1.6-1.6s-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6S15.9,7.9,16.8,7.9z',
          fill: '#ED9155',
        },
        child: [],
      },
    ],
  })(props);
};

export {
  BurgerIcon,
  FcIconGraphQL,
  FcIconSocketIo,
  FcIconSocketIoSquare,
  FcIconWebSocket,
  FcIconPostSquare,
  FcVscWand,
  FcLogo,
  FcHttp
};
