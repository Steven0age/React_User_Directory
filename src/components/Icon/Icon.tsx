import "./Icon.scss";

type deleteHandler = (
  event: React.MouseEvent<HTMLDivElement>
) => void | undefined;

type IconKey =
  | "birth"
  | "address"
  | "gender"
  | "phone"
  | "mail"
  | "website"
  | "delete";

type IconEntry = {
  source: string;
  code: React.ReactElement;
};

export default function Icon({
  icon,
  deleteHandler,
}: {
  icon: IconKey;
  deleteHandler?: deleteHandler;
}) {
  return <div onClick={deleteHandler}>{iconsLibrary[icon].code}</div>;
}

const iconsLibrary: Record<IconKey, IconEntry> = {
  birth: {
    source: "https://freesvgicons.com/search?q=birth",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 1792 1792"
        className="icon"
      >
        <path
          fill="currentColor"
          d="M1792 1408v384H0v-384q45 0 85-14t59-27.5t47-37.5q30-27 51.5-38t56.5-11q24 0 44 7t31 15t33 27q29 25 47 38t58 27t86 14q45 0 85-14.5t58-27t48-37.5q21-19 32.5-27t31-15t43.5-7q35 0 56.5 11t51.5 38q28 24 47 37.5t59 27.5t85 14t85-14t59-27.5t47-37.5q30-27 51.5-38t56.5-11q34 0 55.5 11t51.5 38q28 24 47 37.5t59 27.5t85 14zm0-320v192q-24 0-44-7t-31-15t-33-27q-29-25-47-38t-58-27t-85-14q-46 0-86 14t-58 27t-47 38q-22 19-33 27t-31 15t-44 7q-35 0-56.5-11t-51.5-38q-29-25-47-38t-58-27t-86-14q-45 0-85 14.5t-58 27t-48 37.5q-21 19-32.5 27t-31 15t-43.5 7q-35 0-56.5-11t-51.5-38q-28-24-47-37.5t-59-27.5t-85-14q-46 0-86 14t-58 27t-47 38q-30 27-51.5 38T0 1280v-192q0-80 56-136t136-56h64V448h256v448h256V448h256v448h256V448h256v448h64q80 0 136 56t56 136zM512 224q0 77-36 118.5T384 384q-53 0-90.5-37.5T256 256q0-29 9.5-51t23.5-34t31-28t31-31.5T374.5 67T384 0q38 0 83 74t45 150zm512 0q0 77-36 118.5T896 384q-53 0-90.5-37.5T768 256q0-29 9.5-51t23.5-34t31-28t31-31.5T886.5 67T896 0q38 0 83 74t45 150zm512 0q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5T1280 256q0-29 9.5-51t23.5-34t31-28t31-31.5t23.5-44.5t9.5-67q38 0 83 74t45 150z"
        />
      </svg>
    ),
  },

  address: {
    source: "https://freesvgicons.com/search?q=address",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 512 512"
        className="icon"
      >
        <path
          fill="currentColor"
          d="M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zm112 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0a64 64 0 1 1-128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zm-16 112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64z"
        />
      </svg>
    ),
  },

  gender: {
    source: "https://freesvgicons.com/search?q=gender",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 256 256"
        className="icon"
      >
        <path
          fill="currentColor"
          d="M208 20h-40a12 12 0 0 0 0 24h11l-15.64 15.67A68 68 0 1 0 108 178.92V188H88a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24h-20v-9.08a67.93 67.93 0 0 0 46.9-100.84L196 61v11a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12Zm-88 136a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44Z"
        />
      </svg>
    ),
  },

  phone: {
    source: "https://heroicons.com/solid/phone",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  mail: {
    source: "https://freesvgicons.com/search?q=mail",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 24 24"
        className="icon"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 20V6l-11 9L1 6v14h22Zm-11-8l10-8H2l10 8Z"
        />
      </svg>
    ),
  },

  website: {
    source: "https://freesvgicons.com/search?q=world",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 24 24"
        className="icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
        </g>
      </svg>
    ),
  },

  delete: {
    source: "https://freesvgicons.com/search?q=cancel",
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 32 32"
        className="icon"
      >
        <path
          fill="currentColor"
          d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5zm-3.78 5.78l-1.44 1.44L14.564 16l-3.782 3.78l1.44 1.44L16 17.437l3.78 3.78l1.44-1.437L17.437 16l3.78-3.78l-1.437-1.44L16 14.564l-3.78-3.782z"
        />
      </svg>
    ),
  },
};
