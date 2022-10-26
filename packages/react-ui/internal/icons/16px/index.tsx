import React from 'react';
import propTypes from 'prop-types';

import { forwardRefAndName } from '../../../lib/forwardRefAndName';

import { styles } from './icon.styles';
import { BaseIcon, IconProps } from './BaseIcon';

// NOTE Icons copy-pasted from @skbkontur/react-icons package, because it's not fully opensource

export interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  size?: string | number;
  ref?: any;
}

const SvgIcon = forwardRefAndName<HTMLElement, SvgIconProps>(
  'SvgIcon',
  ({ color, size, style, children, ...rest }, ref) => {
    return (
      <span ref={ref} className={styles.root()} style={{ ...style, fontSize: size, color }} {...rest}>
        {React.cloneElement(children as JSX.Element, {
          className: styles.icon(),
          fill: 'currentColor',
          focusable: 'false',
        })}
      </span>
    );
  },
);

SvgIcon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  style: propTypes.object,
  children: propTypes.node,
};

export const ArrowChevronDownIcon = forwardRefAndName<HTMLElement, SvgIconProps>(
  'ArrowChevronDownIcon',
  (props, ref) => {
    return (
      <SvgIcon ref={ref} {...props}>
        <svg viewBox="0 0 16 16" style={{ marginBottom: '-0.1875em' }}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 9.00098L11.001 6C11.3747 6 11.6322 6.10937 11.7734 6.32812C11.9147 6.54688 11.9899 6.73828 11.999 6.90234V6.99805L8 10.9971L4.00098 6.99805V6.88867C4.03744 6.51953 4.20833 6.25977 4.51367 6.10938C4.65039 6.03646 4.81217 6 4.99902 6L8 9.00098Z"
          />
        </svg>
      </SvgIcon>
    );
  },
);

export const ArrowChevronUpIcon = forwardRefAndName<HTMLElement, SvgIconProps>('ArrowChevronUpIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16" style={{ marginBottom: '-0.1875em' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 8.00293L4.99902 10.9971C4.52962 10.9971 4.21745 10.7829 4.0625 10.3545C4.02604 10.2588 4.00553 10.1745 4.00098 10.1016V9.99902L8 6L11.999 9.99902V10.1084C11.9626 10.4684 11.7917 10.7305 11.4863 10.8945C11.3496 10.9674 11.1878 11.0016 11.001 10.9971L8 8.00293Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const ArrowChevronRightIcon = forwardRefAndName<HTMLElement, SvgIconProps>(
  'ArrowChevronRightIcon',
  (props, ref) => {
    return (
      <SvgIcon ref={ref} {...props}>
        <svg viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M8.99804688,9.00292969 L5.99707031,6.00195312 C5.99707031,5.62825334 6.10188697,5.37304756 6.31152344,5.23632812 C6.5211599,5.09960869 6.71712148,5.01985688 6.89941406,4.99707031 L7.00195312,4.99707031 L11.0009766,9.00292969 L7.00195312,13.0019531 L6.89941406,13.0019531 C6.53482891,12.9700519 6.27278726,12.7968766 6.11328125,12.4824219 C6.0358069,12.3593744 5.99707031,12.1975921 5.99707031,11.9970703 L8.99804688,9.00292969 Z"
          />
        </svg>
      </SvgIcon>
    );
  },
);

export const ArrowTriangleDownIcon = forwardRefAndName<HTMLElement, SvgIconProps>(
  'ArrowTriangleDownIcon',
  (props, ref) => {
    return (
      <SvgIcon ref={ref} {...props}>
        <svg viewBox="0 0 16 16">
          <polygon fillRule="evenodd" points="8 11.5029297 3.59765625 6.99804688 12.4023438 6.99804688" />
        </svg>
      </SvgIcon>
    );
  },
);

export const ArrowTriangleUpIcon = forwardRefAndName<HTMLElement, SvgIconProps>('ArrowTriangleUpIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <polygon fillRule="evenodd" points="12.4023438 10.9990234 3.59765625 10.9990234 8 6.50097656" />
      </svg>
    </SvgIcon>
  );
});

export const ArrowTriangleUpDownIcon = forwardRefAndName<HTMLElement, SvgIconProps>(
  'ArrowTriangleUpDownIcon',
  (props, ref) => {
    return (
      <SvgIcon ref={ref} {...props}>
        <svg viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M12,8 L4,8 L8,4 L12,8 L12,8 Z M12,10 L4,10 L8,14 L12,10 L12,10 Z" />
        </svg>
      </SvgIcon>
    );
  },
);

export const CalendarIcon = forwardRefAndName<HTMLElement, SvgIconProps>('CalendarIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M11.0009766,10.9990234 L11.0009766,11.9970703 L10.0029297,11.9970703 L10.0029297,10.9990234 L11.0009766,10.9990234 Z M8.99804688,10.9990234 L8.99804688,11.9970703 L8,11.9970703 L8,10.9990234 L8.99804688,10.9990234 Z M7.00195312,10.9990234 L7.00195312,11.9970703 L5.99707031,11.9970703 L5.99707031,10.9990234 L7.00195312,10.9990234 Z M4.99902344,10.9990234 L4.99902344,11.9970703 L4.00097656,11.9970703 L4.00097656,10.9990234 L4.99902344,10.9990234 Z M11.0009766,9.00292969 L11.0009766,10.0009766 L10.0029297,10.0009766 L10.0029297,9.00292969 L11.0009766,9.00292969 Z M8.99804688,9.00292969 L8.99804688,10.0009766 L8,10.0009766 L8,9.00292969 L8.99804688,9.00292969 Z M7.00195312,9.00292969 L7.00195312,10.0009766 L5.99707031,10.0009766 L5.99707031,9.00292969 L7.00195312,9.00292969 Z M4.99902344,9.00292969 L4.99902344,10.0009766 L4.00097656,10.0009766 L4.00097656,9.00292969 L4.99902344,9.00292969 Z M11.9990234,13.0019531 L11.9990234,7.99804688 L3.00292969,7.99804688 L3.00292969,13.0019531 L11.9990234,13.0019531 Z M3.00292969,14 C2.70214693,14 2.46061289,13.9088551 2.27832031,13.7265625 C2.09602773,13.5442699 2.00260419,13.3027359 1.99804688,13.0019531 L1.99804688,6.00195312 C1.99804688,5.73762889 2.09374904,5.50520934 2.28515625,5.3046875 C2.47656346,5.10416566 2.71581888,5.00162763 3.00292969,4.99707031 L4.99902344,4.99707031 L4.99902344,6.00195312 L5.99707031,6.00195312 L5.99707031,4.99707031 L8.99804688,4.99707031 L8.99804688,6.00195312 L10.0029297,6.00195312 L10.0029297,4.99707031 L11.9990234,4.99707031 C12.2861342,5.00162763 12.5253897,5.10416566 12.7167969,5.3046875 C12.9082041,5.50520934 13.0016276,5.73762889 12.9970703,6.00195312 L12.9970703,13.0019531 C12.9970703,13.3027359 12.9059254,13.5442699 12.7236328,13.7265625 C12.5413402,13.9088551 12.2998062,14 11.9990234,14 L3.00292969,14 Z M10.0029297,4.99707031 L8.99804688,4.99707031 L8.99804688,3.00097656 L10.0029297,3.00097656 L10.0029297,4.99707031 Z M5.99707031,4.99707031 L4.99902344,4.99707031 L4.99902344,3.00097656 L5.99707031,3.00097656 L5.99707031,4.99707031 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const EditIcon = forwardRefAndName<HTMLElement, SvgIconProps>('EditIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M12.9970703,13.0019531 L12.9970703,14 L7.62402344,14 L7.62402344,13.0019531 L12.9970703,13.0019531 Z M2.98925781,14 L2.98925781,11.9970703 L8.50585938,6.2890625 L10.625,8.40820312 L4.99902344,14 L2.98925781,14 Z M13.0585938,5.97460938 L11.4931641,7.54003906 L9.37402344,5.42773438 L10.9394531,3.84863281 L13.0585938,5.97460938 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const EyeClosedIcon = forwardRefAndName<HTMLElement, SvgIconProps>('EyeClosedIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M10.0986328,9.00292969 C10.0986328,9.45410382 9.96647268,9.86197734 9.70214844,10.2265625 C9.4378242,10.5911477 9.10286661,10.8486321 8.69726562,10.9990234 L9.10058594,11.9970703 C10.2399146,11.7692046 11.3063101,11.2041061 12.2998047,10.3017578 C12.7646508,10.0237616 12.9970703,9.60677361 12.9970703,9.05078125 C12.9970703,8.49478889 12.7646508,8.07780087 12.2998047,7.79980469 C11.8349586,7.37141713 11.3518905,7.02734505 10.8505859,6.76757813 C9.5152928,6.07942364 8.23242803,5.85611858 7.00195312,6.09765625 L7.30273438,6.89746094 C7.43489649,6.82910122 7.66731604,6.7972005 8,6.80175781 C8.59245088,6.80175781 9.0891907,7.01594838 9.49023438,7.44433594 C9.89127805,7.8727235 10.0940755,8.39224955 10.0986328,9.00292969 L10.0986328,9.00292969 Z M2.203125,11.1015625 C1.90689956,10.8554675 1.68131588,10.5455748 1.52636719,10.171875 C1.3714185,9.79817521 1.29622394,9.40853067 1.30078125,9.00292969 C1.30078125,8.20084234 1.60155949,7.49902645 2.203125,6.89746094 C2.30338592,6.79720002 2.48567576,6.63086054 2.75,6.3984375 C3.01432424,6.16601446 3.19661408,5.99967498 3.296875,5.89941406 L3.8984375,7.69726562 C3.29687199,8.14843976 2.99837237,8.58365676 3.00292969,9.00292969 C3.007487,9.23535272 3.08268156,9.48144401 3.22851563,9.74121094 C3.37434969,10.0009779 3.53157468,10.187825 3.70019531,10.3017578 C4.36556322,10.8030624 4.86458167,11.1357414 5.19726563,11.2998047 L5.99707031,13.6992188 C4.53417237,13.152341 3.26953658,12.2864643 2.203125,11.1015625 L2.203125,11.1015625 Z M14.8017578,8.95507812 C14.8017578,9.72070695 14.5351589,10.3701145 14.0019531,10.9033203 C12.7304624,12.347989 11.2972085,13.3141252 9.70214844,13.8017578 L10.0986328,14.9980469 L8.10253906,14.9980469 L8,14.4990234 L4.09667969,3.00097656 L5.99707031,3.00097656 L6.40039062,4.19726562 C7.44401563,3.90104019 8.44205253,3.86686084 9.39453125,4.09472656 C11.0488364,4.49577023 12.5162696,5.39810496 13.796875,6.80175781 C13.8652347,6.80175781 13.8994141,6.83365854 13.8994141,6.89746094 L14.0019531,7 C14.5351589,7.53776311 14.8017578,8.1894493 14.8017578,8.95507812 L14.8017578,8.95507812 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const EyeOpenedIcon = forwardRefAndName<HTMLElement, SvgIconProps>('EyeOpenedIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M8.09570312,11.1972656 C7.49869493,11.1972656 6.98372612,10.9807964 6.55078125,10.5478516 C6.11783638,10.1149067 5.90136719,9.59765926 5.90136719,8.99609375 C5.90136719,8.39452824 6.11783638,7.87955943 6.55078125,7.45117187 C6.98372612,7.018227 7.49869493,6.80175781 8.09570312,6.80175781 C8.69271132,6.80175781 9.19172977,7.01594838 9.59277344,7.44433594 C9.99837442,7.86816618 10.2011719,8.38541361 10.2011719,8.99609375 C10.2011719,9.60677389 10.000653,10.1262999 9.59960938,10.5546875 C9.1985657,10.9830751 8.69726863,11.1972656 8.09570312,11.1972656 L8.09570312,11.1972656 Z M3.00292969,8.96875 C3.00292969,9.49739848 3.23534924,9.94172997 3.70019531,10.3017578 C6.52117296,12.753593 9.4218601,12.753593 12.4023438,10.3017578 C12.8079447,9.89615683 13.0061849,9.46321845 12.9970703,9.00292969 C12.9970703,8.71581888 12.8649102,8.41959788 12.6005859,8.11425781 C12.5094396,8.01399689 12.3750009,7.87500089 12.1972656,7.69726562 C10.7936128,6.53515044 9.35352301,5.98372366 7.87695312,6.04296875 C6.75129646,6.08854189 5.63021392,6.47135057 4.51367188,7.19140625 C4.23567569,7.37369883 3.96451955,7.57649628 3.70019531,7.79980469 C3.52701736,7.97298264 3.4016931,8.10286415 3.32421875,8.18945312 C3.11002497,8.44010542 3.00292969,8.69986845 3.00292969,8.96875 L3.00292969,8.96875 Z M1.30078125,8.95507812 C1.30078125,8.1894493 1.56738015,7.53776311 2.10058594,7 L2.10058594,6.97265625 C2.11425788,6.92252579 2.14843723,6.89746094 2.203125,6.89746094 C3.99414958,5.01529007 5.87857084,4.03776078 7.85644531,3.96484375 C9.11882142,3.91927061 10.4016862,4.31119377 11.7050781,5.140625 C12.4160192,5.59635645 13.1132778,6.18196257 13.796875,6.89746094 C14.1022151,7.15722786 14.3460277,7.47395646 14.5283203,7.84765625 C14.7106129,8.22135604 14.8017578,8.60644333 14.8017578,9.00292969 C14.8017578,9.74577194 14.5009796,10.4772099 13.8994141,11.1972656 C12.5276624,12.5006576 11.1673245,13.3665343 9.81835938,13.7949219 C9.29882553,13.9544279 8.72005527,14.0432942 8.08203125,14.0615234 C7.44400723,14.0751954 6.81738589,13.9908863 6.20214844,13.8085937 C5.57779636,13.6263012 4.9101598,13.2981795 4.19921875,12.8242187 C3.4882777,12.350258 2.78874042,11.7418657 2.10058594,10.9990234 L2.10058594,10.9033203 C1.56738015,10.3701145 1.30078125,9.72070695 1.30078125,8.95507812 L1.30078125,8.95507812 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const FunctionIcon = forwardRefAndName<HTMLElement, SvgIconProps>('FunctionIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M8.38964844,11.9970703 C7.98404745,12.0016276 7.70149819,11.9492193 7.54199219,11.8398438 C7.38248618,11.7304682 7.30273438,11.6028653 7.30273438,11.4570312 C7.30273438,11.3111972 7.38248618,11.1653653 7.54199219,11.0195312 C7.70149819,10.8736972 7.8997384,10.8007812 8.13671875,10.8007812 C8.3736991,10.8007812 8.56054619,10.8349606 8.69726562,10.9033203 C8.74739608,10.9033203 8.79980441,10.9261065 8.85449219,10.9716797 C8.90917996,11.0172528 8.9524738,11.0468749 8.984375,11.0605469 C9.10286518,11.1106773 9.44693726,10.8509143 10.0166016,10.28125 L10.2011719,10.0966797 C10.2695316,10.1650394 10.2353522,9.76628037 10.0986328,8.90039062 C9.96191338,8.63150907 9.82975324,8.49707031 9.70214844,8.49707031 C9.63378872,8.4287106 9.33301048,8.39680987 8.79980469,8.40136719 L8.90234375,7.99804688 L11.1992188,7.99804688 C11.3997406,8.13020899 11.5,8.26464775 11.5,8.40136719 C11.5227866,8.45149765 11.5888666,8.6839172 11.6982422,9.09863281 C11.9215506,8.94368412 12.1311839,8.80240949 12.3271484,8.67480469 C12.523113,8.54719988 12.6757807,8.44694047 12.7851562,8.37402344 C12.8945318,8.30110641 12.9993485,8.24414083 13.0996094,8.203125 C13.500653,8.07096288 13.8173817,8.00488281 14.0498047,8.00488281 C14.2822277,8.00488281 14.5328763,8.07096288 14.8017578,8.203125 C14.8610029,8.29427129 14.8769533,8.42643143 14.8496094,8.59960938 C14.8222655,8.77278732 14.7379564,8.90722608 14.5966797,9.00292969 C14.5465492,9.00292969 14.4622402,9.01888005 14.34375,9.05078125 C14.2252598,9.08268245 14.1067714,9.09863281 13.9882812,9.09863281 C13.8697911,9.09863281 13.7399096,9.06673209 13.5986328,9.00292969 C13.1975891,9.0712894 12.8990895,9.13736947 12.703125,9.20117188 C12.6393226,9.26497428 12.5139983,9.36295507 12.3271484,9.49511719 C12.1448559,9.62272199 12.0035812,9.72526003 11.9033203,9.80273438 C11.9033203,10.0716159 11.9694004,10.3382148 12.1015625,10.6025391 C12.151693,10.775717 12.2519524,10.9739572 12.4023438,11.1972656 C12.4023438,11.2428388 12.4228514,11.2701822 12.4638672,11.2792969 C12.504883,11.2884115 12.5846348,11.2952474 12.703125,11.2998047 C12.9401054,11.2998047 13.2067042,11.1676446 13.5029297,10.9033203 L13.796875,11.2998047 C13.7285153,11.3453778 13.566733,11.4638662 13.3115234,11.6552734 C13.0563138,11.8466806 12.8444019,11.9560546 12.6757812,11.9833984 C12.5117179,12.0107423 12.3886723,12.0244141 12.3066406,12.0244141 L11.6982422,11.9970703 C11.3837875,11.9970703 11.1445321,11.9127613 10.9804688,11.7441406 C10.925781,11.6848955 10.8665368,11.6142582 10.8027344,11.5322266 C10.7434893,11.4501949 10.7093099,11.4069011 10.7001953,11.4023438 C10.7001953,11.3248694 10.5999359,11.1585299 10.3994141,10.9033203 C9.86620827,11.4365261 9.53352931,11.7350257 9.40136719,11.7988281 C9.13248563,11.9309902 8.79524942,11.9970703 8.38964844,11.9970703 L8.38964844,11.9970703 Z M5.90136719,6.00195312 C5.92871107,6.00195312 5.97200491,5.88802197 6.03125,5.66015625 C6.09049509,5.43229053 6.19531175,5.17708475 6.34570312,4.89453125 C6.55533959,4.51627415 6.88346131,4.106122 7.33007812,3.6640625 C7.77669494,3.222003 8.2665989,3.00097656 8.79980469,3.00097656 C9.49251648,2.95996073 9.95963421,3.06022015 10.2011719,3.30175781 C10.3515633,3.48405039 10.4427082,3.7119127 10.4746094,3.98535156 C10.5065106,4.25879043 10.4472664,4.4638665 10.296875,4.60058594 C10.0234361,4.8740248 9.77962347,5.00846356 9.56542969,5.00390625 C9.17805796,4.99479162 8.93424529,4.86946735 8.83398437,4.62792969 C8.73372346,4.38639202 8.688151,4.18359457 8.69726562,4.01953125 L8.69726562,3.90332031 C8.49674379,4.23600427 8.29850358,4.60058396 8.10253906,4.99707031 L7.69921875,6.00195312 L8.99804687,6.00195312 L8.79980469,7 L7.3984375,7 C6.40038563,10.3313969 5.73502771,12.2978486 5.40234375,12.8994141 C5.09700368,13.6103551 4.75976747,14.1389957 4.390625,14.4853516 C4.02148253,14.8317075 3.59082277,15.0026042 3.09863281,14.9980469 L2.67480469,15.0117187 C2.20084398,14.9843749 1.87500089,14.8795582 1.69726562,14.6972656 C1.46028527,14.442056 1.34863274,14.1549495 1.36230469,13.8359375 C1.37597663,13.5169255 1.48990778,13.3027349 1.70410156,13.1933594 C2.26920855,12.9108059 2.71354005,12.9062486 3.03710937,13.1796875 C3.24674584,13.3574228 3.36751286,13.6308575 3.39941406,14 C3.86426014,12.4596277 4.36555721,10.8600343 4.90332031,9.20117187 L5.40234375,7 L4.39746094,7 L4.60253906,6.00195312 L5.90136719,6.00195312 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const MenuKebabIcon = forwardRefAndName<HTMLElement, SvgIconProps>('MenuKebabIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M6.8,5 C6.8,4.3372583 7.33263779,3.8 8,3.8 C8.6627417,3.8 9.2,4.33263779 9.2,5 C9.2,5.6627417 8.66736221,6.2 8,6.2 C7.3372583,6.2 6.8,5.66736221 6.8,5 Z M6.79999995,9 C6.79999995,8.33725827 7.33263776,7.79999995 8,7.79999995 C8.66274173,7.79999995 9.20000005,8.33263776 9.20000005,9 C9.20000005,9.66274173 8.66736224,10.2 8,10.2 C7.33725827,10.2 6.79999995,9.66736224 6.79999995,9 Z M6.8,13 C6.8,12.3372583 7.33263779,11.8 8,11.8 C8.6627417,11.8 9.2,12.3326378 9.2,13 C9.2,13.6627417 8.66736221,14.2 8,14.2 C7.3372583,14.2 6.8,13.6673622 6.8,13 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const OkIcon = forwardRefAndName<HTMLElement, SvgIconProps>('OkIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path d="M15.028 3.241a1.25 1.25 0 0 1 0 1.768L8.197 11.84a2.838 2.838 0 0 1-4.013 0L1.646 9.305a1.25 1.25 0 1 1 1.768-1.768l2.537 2.537a.338.338 0 0 0 .477 0l6.833-6.833a1.25 1.25 0 0 1 1.768 0Z"></path>
      </svg>
    </SvgIcon>
  );
});

export const SquareIcon = forwardRefAndName<HTMLElement, SvgIconProps>('SquareIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <rect width={8} height={8} x={4} y={4} fillRule="evenodd" rx={1} />
      </svg>
    </SvgIcon>
  );
});

export const UndoIcon = forwardRefAndName<HTMLElement, SvgIconProps>('UndoIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M6.64648438,7.84765625 C6.04491887,8.44922176 5.71907577,9.16698802 5.66894531,10.0009766 L8.15039062,10.0009766 L4.42480469,13.5283203 C4.37923154,13.4964191 1,10.0009766 1,10.0009766 L2.93457031,10.0009766 C2.93457031,9.34016597 3.05761596,8.69987289 3.30371094,8.08007812 C3.54980592,7.46028336 3.91438561,6.91113521 4.39746094,6.43261719 C5.04004228,5.79459316 5.78970926,5.36165479 6.64648438,5.13378906 C7.50325949,4.90592334 8.36002176,4.90592334 9.21679688,5.13378906 C10.073572,5.36165479 10.8255176,5.79459316 11.4726562,6.43261719 C12.4342496,7.40332517 12.9218749,8.57681604 12.9355469,9.953125 L12.1904297,9.953125 C12.12207,9.14648034 11.7871124,8.44466444 11.1855469,7.84765625 C10.5839814,7.25064806 9.82747852,6.95214844 8.91601562,6.95214844 C8.00455273,6.94759112 7.24804988,7.24609074 6.64648438,7.84765625 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const HelpDotIcon = forwardRefAndName<HTMLElement, SvgIconProps>('HelpDotIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M8.10253906,11.7988281 L7.00195312,11.7988281 L7.00195312,13.0019531 L8.10253906,13.0019531 L8.10253906,11.7988281 Z M10.0986328,7.99804688 C10.0986328,7.41471063 9.86621326,6.9475929 9.40136719,6.59667969 C8.89550528,6.20019333 8.30989916,6.00195312 7.64453125,6.00195312 C6.97916334,6.00195312 6.40039309,6.20019333 5.90820312,6.59667969 C5.41601316,6.99316604 5.1129563,7.56054318 4.99902344,8.29882812 L6.09960938,8.40136719 C6.14973983,7.97297963 6.32291519,7.64941516 6.61914062,7.43066406 C6.91536606,7.21191297 7.28678162,7.10253906 7.73339844,7.10253906 C8.18001525,7.10253906 8.46940038,7.16861913 8.6015625,7.30078125 C8.80208434,7.50130309 8.90234375,7.76790198 8.90234375,8.10058594 C8.90234375,8.53353081 8.60156551,8.90038912 8,9.20117188 C7.74023308,9.4609388 7.47363418,9.69335835 7.20019531,9.8984375 L7.00195312,10.5 L7.00195312,10.9990234 L8.10253906,10.9990234 L8.10253906,10.6025391 C8.13444026,10.5706379 8.18456997,10.4863288 8.25292969,10.3496094 C8.3212894,10.2128899 8.37141911,10.1285809 8.40332031,10.0966797 C8.9046249,9.79589693 9.23730387,9.56347738 9.40136719,9.39941406 C9.47884153,9.36295555 9.54036436,9.31282584 9.5859375,9.24902344 C9.63151064,9.18977835 9.66568999,9.14648451 9.68847656,9.11914062 C9.79329479,9.00520776 9.88671834,8.82519654 9.96875,8.57910156 C10.055339,8.3375639 10.0986328,8.14388094 10.0986328,7.99804688 L10.0986328,7.99804688 Z M7.59667969,14.9980469 C6.86295206,14.9980469 6.15657892,14.852215 5.47753906,14.5605469 C4.11034473,13.968096 3.13281544,12.9882881 2.54492188,11.6210938 C2.24869644,10.9420539 2.10058594,10.2356808 2.10058594,9.50195312 C2.10058594,8.77278281 2.24869644,8.06640967 2.54492188,7.3828125 C3.14193007,6.00650354 4.11945936,5.02669562 5.47753906,4.44335938 C6.15657892,4.14713394 6.86295206,3.99902344 7.59667969,3.99902344 C8.33040731,3.99902344 9.03905908,4.14713394 9.72265625,4.44335938 C11.0989652,5.04036757 12.0764945,6.01789686 12.6552734,7.37597656 C12.9514989,8.05501642 13.0996094,8.76366818 13.0996094,9.50195312 C13.0996094,10.2402381 12.9514989,10.9466112 12.6552734,11.6210938 C12.0582652,12.9882881 11.080736,13.968096 9.72265625,14.5605469 C9.03905908,14.852215 8.33040731,14.9980469 7.59667969,14.9980469 L7.59667969,14.9980469 Z"
        />
      </svg>
    </SvgIcon>
  );
});

export const ErrorIcon = forwardRefAndName<HTMLElement, SvgIconProps>('ErrorIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16" style={{ marginBottom: '-0.1875em' }}>
        <path
          fillRule="evenodd"
          d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM4.5 6.5C4.22386 6.5 4 6.72386 4 7V9C4 9.27614 4.22386 9.5 4.5 9.5H11.5C11.7761 9.5 12 9.27614 12 9V7C12 6.72386 11.7761 6.5 11.5 6.5H4.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
});

export const DeleteIcon = forwardRefAndName<HTMLElement, SvgIconProps>('DeleteIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16" style={{ marginBottom: '-0.1875em' }}>
        <path
          fillRule="evenodd"
          d="M11.298 12.6992L7.99628 9.41797L4.70135 12.6992L3.29999 11.2979L6.58124 8.00293L3.29999 4.70117L4.70135 3.2998L7.99628 6.58105L11.298 3.2998L12.6994 4.70117L9.41815 8.00293L12.6994 11.2979L11.298 12.6992Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
});

export const UploadIcon = forwardRefAndName<HTMLElement, SvgIconProps>('UploadIcon', (props, ref) => {
  return (
    <SvgIcon ref={ref} {...props}>
      <svg viewBox="0 0 16 16" style={{ marginBottom: '-0.1875em' }}>
        <path
          fillRule="evenodd"
          d="M13.0232 10.9968V12.9997H2.02417V10.9968H13.0232ZM6.02318 5.99969H3.22729L7.52708 1.50165L11.8269 5.99969H9.02414V9.99872H6.02318V5.99969Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
});

export const ArrowARightIcon = forwardRefAndName<SVGSVGElement, IconProps>('ArrowARightIcon', (props, ref) => {
  return (
    <BaseIcon ref={ref} {...props}>
      <path d="M8.73 2.854a.5.5 0 1 1 .708-.708l4.006 4.006a1.906 1.906 0 0 1 0 2.696l-4.006 4.006a.5.5 0 0 1-.707-.708l4.005-4.005A.914.914 0 0 0 12.852 8H2.5a.5.5 0 0 1 0-1h10.352a.914.914 0 0 0-.116-.14L8.732 2.853Z" />
    </BaseIcon>
  );
});

export const ArrowALeftIcon = forwardRefAndName<SVGSVGElement, IconProps>('ArrowALeftIcon', (props, ref) => {
  return (
    <BaseIcon ref={ref} {...props}>
      <path d="M7.27 12.146a.5.5 0 1 1-.708.707L2.556 8.849a1.906 1.906 0 0 1 0-2.696l4.006-4.006a.5.5 0 1 1 .707.707L3.263 6.86a.91.91 0 0 0-.115.14H13.5a.5.5 0 0 1 0 1H3.148a.91.91 0 0 0 .115.142l4.006 4.005Z" />
    </BaseIcon>
  );
});

export const XIcon = forwardRefAndName<SVGSVGElement, IconProps>('XIcon', (props, ref) => {
  return (
    <BaseIcon ref={ref} {...props}>
      <path d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z" />
    </BaseIcon>
  );
});

export const SearchLoupeIcon = forwardRefAndName<SVGSVGElement, IconProps>('SearchLoupeIcon', (props, ref) => {
  return (
    <BaseIcon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.853 11.914a6.25 6.25 0 1 1 1.06-1.06l2.854 2.853a.75.75 0 1 1-1.06 1.06l-2.854-2.853ZM2.246 6.996a4.75 4.75 0 1 1 8.153 3.313.784.784 0 0 0-.09.09 4.75 4.75 0 0 1-8.064-3.403Z"
      />
    </BaseIcon>
  );
});
