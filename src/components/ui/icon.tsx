export type IconName =
  | 'accounts'
  | 'actions'
  | 'activity'
  | 'bank'
  | 'billing'
  | 'check'
  | 'chevron-down'
  | 'document'
  | 'filter'
  | 'google'
  | 'graph'
  | 'search'
  | 'plus';

export type IconProps = {
  name: IconName;
  ariaLabel?: string;
  ariaHidden?: boolean;
} & React.SVGProps<SVGSVGElement>;

export default function Icon({
  className,
  width = 16,
  height = 16,
  name,
  ariaLabel,
  ariaHidden = true,
  ...rest
}: IconProps) {
  switch (name) {
    case 'accounts':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Accounts Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M12.1999 4.41447L10.7507 1.51616C10.6959 1.40648 10.62 1.30867 10.5274 1.22832C10.4348 1.14798 10.3273 1.08667 10.2109 1.0479C10.0946 1.00912 9.9718 0.993647 9.84947 1.00236C9.72721 1.01106 9.6078 1.04379 9.49817 1.09865L2.86652 4.41447M12.1999 4.41447H2.86652M12.1999 4.41447C12.6949 4.41447 13.1699 4.61114 13.5199 4.96121C13.87 5.31128 14.0667 5.78607 14.0667 6.28114L14.0666 7.21448M2.86652 4.41447C2.37145 4.41447 1.8968 4.61114 1.54673 4.96121C1.19667 5.31128 1 5.78607 1 6.28114V12.8145C1 13.3095 1.19667 13.7843 1.54673 14.1344C1.8968 14.4845 2.3716 14.6811 2.86667 14.6811H12.2C12.695 14.6811 13.1699 14.4845 13.5199 14.1344C13.87 13.7843 14.0667 13.3095 14.0667 12.8145L14.0666 11.8811M14.0666 11.8811C14.3141 11.8811 14.5515 11.7828 14.7266 11.6078C14.9016 11.4328 14.9999 11.1953 14.9999 10.9478V8.14781C14.9999 7.90029 14.9016 7.66285 14.7266 7.48782C14.5515 7.31279 14.3141 7.21448 14.0666 7.21448M14.0666 11.8811H12.7332C12.1144 11.8811 11.5209 11.6353 11.0833 11.1978C10.6457 10.7601 10.3999 10.1667 10.3999 9.54781C10.3999 8.92895 10.6457 8.33547 11.0833 7.89786C11.5209 7.46032 12.1144 7.21448 12.7332 7.21448H14.0666"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'actions':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Actions Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 2.5C9.25 3.19036 8.69036 3.75 8 3.75C7.30964 3.75 6.75 3.19036 6.75 2.5C6.75 1.80964 7.30964 1.25 8 1.25C8.69036 1.25 9.25 1.80964 9.25 2.5ZM8.625 4.92124C9.70327 4.64371 10.5 3.6649 10.5 2.5C10.5 1.11929 9.38071 0 8 0C6.61929 0 5.5 1.11929 5.5 2.5C5.5 3.6649 6.29673 4.64371 7.375 4.92124V9.375C7.375 9.72018 7.65482 10 8 10C8.34518 10 8.625 9.72018 8.625 9.375V4.92124ZM5.01425 6H6.5V7.25H5.01425C4.77518 7.25 4.55043 7.36397 4.40917 7.55685L1.39492 11.6725C1.30076 11.801 1.25 11.9563 1.25 12.1156V14C1.25 14.4142 1.58579 14.75 2 14.75H14C14.4142 14.75 14.75 14.4142 14.75 14V12.1156C14.75 11.9563 14.6992 11.801 14.6051 11.6725L11.5908 7.55685C11.4496 7.36397 11.2248 7.25 10.9858 7.25H9.5V6H10.9858C11.6233 6 12.2226 6.30393 12.5993 6.81826L15.6135 10.9339C15.8646 11.2767 16 11.6907 16 12.1156V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V12.1156C0 11.6907 0.135365 11.2767 0.386465 10.9339L3.40071 6.81826C3.7774 6.30393 4.37673 6 5.01425 6ZM3.625 12.458C3.27982 12.458 3 12.1782 3 11.833C3 11.4878 3.27982 11.208 3.625 11.208H12.375C12.7202 11.208 13 11.4878 13 11.833C13 12.1782 12.7202 12.458 12.375 12.458H3.625Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'activity':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Activity Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M5 3L14 3M1.76855 3L2.32764 3M5 8H14M1.76855 8H2.32764M5 13H14M1.76855 13H2.32764"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'bank':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Bank Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00004 1.625C7.98935 1.625 7.95677 1.62797 7.90691 1.67111C7.9009 1.67631 7.89479 1.6814 7.88858 1.68637L3.28085 5.375H12.7192L8.11149 1.68637C8.10528 1.6814 8.09917 1.67631 8.09316 1.67111C8.0433 1.62797 8.01072 1.625 8.00004 1.625ZM7.09927 0.717041C7.3473 0.506165 7.65937 0.375 8.00004 0.375C8.3407 0.375 8.65276 0.506163 8.9008 0.717034L14.8906 5.51208C15.0978 5.67794 15.1777 5.95656 15.0898 6.20697C15.0019 6.45739 14.7654 6.625 14.5 6.625H1.50004C1.23464 6.625 0.998189 6.45739 0.910301 6.20697C0.822414 5.95656 0.902259 5.67794 1.10944 5.51208L7.09927 0.717041ZM0.875035 14.5C0.875035 14.1548 1.15486 13.875 1.50004 13.875H14.5C14.8452 13.875 15.125 14.1548 15.125 14.5C15.125 14.8452 14.8452 15.125 14.5 15.125H1.50004C1.15486 15.125 0.875035 14.8452 0.875035 14.5ZM4.62504 8.25C4.62504 7.90482 4.34521 7.625 4.00004 7.625C3.65486 7.625 3.37504 7.90482 3.37504 8.25V12.25C3.37504 12.5952 3.65486 12.875 4.00004 12.875C4.34521 12.875 4.62504 12.5952 4.62504 12.25V8.25ZM8.00004 7.625C8.34521 7.625 8.62504 7.90482 8.62504 8.25V12.25C8.62504 12.5952 8.34521 12.875 8.00004 12.875C7.65486 12.875 7.37504 12.5952 7.37504 12.25V8.25C7.37504 7.90482 7.65486 7.625 8.00004 7.625ZM12.625 8.25C12.625 7.90482 12.3452 7.625 12 7.625C11.6549 7.625 11.375 7.90482 11.375 8.25V12.25C11.375 12.5952 11.6549 12.875 12 12.875C12.3452 12.875 12.625 12.5952 12.625 12.25V8.25Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'billing':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Billing Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M5.1875 4.9375H9.3125M5.1875 7.5625H7.6875M5.1875 10.1875H6.375M7.375 12.8125H3.3125C3.08044 12.8125 2.85788 12.7203 2.69378 12.5562C2.52969 12.3921 2.4375 12.1696 2.4375 11.9375V2.3125C2.4375 2.08044 2.52969 1.85788 2.69378 1.69378C2.85788 1.52969 3.08044 1.4375 3.3125 1.4375H9.51275C9.74465 1.43755 9.96705 1.52966 10.1311 1.69358L11.8064 3.36892C11.9703 3.53295 12.0625 3.75535 12.0625 3.98725V4.9375M10.6607 12.9936C10.8312 13.2179 11.0534 13.3977 11.3083 13.5177C11.5631 13.6378 11.8432 13.6945 12.1247 13.6831C13.0222 13.6831 13.7503 13.137 13.7503 12.4641C13.7503 11.7912 13.0222 11.2452 12.1247 11.2452C11.2273 11.2452 10.5 10.6991 10.5 10.0255C10.5 9.35176 11.2273 8.8065 12.1247 8.8065C12.4062 8.79529 12.6862 8.8521 12.9411 8.97212C13.1959 9.09214 13.4181 9.27183 13.5888 9.49595M12.1245 13.6877V14.5M12.1245 8V8.81158"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'check':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Chevron Down Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M1.5 6.2L4.3 9L10.3 3"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Chevron Down Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'document':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Document Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M9.3999 14.9161V10.3334C9.3999 10.0859 9.49824 9.84846 9.67327 9.67342C9.8483 9.49839 10.0857 9.40005 10.3332 9.40005H14.9159M4.7334 4.73337H12.2001M4.7334 7.53339H8.00006M9.0136 15H1.93333C1.6858 15 1.4484 14.9017 1.27337 14.7266C1.09833 14.5516 1 14.3142 1 14.0667V1.93333C1 1.6858 1.09833 1.4484 1.27337 1.27337C1.4484 1.09833 1.6858 1 1.93333 1H14.0667C14.3142 1 14.5516 1.09833 14.7266 1.27337C14.9017 1.4484 15 1.6858 15 1.93333V9.0136C14.9999 9.26096 14.9017 9.49819 14.7268 9.67316L9.67316 14.7268C9.49819 14.9017 9.26096 14.9999 9.0136 15Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'filter':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Filter Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.625C5.24061 2.625 4.625 3.24061 4.625 4C4.625 4.75939 5.24061 5.375 6 5.375C6.75939 5.375 7.375 4.75939 7.375 4C7.375 3.24061 6.75939 2.625 6 2.625ZM1.5 3.375H3.44986C3.73025 2.227 4.76563 1.375 6 1.375C7.23437 1.375 8.26975 2.227 8.55014 3.375H14.5C14.8452 3.375 15.125 3.65482 15.125 4C15.125 4.34518 14.8452 4.625 14.5 4.625H8.55014C8.26975 5.773 7.23437 6.625 6 6.625C4.76563 6.625 3.73025 5.773 3.44986 4.625H1.5C1.15482 4.625 0.875 4.34518 0.875 4C0.875 3.65482 1.15482 3.375 1.5 3.375ZM14.5 11.375C14.8452 11.375 15.125 11.6548 15.125 12C15.125 12.3452 14.8452 12.625 14.5 12.625H12.5501C12.2697 13.773 11.2344 14.625 10 14.625C8.76563 14.625 7.73025 13.773 7.44986 12.625H1.5C1.15482 12.625 0.875 12.3452 0.875 12C0.875 11.6548 1.15482 11.375 1.5 11.375H7.44986C7.73025 10.227 8.76563 9.375 10 9.375C11.2344 9.375 12.2697 10.227 12.5501 11.375H14.5ZM11.375 12C11.375 11.2406 10.7594 10.625 10 10.625C9.24061 10.625 8.625 11.2406 8.625 12C8.625 12.7594 9.24061 13.375 10 13.375C10.7594 13.375 11.375 12.7594 11.375 12Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'graph':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Graph Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M0.75 15H15.25M5.83333 8.00024H3.16667C2.99057 8.00354 2.82234 8.10517 2.69781 8.28347C2.57328 8.46177 2.5023 8.70265 2.5 8.95479V15.0002H6.5V8.95479C6.5 8.70163 6.42976 8.45884 6.30474 8.27982C6.17971 8.10081 6.01014 8.00024 5.83333 8.00024ZM12.8333 1H10.1667C9.99057 1.0029 9.82234 1.09233 9.69781 1.24924C9.57328 1.40614 9.5023 1.61812 9.5 1.84V15H13.5V1.84C13.5 1.61722 13.4298 1.40356 13.3047 1.24603C13.1797 1.0885 13.0101 1 12.8333 1Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <linearGradient
            id="b"
            x1="55.41"
            x2="12.11"
            y1="96.87"
            y2="21.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1e8e3e" />
            <stop offset="1" stopColor="#34a853" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="42.7"
            x2="86"
            y1="100"
            y2="25.13"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fcc934" />
            <stop offset="1" stopColor="#fbbc04" />
          </linearGradient>
          <linearGradient
            id="a"
            x1="6.7"
            x2="93.29"
            y1="31.25"
            y2="31.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d93025" />
            <stop offset="1" stopColor="#ea4335" />
          </linearGradient>
          <path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z" />
          <path fill="url(#b)" d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z" />
          <path fill="url(#c)" d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z" />
          <path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z" />
          <path fill="#1a73e8" d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z" />
        </svg>
      );
    case 'search':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Search Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M10.5951 10.5952L14.6661 14.6667M2.05293 8.93694C2.59743 10.2182 3.6286 11.2306 4.91958 11.7515C6.21056 12.2725 7.6556 12.2592 8.93682 11.7147C10.218 11.1702 11.2305 10.1391 11.7514 8.84807C12.2723 7.55709 12.2591 6.11205 11.7146 4.83083C11.1701 3.54962 10.1389 2.53718 8.84795 2.01624C7.55697 1.49531 6.11192 1.50855 4.83071 2.05305C3.54949 2.59756 2.53705 3.62872 2.01612 4.9197C1.49519 6.21068 1.50843 7.65573 2.05293 8.93694Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'plus':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Plus Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M0.460938 6.85938C0.460938 6.38281 0.859375 5.98438 1.33594 5.98438H6.125V1.19531C6.125 0.71875 6.52344 0.320312 7 0.320312C7.47656 0.320312 7.875 0.71875 7.875 1.19531V5.98438H12.6641C13.1406 5.98438 13.5391 6.38281 13.5391 6.85938C13.5391 7.34375 13.1406 7.73438 12.6641 7.73438H7.875V12.5234C7.875 13 7.47656 13.3984 7 13.3984C6.52344 13.3984 6.125 13 6.125 12.5234V7.73438H1.33594C0.859375 7.73438 0.460938 7.34375 0.460938 6.85938Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}
