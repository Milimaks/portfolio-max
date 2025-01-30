import { ComponentPropsWithoutRef } from "react";

export const MailIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size || 32}
      height={props.size || 32}
      id="_1-Email"
      data-name="1-Email"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <title>1-Email</title>
      <path d="M29,4H3A3,3,0,0,0,0,7V25a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V7A3,3,0,0,0,29,4Zm-.72,2L16,14.77,3.72,6ZM30,25a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V7.23l13.42,9.58a1,1,0,0,0,1.16,0L30,7.23Z" />
    </svg>
  );
};
