import { FC } from "react";

export interface IPage1Props {}

const Page1: FC<IPage1Props> = () => {
  return (
    <p>
      Hello File Routing! (I am from <code>src/pages/index/page1.tsx</code>)
    </p>
  );
};

export default Page1;
