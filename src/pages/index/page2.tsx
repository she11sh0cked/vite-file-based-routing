import { FC } from "react";

export interface IPage2Props {}

const Page2: FC<IPage2Props> = () => {
  return (
    <p>
      Hello File Routing! (I am from <code>src/pages/index/page2.tsx</code>)
    </p>
  );
};

export default Page2;
