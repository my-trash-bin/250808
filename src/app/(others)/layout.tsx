import { PropsWithChildren } from "react";

export default function ActualRootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>test</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
